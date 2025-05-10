
import React from 'react';
import styles from '../styles/WordCloud.module.css';

type WordCloudProps = {
  topics: string[];
  onTopicClick: (topic: string) => void;
}

const WordCloud: React.FC<WordCloudProps> = ({ topics, onTopicClick }) => {
  const sortedTopics = [...topics].sort((a, b) => a.localeCompare(b));
  return (
    <div className={styles.wordCloud}>
      {sortedTopics.map((topic, index) => (
        <button
          key={index}
          className={styles.topic}
          onClick={() => onTopicClick(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default WordCloud;
