'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dashboardIcons, documentataion, feedbackIcon, matchesIcon, notification, userIcon } from '../resources/icons';

const Sidebar = () => {
    const pathname = usePathname(); // Get the current URL path
    const [openMenu, setOpenMenu] = useState(null); // Track the currently open menu

    const links = [
        { href: '/admin/dashboard', label: 'Dashboard', icon: dashboardIcons },
        { href: '/admin/users', label: 'Users', icon: userIcon },
        { href: '/admin/matches', label: 'Matches', icon: matchesIcon },
        { href: '/admin/feedback', label: 'Feedback', icon: feedbackIcon },
        { href: '/admin/notifications', label: 'Notifications', icon: notification },
        { href: '/admin/documentations', label: 'Documentation', icon: documentataion },
    ];

    const toggleMenu = (menu) => {
        setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
    };

    return (
        <div className="fixed md:flex h-screen w-[300px] max-w-[339px] flex-col gap-10 rounded-r-[20px] border-r-2 border-black/20 text-white bg-[#313132] px-3 py-6 hidden">
            <Image
                src="/logo.svg"
                alt="Logo Image here..."
                width={180}
                height={100}
                className="mx-7 my-4"
            />
            <div className="px-4 xl:hidden">
                <div className="flex w-60 h-12 items-center border rounded-2xl">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-3 border-none outline-none bg-transparent text-gray-600"
                    />
                </div>
            </div>
            <div className="lg:pt-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`relative left-4 flex h-[50px] w-[250px] items-center p-4 gap-4 rounded-lg ${pathname.includes(link.href) // Check if the current path includes the link href
                                ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                : ''
                            }`}
                    >
                        <span>{link.icon}</span>
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="flex flex-col items-center relative top-64">
                    <Image
                        src="/logo2.svg"
                        alt="Logo"
                        width={80}
                        height={100}
                    />
                    <span className="text-center mt-2">
                        © 2023 Prostreet | All rights <br /> reserved
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
