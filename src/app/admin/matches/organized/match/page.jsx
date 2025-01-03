'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlayerProfile from './player profile.png'
const MatchDetails = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        setRating(index + 1); // Set rating based on star index
    };

    return (
        <div className="bg-[#1A1D26] flex items-center justify-center p-6 min-h-screen">
            <div className="w-full bg-[#1A1D26] rounded-lg shadow-lg">
                {/* Match Details Section */}
                <div className="bg-[#FF8E4F] py-6 rounded-t-lg relative">
                    <div className="pb-20">
                        <h2 className="text-xl font-semibold text-black md:text-center px-3">Match Details</h2>
                        <p className="text-sm text-black mt-1 md:text-center px-3">Here are some details of the match selected</p>
                        <span className="absolute top-6 right-6 text-blue-500 font-semibold cursor-pointer">Game Open</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-4 text-black px-10">
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
                    <p className="text-xl px-10 text-black pb-10 py-7">
                        <span className="font-md"><span className="font-bold">Description: </span>description here, description here, description here</span>
                    </p>

                    <div className="flex items-center gap-10">
                        <span className="cursor-pointer  hover:text-gray-300 text-lg text-gray-700 font-semibold ml-14 lg:ml-[680px] ">Players</span>
                        <span className="text-lg text-black font-semibold">Discussion</span>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-[#1A1D26] py-6 rounded-b-lg px-10 ml-10 md:ml-0 md:flex items-center justify-around">
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
                    </div>
                </div>
                <Link href={"/admin/matches/organized/match/edit"}>
                    <div className="bg-[#1A1D26] p-5 ml-12 md:ml-0 md:flex justify-end">
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold w-32 mt-6">Edit</button>
                    </div>
                </Link>


            </div>
        </div>
    );
};

export default MatchDetails;
