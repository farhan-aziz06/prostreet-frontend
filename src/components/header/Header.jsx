'use client';
import { useState } from 'react';
import { notificationIcon, settingsIcon } from '../resources/icons';
import UserAvatar from './useravatar.png';
import Image from 'next/image';
import Link from 'next/link';
import Notifications from './notification'; // Ensure the path is correct
import MobileSidebar from '../sidebar/MobileSidebar';

const Header = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
    };

    const handleNotificationClose = () => {
        setShowNotifications(false);
    };

    return (
        <header className="flex md:justify-end items-center md:gap-10 px-3 md:px-6 py-6 ml-3 md:ml-0 text-white relative bg-[#1A1D26]">
            <MobileSidebar />
            <div className="relative left-2 flex gap-5">
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 hover:bg-green-500/20 hover:text-black"
                    aria-label="Notifications"
                    onClick={handleNotificationClick}
                >
                    {notificationIcon}
                </button>
                <Link href="/admin/dashboard/personal-information">
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 hover:bg-green-500/20 hover:text-black "
                        aria-label="Settings"
                    >
                        {settingsIcon}
                    </button>
                </Link>
            </div>
            <div className="flex items-center border-l border-[#D6D6D666] px-5 ml-5 md:ml-0">
                <button
                    className="flex items-center space-x-3 focus:outline-none"
                    aria-label="Profile"
                >
                    <Image
                        src={UserAvatar}
                        alt="Profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div className="text-left">
                        <p className="font-medium">Jhon Doe</p>
                        <p className="text-sm text-gray-400">admin@admin.com</p>
                    </div>
                </button>
            </div>
            {showNotifications && (
                <Notifications onClose={handleNotificationClose} />
            )}
        </header>
    );
};

export default Header;
