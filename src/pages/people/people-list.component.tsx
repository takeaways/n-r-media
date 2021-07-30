/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef, useState } from 'react';
import styles from './people-list.module.css';
import io from 'socket.io-client';
import { useHistory } from 'react-router';

const socketClient = io('https://n-r-zoom.herokuapp.com');

function PeopleListPage() {
  const history = useHistory();

  const [enter, setEnter] = useState(false);
  const [sound, setSound] = useState(true);
  const [screen, setScreen] = useState(true);
  const [roomName, setRoomName] = useState('10');

  const myVideoRef = useRef<HTMLVideoElement>(document.createElement('video'));
  const peerVideoRef = useRef<HTMLVideoElement>(document.createElement('video'));
  const myStream = useRef<MediaStream>();
  const myPeerConnection = useRef<RTCPeerConnection>();

  async function getMedia(deviceId = '') {
    myStream.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    myVideoRef.current.srcObject = myStream.current;
    if (deviceId) {
      myStream.current.getAudioTracks().forEach(t => (t.enabled = sound));
    }
  }

  async function initCall() {
    await getMedia();
    await makeConnection();
  }

  async function makeConnection() {
    myPeerConnection.current = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            'stun:stun.l.google.com:19302',
            'stun:stun1.l.google.com:19302',
            'stun:stun2.l.google.com:19302',
            'stun:stun3.l.google.com:19302',
            'stun:stun4.l.google.com:19302',
            'stun:stun01.sipphone.com',
            'stun:stun.ekiga.net',
            'stun:stun.fwdnet.net',
            'stun:stun.ideasip.com',
            'stun:stun.iptel.org',
            'stun:stun.rixtelecom.se',
            'stun:stun.schlund.de',
            'stun:stunserver.org',
            'stun:stun.softjoys.com',
            'stun:stun.voiparound.com',
            'stun:stun.voipbuster.com',
            'stun:stun.voipstunt.com',
            'stun:stun.voxgratia.org',
            'stun:stun.xten.com',
          ],
        },
      ],
    });
    myPeerConnection.current.addEventListener('icecandidate', data => {
      socketClient.emit('ice', data.candidate, roomName);
    });
    myPeerConnection.current.addEventListener('addstream', (data: unknown) => {
      peerVideoRef.current.srcObject = (data as { stream: MediaStream }).stream;
    });

    myStream.current
      ?.getTracks()
      .forEach(track => myPeerConnection.current?.addTrack(track, myStream.current!));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnter(true);
    await initCall();
    socketClient.emit('join_room', roomName);

    socketClient.on('welcome', async () => {
      const offer = await myPeerConnection.current?.createOffer();
      myPeerConnection.current?.setLocalDescription(offer);
      socketClient.emit('offer', offer, roomName);
    });

    socketClient.on('offer', async offer => {
      myPeerConnection.current?.setRemoteDescription(offer);
      const answer = await myPeerConnection.current?.createAnswer();
      myPeerConnection.current?.setLocalDescription(answer);
      socketClient.emit('answer', answer, roomName);
    });

    socketClient.on('answer', async answer => {
      myPeerConnection.current?.setRemoteDescription(answer);
    });

    socketClient.on('ice', ice => {
      myPeerConnection.current?.addIceCandidate(ice);
    });

    socketClient.on('bye', () => {
      alert('bye');
      history.go(0);
    });
  };

  const handleSound = () => {
    if (myStream.current) {
      setSound(!sound);
      myStream.current.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
  };

  const handleScreen = () => {
    if (myStream.current) {
      setScreen(!screen);
      myStream.current.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
    }
  };

  return (
    <div className={styles.container}>
      {!enter ? (
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.roomInput}
              type="text"
              placeholder="room name"
              required
              value={roomName}
              onChange={e => setRoomName(e.target.value)}
            />
            <div className={styles.buttonGroup}>
              <button
                className={styles.cancel}
                type="button"
                onClick={() => {
                  history.goBack();
                }}
              >
                취소
              </button>
              <button className={styles.enter} type="submit">
                Enter
              </button>
            </div>
          </form>
        </section>
      ) : (
        <>
          <button
            className={styles.goBack}
            type="button"
            onClick={() => {
              history.go(0);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          <section className={styles.videoSectionContainer}>
            <div className={styles.myContainer}>
              <video ref={myVideoRef} autoPlay playsInline muted />
            </div>
            <div className={styles.peerContainer}>
              <video ref={peerVideoRef} autoPlay playsInline></video>
            </div>
          </section>
          <section className={styles.controlContainer}>
            <button onClick={handleSound}>
              <span>sound {!sound && 'X'}</span>
            </button>
            <button onClick={handleScreen}>
              <span>video {!screen && 'X'}</span>
            </button>
          </section>
        </>
      )}
    </div>
  );
}

export default PeopleListPage;
