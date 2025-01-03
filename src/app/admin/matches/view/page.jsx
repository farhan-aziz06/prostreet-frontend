'use client';
import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import { React, useState } from 'react';
import Profile from './useravatar.png'
import Image from 'next/image';
const MatchDetails = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [selectedTab, setSelectedTab] = useState("Players");
    const handleSendComment = () => {
        if (comment.trim()) {
            setComments((prevComments) => [...prevComments, comment]);
            setComment(''); // Clear the input field
        }
    }
    return (
        <div className=" bg-[#1A1D26] flex items-center justify-center p-6 min-h-screen">
            <div className="w-full bg-[#30333D] border border-[#8B909F] rounded-lg shadow-lg">
                {/* Match Details Section */}
                <div className="bg-[#FF8E4F] m-2 md:m-8 py-6 rounded-lg relative">
                    <div className=" pb-5 md:pb-20 flex flex-col">
                        <h2 className="text-xl font-semibold text-black md:text-center px-3">Match Details</h2>
                        <p className="text-sm text-black mt-1 md:text-center px-3 py-2">Here are some details of the match selected</p>
                        <span className="absolute top-6 right-6 px-10 text-[#244AAD] font-semibold cursor-pointer">Game Open</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 md:mt-4 text-black px-3 md:px-16">
                        <div>
                            <div className='flex flex-col md:flex-row md:items-start md:gap-20'>
                                <div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{calenderIcon}</span>
                                        <p className="text-xl text-black font-semibold">Friday, September 1st · 7:00PM</p>
                                    </div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{locIcon}</span>
                                        <p className="text-xl text-black font-semibold">Longshots Bar & Grill</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{joinedIcon}</span>
                                        <p className="text-xl text-black font-semibold">20 Joined</p>
                                    </div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{slotIcon}</span>
                                        <p className="text-xl text-black font-semibold">2 Slots Left</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl text-black pb-10">
                                    <span className="font-semibold">Description:</span> description here, description here, description here
                                </p>
                            </div>
                        </div>
                        <div className="mb-10 md:mb-0">
                            <div className="flex items-center gap-2 pb-4">
                                <p className="text-xl text-black font-semibold">Preferred Opponent: any</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xl text-black font-semibold">Preferred Age: any</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <span
                            onClick={() => setSelectedTab("Players")}
                            className={`cursor-pointer text-lg font-bold relative ${selectedTab === "Players" ? "text-black after:bg-[#5F2200]" : "text-[#00000066]"
                                } after:content-[''] after:absolute after:-left-8 after:bottom-[-24px] after:min-w-32 rounded after:h-[5px] ${selectedTab === "Players" ? "after:block" : "after:hidden"
                                }`}
                        >
                            Players
                        </span>
                        <span
                            onClick={() => setSelectedTab("Discussion")}
                            className={`cursor-pointer text-lg font-bold relative ${selectedTab === "Discussion" ? "text-black after:bg-[#5F2200]" : "text-[#00000066]"
                                } after:content-[''] after:absolute after:-left-8 after:bottom-[-24px] after:min-w-36  after:h-[5px] ${selectedTab === "Discussion" ? "after:block" : "after:hidden"
                                }`}
                        >
                            Discussion
                        </span>
                    </div>
                </div>
                {/* Comments Section */}
                <div className="py-6 rounded-b-lg px-5 md:px-10 ">
                    <h3 className="text-xl font-semibold text-white">Comments & Discussion</h3>
                    <p className="text-md text-[#D7DAE2] mt-1"><span className="text-xl font-bold pr-1">48</span> Comments</p>
                    {/* Comment */}
                    <div className="mt-6 md:w-[70%]">
                        <div className="flex items-start gap-2 md:gap-4">
                            {/* Responsive image container */}
                            <div className="w-24 md:w-10 md:h-10 bg-gray-600 rounded-full overflow-hidden">
                                <Image
                                    src={Profile}
                                    alt="Avatar"
                                    className="w-full h-full"
                                />
                            </div>
                            <div>
                                <p className="text-white text-lg font-semibold">Irfan</p>
                                <p className="text-white text-xs md:text-sm mt-1">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <div className="text-[#787F99] flex items-center gap-3 text-md mt-2 cursor-pointer">
                                    <span className="font-semibold text-nowrap">View all comments</span>
                                    <span className="font-semibold">&gt;</span>
                                </div>
                            </div>
                            <p className="text-[#D7DAE2] text-xs text-nowrap ml-auto">1 Month ago</p>
                        </div>
                    </div>

                    {/* Write Comment */}
                    <div className="flex items-center gap-5">
                        <div className="flex items-center border rounded-3xl mt-6 w-[64%]">
                            <input
                                type="text"
                                className="flex-grow bg-transparent text-gray-300 px-3 md:px-8 py-3 md:py-4 rounded-lg outline-none text-sm placeholder-gray-500"
                                placeholder="Write comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-[#787F99] rounded-3xl mt-6 text-white px-3 md:px-8 py-3 md:py-4 text-md font-medium"
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
