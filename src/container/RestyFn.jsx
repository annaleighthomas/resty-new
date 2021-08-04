import React, { useState } from 'react';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import { makeRequest } from '../services/restyApi';

const Resty = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('POST');
  const [body, setBody] = useState('');
  const [result, setResult] = useState({});

  const handleChange = ({ target }) => {
    if (target.name === 'url') setUrl(target.value);
    if (target.name === 'method') setMethod(target.value);
    if (target.name === 'body') setBody(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await makeRequest(url, method, body);
    setResult(result);
  };

  return (
    <>
      <Controls
        url={url}
        method={method}
        body={body}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Display json={result} />
    </>
  );
};

export default Resty;
