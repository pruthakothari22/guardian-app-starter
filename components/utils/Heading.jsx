import React from 'react';
import styles from '../../css/styles.module.css';

function Heading({ title, type }) {
  return (
    <div className={styles.heading}>
      {type === 'h1' ? <h1>{title}</h1> : <h2>{title}</h2>}
    </div>
  );
}

export default Heading;
