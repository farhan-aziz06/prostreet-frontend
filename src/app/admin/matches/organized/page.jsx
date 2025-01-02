'use client';
import { blockIcons, deleteIcon, editIcon, eyeIcon, searchIcon, dropdown } from '@/components/resources/icons';
import Topbar from '@/components/topbar';
import React, { useState } from 'react';
import Link from 'next/link';
const User = () => {
    const users = [
        { sl: 1, type: "Football", loc: "John", date: "14:00, June 13, 2024", slot: "24", status: "Open" },
        { sl: 2, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Open" },
        { sl: 3, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Close" },
        { sl: 4, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Close" },
    ];

    const [showOrganizedDropdown, setShowOrganizedDropdown] = useState(false); // State to toggle dropdown visibility

    const handleEditClick = (user) => {
        console.log("Edit user:", user);
    };

    const handleDeleteClick = (user) => {
        console.log("Delete user:", user);
    };

    const toggleOrganizedDropdown = () => {
        setShowOrganizedDropdown(!showOrganizedDropdown);
    };

    const handleOrganizedOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowOrganizedDropdown(false); // Hide dropdown
    };

    return (
        <div className="px-16 py-7 min-h-screen">
            {/* Topbar */}
            <Topbar icon={blockIcons} title="Matches List" />

            <div className="border mt-5 rounded-lg">
                {/* Search and Filters */}
                <div className="p-5 flex items-center justify-between">
                    <h2 className="text-lg font-medium mb-4 text-white">Information</h2>
                    <div className="flex items-center gap-4">
                        {/* Search Input */}
                        <div className="flex items-center w-96 border rounded-md bg-gray-800">
                            <input
                                type="text"
                                placeholder="Search Ex: (User ID, Name, Email)"
                                className="w-full px-5 py-2 text-gray-300 text-lg bg-transparent outline-none"
                            />
                            <button className="p-4 text-gray-300 bg-green-600 hover:text-white rounded-r-md border-l">
                                {searchIcon}
                            </button>
                        </div>

                        {/* Organized Dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center text-sky-100 gap-2 px-5 py-4 text-sm font-medium bg-transparent border border-green-700 rounded-md"
                                onClick={toggleOrganizedDropdown}
                            >
                                <span className="text-green-500">Organized</span>
                                <span>{dropdown}</span>
                            </button>
                            {showOrganizedDropdown && (
                                <div className="absolute mt-2 bg-[#1A1D26] border border-gray-700 rounded-lg w-48 shadow-lg">
                                    <ul className="py-2">
                                        <Link href={"/admin/matches/organized"}>
                                            <li
                                                className="px-4 py-2 text-gray-300 hover:bg-green-700 hover:text-white cursor-pointer"
                                                onClick={() => handleOrganizedOptionClick('Organized')}
                                            >
                                                Organized
                                            </li>
                                        </Link>
                                        <Link href={"/admin/matches/completed"}>
                                            <li
                                                className="px-4 py-2 text-gray-300 hover:bg-green-700 hover:text-white cursor-pointer"
                                                onClick={() => handleOrganizedOptionClick('Completed')}
                                            >
                                                Completed
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sport Type Selector */}
                        <button className="flex items-center text-sky-100 gap-2 px-5 py-4 text-sm font-medium bg-transparent border border-green-700 rounded-md">
                            <span className="text-green-500">Sport Type</span>
                            <span>{dropdown}</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-6">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="bg-[#14AE5C] text-white">
                            <tr>
                                <th className="px-10 py-5 text-center">Match ID</th>
                                <th className="px-10 py-5 text-center">TYPE</th>
                                <th className="px-10 py-5 text-center">Organizer</th>
                                <th className="px-10 py-5 text-center">DATE & TIME</th>
                                <th className="px-10 py-5 text-center">LOCATION</th>
                                <th className="px-10 py-5 text-center">STATUS</th>
                                <th className="px-10 py-5 text-center">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.sl}>
                                    <td className="px-10 py-5 text-center">{user.sl}</td>
                                    <td className="px-10 py-5 text-center">{user.type}</td>
                                    <td className="px-10 py-5 text-center">{user.loc}</td>
                                    <td className="px-10 py-5 text-center">{user.date}</td>
                                    <td className="px-10 py-5 text-center">{user.slot}</td>
                                    <td className="px-10 py-5 text-center">
                                        <span
                                            className={`p-2 rounded-full ${user.status === "Open"
                                                ? "bg-green-200 text-green-900"
                                                : user.status === "Close"
                                                    ? "bg-rose-200 text-red-900"
                                                    : "bg-gray-300 text-gray-900"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-5 text-center flex gap-2">
                                        {/* <Link href={"/admin/matches/organized/match"}>
                                            <button className="p-1 rounded text-gray-900">{eyeIcon}</button>
                                        </Link> */}
                                        <Link href={"/admin/matches/organized/match"}>
                                            <button className="p-1 rounded text-gray-900">{eyeIcon}</button>
                                        </Link>
                                        <button
                                            className="p-1 rounded text-gray-900"
                                            onClick={() => handleEditClick(user)}
                                        >
                                            {editIcon}
                                        </button>
                                        <button
                                            className="p-1 rounded text-gray-900"
                                            onClick={() => handleDeleteClick(user)}
                                        >
                                            {deleteIcon}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;
