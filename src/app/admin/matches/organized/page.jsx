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

    const [showOrganizedDropdown, setShowOrganizedDropdown] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [gameOpen, setGameOpen] = useState(false);

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

            <div className="border border-[#8B909F] mt-10 rounded-lg bg-[#30333D] overflow-x-auto ">
                {/* Search and Filters */}
                <div className="px-4 md:px-10 py-4 flex items-center justify-between gap-20">
                    <h2 className="text-lg font-medium mb-4 text-white">Organized</h2>
                    <div className="flex items-center gap-14 md:gap-4">
                        {/* Search Input */}
                        <div className="flex items-center w-96 border rounded-md">
                            <input
                                type="text"
                                placeholder="Search Ex: (Match ID, Type, Date, Location)"
                                className="flex w-full px-5 py-2 text-gray-300 text-lg bg-transparent outline-none"
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
                <div className="mt-1 w-full">
                    <table className="w-full text-sm text-left text-white">
                        <thead className="bg-[#14AE5C] text-white w-full">
                            <tr>
                                <th className="px-6 py-4 text-center">Match ID</th>
                                <th className="px-6 py-4 text-center">TYPE</th>
                                <th className="px-6 py-4 text-center">Organizer</th>
                                <th className="px-6 py-4 text-center text-nowrap">DATE & TIME</th>
                                <th className="px-6 py-4 text-center">LOCATION</th>
                                <th className="px-6 py-4 text-center">STATUS</th>
                                <th className="px-6 py-4 text-center">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.sl} className="text-center">
                                    <td className="px-6 py-4">{user.sl}</td>
                                    <td className="px-6 py-4">{user.type}</td>
                                    <td className="px-6 py-4">{user.loc}</td>
                                    <td className="px-6 py-4 text-nowrap">{user.date}</td>
                                    <td className="px-6 py-4">{user.slot}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-8 py-2 rounded-full ${user.status === "Open"
                                                ? "bg-[#44DD261A] text-[#44DD26]"
                                                : "bg-[#F31E0A1A] text-[#F31E0A]"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex justify-center gap-2">
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
                                    { label: "Location", placeholder: "Enter location" },
                                    { label: "Max Players", placeholder: "Enter max players" },
                                    { label: "Opponent Age", placeholder: "Enter opponent age" },
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
                                {/* Opponent Gender as Dropdown */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <label className="md:w-1/3 text-lg font-semibold text-white text-nowrap">
                                        Opponent Gender
                                    </label>
                                    <select
                                        className="w-full md:w-2/3 p-2 bg-gray-700 rounded border border-gray-600 text-white"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select opponent gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="any">Any</option>
                                    </select>
                                </div>
                                {/* Time Flexibility */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <label className="md:w-1/3 text-lg font-semibold text-white text-nowrap">
                                        Time Flexibility
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full md:w-2/3 p-2 bg-gray-700 rounded border border-gray-600 text-white"
                                        placeholder="Enter time"
                                    />
                                </div>
                                {/* Updated Time Field */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <label className="md:w-1/3 text-lg font-semibold text-white text-nowrap">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full md:w-2/3 p-2 bg-gray-700 rounded border border-gray-600 text-white"
                                        placeholder="Enter time"
                                    />
                                </div>
                                {/* Game Open Toggle */}
                                <div className="flex items-center justify-start gap-4">
                                    <label className="md:w-1/3 text-lg font-semibold text-white text-nowrap">
                                        Game Open
                                    </label>
                                    <button
                                        type="button"
                                        onClick={handleToggle}
                                        className={`w-14 flex items-center bg-gray-600 rounded-full p-1 ${gameOpen ? "bg-green-400" : "bg-gray-600"
                                            }`}
                                    >
                                        <div
                                            className={`bg-white w-6 h-5 rounded-full shadow-md transform ${gameOpen ? "translate-x-full" : "translate-x-0"
                                                }`}
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
        </div>
    );
};

export default User;
