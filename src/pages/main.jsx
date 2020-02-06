import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import Header from '../components/Header';
import ProxyGroup from '../components/ProxyGroup';

import './main.css';
import ClashProxy from '../utils/clash';

const proxy = ClashProxy({
  secret: 'song940@163.com',
  api: 'http://lsong.me:9090'
});

const App = () => {
  const [proxies, setProxies] = useState({});
  useEffect(() => {
    Promise
      .resolve()
      .then(() => proxy.proxies())
      .then(setProxies);
  }, []);

  const proxyGroups =
    Object
      .values(proxies)
      .filter(proxy => proxy.all)
      .map(group => {
        group.proxies = group.all.map(name => proxies[name]);
        return group;
      });

  return (
    <>
      <Header />
      <List>
        <List.Item>
          <span>Routing</span>
          <ul>
            <li>Global</li>
            <li>Rule</li>
            <li>Direct</li>
          </ul>
        </List.Item>
        <List.Item>Connectivity Test</List.Item>
      </List>
      {
        proxyGroups.map(group => (
          <ProxyGroup group={group} />
        ))
      }
    </>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
