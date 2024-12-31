'use client'
import { blockIcons, deleteIcon, dropdown, editIcon, eyeIcon, searchIcon } from '@/components/resources/icons';
import Table from '@/components/table';
import Topbar from '@/components/topbar';
import React from 'react';

// InformationTable Component
const InformationTable = ({ headers, userData, actions }) => {
  return (
    <div className="mt-5 pt-5 border rounded-lg">
      <div className="p-6 text-white rounded-lg flex items-center justify-between">
        <h2 className="text-lg font-medium mb-4">Information</h2>
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
          {/* Date Selector */}
          <button className="flex items-center text-sky-100 gap-2 px-5 py-4 text-sm font-medium bg-transparent border border-green-700 rounded-md">
            <span className="text-green-500">Select Date</span>
            <span>{dropdown}</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table headers={headers} data={userData} actions={actions} />
      </div>
    </div>
  );
};

// User Component
const User = () => {
  // Define Headers
  const headers = [
    "User ID",
    "REGISTERED ON",
    "NAME",
    "GENDER",
    "EMAIL",
    "AGE",
    "ACTIONS",
  ];

  // User Data
  const userData = [
    {
      id: 1,
      date: "July 23, 2023",
      name: "John",
      gender: "Female",
      email: "john@gmail.com",
      age: 24,
    },
    {
      id: 2,
      date: "Aug 5, 2023",
      name: "Selena",
      gender: "Female",
      email: "selena@gmail.com",
      age: 24,
    },
    {
      id: 3,
      date: "Aug 5, 2023",
      name: "Selena",
      gender: "Female",
      email: "selena@gmail.com",
      age: 24,
    },
    {
      id: 4,
      date: "Aug 5, 2023",
      name: "Selena",
      gender: "Female",
      email: "selena@gmail.com",
      age: 24,
    },
  ];

  // Actions with Links
  const actions = [
    {
      icon: eyeIcon,
      link: (row) => `/admin/users/view?id=${row.id}`,
    },
    {
      icon: deleteIcon,
      link: (row) => `/admin/users/delete?id=${row.id}`,
    },
    {
      icon: editIcon,
      link: (row) => `/admin/users/edit?id=${row.id}`,
    },
  ];

  return (
    <div className="px-16 py-7">
      {/* Topbar */}
      <Topbar icon={blockIcons} title="Users List" />

      {/* Information Table */}
      <InformationTable headers={headers} userData={userData} actions={actions} />
    </div>
  );
};

export default User;
