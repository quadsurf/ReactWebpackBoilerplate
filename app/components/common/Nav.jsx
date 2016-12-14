

import React from 'react';
import { Link,IndexLink } from 'react-router';

export default () => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink> |
      <Link to="/page2" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Page 2</Link> |
      <Link to="/page3" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Page 3</Link>
    </div>
  );
}
