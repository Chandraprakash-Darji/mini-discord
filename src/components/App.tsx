import { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from '.';
import SideBar from './Sidebar';

export const ServerContext = createContext('');

function App() {
    const [_, server, channel] = useLocation().pathname.split('/');

    return (
        <ServerContext.Provider value={server}>
            <div className="min-h-screen bg-bgDark text-text flex">
                <Nav />
                <SideBar server={server} channel={channel} />
                <div className="flex-1 bg-white/10"></div>
            </div>
        </ServerContext.Provider>
    );
}

export default App;
// Most resent channel -> Local storage
// Openned folder in -> local storage
