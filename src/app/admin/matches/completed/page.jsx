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
        <div className="px-16 py-7 min-h-screen">
            {/* Topbar */}
            <Topbar icon={blockIcons} title="Matches List" />
            <div className="border mt-5 rounded-lg">
                {/* Search and Filters */}
                <div className="p-5 flex items-center justify-between">
                    <h2 className="text-lg font-medium mb-4 text-white">Information</h2>
                    <div className="flex items-center gap-4">
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
                        <div className="relative">
                            <button
                                className="flex items-center text-sky-100 gap-2 px-5 py-4 text-sm font-medium bg-transparent border border-green-700 rounded-md"
                                onClick={toggleOrganizedDropdown}
                            >
                                <span className="text-green-500">Completed</span>
                                <span>{dropdown}</span>
                            </button>
                            {showOrganizedDropdown && (
                                <div className="absolute top-full left-0 mt-2 bg-[#1A1D26] border border-gray-700 rounded-lg w-48 shadow-lg z-50">
                                    <ul className="py-2">
                                        <Link href={"/admin/matches"}>
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
                                                    : "text-white"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-5 text-center flex gap-2">
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
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[600px]">
                        <h2 className="text-lg font-semibold text-white mb-4 text-center">
                            Edit Match
                        </h2>
                        <form className="space-y-4">
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
                                <div key={index} className="flex items-center justify-between gap-4">
                                    <label className="w-1/3 text-sm text-gray-300">{field.label}</label>
                                    <input
                                        type="text"
                                        className="w-2/3 p-2 bg-gray-700 rounded border border-gray-600 text-white"
                                        placeholder={field.placeholder}
                                    />
                                </div>
                            ))}
                            {/* Game Open Toggle */}
                            <div className="flex items-center justify-start gap-4">
                                <label className="w-1/3 text-sm text-gray-300">Game Open</label>
                                <button
                                    type="button"
                                    onClick={handleToggle}
                                    className={`w-10 flex items-center bg-gray-600 rounded-full p-1 ${gameOpen ? "bg-green-600" : "bg-gray-600"
                                        }`}
                                >
                                    <div
                                        className={`bg-white w-4 h-4 rounded-full shadow-md transform ${gameOpen ? "translate-x-full" : "translate-x-0"
                                            }`}
                                    ></div>
                                </button>
                            </div>
                            {/* Save Button */}
                            <div className="flex gap-4 justify-center mt-6">
                                <button
                                    type="button"
                                    className="bg-green-600 px-4 py-2 rounded text-white"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-600 px-4 py-2 rounded text-white"
                                    onClick={handleCloseModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-[#222530] p-6 rounded-lg shadow-lg w-[30%] text-center border border-[#4F4E4E]">
                        <h2 className="text-lg font-semibold mb-4">Do you really want to delete this item?</h2>
                        <p className="text-sm font-medium mb-2">User deleted once csn not be restored again. Are you sure you want to delete this?</p>
                        <div className="flex gap-4 justify-center">
                            <button
                                className="bg-red-600 px-7 py-2 rounded text-white"
                                onClick={handleDeleteConfirm}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-green-600 px-7 py-2 rounded text-white"
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
