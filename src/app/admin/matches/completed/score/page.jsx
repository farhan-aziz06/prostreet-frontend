'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import PlayerProfile from './player profile.png';
import Link from 'next/link';
const MatchDetails = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        setRating(index + 1); // Set rating based on star index
    };

    return (
        <div className="bg-[#1A1D26] flex items-center justify-center p-6">
            <div className="w-full bg-[#1A1D26] rounded-lg shadow-lg">
                {/* Match Details Section */}
                <div className="bg-[#B6F36A] py-6 rounded-t-lg relative">
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
                            <div className='py-5'>
                                <p className="text-xl text-black font-semibold mb-4">Organized By: </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                                        <Image
                                            src={PlayerProfile} // Replace with the actual image path
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-lg text-black font-medium">Farhan jr</p>
                                </div>
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
                <div className="bg-[#1A1D26] p-6 rounded-b-lg px-10 md:flex items-center justify-around ml-12 md:ml-0">
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
                {/* Match Results Section */}
                <div className="bg-[#1A1D26] p-6 px-10  md:ml-0">
                    <h3 className="text-white text-2xl font-semibold mb-4">Match Results</h3>
                    <p className="text-gray-400 text-lg mb-4">Match Score</p>
                    <p className="text-green-500 text-4xl font-bold mb-6">20-6</p>
                    <h4 className="text-white text-xl font-semibold mb-4">Winners</h4>
                    <div className="md:flex items-center justify-between">
                        <div className="flex items-center gap-10">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="text-center">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 mx-auto">
                                        <Image
                                            src={PlayerProfile} // Replace with actual image path
                                            alt="Player Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-white text-lg font-medium mt-2">James J Call</p>
                                    <div className="flex items-center justify-center mt-2">
                                        {[...Array(5)].map((_, index) => (
                                            <span
                                                key={index}
                                                className={`cursor-pointer text-lg ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                                onClick={() => handleRating(index)}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href={"/admin/matches/completed/score/edit"}>
                            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold w-32">
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
