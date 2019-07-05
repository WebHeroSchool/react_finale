import React from 'react';
import githubLogo from '../../img/github.svg';

import styles from './AboutMe.module.css';

function AboutMe({ userData }) {
  return (
    <section className={styles.section}>
      <img className={styles.image} src={userData.avatar_url} alt='Avatar' />
      <h1 className={styles.heading}>{userData.name}</h1>
      <p className={styles.paragraph}>{userData.bio}</p>
      <p className={styles.paragraph}>
        <a className={styles.mail} href='mailto: veejou@gmail.com'>
          veejou@gmail.com
        </a>
        <a
          className={styles.telegram}
          href='tg://resolve?domain=tremendouslebowski'
        >
          +7 (926) 321-25-41
        </a>
      </p>
      <div className={styles.social}>
        <a
          href={userData.html_url}
          aria-label='github'
          className={styles.github}
        >
          <img src={githubLogo} alt='' />
        </a>
        <a href='http://vk.com' aria-label='vk' className={styles.vk} />
        <a
          href='https://www.linkedin.com/in/victor-zhuravlev-992a50182/'
          aria-label='linked in'
          className={styles.linkedin}
        />
        <a
          href='https://www.facebook.com/victor.zhuravlev.12'
          aria-label='facebook'
          className={styles.facebook}
        />
      </div>
    </section>
  );
}

export default AboutMe;
