'use client'
import { blockIcons, homeIcon, lockIcon, PasswordIcon, pencilIcon, InfoIcon, userInfoIcon } from '@/components/resources/icons'
import Topbar from '@/components/topbar'
import {React, useState} from 'react'
import Image from 'next/image'
import ProfileImage from './useravatar.png'

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
        <div className="relative bg-[#30333D] border border-[#8B909F] rounded-lg p-6 w-[67%] ml-[500px] mt-10 text-white">
            {/* Section Header */}
            <div className="flex items-center mb-4">
                <span className="text-green-500 text-xl">{InfoIcon}</span>
                <h2 className="ml-2 text-lg font-bold">Basic Information</h2>
            </div>
            <hr className="border-gray-700 mb-6" />

            {/* Phone */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">
                    Old Password
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="bg-[#424756] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 w-full outline-none"
                    placeholder="********"
                />
            </div>
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">
                    Update Password
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="bg-[#424756] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 w-full outline-none"
                    placeholder="********"
                />
            </div>
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="bg-[#424756] border border-[#8B909F] text-gray-300 rounded-lg px-4 py-2 w-full outline-none"
                    placeholder="********"
                />
            </div>

            {/* Update Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

const Profile = () => {
    return (
        <div className="flex items-start justify-start gap-20">
            <div className='border bg-[#30333D] border-[#8B909F] w-[30%] mt-10 rounded-lg'>
                <div className="flex items-center justify-start gap-5 p-4">
                    <span>{userInfoIcon}</span>
                    <h2 className="text-white text-lg font-semibold">Basic Information</h2>
                </div>
                <div className="flex items-center justify-start gap-5 p-4">
                    <span>{PasswordIcon}</span>
                    <h2 className="text-[#14AE5C] text-lg font-semibold">Password</h2>
                </div>
            </div>
            <div className='relative border bg-[#30333D] border-[#8B909F] w-[70%] h-[180px] mt-10 rounded-lg'>
                <div className='absolute border bg-[#14AE5C33] border-[#8B909F] w-full rounded-lg'>
                    <div className="relative p-4">
                        <div className="relative inline-block">
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
        </div>
    )
}
const PersonalInformation = () => {
    return (
        <div className="px-10 py-5 min-h-screen">
            <Topbar title={"Setting"} icon={blockIcons} button={"Dashboard"} buttonIcon={homeIcon} />
            <Profile />
            <BasicInformation />
        </div>
    )
}

export default PersonalInformation