import React from 'react';

const Note = ({id, title, description}) => (
  <li>
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
)

export default Note;
