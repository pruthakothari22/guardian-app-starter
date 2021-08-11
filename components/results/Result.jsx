import React from 'react';
import styles from '../../css/styles.module.css';

function Result({ result }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgDivCard}>
        <img
          className={styles.imgCard}
          src={`https://picsum.photos/300?random=${result.id}`}
        ></img>
      </div>
      <div className={styles.titleCard}>{result.title}</div>
      <a className={styles.btnCard} href={result.url}>
        Explore More
      </a>
    </div>
  );
}

export default Result;
