'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlayerProfile from './player profile.png'
const MatchDetails = () => {
    const [rating, setRating] = useState(0);
    const [selectedTab, setSelectedTab] = useState("Players");
    const [ratings, setRatings] = useState([0, 0, 0]);
    const handleRating = (playerIndex, index) => {
        const updatedRatings = [...ratings];
        updatedRatings[playerIndex] = index + 1;
        setRatings(updatedRatings);
    }

    return (
        <div className="bg-[#1A1D26] flex items-center justify-center p-6">
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
                {/* Profile Rating */}
                <div className="p-6 rounded-b-lg md:px-96 flex flex-col md:flex-row justify-start md:justify-center md:ml-0 gap-4">
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

                <div className="flex flex-col items-center md:justify-end">
                    <Link href={"/admin/matches/organized/match/edit"}>
                        <button className="bg-[#14AE5C] text-white px-24 py-3 m-5 rounded-xl text-lg">
                            Edit
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default MatchDetails;
