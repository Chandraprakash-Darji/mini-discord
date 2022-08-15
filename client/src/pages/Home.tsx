import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '../components';
import { cookies } from '../components/App';
import SideBar from '../components/Sidebar';

const Home = () => {
    const [_, c, server, channel] = useLocation().pathname.split('/');
    const navigate = useNavigate();
    useEffect(() => {
        if (!server && !channel) {
            navigate('/channels/@me');
        }
    }, []);
    return (
        <>
            <Nav />
            <SideBar server={server} channel={channel} />
            <div className="flex-1 bg-white/10">
                <button
                    onClick={() => {
                        cookies.remove('TOKEN');
                        navigate('/login');
                    }}
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default Home;
