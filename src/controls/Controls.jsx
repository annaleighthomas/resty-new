import React from 'react';
import PropTypes from 'prop-types';

const methods = ['POST', 'GET', 'PUT', 'DELETE'];

const Controls = ({ url, method, body, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input name="url" type="url" value={url} onChange={onChange} />

    {methods.map((m) => (
      <fieldset key={m}>
        <input
          id={m}
          name="method"
          type="radio"
          checked={method === m}
          value={m}
          onChange={onChange}
        />
        <label htmlFor={m}>{m}</label>
      </fieldset>
    ))}

    <textarea name="body" value={body} onChange={onChange}></textarea>
    <button>Go!</button>
  </form>
);

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
