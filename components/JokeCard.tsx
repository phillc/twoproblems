
import React from 'react';
import styles from '../styles/Home.module.css';

type Punchline = {
  text: string;
  attribution?: string;
  url?: string;
};

type JokeProps = {
  topic: string;
  punchlines: Punchline[];
  isFeatured?: boolean;
};

const JokeCard: React.FC<JokeProps> = ({ topic, punchlines, isFeatured = false }) => {
  const copyToClipboard = (event: React.MouseEvent<HTMLDivElement>, punchline: Punchline) => {
    const element = event.currentTarget;
    const text = `When confronted with a problem, some people think "I know, I'll use ${topic}."\n${punchline.text}`;
    navigator.clipboard.writeText(text).then(() => {
      element.classList.add(styles.copied);
      setTimeout(() => element.classList.remove(styles.copied), 1000);
    });
  };

  return (
    <div className={`${styles.card} ${isFeatured ? styles.featured : ''}`}>
      <p>Some people, when confronted with a problem, think &quot;I know, I&apos;ll use <span>{topic}</span>.&quot;</p>
      {punchlines.map((punchline, i) => (
        <div 
          key={i}
          onClick={(e) => copyToClipboard(e, punchline)}
          className={styles.copyable}
        >
          <p><strong>{punchline.text}</strong></p>
          {punchline.attribution && (
            <p>
              <em>
                {punchline.url ? (
                  <a 
                    href={punchline.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
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
  );
};

export default JokeCard;
