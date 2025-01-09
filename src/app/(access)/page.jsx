import React from 'react';
import BannerImage from './bannerImage.png'
import Image from 'next/image';
import Link from 'next/link';
import { googleIcon, lockIcon, quotesIcon } from '@/components/resources/icons';
export const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-custom-backgroundColor">
      {/* Left Section */}
      <div className="flex-1 md:flex flex-col justify-center items-center p-4 md:p-8 text-white">
        {/* Logo and Title */}
        <div className="mb-8 md:text-center">
          <Image
            src="/logo.svg"
            alt="Pro Street"
            width={300}
            height={200}
            className='md:ml-20'
          />
          <p className="flex text-xs md:text-xl text-nowrap mt-5">Managing made delightful. Login now to experience it.</p>
        </div>

        {/* Login Form */}
        <form className="w-[100%] md:w-full md:max-w-xl mt-10">
          <div className='space-y-8'>
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-4 left-6 px-4 pt-1 text-sm font-medium bg-custom-backgroundColor text-white"
              >
                Enter Email Address
              </label>
              <div className="border p-2 rounded-2xl">
                <input
                  type="email"
                  id="email"
                  placeholder="jhon324@gmail.com"
                  className="mt-2 px-5 py-3 w-full bg-transparent text-white focus:outline-none"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-4 left-6 px-4 pt-1 text-sm font-medium bg-custom-backgroundColor text-white"
              >
                Password
              </label>
              <div className="flex items-center gap-4 border p-2 rounded-2xl">
                <label className="pt-2 pl-4">{lockIcon}</label>
                <input
                  type="password"
                  id="email"
                  placeholder="**********"
                  className="mt-2 px-5 py-3 w-full bg-transparent text-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex items-center justify-start gap-5 border p-2 rounded-2xl">
            <label className="pt-2 pl-4">{lockIcon}</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="mt-2 py-3 w-full bg-transparent text-white placeholder-white focus:outline-none"
            />
          </div> */}
          <a href="#" className="text-lg text-custom-lightGreen my-5 block text-right">Forgot Password?</a>
          <div className="flex items-center mb-10">
            <input
              type="checkbox"
              id="remember"
              className="h-5 w-5 mb-2 rounded appearance-none bg-custom-backgroundColor border border-gray-300 checked:bg-white checked:border-black cursor-pointer checked:before:content-['✔'] checked:before:text-black checked:before:flex checked:before:items-center checked:before:justify-center"
            />
            <label htmlFor="remember" className="ml-2 mb-2 font-medium text-lg ">Remember me</label>
          </div>
          <Link href={"/admin/dashboard"}>
            <button
              type="submit"
              className="w-full mb-5 py-5 bg-custom-buttonColor p-2 rounded-2xl text-white text-xl font-semibold focus:outline-none border-none"
            >
              Login
            </button>
          </Link>
        </form>
        <div className="my-5  md:w-[570px] md:border-t  md:relative">
          <p className="text-lg text-center text-nowrap md:absolute md:ml-32 md:px-4 -top-4 bg-custom-backgroundColor">
            Don’t have an account? <a href="#" className="text-custom-lightGreen">Sign Up</a>
          </p>
        </div>
        <button className="mt-10 py-5 px-6 w-[100%] md:w-[570px] border border-gray-600 rounded-lg bg-custom-backgroundColor hover:bg-custom-buttonColor flex justify-center items-center">
          <span>{googleIcon}</span>
        </button>

        <footer className="flex  mt-6 md:mt-12 ml-6 md:ml-0 text-center text-sm md:text-lg font-semibold">
          &copy; 2023 Prostreet | All rights reserved
        </footer>
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

export default LoginPage