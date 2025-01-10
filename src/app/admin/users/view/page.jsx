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
            <div className="bg-[#222530] p-6 md:px-16 rounded-lg shadow-lg m-5 w-full max-w-2xl">
                <div className="py-7">
                    <h2 className="text-lg font-semibold mb-2 text-center text-white">Edit User</h2>
                    <p className="text-sm text-gray-400 mb-6 text-center">
                        Here you can make changes to the entries
                    </p>
                </div>
                <form className="space-y-6 border-t border-[#E8E8E833] py-5">
                    {/* Name */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <label className="text-lg font-semibold text-white w-full md:w-1/4">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            className="w-full md:w-3/4 p-2 bg-[#222530] rounded-lg border border-[#E5E5E580] text-white"
                            placeholder="Enter name"
                        />
                    </div>
                    {/* Age */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <label className="text-lg font-semibold text-white w-full md:w-1/4">Age</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age || ""}
                            onChange={handleChange}
                            className="w-full md:w-3/4 p-2 bg-[#222530] rounded-lg border border-[#E5E5E580] text-white"
                            placeholder="Enter age"
                        />
                    </div>
                    {/* Registration Date */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <label className="text-lg font-semibold text-white w-full md:w-1/4 text-nowrap">Registration Date</label>
                        <input
                            type="text"
                            name="registrationDate"
                            value={formData.registrationDate || ""}
                            onChange={handleChange}
                            className="w-full md:w-3/4 p-2 bg-[#222530] rounded-lg border border-[#E5E5E580] text-white"
                            placeholder="Enter registration date"
                        />
                    </div>
                    {/* Gender */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <label className="text-lg font-semibold text-white w-full md:w-1/4">Gender</label>
                        <input
                            type="text"
                            name="gender"
                            value={formData.gender || ""}
                            onChange={handleChange}
                            className="w-full md:w-3/4 p-2 bg-[#222530] rounded-lg border border-[#E5E5E580] text-white"
                            placeholder="Enter gender"
                        />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <label className="text-lg font-semibold text-white w-full md:w-1/4">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            className="w-full md:w-3/4 p-2 bg-[#222530] rounded-lg border border-[#E5E5E580] text-white"
                            placeholder="Enter email"
                        />
                    </div>

                </form>
                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-12">
                    <button
                        type="button"
                        className="bg-[#14AE5C] px-20 py-3 rounded-lg text-white"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 px-20 py-3 rounded-lg text-white"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProfileTable = () => {
    const [rating, setRating] = useState(0); // Store the selected rating
    const [showDeleteModal, setShowDeleteModal] = useState(false); // To show/hide delete modal
    const [showEditModal, setShowEditModal] = useState(false); // To show/hide edit modal
    const [selectedUser, setSelectedUser] = useState(null); // Store the user data for delete or edit
    const [showOrganizedDropdown, setShowOrganizedDropdown] = useState(false);

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
    const toggleOrganizedDropdown = () => {
        setShowOrganizedDropdown(!showOrganizedDropdown);
    };

    const handleOrganizedOptionClick = (option) => {
        console.log(`Selected option: ${option}`);
        setShowOrganizedDropdown(false); // Hide dropdown
    };

    return (
        <div className="pt-10 text-white rounded-lg">
            {/* Profile Section */}
            <div className="lg:flex items-center gap-6 px-10 pt-12 pb-5 bg-[#14AE5C33] border border-[#8B909F] rounded-lg">
                <div className="flex items-center  gap-6">
                    <Image
                        src={Profile}
                        alt="Profile"
                        className="w-32 rounded-full border-2 border-[#8B909F]"
                    />
                    <div>
                        <h2 className="text-lg font-semibold py-1">Kevin, K</h2>
                        <p className="text-gray-300 py-1">kevin@gmail.com</p>
                        <p className="text-gray-300 py-1">Male</p>
                    </div>
                </div>
                <div className="lg:ml-auto text-right ml-5 mt-5">
                    <div className="flex items-center gap-8">
                        <div className="ml-3">
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
            {/* Buttons */}
            <div className="flex justify-end items-end gap-7 mt-20">
                <div>
                    <button
                        className="flex items-center text-sky-100 gap-4 px-2 md:px-5 py-2 md:py-3 text-sm font-medium bg-transparent border-2 border-green-700 rounded-md"
                        onClick={toggleOrganizedDropdown}
                    >
                        <span className="text-[#14AE5C]">Completed</span>
                        <span>{dropdown}</span>
                    </button>
                </div>
                <div className="relative">
                    <button
                        className="flex items-center text-sky-100 gap-4 px-2 md:px-5 py-2 md:py-3 text-sm font-medium bg-transparent border-2 border-green-700 rounded-md"
                        onClick={toggleOrganizedDropdown}
                    >
                        <span className="text-[#14AE5C]">Sports Type</span>
                        <span>{dropdown}</span>
                    </button>
                    {showOrganizedDropdown && (
                        <div className="absolute mt-2 bg-[#1A1D26] border border-gray-700 rounded-lg w-40 shadow-lg">
                            <ul className="py-2">
                                <Link href={"#"}>
                                    <li
                                        className="px-4 py-2 text-gray-300 hover:bg-[#DEDEDE33] hover:text-white cursor-pointer"
                                        onClick={() => handleOrganizedOptionClick('Organized')}
                                    >
                                        Soccer
                                    </li>
                                </Link>
                                <Link href={"/admin/matches/completed"}>
                                    <li
                                        className="px-4 py-2 text-gray-300 hover:bg-[#DEDEDE33] hover:text-white cursor-pointer"
                                        onClick={() => handleOrganizedOptionClick('Completed')}
                                    >
                                        Football
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-3">
                <table className="w-full text-sm text-left text-white">
                    <thead className="bg-[#14AE5C] text-white">
                        <tr>
                            <th className="px-10 py-5 text-center">SL</th>
                            <th className="px-10 py-5 text-center">TYPE</th>
                            <th className="px-10 py-5 text-center">LOCATION</th>
                            <th className="px-10 py-5 text-center text-nowrap">DATE & TIME</th>
                            <th className="px-10 py-5 text-center">SLOT AVILABLE</th>
                            <th className="px-10 py-5 text-center">STATUS</th>
                            <th className="px-10 py-5 text-center">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { sl: 1, type: "Football", loc: "John", date: "14:00, June 13, 2024", slot: "24", status: "Open" },
                            { sl: 2, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Open" },
                            { sl: 3, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Close" },
                            { sl: 4, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Close" },
                        ].map((user) => (
                            <tr key={user.sl}>
                                <td className="px-10 py-5 text-center">{user.sl}</td>
                                <td className="px-10 py-5 text-center">{user.type}</td>
                                <td className="px-10 py-5 text-center">{user.loc}</td>
                                <td className="px-10 py-5 text-center text-nowrap">{user.date}</td>
                                <td className="px-10 py-5 text-center">{user.slot}</td>
                                <td className="px-10 py-5 text-center">
                                    <span
                                        className={`px-8 py-2 text-center rounded-full ${user.status === "Open"
                                            ? "bg-[#44DD261A] text-[#44DD26]"
                                            : "bg-[#F31E0A1A] text-[#F31E0A]"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-1 py-10 md:py-5 text-center flex ">
                                    <div className="ml-4 2xl:ml-14">
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
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-[#222530] p-6 md:py-16 rounded-lg shadow-lg md:w-[40%] m- 5 text-center border border-[#4F4E4E]">
                        <h2 className="text-lg font-semibold mb-4">Do you really want to delete this item?</h2>
                        <p className="text-sm font-medium mb-2 text-[#FFFFFF99]">User deleted once csn not be restored again. Are you sure you want to delete this?</p>
                        <div className="flex gap-4 justify-center mt-10">
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
