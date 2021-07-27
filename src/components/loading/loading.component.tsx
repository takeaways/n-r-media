import React from 'react';
import ReactLoading from 'react-loading';

import styles from './loading.module.css';
function Loading() {
  return (
    <div className={styles.container}>
      <ReactLoading type="cylon" height={'10%'} width={'10%'} />
    </div>
  );
}

export default Loading;
