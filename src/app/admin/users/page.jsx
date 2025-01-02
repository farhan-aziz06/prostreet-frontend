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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[500px]">
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

const User = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { sl: 1, type: "Football", loc: "John", date: "14:00, June 13, 2024", slot: "24", status: "Open" },
    { sl: 2, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Open" },
    { sl: 3, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Close" },
    { sl: 4, type: "Football", loc: "Selena", date: "14:00, June 13, 2024", slot: "24", status: "Close" },
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
    <div className="px-16 py-7 min-h-screen bg-[#1A1D26]">
      <Topbar icon={blockIcons} title="Matches List" />

      <div className="border mt-10 rounded-lg bg-[#1A1D26]">
        <div className="p-5 flex items-center justify-between">
          <h2 className="text-lg font-medium text-white">Information</h2>
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
            <button className="flex items-center text-sky-100 gap-2 px-5 py-4 text-sm font-medium bg-transparent border border-green-700 rounded-md">
              <span className="text-green-500">Organized</span>
              <span>{dropdown}</span>
            </button>
          </div>
        </div>

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
                        : "bg-rose-200 text-red-900"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-10 py-5 text-center flex justify-center gap-2">
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
