'use client'
import Image from "next/image";
import Link from 'next/link';

import styled from 'styled-components';


// const Navbar = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: center;
//     height: 3.5rem;
//     background-color: #000080;
// `

// const MenuIconOpen = styled(Link)`
//     display: flex;
//     justify-content: start;
//     font-size: 1.5rem;
//     margin-left: 2rem;
//     color: #ffffff;
// `

// const MenuIconClose = styled(Link)`
//     display: flex;
//     justify-content: end;
//     font-size: 1.5rem;
//     margin-top: 0.75rem;
//     margin-right: 1rem;
//     color: #ffffff;
// `

// const SidebarMenu = styled.div<{close: boolean}>`
//     width: 250px;
//     height: 100vh;
//     background-color: #000080;
//     position: fixed;
//     top: 0;
//     left: ${({ close}) => close ? '0' : '-100%'};
//     transition: .6s;
// `

// const MenuItems = styled.li`
//     list-style: none;
//     display: flex;
//     align-items: center;
//     justify-content: start;
//     width: 100%;
//     height: 90px;
//     padding: 1rem 0 1.25rem;
// `



export default function Sidebar() {
    

    const data = ['Dashboard', 'Activities', 'Journal', 'Settings'];

    return (
        <div className="h-dvh bg-white">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Image src="/logo.png" width={150} height={150} alt="lgog"/>
                </div>
                <div className="flex flex-col justify-start px-2">
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className="sidebar-item">
                                <span style={{ marginLeft: '16px' }}>{item}</span>
                            </div>
                            <div className="w-full my-5 border-t border-neutral-100 opacity-100 dark:opacity-50"></div>
                        </div>
                    ))}
                    <Link href="/login" className=" hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-roboto h-14 w-48 rounded-3xl font-light text-2xl bg-clay hover:dark-brown">
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}