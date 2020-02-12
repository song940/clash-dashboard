import React from 'react';

import './index.css';

const Panel = ({ title, children }) => {
  return (
    <div className="panel" >
      {
        title && <h3 className="panel-title">{title}</h3>
      }
      <div className="panel-body" >{children}</div>
    </div>
  );
};

export default Panel;