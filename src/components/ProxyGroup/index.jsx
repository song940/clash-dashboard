import List from '../List';
import Panel from '../Panel';

import './index.css';

const ProxyGroup = ({ group, onSelect }) => {
  const { type, name, proxies, now } = group;
  const handleClick = proxy => {
    if (type !== 'Selector') return;
    onSelect && onSelect(name, proxy);
  };
  const delay = h => {
    return (h[0] && h[0].delay) ? `${h[0].delay}ms` : '';
  };
  return (
    <Panel title={name} className="proxy-group" >
      <List>
        {
          proxies.map((proxy, i) => (
            <List.Item key={i} className={'proxy ' + (proxy.name === now ? 'active' : '')} onClick={() => handleClick(proxy)} >
              <span className="proxy-name" >{proxy.name}</span>
              <span className="proxy-delay">{delay(proxy.history)}</span>
            </List.Item>
          ))
        }
      </List>
    </Panel>
  );
};

export default ProxyGroup;