import { useEffect, useState } from 'react';
import { Nav } from '.';
import { serverInfo } from '../data';
import { getAllServerIds } from '../utils/getAllServerIds';
import SideBar from './Sidebar';

function App() {
    const [path, setPath] = useState<{ server: null | string; channel: null | string }>({
        server: null,
        channel: null,
    });

    useEffect(() => {
        const path = window.location.pathname.split('/');
        setPath({ server: path[1], channel: path[2] });
        const allServer = getAllServerIds(serverInfo);
        let isPresent = allServer.filter((server) => server === +path[1]);
        if (isPresent.length === 0) setPath({ server: null, channel: null });
    }, []);

    console.log(path.server, path.channel);

    return (
        <div className="min-h-screen bg-bgDark text-text flex">
            <Nav />

            <SideBar server={path.server} channel={path.channel} />
            <div className="flex-1 bg-white/10"></div>
        </div>
    );
}

export default App;
// Most resent channel -> Local storage
// Openned folder in -> local storage
