import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ json }) => (
  <pre>
    {JSON.stringify(json, null, 2)}
  </pre>
);

Display.propTypes = {
  json: PropTypes.object.isRequired
};

export default Display;
