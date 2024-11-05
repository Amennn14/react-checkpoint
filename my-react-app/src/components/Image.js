import React from 'react';

const Image = ({ imageUrl, name }) => (
  <img src={imageUrl} alt={name} style={{ width: '100%' }} />
);

export default Image;
