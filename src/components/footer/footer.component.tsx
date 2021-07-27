import React from 'react';
import styles from './footer.module.css';
function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <h1 className={styles.title}>Let talk</h1>
      <h2 className={styles.email}>wkdrjsdlf2@gmail.com</h2>
      <div className={styles.link}>
        <a href="https://github.com/takeaways" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="contact__rights">{new Date().getFullYear()} Median - All rights reserved</p>
    </footer>
  );
}

export default Footer;
