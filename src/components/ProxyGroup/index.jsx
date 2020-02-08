import List from '../List';
import Panel from '../Panel';

const ProxyGroup = ({ group, onSelect }) => {
  const { type, name, proxies, now } = group;
  const handleClick = proxy => {
    if (type !== 'Selector') return;
    onSelect && onSelect(name, proxy);
  };
  return (
    <Panel title={name} >
      <List>
        {
          proxies.map((proxy, i) => (
            <List.Item key={i} className={proxy.name === now ? 'active' : ''} onClick={() => handleClick(proxy)} >{proxy.name}</List.Item>
          ))
        }
      </List>
    </Panel>
  );
};

export default ProxyGroup;