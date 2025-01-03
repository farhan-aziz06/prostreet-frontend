'use client'
import React from 'react';
import BannerImage from './bannerImage.png'
import Image from 'next/image';
import { googleIcon, lockIcon, quotesIcon } from '@/components/resources/icons';

export const SignupPage = () => {
    return (
        <div className="flex min-h-screen bg-custom-backgroundColor">
            {/* Left Section */}
            <div className="flex-1 md:flex flex-col justify-center items-center p-3 md:p-8 text-white">
                {/* Logo and Title */}
                <div className="mb-8 text-center">
                    <Image
                        src="/logo.svg"
                        alt="Pro Street"
                        width={300}
                        height={200}
                        className='ml-0'
                    />
                </div>

                {/* Login Form */}
                <div className="w-full max-w-xl mt-10 md:mt-20 space-y-5 text-center">
                    <div>
                        <h1 className="text-4xl font-semibold">Verification Code</h1>
                        <p className="text-lg font-medium">We have sent you a verification code on your give email address and phone number  +92*********</p>
                    </div>

                    <div className="flex justify-center items-center md:gap-10 gap-5">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                placeholder="*"
                                className="w-16 h-16 mt-16 text-3xl text-center border border-custom-buttonColor rounded-xl bg-slate-100 placeholder-gray-700 hover:bg-custom-backgroundColor focus:bg-custom-backgroundColor focus:outline-none"
                                onInput={(e) => {
                                    const input = e.target;
                                    if (input.value) input.style.backgroundColor = "var(--background)";
                                    else input.style.backgroundColor = "#4B5563"; // Default gray-600
                                }}
                            />
                        ))}
                    </div>

                    <div>
                        <a href="#" className="text-lg pt-1 text-custom-lightGreen block text-right">Resend Code</a>
                    </div>
                    <div className="pt-10">
                        <a href="#" className="text-lg text-custom-lightGreen">Change Phone Number or Email Address</a>
                        <button
                            type="submit"
                            className="w-[70%] md:w-full py-5 bg-custom-buttonColor p-2 mt-10 rounded-2xl text-white text-xl font-semibold focus:outline-none border-none"
                        >
                            Confirm
                        </button>
                    </div>
                    <footer className="pt-10 text-center text-lg font-semibold">
                        &copy; 2023 Prostreet | All rights reserved
                    </footer>

                </div>


            </div>

            {/* Right Section */}
            <div className="hidden lg:flex flex-1 bg-gray-900 relative">
                <Image
                    src={BannerImage}
                    alt="Soccer player"
                    objectFit='cover'
                    layout='fill'

                />
                <div className="absolute bottom-8 left-8 text-white max-w-xl text-center">
                    <span className="block">{quotesIcon}</span>
                    <p className="text-3xl pl-14 pt-2 font-extrabold">
                        "Manage and analyze your matches effortlessly without wasting your precious time."
                    </p>
                </div>

            </div>
        </div>
    );
}

export default SignupPage