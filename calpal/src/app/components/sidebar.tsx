'use client'
import Image from "next/image";
import Link from 'next/link';

export default function Sidebar() {
    

    const data = [{title:'Dashboard', url:'/dashboard'}, {title:'Activities', url:'/activities'}, {title:'Journal', url:'/dashboard'}];

    return (
        <div className="bg-white">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Image src="/logo.png" width={150} height={150} alt="lgog"/>
                </div>
                <div className="flex flex-col justify-start px-2">
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className="sidebar-item">
                                <Link href={item.url} style={{ marginLeft: '16px' }}>{item.title}</Link>
                            </div>
                            <div className="w-full my-5 border-t border-neutral-100 opacity-100 dark:opacity-50"></div>
                        </div>
                    ))}
                    <Link href="/" className=" hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-roboto h-14 w-48 rounded-3xl font-light text-2xl bg-clay hover:dark-brown">
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}