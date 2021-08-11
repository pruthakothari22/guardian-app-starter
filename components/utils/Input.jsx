import React, { useState } from 'react';
import styles from '../../css/styles.module.css';

function Input({ doSearch }) {
  const [term, setTerm] = useState('');
  return (
    <div className={styles.input}>
      <input
        style={{
          width: '60%',
          padding: '1rem',
          fontSize: '1.2rem',
        }}
        value={term}
        onChange={(evt) => setTerm(evt.target.value)}
      />{' '}
      <br></br>
      <button
        style={{
          padding: '1rem 3rem',
          marginTop: '1rem',
          borderRadius: '15px',
          backgroundColor: 'black',
          color: 'white',
          fontSize: '1.2rem',
        }}
        onClick={() => doSearch(term)}
        disabled={!term}
      >
        Search
      </button>
    </div>
  );
}

export default Input;
