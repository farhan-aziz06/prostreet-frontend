'use client'
import { blockIcons, homeIcon, lockIcon, PasswordIcon, pencilIcon, InfoIcon, userInfoIcon, infoIcon } from '@/components/resources/icons'
import Topbar from '@/components/topbar'
import { React, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImage from './useravatar.png'
import infoSvg from '../Vector.svg'
const BasicInformation = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        // Log the data (you can replace this with an API call)
        console.log("Submitted Data:", formData);

        // Clear the form fields
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        });
    };

    return (
        <div className="relative bg-[#30333D] border border-[#8B909F] rounded-lg p-6 mt-10 text-white">
            {/* Section Header */}
            <div className="flex items-center mb-4 px-3">
                <span className="px-2">{infoIcon}</span>
                <h2 className="ml-2 text-lg font-bold">Basic Information</h2>
            </div>
            <hr className="border-gray-700 mb-6" />

            {/* Full Name */}
            <div className="px-4">
                <div className="mb-6 lg:flex justify-between">
                    <label className="block text-lg font-medium mb-2">
                        Full Name
                    </label>
                    <div className="grid lg:grid-cols-2 gap-4 lg:w-[70%]">
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="bg-[#30333D] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 outline-none"
                            placeholder="Michael"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="bg-[#30333D] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 outline-none"
                            placeholder="Stirling"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="mb-6 lg:flex justify-between">
                    <label className="block text-lg font-medium mb-2">
                        Phone <span className="px-1">(Compulsory)</span>
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#30333D] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 w-[100%] lg:w-[70%] outline-none"
                        placeholder="+92 325 3545 34534"
                    />
                </div>

                {/* Email */}
                <div className="mb-6 lg:flex justify-between">
                    <label className="block text-lg font-medium mb-2">
                        Email <span className="px-1">(Compulsory)</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#30333D] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 w-[100%] lg:w-[70%] outline-none"
                        placeholder="loremipsum@gmail.com"
                    />
                </div>
            </div>
            {/* Update Button */}
            <div className="flex justify-end pr-4">
                <button
                    onClick={handleUpdate}
                    className="bg-[#14AE5C] text-white px-9 py-3 rounded-lg font-semibold"
                >
                    Update
                </button>
            </div>
        </div>

    );
};

const Profile = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mt-10">
            {/* Div 1 (30% width) */}
            <div className="col-span-7 lg:col-span-3 lg:h-[24%] border bg-[#30333D] border-[#8B909F] rounded-lg py-8 px-5">
                <div className="flex items-center justify-start gap-5 px-4 ">
                    <span>{userInfoIcon}</span>
                    <h2 className="text-[#14AE5C] text-lg font-semibold">Basic Information</h2>
                </div>
                <Link href={"/admin/dashboard/password"}>
                    <div className="flex items-center justify-start gap-5 px-4 py-5">
                        <span>{PasswordIcon}</span>
                        <h2 className="text-white text-lg font-semibold">Password</h2>
                    </div>
                </Link>
            </div>

            {/* Div 2 (70% width) */}
            <div className="col-span-7">
                <div className="relative border bg-[#30333D] border-[#8B909F] h-[180px] rounded-lg">
                    <div className="absolute border bg-[#14AE5C33] border-[#8B909F] w-full rounded-lg">
                        <div className="relative p-4">
                            <div className="relative inline-block top-12 left-6">
                                <Image
                                    src={ProfileImage}
                                    alt="User Profile"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                                <button className="absolute top-12 left-10 p-1 rounded-full z-10">
                                    {pencilIcon}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <BasicInformation />
                </div>
            </div>
        </div>

    )
}
const PersonalInformation = () => {
    return (
        <div className="px-5 md:px-10 py-7 min-h-screen">
            <Topbar title={"Setting"} icon={blockIcons} button={"Dashboard"} buttonIcon={homeIcon} href="/admin/dashboard" />
            <Profile />

        </div>
    )
}

export default PersonalInformation