import React from 'react';
import Octokit from '@octokit/rest';
import AboutMe from '../AboutMe/AboutMe';
import MyRepositories from '../MyRepositories/MyRepositories';

import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: {
        aboutMe: true,
        myRepos: true
      },
      repoList: [],
      hasError: false,
      error: {}
    };
  }

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: 'v1valasvegan'
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({
          repoList: data,
          isLoading: { myRepos: false }
        });
      })
      .catch(err =>
        this.setState({
          hasError: true,
          error: err,
          isLoading: false
        })
      );

    octokit.users
      .getByUsername({
        username: 'v1valasvegan'
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({
          user: data,
          isLoading: {aboutMe: false}
        });
      });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <main className={styles.main}>
        {this.state.hasError && (
          <div className={styles['wrapper-error']}>
            <h2>Что-то пошло не так...</h2>
            <h3>{this.state.error.name}</h3>
            <p>{this.state.error.message}</p>
          </div>
        )}

        {(isLoading.myRepos || isLoading.aboutMe) && <div className={styles['wrapper-loader']} />}

        {!isLoading.myRepos && !isLoading.aboutMe && !this.state.hasError && <AboutMe 
        bio={this.state.user.bio}
        avatar={this.state.user.avatar_url}
        github={this.state.user.html_url}/>}
        {!isLoading.myRepos && !isLoading.aboutMe && !this.state.hasError && <MyRepositories />}
      </main>
    );
  }
}

export default About;
