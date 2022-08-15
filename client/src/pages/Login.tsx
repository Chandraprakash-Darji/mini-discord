import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cookies } from '../components/App';
import DiscordIcon from '../components/Icons/DiscordIcon';
import IconBtn from '../components/Icons/IconBtn';
import Loader from '../components/LogicLeass/Loader';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logging, setLogging] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState<{ message: string }>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!email || !password) {
            setError({ message: 'Please fill in all fields' });
            return;
        }
        setLogging(true);
        const configuration = {
            method: 'post',
            url: 'http://localhost:3000/api/v1/auth/login',
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                cookies.set('TOKEN', result.data.token, {
                    path: '/',
                });
                navigate('/channels/@me');
            })
            .catch((error) => {
                setError(
                    ((error as AxiosError).response?.data as { message: string }) || {
                        message: 'Unknown error',
                    },
                );
                console.log(error.response.status);
            });
        setLogging(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-bgDark text-text w-full select-none">
            <section className="bg-white/5 text-white w-96 h-max p-5 py-10 rounded-xl border-[0.1px] border-white/30">
                <form onSubmit={handleSubmit}>
                    <figure className="w-full flex justify-center items-center mb-10">
                        <IconBtn size={100}>
                            <DiscordIcon />
                        </IconBtn>
                    </figure>
                    <h5 className="mb-5 text-2xl font-bold tracking-tight text-white">
                        Login Details
                    </h5>
                    <div className="py-6 relative">
                        <input
                            type="text"
                            id="emailInputBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                            className="border-b-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-b-gray-400 text-white outline-none focus:border-blue-500 transition-all duration-150"
                            required
                            placeholder=" "
                        />
                        <label htmlFor="email" className="emailLabel inputLabel">
                            <span className="delay-[0ms]">Y</span>
                            <span className="delay-[10ms]">o</span>
                            <span className="delay-[20ms]">u</span>
                            <span className="delay-[30ms]">r</span>
                            <span className="delay-[40ms]">&nbsp;</span>
                            <span className="delay-[50ms]">E</span>
                            <span className="delay-[60ms]">m</span>
                            <span className="delay-[70ms]">a</span>
                            <span className="delay-[80ms]">i</span>
                            <span className="delay-[90ms]">l</span>
                        </label>
                    </div>
                    <div className="py-6 relative">
                        <input
                            type="password"
                            id="passwordInputBox"
                            className="border-b-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-b-gray-400 text-white outline-none focus:border-blue-500 transition-all duration-150"
                            required
                            placeholder=" "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password" className="passwordLabel inputLabel">
                            <span className="delay-[0ms]">Y</span>
                            <span className="delay-[20ms]">o</span>
                            <span className="delay-[30ms]">u</span>
                            <span className="delay-[40ms]">r</span>
                            <span className="delay-[50ms]">&nbsp;</span>
                            <span className="delay-[60ms]">P</span>
                            <span className="delay-[70ms]">a</span>
                            <span className="delay-[80ms]">s</span>
                            <span className="delay-[90ms]">s</span>
                            <span className="delay-[100ms]">w</span>
                            <span className="delay-[120ms]">o</span>
                            <span className="delay-[130ms]">r</span>
                            <span className="delay-[140ms]">d</span>
                        </label>
                    </div>
                    <span className="text-red-500">{error ? error?.message : null}</span>
                    <button
                        type="submit"
                        className="text-white focus:ring-4 rounded-lg text-md w-full px-5 py-2.5 mt-3 mb-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 font-bold transition-all duration-300 disabled:opacity-50 disabled:hover:bg-blue-600"
                        onClick={handleSubmit}
                        disabled={logging}
                    >
                        {logging ? (
                            <div className="flex justify-center items-center">
                                <Loader />
                            </div>
                        ) : (
                            <>Login &rarr;</>
                        )}
                    </button>
                    <p className="font-medium text-gray-300">
                        Don't have Account
                        <Link to="/register" className="hover:underline text-blue-500">
                            {' '}
                            Register
                        </Link>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Login;
