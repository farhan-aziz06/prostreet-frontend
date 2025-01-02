'use client';
import { useState } from 'react';
import { notificationIcon, settingsIcon } from '../resources/icons';
import UserAvatar from './useravatar.png';
import Image from 'next/image';
import Link from 'next/link';
import Notifications from './notification'; // Ensure the path is correct

const Header = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    // Toggle the notification bar
    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <header className="flex justify-end items-center gap-10 p-6 text-white relative bg-[#1A1D26]">
            {/* Notification Button */}
            <div className="relative">
                <button
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 hover:bg-green-500 hover:text-black mx-2"
                    aria-label="Notifications"
                    onClick={handleNotificationClick}
                >
                    {notificationIcon}
                </button>
            </div>

            {/* Settings Button */}
            <button
                className="flex items-center justify-center w-10 h-10 rounded-full border border-green-500 hover:bg-green-500 hover:text-black mx-2"
                aria-label="Settings"
            >
                {settingsIcon}
            </button>

            {/* Profile Section */}
            <div className="flex items-center border-l border-gray-700 px-10">
                <Link href="/admin/dashboard/personal-information">
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
                </Link>

            </div>

            {/* Overlay with Blur Background */}
            {showNotifications && (
                <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={() => setShowNotifications(false)}></div>
            )}

            {/* Notification Bar */}
            {showNotifications && (
                <div className="absolute top-16 right-6 z-50">
                    <Notifications />
                </div>
            )}
        </header>
    );
};

export default Header;
