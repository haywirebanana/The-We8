'use client'

import Banner from "../components/banner";
import Mentor from "../components/mentor";
import List from "../components/list";
import Sidebar from "../components/sidebar"

export default function Home() {
    return (

        <div className="flex flex-row min-h-screen">
            <Sidebar />
            <div className="w-full h-full">
                <div className="flex items-center justify-center bg-green">
                    <header className="text-white font-serif text-4xl font-normal">Name of Program</header>
                </div>
                <Mentor />
            </div>
            <div>
                <List />
            </div>

        </div>
    );
}