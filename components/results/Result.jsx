import React from 'react';
import styles from '../../css/styles.module.css';
import { parseJSON, format } from 'date-fns';

function Result({ result }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgDivCard}>
        <img
          className={styles.imgCard}
          src={`https://picsum.photos/300?random=${result.id}`}
        ></img>
      </div>
      <div className={styles.titleCard}>
        {result.title} <br />
        {[
          parseJSON(result.publicationDate).getDate(),
          format(parseJSON(result.publicationDate), 'MMMM'),
          parseJSON(result.publicationDate).getFullYear(),
        ].join(' ')}
      </div>
      <a className={styles.btnCard} href={result.url}>
        Explore More
      </a>
    </div>
  );
}

export default Result;
