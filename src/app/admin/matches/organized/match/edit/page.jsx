'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import PlayerProfile from './player profile.png'
const MatchDetails = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        setRating(index + 1); // Set rating based on star index
    };

    return (
        <div className="bg-[#181A28] flex items-center justify-center p-6">
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
                        <div>
                            <div className="flex items-center gap-2 pb-4">
                                <p className="text-xl text-black font-semibold">Preferred Opponent: any</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-xl text-black font-semibold">Preferred Age: any</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl px-10 text-black pb-10">
                        <span className="font-semibold">Description:</span> description here, description here, description here
                    </p>

                    <div className="flex items-center gap-10">
                        <span className="cursor-pointer hover:text-gray-300 text-lg text-gray-700 font-semibold ml-[680px]">Players</span>
                        <span className="text-lg text-black font-semibold">Discussion</span>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-[#1E2133] p-6 rounded-b-lg px-10 flex items-center justify-around">
                    <div className="my-4 ">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                            <Image
                                src={PlayerProfile} // Replace with actual image path
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white text-lg font-semibold">James J Call</p>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                                            }`}
                                        onClick={() => handleRating(index)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="bg-[#787F99] rounded-3xl mt-2 text-white px-6 py-3 text-md font-medium">
                            Remove
                        </button>
                    </div>
                    <div className="mb-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                            <Image
                                src={PlayerProfile} // Replace with actual image path
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white text-lg font-semibold">James J Call</p>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                                            }`}
                                        onClick={() => handleRating(index)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="bg-[#787F99] rounded-3xl mt-2 text-white px-6 py-3 text-md font-medium">
                            Remove
                        </button>
                    </div>
                    <div className="my-4">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                            <Image
                                src={PlayerProfile} // Replace with actual image path
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-white text-lg font-semibold">James J Call</p>
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                                            }`}
                                        onClick={() => handleRating(index)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="bg-[#787F99] rounded-3xl mt-2 text-white px-6 py-3 text-md font-medium">
                            Remove
                        </button>
                    </div>
                </div>
                <div className="bg-[#1E2133] p-5 flex justify-end">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold w-32 mt-6">Save</button>
                </div>

            </div>
        </div>
    );
};

export default MatchDetails;
