

import React from 'react';
import Nav from 'Nav';

export default (props) => {
  return (
    <div>
      <h2>Main Component</h2>
      <Nav />
      {props.children}
    </div>
  );
};
