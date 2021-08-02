import React, { useRef, useLayoutEffect } from 'react';
import styles from './ball.module.css';

type Props = {
  src?: string;
};

function Ball({ src }: Props) {
  const ballRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const moveBall = move(ballRef);

    function makeFrame() {
      moveBall();
      requestAnimationFrame(makeFrame);
    }

    const ii = requestAnimationFrame(makeFrame);
    return () => {
      cancelAnimationFrame(ii);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      className={styles.ball}
      style={{
        top: Math.floor(Math.random() * window.innerHeight - 10),
        left: Math.floor(Math.random() * window.innerWidth - 10),
      }}
    >
      {src && <img src={src} />}
    </div>
  );
}

function move(ballRef: React.RefObject<HTMLDivElement>) {
  const BASE_SIZE = 10;
  const OFF_SET = 3;
  let dx = Math.floor(Math.random() * 2 + 1);
  let dy = Math.floor(Math.random() * 2 + 1);
  let positionX = 0;
  let positionY = 0;
  return () => {
    if (ballRef.current !== null) {
      const ball = ballRef.current.getBoundingClientRect();
      const { x, y } = ball;

      if (y >= innerHeight - BASE_SIZE) {
        dy = -1 * Math.floor(Math.random() * 2);
      } else if (y < 0) {
        dy = 1 * Math.floor(Math.random() * 2);
      }

      if (x >= innerWidth - BASE_SIZE) {
        dx = -1 * Math.floor(Math.random() * 2);
      } else if (x < 0) {
        dx = 1 * Math.floor(Math.random() * 8);
      }

      positionX = positionX + OFF_SET * dx;
      positionY = positionY + OFF_SET * dy;
      ballRef.current.style.transform = `translate(${positionX}px , ${positionY}px)`;
      ballRef.current.style.backgroundColor = `rgba(
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          1
        )`;
    }
  };
}

export default Ball;
