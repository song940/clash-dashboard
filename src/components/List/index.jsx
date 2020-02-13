import React from 'react';

import './index.css';

export const List = ({ className, children }) => {
  return (
    <ul className={ `list ${className}` }>{children}</ul>
  );
};

export const Item = ({ className, children, ...props }) => {
  return (
    <li className={ `list-item ${className}` } {...props} >{children}</li>
  );
};

List.Item = Item;

export default List;