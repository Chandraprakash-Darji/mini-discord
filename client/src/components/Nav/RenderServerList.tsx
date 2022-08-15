import { serverListIn } from '../../types';
import NavBtn from './NavBtn';

// Recursive Function
const RenderServerList = ({ servers }: serverListIn) => (
    <>
        {servers.map((server) => {
            // Type server then recall it self with nested list
            if (server.type === 'folder')
                return <RenderServerList key={server.id} servers={server.servers} />;
            // If it is server then render it's button
            if (server.type === 'server') return <NavBtn key={server.id} {...server} />;
        })}
    </>
);

export default RenderServerList;
