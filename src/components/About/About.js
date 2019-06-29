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
      isLoading: true,
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
          isLoading: false,
          avatarUrl: data[0].owner.avatar_url,
          login: data[0].owner.login
        });
      })
      .catch(err =>
        this.setState({
          hasError: true,
          error: err,
          isLoading: false
        })
      );
  }

  render() {
    const { isLoading } = this.state;

    return <main className={styles.main}>
        {this.state.hasError && (
            <div className={styles['wrapper-error']}>
                <h2>Что-то пошло не так...</h2>
                <h3>{this.state.error.name}</h3>
                <p>{this.state.error.message}</p>
            </div>
        )}

    { isLoading && <div className={styles['wrapper-loader']}></div>}

    {!isLoading && !this.state.hasError && <AboutMe />}
    {!isLoading && !this.state.hasError && <MyRepositories />}
    </main>;
  }
}

export default About;
