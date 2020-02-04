import React from 'react';
import Panel from '../Panel';

export const List = ({ title, children }) => {
  return (
    <Panel title={title}>
      <ul className="list">{children}</ul>
    </Panel>
  );
};

export const Item = ({ children }) => {
  return (
    <li className="list-item" >{children}</li>
  );
};

List.Item = Item;

export default List;