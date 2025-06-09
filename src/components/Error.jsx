import React from 'react';

const Error = ({ message }) => {
  return (
    <div style={{ color: '#e50914', textAlign: 'center', margin: '1rem' }}>
      <p>{message}</p>
    </div>
  );
};

export default Error;
