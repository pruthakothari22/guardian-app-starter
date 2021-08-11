import React, { useState } from 'react';
import axios from 'axios';
import Results from '../components/results/Results';
import Input from '../components/utils/Input';
import Heading from '../components/utils/Heading';
import styles from '../css/styles.module.css';

const IndexPage = () => {
  const [results, setResults] = useState([]);

  const doSearch = async (term) => {
    const resultSet = await axios.get('/api/search', {
      params: {
        term: term,
      },
    });
    setResults(resultSet.data);
  };

  return (
    <>
      <Heading title="Guardian Search" type="h1" />
      <Input doSearch={doSearch} />
      <Results results={results} />
    </>
  );
};

export default IndexPage;
