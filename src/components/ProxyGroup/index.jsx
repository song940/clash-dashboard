import List from '../List';
import Panel from '../Panel';

const ProxyGroup = ({ group }) => {
  const { name, proxies } = group;
  return (
    <Panel title={name} >
      <List>
        {
          proxies.map(proxy => (
            <List.Item>{proxy.name}</List.Item>
          ))
        }
      </List>
    </Panel>
  );
};

export default ProxyGroup;