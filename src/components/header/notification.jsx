'use client';
import { useEffect, useRef } from 'react';
import Link from "next/link";
import { progessBar } from "../resources/icons";

export default function Notifications({ onClose }) {
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                onClose(); // Close the notifications if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
            <div
                ref={notificationRef}
                className="w-96 bg-[#222530] border border-[#696666] text-white rounded-lg shadow-lg"
            >
                <div className="flex p-4">
                    <div>{progessBar}</div>
                    <div className="relative space-y-8">
                        {[
                            {
                                title: "Agent Rose",
                                message: "Please, kindly do take a snapshot of the card.",
                                time: "18min",
                            },
                            {
                                title: "GOGE Team",
                                message: "Alert: New card added this week. Check them out.",
                                time: "34min",
                            },
                            {
                                title: "Halloween Promo",
                                message: "Promotion: Get 13% the price when you exchange.",
                                time: "1 hour",
                            },
                            {
                                title: "GOGO Team",
                                message:
                                    "Alert: Sorry to see you go. You just unsubscribed from the newsletter.",
                                time: "2 hours",
                            },
                        ].map((notification, index) => (
                            <div key={index} className="flex items-start">
                                <div className="ml-6">
                                    <h4 className="text-sm font-bold mb-2">{notification.title}</h4>
                                    <p className="text-xs text-gray-400 w-52">{notification.message}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="px-3 py-1 text-sm bg-[#F31E0A1A] text-[#FE5578] rounded-2xl">
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-6 flex justify-center">
                    <Link href={"/admin/notifications"}>
                        <button className="bg-green-500 text-sm text-white py-3 px-6 rounded-lg hover:bg-green-600">
                            View more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
