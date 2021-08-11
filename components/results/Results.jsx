import React from 'react';
import Heading from '../utils/Heading';
import Result from '../results/Result';
import styles from '../../css/styles.module.css';

function Results({ results }) {
  return (
    <div>
      <Heading title="Results" />
      <div className={styles.resultContainer}>
        {results.length > 0 &&
          results.map((result) => {
            return <Result result={result} />;
          })}
      </div>
    </div>
  );
}

export default Results;
