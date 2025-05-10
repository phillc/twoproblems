
import React from 'react';
import styles from '../styles/GitHubBanner.module.css';

const GitHubBanner = () => {
  return (
    <a
      href="https://github.com/phillc/twoproblems"
      className={styles.githubBanner}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Add jokes on GitHub"
    >
      Add jokes on GitHub
    </a>
  );
};

export default GitHubBanner;
