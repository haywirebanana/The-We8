'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { usePathname} from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()

    const getButtonText = () => {
      switch (pathname) {
        case '/register':
          return 'Login';
        case '/login':
          return 'Register';
        case '/about':
          return 'Contact Us';
        default:
          return 'Login';
      }
    };
  return (
        <div className="flex-none flex flex-row justify-between bg-white py-3 pl-20">
            <div className="flex items-center w-5/6">
                <Image src="/logo.png" width={75} height={50} alt="lgog"/>
            </div>
            <div className="flex w-1/6">
                {/* {auth ? (
                    <button className=" hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-roboto h-14 w-48 rounded-3xl font-light text-3xl bg-clay hover:dark-brown">
                        {getButtonText()}
                    </button>
                ) : (
                    <h4>hi</h4>
                )} */}
                <Link href="/login" className=" hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-roboto h-14 w-48 rounded-3xl font-light text-2xl bg-clay hover:dark-brown">
                    {getButtonText()}
                </Link>
            </div>
    </div>
  );
};
export default Navbar;
