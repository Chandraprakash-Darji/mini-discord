import { createContext, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '.';
import SideBar from './Sidebar';
import Cookies from 'universal-cookie';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const ServerContext = createContext('');
export const cookies = new Cookies();

function App() {
    const [_, server, channel] = useLocation().pathname.split('/');
    const navigate = useNavigate();
    useEffect(() => {
        const token = cookies.get('TOKEN');
        if (!token) navigate('/login');
        if (!server && !channel) {
            navigate('/channels/5');
        }
    }, []);

    return (
        <ServerContext.Provider value={server}>
            <div className="h-screen bg-bgDark text-text flex overflow-y-hidden">
                <Routes>
                    <Route path="/channels/:id/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </ServerContext.Provider>
    );
}

export default App;
// Most resent channel -> Local storage
// Openned folder in -> local storage
