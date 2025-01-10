'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { dashboardIcons, documentataion, feedbackIcon, matchesIcon, notification, userIcon } from '../resources/icons';

const MobileSidebar = () => {
    const pathname = usePathname(); // Get the current URL path

    const links = [
        { href: '/admin/dashboard', label: 'Dashboard', icon: dashboardIcons },
        { href: '/admin/users', label: 'Users', icon: userIcon },
        { href: '/admin/matches', label: 'Matches', icon: matchesIcon },
        { href: '/admin/feedback', label: 'Feedback', icon: feedbackIcon },
        { href: '/admin/notifications', label: 'Notifications', icon: notification },
        { href: '/admin/documentations', label: 'Documentation', icon: documentataion },
        { href: '/login', label: 'Log Out', icon: dashboardIcons },
    ];

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger className="pt-3">
                    <Menu className="w-5 h-5 text-white" />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="border-r-2 border-black/20 bg-[#313132] text-white w-[300px] max-w-full"
                >
                    <SheetHeader>
                        <SheetTitle>
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={180}
                                height={100}
                                className="mx-auto my-4"
                            />
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 px-4 py-6">
                        {/* Search Bar
                        <div className="flex items-center border rounded-2xl bg-gray-700">
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-1 p-3 border-none outline-none bg-transparent text-gray-300 placeholder-gray-500"
                            />
                        </div> */}

                        {/* Navigation Links */}
                        <div className='mb-7'>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-4 p-4 rounded-lg ${
                                        pathname.includes(link.href)
                                            ? 'bg-[rgba(255,255,255,0.1)] text-gray-300'
                                            : 'text-gray-400 hover:bg-[rgba(255,255,255,0.05)]'
                                    }`}
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="mt-auto text-center">
                            <Image src="/logo2.svg" alt="Logo" width={80} height={100} className="mx-auto" />
                            <p className="text-gray-500 text-sm mt-2">
                                © 2023 Prostreet | All rights <br /> reserved
                            </p>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileSidebar;
