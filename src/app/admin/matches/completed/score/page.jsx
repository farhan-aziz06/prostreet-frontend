'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import PlayerProfile from './player profile.png';
import Link from 'next/link';

const MatchDetails = () => {
    const [rating, setRating] = useState(0);
    const [selectedTab, setSelectedTab] = useState("Players");
    const [ratings, setRatings] = useState([0, 0, 0]);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const handleSendComment = () => {
        if (comment.trim()) {
            setComments((prevComments) => [...prevComments, comment]);
            setComment(''); // Clear the input field
        }
    }
    const handleRating = (playerIndex, index) => {
        const updatedRatings = [...ratings];
        updatedRatings[playerIndex] = index + 1;
        setRatings(updatedRatings);
    };

    return (
        <div className="bg-[#1A1D26] flex items-center justify-center p-6 min-h-screen">
            <div className="w-full bg-[#30333D] border border-[#8B909F] rounded-lg shadow-lg">
                {/* Match Details Section */}
                <div className="bg-[#B6F36A] m-2 md:m-8 py-6 rounded-lg relative">
                    <div className="pb-5 xl:pb-20 flex flex-col">
                        <h2 className="text-xl font-semibold text-black xl:text-center px-5">Match Details</h2>
                        <p className="text-sm text-black mt-1 xl:text-center px-5 py-2">Here are some details of the match selected</p>
                        <span className="absolute top-6 right-6 md:px-10 text-[#244AAD] font-semibold cursor-pointer">Game Close</span>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-96 md:mt-4 text-black px-5 xl:px-16">
                        <div className='w-full'>
                            <div className='flex flex-col xl:flex-row md:items-start xl:gap-14'>
                                <div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{calenderIcon}</span>
                                        <p className="text-xl text-black font-semibold md:text-nowrap">Friday, September 1st · 7:00PM</p>
                                    </div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{locIcon}</span>
                                        <p className="text-xl text-black font-semibold md:text-nowrap">Longshots Bar & Grill</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{joinedIcon}</span>
                                        <p className="text-xl text-black font-semibold md:text-nowrap">20 Joined</p>
                                    </div>
                                    <div className="flex items-center gap-2 pb-14">
                                        <span className="text-lg">{slotIcon}</span>
                                        <p className="text-xl text-black font-semibold md:text-nowrap">2 Slots Left</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <p className="text-xl text-black pb-10 w-full">
                                    <span className="font-semibold">Description:</span> description here, description here, description here
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10 md:mb-0">
                                <div className="flex items-center gap-1 pb-4">
                                    <p className="text-xl text-black font-semibold text-nowrap">Preferred Opponent: </p>
                                    <p className='text-xl text-black'>any</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="text-xl text-black font-semibold text-nowrap">Preferred Age: </p>
                                    <p className='text-xl text-black'>any</p>
                                </div>
                            </div>
                            <div className="py-5 flex">
                                <div className="">
                                    <p className="text-xl text-black font-semibold mb-4">Organized By: </p>
                                    <div className="flex items-center justify-start gap-3">
                                        <Image
                                            src={PlayerProfile} // Replace with the actual image path
                                            alt="User"
                                            className="w-24 h-24 object-cover"
                                        />
                                        <p className="text-lg text-black font-medium">Farhan jr</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <span
                            onClick={() => setSelectedTab("Players")}
                            className={`cursor-pointer text-lg font-bold relative ${selectedTab === "Players" ? "text-black after:bg-[#3E7100]" : "text-[#00000066]"
                                } after:content-[''] after:absolute after:-left-8 after:bottom-[-24px] after:min-w-32 rounded after:h-[5px] ${selectedTab === "Players" ? "after:block" : "after:hidden"
                                }`}
                        >
                            Players
                        </span>
                        <span
                            onClick={() => setSelectedTab("Discussion")}
                            className={`cursor-pointer text-lg font-bold relative ${selectedTab === "Discussion" ? "text-black after:bg-[#3E7100]" : "text-[#00000066]"
                                } after:content-[''] after:absolute after:-left-8 after:bottom-[-24px] after:min-w-36 after:h-[5px] ${selectedTab === "Discussion" ? "after:block" : "after:hidden"
                                }`}
                        >
                            Discussion
                        </span>
                    </div>
                </div>

                {/* Profile Rating and Match Results (Only for Players tab) */}
                {selectedTab === "Players" && (
                    <>
                        {/* Profile Rating */}
                        <div className="p-6 rounded-b-lg xl:px-96 flex flex-col md:flex-row justify-start md:justify-center md:ml-0 gap-8 lg:gap-16">
                            {[0, 1, 2].map((playerIndex) => (
                                <div
                                    key={playerIndex}
                                    className="w-full md:w-auto flex flex-col items-center "
                                >
                                    <div className="relative w-24 h-24  rounded-full overflow-hidden border border-gray-300">
                                        <Image
                                            src={PlayerProfile} // Replace with actual image path
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center mt-2">
                                        <p className="text-white text-center text-lg font-semibold">
                                            Player {playerIndex + 1}
                                        </p>
                                        <div className="flex items-center mt-2">
                                            {[...Array(5)].map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`cursor-pointer text-2xl ${index < ratings[playerIndex] ? "text-yellow-500" : "text-gray-400"
                                                        }`}
                                                    onClick={() => handleRating(playerIndex, index)} // Pass playerIndex
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Match Results Section */}
                        <div className="p-6 md:px-20  md:ml-0">
                            <h3 className="text-white text-2xl font-semibold mb-4">Match Results</h3>
                            <p className="text-gray-400 text-lg mb-4">Match Score</p>
                            <p className="text-green-500 text-4xl font-bold mb-6">20-6</p>
                            <h4 className="text-white text-xl font-semibold mb-4">Winners</h4>
                            <div className="lg:flex items-center justify-between">
                                <div className="flex items-center gap-10">
                                    {[...Array(2)].map((_, playerIndex) => (
                                        <div key={playerIndex} className="text-center">
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 mx-auto">
                                                <Image
                                                    src={PlayerProfile} // Replace with actual image path
                                                    alt="Player Profile"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <p className="text-white text-lg font-medium mt-2">James J Call</p>
                                            <div className="flex items-center justify-center mt-2">
                                                {[...Array(5)].map((_, starIndex) => (
                                                    <span
                                                        key={starIndex}
                                                        className={`cursor-pointer text-lg ${starIndex < ratings[playerIndex] ? 'text-yellow-500' : 'text-gray-400'
                                                            }`}
                                                        onClick={() => handleRating(playerIndex, starIndex)} // Pass playerIndex and starIndex
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link href={"/admin/matches/completed/score/edit"}>
                                    <button className="bg-[#14AE5C] text-white px-24 py-3 rounded-xl text-lg">
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
                {/* Discussion Tab */}
                {selectedTab === "Discussion" && (
                    <div className="py-6 rounded-b-lg px-5 md:px-10 ">
                        <h3 className="text-xl font-semibold text-white">Comments & Discussion</h3>
                        <p className="text-md text-[#D7DAE2] mt-1">
                            <span className="text-xl font-bold pr-1">48</span> Comments
                        </p>
                        {/* Comment */}
                        <div className="mt-6 lg:w-[70%]">
                            <div className="flex items-start gap-2 md:gap-4">
                                {/* Responsive image container */}
                                <div className="w-12 bg-gray-600 rounded-full overflow-hidden">
                                    <Image
                                        src={PlayerProfile}
                                        alt="Avatar"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-white text-lg font-semibold">Irfan</p>
                                    <p className="text-[#D7DAE2] text-xs text-nowrap ml-auto xl:hidden flex">1 Month ago</p>
                                    <p className="text-white text-xs md:text-sm mt-1">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                    <div className="text-[#787F99] flex items-center gap-3 text-md mt-2 cursor-pointer">
                                        <span className="font-semibold text-nowrap">View all comments</span>
                                        <span className="font-semibold">&gt;</span>
                                    </div>
                                </div>
                                <p className="text-[#D7DAE2] text-xs text-nowrap ml-auto hidden xl:flex">1 Month ago</p>
                            </div>
                        </div>
                        {/* Write Comment */}
                        <div className="flex items-center gap-2 md:gap-5">
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
                                className="bg-[#787F99] rounded-3xl mt-6 text-white px-8 py-3 md:py-4 text-md font-medium"
                                onClick={handleSendComment}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchDetails;
