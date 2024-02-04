'use client'

import Banner from "../components/banner";
import Mentor from "../components/mentor";
import List from "../components/list";
import Sidebar from "../components/sidebar"

export default function Home() {
    return (
        <div className="flex flex-row w-screen min-w-full	">
            <Sidebar />
            <div className="flex flex-row w-full min-w-full	">
                <div className="flex-col min-w-full	">
                    <div className="flex h-1/3 items-center justify-center bg-green">
                            <div className="flex items-center">
                                    <header className="text-white font-serif text-4xl font-normal">
                                        Name of Program
                                    </header>
                            </div>
                    </div>
                    <div className="h-2/3">
                        <Mentor />

                    </div>
                </div>
                <div>
                    <List />
                </div>
            </div>
        </div>
    );
}