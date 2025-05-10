
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
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

const Home: NextPage<{ jokes: Joke[] }> = ({ jokes }) => {
  const scrollToJoke = (topic: string) => {
    const jokeElement = document.getElementById(`joke-${topic}`);
    if (jokeElement) {
      jokeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const topics = jokes.slice(1).map(joke => joke.topic);
  return (
    <div className={styles.container}>
      <Head>
        <title>two problems</title>
        <meta name="description" content="Problems on problems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>two problems</h1>
        {jokes.length > 0 && (
          <div className={`${styles.card} ${styles.featured}`}>
            <p>Some people, when confronted with a problem, think "I know, I'll use <span>{jokes[0].topic}</span>."</p>
            {jokes[0].punchlines.map((punchline, i) => (
              <div key={i}>
                <p><strong>{punchline.text}</strong></p>
                {punchline.attribution && (
                  <p>
                    <em>
                      {punchline.url ? (
                        <a href={punchline.url} target="_blank" rel="noopener noreferrer">
                          {punchline.attribution}
                        </a>
                      ) : (
                        punchline.attribution
                      )}
                    </em>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        <WordCloud topics={topics} onTopicClick={scrollToJoke} />
        <div className={styles.grid}>
          {jokes.slice(1).map((joke, index) => (
            <div key={index} id={`joke-${joke.topic}`} className={styles.card}>
              <p>Some people, when confronted with a problem, think "I know, I'll use <span>{joke.topic}</span>."</p>
              {joke.punchlines.map((punchline, i) => (
                <div key={i}>
                  <p><strong>{punchline.text}</strong></p>
                  {punchline.attribution && (
                    <p>
                      <em>
                        {punchline.url ? (
                          <a href={punchline.url} target="_blank" rel="noopener noreferrer">
                            {punchline.attribution}
                          </a>
                        ) : (
                          punchline.attribution
                        )}
                      </em>
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
