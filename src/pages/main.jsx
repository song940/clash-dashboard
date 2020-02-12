import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import Panel from '../components/Panel';
import Header from '../components/Header';
import ProxyGroup from '../components/ProxyGroup';

import './main.css';
import ClashProxy from '../utils/clash';

const proxy = ClashProxy({
  secret: 'song940@163.com',
  api: 'http://lsong.me:9090'
});

const App = () => {
  const [config, setConfig] = useState({});
  const [proxies, setProxies] = useState({});
  useEffect(() => {
    Promise
      .resolve()
      .then(() => proxy.config())
      .then(setConfig)
      .then(() => proxy.proxies())
      .then(setProxies)
      .then(() => proxy.rules())
      .then(console.log)
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
      <Panel>
        <List>
          <List.Item className="routing" >
            <span>Routing</span>
            <ul>
              <li className={config.mode === 'Global' ? 'active' : ''}>Global</li>
              <li className={config.mode === 'Rule' ? 'active' : ''}>Rule</li>
              <li className={config.mode === 'Direct' ? 'active' : ''}>Direct</li>
            </ul>
          </List.Item>
          <List.Item>Connectivity Test</List.Item>
        </List>
      </Panel>
      {
        proxyGroups.map((group, i) => (
          <ProxyGroup key={i} group={group} onSelect={(name, p) => proxy.switch(name, p.name)} />
        ))
      }
    </>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
