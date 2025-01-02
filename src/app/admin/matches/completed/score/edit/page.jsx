'use client';

import { calenderIcon, joinedIcon, locIcon, slotIcon } from '@/components/resources/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import PlayerProfile from './player profile.png';

const MatchDetails = () => {
    const [rating, setRating] = useState(0);
    const [showSelectModal, setShowSelectModal] = useState(false);

    const handleRating = (index) => {
        setRating(index + 1); // Set rating based on star index
    };

    const handleSelectClick = () => {
        setShowSelectModal(true);
    };

    const handleModalClose = () => {
        setShowSelectModal(false);
    };

    return (
        <div className="bg-[#181A28] flex items-center justify-center p-6">
            <div className="w-full bg-[#2C2F48] rounded-lg shadow-lg">
                {/* Match Details Section */}
                <div className="bg-[#B6F36A] py-6 rounded-t-lg relative">
                    {/* Details Header */}
                    <div className="pb-20">
                        <h2 className="text-xl font-semibold text-black text-center">Match Details</h2>
                        <p className="text-sm text-black mt-1 text-center">Here are some details of the match selected</p>
                        <span className="absolute top-6 right-6 text-blue-500 font-semibold cursor-pointer">Game Open</span>
                    </div>
                    {/* Match Info */}
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
                            <div className="py-5">
                                <p className="text-xl text-black font-semibold mb-4">Organized By:</p>
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
                {/* Updated Match Results Section */}
                <div className="bg-[#1E2133] p-6 px-10">
                    <h3 className="text-white text-2xl font-semibold mb-6">Match Results</h3>
                    <div className="mb-4">
                        <label className="text-white text-lg block mb-2">Match Score</label>
                        <input
                            type="text"
                            className="w-1/2 rounded-3xl bg-[#54545457] text-gray-300 px-4 py-5 outline-none"
                            placeholder="20"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="text-white text-lg block mb-2">Select Winner</label>
                        <div className="w-1/2 flex items-center rounded-3xl bg-[#54545457]">
                            <input
                                type="text"
                                className="w-full rounded-l-3xl bg-transparent text-gray-300 px-4 py-5 outline-none"
                                placeholder="Select any"
                            />
                            <button
                                className="bg-transparent text-gray-400 px-4 py-3 rounded-r-3xl"
                                onClick={handleSelectClick}
                            >
                                Select
                            </button>
                        </div>
                        <div className="bg-[#1E2133] p-5 flex justify-end">
                            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold w-32 mt-6">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Select Winners Modal */}
            {showSelectModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#1E2133] p-8 rounded-lg w-[400px] shadow-lg">
                        <h3 className="text-white text-2xl font-semibold mb-6 text-center">Select Winners</h3>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 mb-4">
                                <input type="checkbox" className="w-6 h-6 text-green-500" />
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                                    <Image
                                        src={PlayerProfile}
                                        alt="Player"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-white text-lg font-medium">Salena, J.</p>
                                    <div className="flex">
                                        {[...Array(5)].map((_, index) => (
                                            <span
                                                key={index}
                                                className={`text-yellow-500 text-lg ${index === 4 ? '' : 'mr-1'}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button
                            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold w-full mt-4"
                            onClick={handleModalClose}
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchDetails;
