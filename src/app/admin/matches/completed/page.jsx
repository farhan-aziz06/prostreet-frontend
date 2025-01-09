'use client';

import { blockIcons, deleteIcon, editIcon, eyeIcon, searchIcon, dropdown } from '@/components/resources/icons';
import Topbar from '@/components/topbar';
import React, { useState } from 'react';
import Link from 'next/link';
const User = () => {
    const users = [
        { sl: 1, type: "Football", loc: "John", date: "14:00, June 13, 2024", slot: "24", status: "--" },
        { sl: 2, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "--" },
        { sl: 3, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "--" },
        { sl: 4, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "--" },
    ];

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [gameOpen, setGameOpen] = useState(false);
    const [showOrganizedDropdown, setShowOrganizedDropdown] = useState(false);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false);
    };

    const handleDeleteConfirm = () => {
        console.log(`User ${selectedUser.sl} deleted.`);
        setShowDeleteModal(false);
    };

    const handleToggle = () => {
        setGameOpen(!gameOpen);
    };

    const handleCloseModal = () => {
        setShowEditModal(false);
        setShowDeleteModal(false);
        setSelectedUser(null);
    };

    const toggleOrganizedDropdown = () => {
        setShowOrganizedDropdown(!showOrganizedDropdown);
    };

    const handleOrganizedOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowOrganizedDropdown(false); // Hide dropdown
    };


    return (
        <div className="px-5 md:px-10 py-7 min-h-screen">
            {/* Topbar */}
            <Topbar icon={blockIcons} title="Matches List" />
            <div className="border border-[#8B909F] mt-10 rounded-lg bg-[#30333D]">
                {/* Search and Filters */}
                <div className="px-4 md:px-10 py-4 md:flex items-center justify-between ">
                    <h2 className="hidden md:flex text-lg font-medium mb-4 text-white">Information</h2>
                    <div className="flex items-center gap-14 md:gap-4">
                        {/* Search Input */}
                        <div className="hidden md:flex items-center md:w-96 border rounded-md">
                            <input
                                type="text"
                                placeholder="Search Ex: (User ID, Name, Email)"
                                className="flex w-full px-10 py-2 text-gray-300 text-lg bg-transparent outline-none"
                            />
                            <button className="p-3 md:p-4 text-gray-300 bg-green-600 hover:text-white rounded-r-md border-l">
                                {searchIcon}
                            </button>
                        </div>

                        {/* Organized Dropdown */}
                        <div className="relative">
                            <button
                                className="flex items-center justify-betwee gap-2 md:gap-10 px-2 md:px-7 py-2 md:py-3 text-sm font-medium bg-transparent border border-green-700 rounded-md"
                                onClick={toggleOrganizedDropdown}
                            >
                                <span className="text-[#14AE5C] text-lg">Organized</span>
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
                        <button className="flex items-center justify-betwee gap-2 md:gap-10 px-2 md:px-7 py-2 md:py-3 text-sm font-medium bg-transparent border border-green-700 rounded-md">
                            <span className="text-[#14AE5C] text-nowrap text-lg">Sport Type</span>
                            <span>{dropdown}</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-2">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="bg-[#14AE5C] text-white">
                            <tr>
                                <th className="px-10 py-5 text-center uppercase">Match ID</th>
                                <th className="px-10 py-5 text-center uppercase">TYPE</th>
                                <th className="px-10 py-5 text-center uppercase">Organizer</th>
                                <th className="px-10 py-5 text-center uppercase text-nowrap">DATE & TIME</th>
                                <th className="px-10 py-5 text-center uppercase">LOCATION</th>
                                <th className="px-10 py-5 text-center uppercase">STATUS</th>
                                <th className="px-10 py-5 text-center uppercase">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.sl} className="text-center">
                                    <td className="px-10 py-5">{user.sl}</td>
                                    <td className="px-10 py-5">{user.type}</td>
                                    <td className="px-10 py-5">{user.loc}</td>
                                    <td className="px-10 py-5 text-nowrap">{user.date}</td>
                                    <td className="px-10 py-5">{user.slot}</td>
                                    <td className="px-10 py-5">
                                        <span
                                            className={`p-2 rounded-full ${user.status === "Open"
                                                ? "bg-green-200 text-green-900"
                                                : user.status === "Close"
                                                    ? "bg-rose-200 text-red-900"
                                                    : "text-white"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-10 md:py-5 flex justify-center gap-2">
                                        <Link href={"/admin/matches/completed/score"}>
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

            {/* Edit Match Modal */}
            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#222530] border border-[#4F4E4E] max-h-[80%] p-2 md:p-6 rounded-lg shadow-lg w-full max-w-2xl mx-4 my-2 flex flex-col">
                        <div className="md:my-10">
                            <h2 className="text-lg font-semibold text-white md:mb-4 text-center">
                                Edit Match
                            </h2>
                            <p className="text-center text-gray-400">Here you can make changes to the entries</p>
                        </div>
                        {/* Scrollable Form Container */}
                        <div className="flex-grow overflow-y-auto">
                            <form className="space-y-1 md:space-y-4 border-t border-[#E8E8E833] pt-2 md:pt-10 px-3 md:px-10">
                                {[
                                    { label: "Sports Type", placeholder: "Enter sports type" },
                                    { label: "Time", placeholder: "Enter time" },
                                    { label: "Location", placeholder: "Enter location" },
                                    { label: "Max Players", placeholder: "Enter max players" },
                                    { label: "Opponent Age", placeholder: "Enter opponent age" },
                                    { label: "Opponent Gender", placeholder: "Enter opponent gender" },
                                    { label: "Time Flexibility", placeholder: "Enter time flexibility" },
                                    { label: "Description", placeholder: "Enter description" },
                                ].map((field, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
                                    >
                                        <label className="md:w-1/3 text-lg font-semibold text-white text-nowrap">
                                            {field.label}
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full md:w-2/3 p-2 bg-gray-700 rounded border border-gray-600 text-white"
                                            placeholder={field.placeholder}
                                        />
                                    </div>
                                ))}
                                {/* Game Open Toggle */}
                                <div className="flex items-center justify-start gap-4">
                                    <label className="md:w-1/3 text-lg font-semibold text-white text-nowrap">Game Open</label>
                                    <button
                                        type="button"
                                        onClick={handleToggle}
                                        className={`w-14 flex items-center bg-gray-600 rounded-full p-1 ${gameOpen ? "bg-green-400" : "bg-gray-600"}`}
                                    >
                                        <div
                                            className={`bg-white w-6 h-5 rounded-full shadow-md transform ${gameOpen ? "translate-x-full" : "translate-x-0"}`}
                                        ></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:mt-6">
                            <button
                                type="button"
                                className="bg-[#14AE5C] m-2 px-16 py-2 rounded-lg text-white"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="bg-red-600 m-2 px-16 py-2 rounded-lg text-white"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-[#222530] p-6 md:py-16 rounded-lg shadow-lg md:w-[40%] m-5 text-center border border-[#4F4E4E]">
                        <h2 className="text-lg font-semibold mb-4">Do you really want to delete this item?</h2>
                        <p className="text-sm font-medium mb-2 text-[#FFFFFF99]">User deleted once csn not be restored again. Are you sure you want to delete this?</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
                            <button
                                className="bg-red-600 px-20 py-3 rounded-xl text-white"
                                onClick={handleDeleteConfirm}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-green-600 px-20 py-3 rounded-xl text-white"
                                onClick={handleDeleteCancel}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
