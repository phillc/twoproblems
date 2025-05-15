
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

type Punchline = {
  text: string;
  attribution?: string;
  url?: string;
};

type Joke = {
  topic: string;
  punchlines: Punchline[];
  children?: Joke[];
};

export async function getStaticProps() {
  const jokes = yaml.load(
    fs.readFileSync(path.join(process.cwd(), 'data/jokes.yml'), 'utf8')
  ) as { jokes: Joke[] };

  return {
    props: {
      jokes: jokes.jokes,
    },
  };
}

import WordCloud from '../components/WordCloud';
import GitHubBanner from '../components/GitHubBanner';
import JokeCard from '../components/JokeCard';

const Home: NextPage<{ jokes: Joke[] }> = ({ jokes }) => {
  React.useEffect(() => {
    // Check for hash in URL on page load
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollToJoke(decodeURIComponent(hash));
    }
  }, []);

  const scrollToJoke = (topic: string) => {
    const jokeElement = document.getElementById(`joke-${topic}`);
    if (jokeElement) {
      jokeElement.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without triggering scroll
      window.history.pushState(null, '', `#${encodeURIComponent(topic)}`);
      // Remove highlight from all cards first
      document.querySelectorAll(`.${styles.card}`).forEach(card => {
        card.classList.remove(styles.highlighted);
      });
      // Add highlight to selected card
      setTimeout(() => {
        jokeElement.classList.add(styles.highlighted);
      }, 500); // Wait for scroll to complete
    }
  };

  const topics = jokes.slice(1).map(joke => joke.topic);
  return (
    <div className={styles.container}>
      <GitHubBanner />
      <Head>
        <title>two problems - Programming Jokes Collection</title>
        <meta name="description" content="A curated collection of programming jokes and humor for developers" />
        <meta name="keywords" content="programming jokes, developer humor, coding jokes" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="two problems - Programming Jokes Collection" />
        <meta property="og:description" content="A curated collection of programming jokes and humor for developers" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>two problems</h1>
        {jokes.length > 0 && (
          <JokeCard 
            topic={jokes[0].topic}
            punchlines={jokes[0].punchlines}
            isFeatured={true}
          />
        )}
        <WordCloud topics={topics} onTopicClick={scrollToJoke} />
        <div className={styles.grid}>
          {jokes.slice(1).map((joke, index) => (
            <div key={index} id={`joke-${joke.topic}`}>
              <JokeCard 
                topic={joke.topic}
                punchlines={joke.punchlines}
              >
                {joke.children}
              </JokeCard>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
