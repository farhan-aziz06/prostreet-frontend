'use client';

import { blockIcons, deleteIcon, dropdown, editIcon, eyeIcon, grayStar, yellowStar } from "@/components/resources/icons";
import Profile from "./useravatar.png";
import Image from "next/image";
import { React, useState } from "react";
import Topbar from "@/components/topbar";

const ProfileTable=()=> {
    const [rating, setRating] = useState(0); // Store the selected rating

    // Function to update the rating
    const handleRating = (index) => {
        setRating(index + 1); // Set the rating (1-based index)
    };

    return (
        <div className="pt-5 text-white rounded-lg">
            {/* Profile Section */}
            <div className="flex items-center gap-6 px-16 py-10 bg-[#14AE5C33] border-[#8B909F] rounded-lg">
                <Image
                    src={Profile}
                    alt="Profile"
                    className="w-24 h-24 rounded-full"
                />
                <div>
                    <h2 className="text-lg font-semibold">Kevin, K</h2>
                    <p className="text-gray-300">kevin@gmail.com</p>
                    <p className="text-gray-300">Male</p>
                </div>
                <div className="ml-auto text-right">
                    <div className="flex items-center justify-between">
                        <div className="mr-4">
                            <p className="text-xl font-semibold pb-2">142</p>
                            <p className="text-sm text-gray-300">Wins</p>
                        </div>
                        <div>
                            <p className="text-xl text-center font-semibold pb-2">142</p>
                            <p className="text-sm text-gray-300">Ratings</p>
                        </div>
                    </div>
                    {/* Rating Section */}
                    <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className="cursor-pointer text-2xl"
                                onClick={() => handleRating(index)}
                            >
                                {/* Toggle between yellow and gray stars */}
                                {index < rating ? (
                                    <span>{yellowStar}</span>
                                ) : (
                                    <span>{grayStar}</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-end gap-4 mt-6">
                <button className="flex gap-3 items-center px-4 py-2 text-lg font-medium text-green-500 border border-green-500 rounded-md">
                    Completed
                    <span>{dropdown}</span>
                </button>
                <button className="flex gap-3 items-center px-4 py-2 text-lg font-medium text-green-500 border border-green-500 rounded-md">
                    Sports Type
                    <span>{dropdown}</span>
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="bg-[#14AE5C] text-white">
                        <tr>
                            <th className="px-10 py-5 text-center">User ID</th>
                            <th className="px-10 py-5 text-center">REGISTERED ON</th>
                            <th className="px-10 py-5 text-center">NAME</th>
                            <th className="px-10 py-5 text-center">GENDER</th>
                            <th className="px-10 py-5 text-center">EMAIL</th>
                            <th className="px-10 py-5 text-center">AGE</th>
                            <th className="px-10 py-5 text-center">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { id: 1, date: "July 23, 2023", name: "John", gender: "Female", email: "john@gmail.com", age: 24 },
                            { id: 2, date: "Aug 5, 2023", name: "Selena", gender: "Female", email: "john@gmail.com", age: 24 },
                            { id: 3, date: "Aug 5, 2023", name: "Selena", gender: "Female", email: "john@gmail.com", age: 24 },
                            { id: 4, date: "Aug 5, 2023", name: "Selena", gender: "Female", email: "john@gmail.com", age: 24 },
                        ].map((user) => (
                            <tr key={user.id}>
                                <td className="px-10 py-5 text-center">{user.id}</td>
                                <td className="px-10 py-5 text-center">{user.date}</td>
                                <td className="px-10 py-5 text-center">{user.name}</td>
                                <td className="px-10 py-5 text-center">{user.gender}</td>
                                <td className="px-10 py-5 text-center">{user.email}</td>
                                <td className="px-10 py-5 text-center">{user.age}</td>
                                <td className="px-10 py-5 text-center flex gap-2">
                                    <button className="p-1 rounded text-gray-900">{eyeIcon}</button>
                                    <button className="p-1 rounded text-gray-900">{deleteIcon}</button>
                                    <button className="p-1 rounded text-gray-900">{editIcon}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-6 flex justify-end">
                <button className="px-6 py-2 text-sm font-semibold text-white bg-[#14AE5C] rounded-md hover:bg-green-600">
                    Go Back
                </button>
            </div>
        </div>
    );
}

const View = ()=>{
    return(
        <div className="px-16 py-7">
            <Topbar icon={blockIcons} title={'Users Details'}/>
            <ProfileTable />
        </div>
    )
}

export default View