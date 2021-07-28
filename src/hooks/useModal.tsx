import React, { useCallback } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

function useModal(content: JSX.Element): [() => void, React.ReactPortal] {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [
    onToggle,
    createPortal(
      toggle ? (
        <div className="container">
          <div className="close" onClick={onToggle}>
            <i className="fas fa-times" />
          </div>
          {React.cloneElement(content, { onToggle })}
        </div>
      ) : null,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('#modal')!,
    ),
  ];
}

export default useModal;
