import React from 'react';

import './index.css';

const Panel = ({ title, className, children }) => {
  return (
    <div className={ `panel ${className}` } >
      {
        title && <h3 className="panel-title">{title}</h3>
      }
      <div className="panel-body" >{children}</div>
    </div>
  );
};

export default Panel;