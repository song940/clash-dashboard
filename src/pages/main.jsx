import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ClashProxy from 'clash-proxy';

import List from '../components/List';
import Panel from '../components/Panel';
import Header from '../components/Header';
import ProxyGroup from '../components/ProxyGroup';

import './main.css';

const clash = ClashProxy({
  secret: 'song940@163.com',
  api: 'http://lsong.me:7892'
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
  const testLatency = () => {
    console.log('Test Latency', proxies);
    for (const proxy in proxies) {
      clash.delay(proxy)
    }
  }
  return (
    <>
      <Header />
      <Panel>
        <List>
          <List.Item className="routing" >
            <span>Routing</span>
            <div>
              <button className={config.mode === 'Global' ? 'active' : ''} onClick={() => setMode('Global')}  >Global</button>
              <button className={config.mode === 'Rule' ? 'active' : ''} onClick={() => setMode('Rule')}    >Rule</button>
              <button className={config.mode === 'Direct' ? 'active' : ''} onClick={() => setMode('Direct')}  >Direct</button>
            </div>
          </List.Item>
          <List.Item onClick={testLatency} >Connectivity Test</List.Item>
        </List>
      </Panel>
      {
        proxyGroups.map((group, i) => (
          <ProxyGroup key={i} group={group} onSelect={(name, p) => clash.switch(name, p.name)} />
        ))
      }
    </>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
