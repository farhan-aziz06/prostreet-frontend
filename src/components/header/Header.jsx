import React from 'react';
import { notificationIcon, settingsIcon } from '../resources/icons';
import UserAvatar from './useravatar.png';
import Image from 'next/image';
const Header = () => {
    return (
        <header className="flex justify-end items-center gap-10 p-6 text-white">
            {/* Notification Button */}
            <div className="flex">
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 hover:bg-green-500 hover:text-black mx-2"
                    aria-label="Notifications"
                >
                    {notificationIcon}
                </button>

                {/* Settings Button */}
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 hover:bg-green-500 hover:text-black mx-2"
                    aria-label="Settings"
                >
                    {settingsIcon}
                </button>
            </div>


            {/* Profile Section */}
            <div className="flex items-center border-l border-gray-700 px-10">
                <button
                    className="flex items-center space-x-3 focus:outline-none"
                    aria-label="Profile"
                >
                    <Image
                        src={UserAvatar}
                        alt="Profile"
                        width={50}
                        height={10}
                    />
                    <div className="text-left">
                        <p className="font-medium">Jhon Doe</p>
                        <p className="text-sm text-gray-400">admin@admin.com</p>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
