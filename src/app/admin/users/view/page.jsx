'use client';

import { blockIcons, deleteIcon, dropdown, editIcon, eyeIcon, grayStar, yellowStar } from "@/components/resources/icons";
import Profile from "./useravatar.png";
import Image from "next/image";
import { React, useState } from "react";
import Topbar from "@/components/topbar";
import Link from "next/link";

const EditUserModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState(user || {});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Updated User Data:", formData);
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[500px] m-5">
                <h2 className="text-lg font-semibold mb-2 text-center text-white">Edit User</h2>
                <p className="text-sm text-gray-400 mb-6 text-center">
                    Here you can make changes to the entries
                </p>
                <form className="space-y-4 border-t mb-4">
                    <div className="mt-4">
                        <label className="block pb-2 text-sm mb-1 text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label className="block pb-2 text-sm mb-1 text-gray-300">Age</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age || ""}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                            placeholder="Enter age"
                        />
                    </div>
                    <div>
                        <label className="block pb-2 text-sm mb-1 text-gray-300">Registration Date</label>
                        <input
                            type="text"
                            name="registrationDate"
                            value={formData.registrationDate || ""}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                            placeholder="Enter registration date"
                        />
                    </div>
                    <div>
                        <label className="block pb-2 text-sm mb-1 text-gray-300">Gender</label>
                        <input
                            type="text"
                            name="gender"
                            value={formData.gender || ""}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                            placeholder="Enter gender"
                        />
                    </div>
                    <div>
                        <label className="block pb-2 text-sm mb-1 text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            className="w-full p-2 bg-gray-700 rounded border border-gray-600 text-white"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="flex gap-4 justify-center mt-6">
                        <button
                            type="button"
                            className="bg-green-600 px-4 py-2 rounded text-white"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-red-600 px-4 py-2 rounded text-white"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ProfileTable = () => {
    const [rating, setRating] = useState(0); // Store the selected rating
    const [showDeleteModal, setShowDeleteModal] = useState(false); // To show/hide delete modal
    const [showEditModal, setShowEditModal] = useState(false); // To show/hide edit modal
    const [selectedUser, setSelectedUser] = useState(null); // Store the user data for delete or edit

    const handleRating = (index) => {
        setRating(index + 1); // Set the rating (1-based index)
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user); // Store user data
        setShowDeleteModal(true); // Show the modal
    };

    const handleDeleteConfirm = () => {
        console.log(`User ${selectedUser.sl} deleted.`);
        setShowDeleteModal(false); // Close the modal
    };

    const handleDeleteCancel = () => {
        setShowDeleteModal(false); // Close the modal
    };

    const handleEditClick = (user) => {
        setSelectedUser(user); // Store user data
        setShowEditModal(true); // Show the modal
    };

    const handleEditSave = (updatedUser) => {
        console.log("Updated User Data:", updatedUser);
        setShowEditModal(false); // Close the modal
    };

    return (
        <div className="pt-10 text-white rounded-lg">
            {/* Profile Section */}
            <div className="md:flex items-center gap-6 px-10 py-7 bg-[#14AE5C33] border-[#8B909F] rounded-lg">
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
                <div className="ml-auto text-right mt-5">
                    <div className="flex items-center gap-10 md:justify-between">
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

            {/* Table */}
            <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="bg-[#14AE5C] text-white">
                        <tr>
                            <th className="px-10 py-5 text-center">SL</th>
                            <th className="px-10 py-5 text-center">TYPE</th>
                            <th className="px-10 py-5 text-center">LOCATION</th>
                            <th className="px-10 py-5 text-center">DATE & TIME</th>
                            <th className="px-10 py-5 text-center">SLOT AVILABLE</th>
                            <th className="px-10 py-5 text-center">STATUS</th>
                            <th className="px-10 py-5 text-center">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { sl: 1, type: "Football", loc: "John", date: "14:00, June 13, 2024", slot: "24", status: "open" },
                            { sl: 2, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "open" },
                            { sl: 3, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "close" },
                            { sl: 4, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "close" },
                        ].map((user) => (
                            <tr key={user.sl}>
                                <td className="px-10 py-5 text-center">{user.sl}</td>
                                <td className="px-10 py-5 text-center">{user.type}</td>
                                <td className="px-10 py-5 text-center">{user.loc}</td>
                                <td className="px-10 py-5 text-center text-nowrap">{user.date}</td>
                                <td className="px-10 py-5 text-center">{user.slot}</td>
                                <td className="px-10 py-5 text-center">
                                    <span
                                        className={`p-2 rounded-full ${user.status === "open"
                                            ? "bg-green-400 text-green-900"
                                            : user.status === "close"
                                                ? "bg-rose-200 text-red-900"
                                                : "bg-gray-300 text-gray-900"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-10 py-10 md:py-5 text-center flex gap-2">
                                    <button className="p-1 rounded text-gray-900">{eyeIcon}</button>
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

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-[#222530] p-6 rounded-lg shadow-lg md:w-[30%] m-5 text-center border border-[#4F4E4E]">
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

            {/* Edit Modal */}
            {showEditModal && (
                <EditUserModal
                    user={selectedUser}
                    onClose={() => setShowEditModal(false)}
                    onSave={handleEditSave}
                />
            )}
        </div>
    );
};

const View = () => {
    return (
        <div className=" px-5 md:px-10 py-7 min-h-screen">
            <Topbar icon={blockIcons} title={'Users Details'} />
            <ProfileTable />
        </div>
    );
};

export default View;
