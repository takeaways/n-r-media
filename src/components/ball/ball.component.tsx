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
        top: Math.floor(Math.random() * window.innerHeight),
        left: Math.floor(Math.random() * window.innerWidth),
      }}
    >
      {src && <img src={src} />}
    </div>
  );
}

function move(ballRef: React.RefObject<HTMLDivElement>) {
  let dx = Math.floor(Math.random() * 2 + 1);
  let dy = Math.floor(Math.random() * 2 + 1);
  const BASE_SIZE = 40;

  return () => {
    if (ballRef.current !== null) {
      const ball = ballRef.current.getBoundingClientRect();
      const { x, y } = ball;

      if (y >= innerHeight - BASE_SIZE) {
        dy = -2 * Math.floor(Math.random() * 2);
      } else if (x >= innerWidth - BASE_SIZE) {
        dx = -2 * Math.floor(Math.random() * 2);
      } else if (y <= 0) {
        dy = 2 * Math.floor(Math.random() * 2);
      } else if (x <= 0) {
        dx = 2 * Math.floor(Math.random() * 2);
      }

      ballRef.current.style.left = `${x + 1 * dx}px`;
      ballRef.current.style.top = `${y + 1 * dy}px`;
    }
  };
}

export default Ball;
