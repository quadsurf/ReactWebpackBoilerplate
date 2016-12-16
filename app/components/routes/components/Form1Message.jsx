

import React from 'react';

export default ({location,temp}) => {
  return (
    <p className="modalFontColor">
      It's {temp} in {location} right now!
    </p>
  );
}
