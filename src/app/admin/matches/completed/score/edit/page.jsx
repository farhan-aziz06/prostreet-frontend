'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import PlayerProfile from './player profile.png';

const MatchDetails = () => {
    const [rating, setRating] = useState(0);
    const [showSelectModal, setShowSelectModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState("Players");
    const [ratings, setRatings] = useState([0, 0, 0]);
    const [playerRatings, setPlayerRatings] = useState(Array(5).fill(0));

    const handleSelectClick = () => {
        setShowSelectModal(true);
    };

    const handleModalClose = () => {
        setShowSelectModal(false);
    };
    const handlePlayerRating = (playerIndex, starIndex) => {
        const newRatings = [...playerRatings];
        newRatings[playerIndex] = starIndex + 1;
        setPlayerRatings(newRatings);
    };


    const handleRating = (playerIndex, index) => {
        const updatedRatings = [...ratings];
        updatedRatings[playerIndex] = index + 1;
        setRatings(updatedRatings);
    }


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
                {/* Conditional Profile Rating and Match Result Section */}
                {selectedTab === "Players" && (
                    <>
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
                        <div className="py-6 px-3 md:px-10">
                            <h3 className="text-white text-2xl font-semibold mb-6">Match Results</h3>
                            <div className="mb-4">
                                <label className="text-white text-lg block mb-2">Match Score</label>
                                <input
                                    type="text"
                                    className="w-full lg:w-1/2 rounded-3xl bg-[#54545457] text-gray-300 px-4 py-5 outline-none"
                                    placeholder="20"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="text-white text-lg block mb-2">Select Winner</label>
                                <div className="w-full lg:w-1/2 flex items-center justify-between rounded-3xl bg-[#54545457]">
                                    <input
                                        type="text"
                                        className="w-full lg:w-1/2 rounded-l-3xl bg-transparent text-gray-300 px-4 py-5 outline-none"
                                        placeholder="Select any"
                                    />
                                    <button
                                        className="bg-transparent text-[#787F99] px-8 py-3 rounded-r-3xl"
                                        onClick={handleSelectClick}
                                    >
                                        Select
                                    </button>
                                </div>
                                <div className="p-5 flex flex-col md:flex-row items-center md:items-start md:justify-end">
                                    <button className="bg-[#14AE5C] text-white px-24 py-3 rounded-xl text-lg">Save</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Display "Discussion" Tab Content */}
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
                                <div className="w-24 bg-gray-600 rounded-full overflow-hidden">
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
                                    // value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-[#787F99] rounded-3xl mt-6 text-white px-8 py-3 md:py-4 text-md font-medium"
                            // onClick={handleSendComment}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Select Winners Modal */}
            {showSelectModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#222530] p-8 rounded-xl md:w-[600px] shadow-lg m-10">
                        <h3 className="text-white text-2xl font-semibold mb-6 text-center">Select Winners</h3>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center gap-14 mb-4 md:pl-24">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 checked:bg-[#9AE2A8]"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={PlayerProfile} // Replace with actual image
                                        alt="User"
                                        className="w-16 h-16 object-cover"
                                    />
                                    <p className="text-white font-semibold">Player {i + 1}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleModalClose}
                                className="bg-[#787F99] text-white px-8 py-3 rounded-3xl"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchDetails;
