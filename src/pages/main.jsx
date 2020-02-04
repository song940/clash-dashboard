import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import List from '../components/List';
import Panel from '../components/Panel';

import './main.css';
import ClashProxy from '../utils/clash';

const proxy = ClashProxy({
  secret: 'song940@163.com',
  api: 'http://lsong.me:9090'
});

const App = () => {
  const [proxies, setProxies] = useState([]);
  useEffect(() => {
    proxy.proxies().then(console.log);
    proxy.traffic(console.log);
  }, []);
  return (
    <>
      <Header />
      <List>
        <List.Item>Global Routing</List.Item>
        <List.Item>Connectivity Test</List.Item>
      </List>
      <List title="SERVER" >

      </List>
    </>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
