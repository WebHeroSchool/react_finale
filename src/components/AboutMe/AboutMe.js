import React from 'react';

import styles from './AboutMe.module.css';

export default function AboutMe({ bio, avatar, github }) {
  return (
    <section className={styles.section}>
      <img className={styles.image} src={avatar} alt='Avatar' />
      <h1 className={styles.heading}>Виктор Журавлев</h1>
      <p className={styles.paragraph}>{bio}</p>
      <p className={styles.paragraph}>
          <a className={styles.mail} href="mailto: veejou@gmail.com">veejou@gmail.com</a>
          <a className={styles.telegram} href="tg://resolve?domain=hugelebowski">+7 (926) 321-25-41</a>
      </p>
      <div className={styles.social}>
          <a href={github} ariaLabel='github' className={styles.github} />
          <a href='http://vk.com' ariaLabel='vk' className={styles.vk} />
          <a href='https://www.linkedin.com/in/victor-zhuravlev-992a50182/' ariaLabel='linked in' className={styles.linkedin} />
          <a href='https://www.facebook.com/victor.zhuravlev.12' ariaLabel='facebook' className={styles.facebook} />
      </div>
    </section>
  );
}
