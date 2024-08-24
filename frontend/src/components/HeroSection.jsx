import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20">
            <div className="flex flex-col gap-5 my-10 max-w-3xl mx-auto">
                <span
                    className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium"
                    style={{
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s, transform 0.3s',
                        cursor: 'pointer',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#FFEBE8';
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#F3F4F6';
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    No. 1 Leading Job Discovery Hub
                </span>
                <div className="relative overflow-hidden">
                    <h1
                        className="text-5xl font-bold text-white inline-block animate-run"
                        style={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Discover, Pursue & Land Your <span className="text-[#FFD700]">Perfect Career</span>
                    </h1>
                </div>
                <p
                    className="text-lg"
                    style={{
                        color: '#FFD700',
                        transition: 'color 0.5s, transform 1s, text-shadow 0.5s',
                        cursor: 'pointer',
                        display: 'inline-block',
                        position: 'relative',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.color = '#e74c3c';
                        e.target.style.textShadow = '0 0 10px #ff0';
                        e.target.style.transform = 'rotate(5deg)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = '#FFD700';
                        e.target.style.textShadow = 'none';
                        e.target.style.transform = 'rotate(0deg)';
                    }}
                >
                    "Unlock Your Dream Career with Top Opportunities - Where Your Future Begins Today!"
                </p>
                <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white">
                    <input
                        type="text"
                        placeholder="Explore Your Ideal Work Opportunities"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full"
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] text-white">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
