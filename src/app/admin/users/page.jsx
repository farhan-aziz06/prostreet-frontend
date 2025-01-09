'use client';
import { blockIcons, deleteIcon, editIcon, eyeIcon, searchIcon, dropdown } from '@/components/resources/icons';
import Topbar from '@/components/topbar';
import React, { useState } from 'react';
import Link from 'next/link';

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 overflow-y-auto">
      <div className="bg-[#222530] p-2 md:p-6 md:px-16 rounded-lg shadow-lg w-full md:max-w-2xl m-3">
        <div className="md:py-7">
          <h2 className="text-lg font-semibold md:mb-2 text-center text-white">Edit User</h2>
          <p className="text-sm text-gray-400 md:mb-6 text-center">
            Here you can make changes to the entries
          </p>
        </div>
        <form className="space-y-1 md:space-y-6 border-t border-[#E8E8E833] py-5">
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
            <label className="text-lg font-semibold text-white w-full md:w-1/4">Registration Date</label>
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
        <div className="flex flex-col md:flex-row gap-4 justify-center md:mt-12">
          <button
            type="button"
            className="bg-[#14AE5C] px-20 py-3 m-2 rounded-lg text-white"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-600 px-20 py-3 m-2 rounded-lg text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { sl: 1, reg: "June,23,2023", name: "Johnea", gender: "Male", email: "abc@gmail.com", age: "23" },
    { sl: 2, reg: "June,23,2023", name: "Selena", gender: "Male", email: "abc@gmail.com", age: "23" },
    { sl: 3, reg: "June,23,2023", name: "Selena", gender: "Male", email: "abc@gmail.com", age: "23" },
    { sl: 4, reg: "June,23,2023", name: "Selena", gender: "Male", email: "abc@gmail.com", age: "23" },
  ];

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleEditSave = (updatedUser) => {
    console.log("Updated User Data:", updatedUser);
    setShowEditModal(false);
  };

  const handleDeleteConfirm = () => {
    console.log(`User ${selectedUser.sl} deleted.`);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="px-5 md:px-10 py-7 min-h-screen bg-[#1A1D26]">
      <Topbar icon={blockIcons} title="User List" />

      <div className="border border-[#8B909F] mt-10 rounded-lg bg-[#30333D]">
        <div className="p-5 md:flex items-center justify-between">
          <h2 className="text-lg font-medium text-white md:px-8">Information</h2>
          <div className="flex items-center justify-between md:justify-start gap-4 mt-3 md:mt-0">
            <div className="hidden md:flex items-center md:w-96 border rounded-md">
              <input
                type="text"
                placeholder="Search Ex: (User ID, Name, Email)"
                className="flex w-full px-7 py-2 text-gray-300 text-lg bg-transparent outline-none"
              />
              <button className="p-2 md:px-4 py-3.5 text-gray-300 bg-green-600 hover:text-white rounded-r-md md:border-l">
                {searchIcon}
              </button>
            </div>
            <button className="flex items-center text-sky-100 gap-4 px-2 md:px-7 py-2 md:py-3.5 text-sm font-medium bg-transparent border border-green-700 rounded-md">
              <span className="text-[#14AE5C] text-lg text-nowrap">Select Date</span>
              <span>{dropdown}</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white">
            <thead className="bg-[#14AE5C] text-white">
              <tr>
                <th className="px-10 py-5 text-center uppercase">User ID</th>
                <th className="px-10 py-5 text-center uppercase">Registered No</th>
                <th className="px-10 py-5 text-center uppercase">Name</th>
                <th className="px-10 py-5 text-center uppercase">Gender</th>
                <th className="px-10 py-5 text-center uppercase">Email</th>
                <th className="px-10 py-5 text-center uppercase">Age</th>
                <th className="px-10 py-5 text-center uppercase">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.sl}>
                  <td className="px-10 py-3 text-center">{user.sl}</td>
                  <td className="px-10 py-3 text-center">{user.reg}</td>
                  <td className="px-10 py-3 text-center">{user.name}</td>
                  <td className="px-10 py-3 text-center text-nowrap min-w-20">{user.gender}</td>
                  <td className="px-10 py-3 text-center">{user.email}</td>
                  <td className="px-10 py-3 text-center">{user.age}</td>
                  <td className="px-5 md:px-10 py-10 md:py-5 text-center  flex justify-center items-center">
                    <Link href={"/admin/users/view"}>
                      <button className="p-1 rounded text-gray-900">
                        {eyeIcon}
                      </button>
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

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-[#222530] p-6 md:py-16 rounded-lg shadow-lg md:w-[40%] m-5 text-center border border-[#4F4E4E]">
            <h2 className="text-lg text-white font-semibold mb-4">Do you really want to delete this User?</h2>
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

export default User;
