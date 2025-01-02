'use client';
import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import {React, useState} from 'react';
import Profile from './useravatar.png'
import Image from 'next/image';
const MatchDetails = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleSendComment = () => {
        if (comment.trim()) {
            setComments((prevComments) => [...prevComments, comment]);
            setComment(''); // Clear the input field
        }}
        return (
            <div className=" bg-[#181A28] flex items-center justify-center p-6">
                <div className="w-full bg-[#2C2F48] rounded-lg shadow-lg">
                    {/* Match Details Section */}
                    <div className="bg-[#FF8E4F] py-6 rounded-t-lg relative">
                        <div className="pb-20">
                            <h2 className="text-xl font-semibold text-black text-center">Match Details</h2>
                            <p className="text-sm text-black mt-1 text-center">Here are some details of the match selected</p>
                            <span className="absolute top-6 right-6 text-blue-500 font-semibold cursor-pointer">Game Open</span>

                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4 text-black px-10">
                            <div>
                                <div className="flex items-center gap-2 pb-14">
                                    <span className="text-lg">{calenderIcon}</span>
                                    <p className="text-xl text-black font-semibold ">Friday, September 1st · 7:00PM</p>
                                </div>
                                <div className="flex items-center gap-2  pb-14">
                                    <span className="text-lg">{locIcon}</span>
                                    <p className="text-xl text-black font-semibold ">Longshots Bar & Grill</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2  pb-14">
                                    <span className="text-lg">{joinedIcon}</span>
                                    <p className="text-xl text-black font-semibold ">20 Joined</p>
                                </div>
                                <div className="flex items-center gap-2  pb-14">
                                    <span className="text-lg">{slotIcon}</span>
                                    <p className="text-xl text-black font-semibold ">2 Slots Left</p>
                                </div>

                            </div>
                            <div className=''>
                                <div className="flex items-center gap-2 pb-4">
                                    <p className="text-xl text-black font-semibold ">Preferred Opponent: any</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xl text-black font-semibold ">Preferred Age: any</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-xl px-10 text-black pb-10">
                            <span className="font-semibold"><bold>Description:</bold></span> description here, description here, description here
                        </p>

                        <div className="flex items-center gap-10">
                            <span className="cursor-pointer  hover:text-gray-300 text-lg text-gray-700 font-semibold ml-[680px] ">Players</span>
                            <span className="text-lg text-black font-semibold">Discussion</span>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="bg-[#1E2133] p-6 rounded-b-lg px-10 ">
                        <h3 className="text-xl font-semibold text-white">Comments & Discussion</h3>
                        <p className="text-md text-[#D7DAE2] mt-1"><span className="text-xl font-bold pr-1">48</span> Comments</p>

                        {/* Comment */}
                        <div className="mt-6  w-[70%]">
                            <div className=" flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden">
                                    <Image
                                        src={Profile} // Replace with avatar image path
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-white text-lg font-semibold">Irfan</p>
                                    <p className="text-white text-md mt-1">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <div className="text-[#787F99] flex items-center gap-3 text-md mt-2 cursor-pointer">
                                        <span className="font-semibold">View all comments </span>
                                        <span className="font-semibold">&gt;</span>
                                    </div>
                                </div>
                                <p className="text-[#D7DAE2] text-xs ml-auto">1 Month ago</p>
                            </div>
                        </div>
                        {/* Write Comment */}
                        <div className="flex items-center gap-5">
                            <div className="flex items-center border rounded-3xl mt-6 w-[64%]">
                                <input
                                    type="text"
                                    className="flex-grow bg-transparent text-gray-300 px-4 py-3 rounded-lg outline-none text-sm placeholder-gray-500"
                                    placeholder="Write comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-[#787F99] rounded-3xl mt-6 text-white px-6 py-3 text-md font-medium"
                                onClick={handleSendComment}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default MatchDetails;
