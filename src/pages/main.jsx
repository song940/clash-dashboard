import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import Panel from '../components/Panel';
import Header from '../components/Header';
import ProxyGroup from '../components/ProxyGroup';

import './main.css';
import ClashProxy from '../utils/clash';

const clash = ClashProxy({
  secret: 'song940@163.com',
  api: 'http://lsong.me:9090'
});

const App = () => {
  const [config, setConfig] = useState({});
  const [proxies, setProxies] = useState({});
  useEffect(() => {
    Promise
      .resolve()
      .then(() => clash.config())
      .then(setConfig)
      .then(() => clash.proxies())
      .then(setProxies)
      .then(() => clash.rules())
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

  const setMode = mode => clash.config({ mode });

  return (
    <>
      <Header />
      <Panel>
        <List>
          <List.Item className="routing" >
            <span>Routing</span>
            <div>
              <button onClick={() => setMode('Global')} className={config.mode === 'Global' ? 'active' : ''}>Global</button>
              <button onClick={() => setMode('Rule')} className={config.mode === 'Rule' ? 'active' : ''}>Rule</button>
              <button onClick={() => setMode('Direct')} className={config.mode === 'Direct' ? 'active' : ''}>Direct</button>
            </div>
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
