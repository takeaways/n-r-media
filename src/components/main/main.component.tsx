import React from 'react';
import styles from './main.module.css';

type Props = {
  children: JSX.Element;
};
function Main({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
