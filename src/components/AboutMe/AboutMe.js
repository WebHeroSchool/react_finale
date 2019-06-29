import React from 'react';

import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <img className={styles.image} src='../../img/avatar' alt='Avatar' />
      <h1 className={styles.heading}>Виктор Журавлев</h1>
      <p className={styles.bio}>Student from Moscow</p>
      <p className={styles.bio}>
          <a className={`${styles.bio} ${styles.mail}`} href="mailto: veejou@gmail.com">veejou@gmail.com</a>
          <a className={`${styles.bio} ${styles.telegram}`} href="tg://resolve?domain=hugelebowski">+7 (926) 321-25-41</a>
      </p>
      <div className={styles.social}>
          <a href='https://github.com/v1valasvegan' className={`visually-hidden ${styles.github}`}>GitHub</a>
          <a href='http://vk.com' className={`visually-hidden ${styles.vk}`}>VK</a>
          <a href='https://www.linkedin.com/in/victor-zhuravlev-992a50182/' className={`visually-hidden ${styles.li}`}>LinkedIn</a>
          <a href='https://www.facebook.com/victor.zhuravlev.12' className={`visually-hidden ${styles.facebook}`}>Facebook</a>
      </div>
    </section>
  );
}
