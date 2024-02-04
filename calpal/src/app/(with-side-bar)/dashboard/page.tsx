'use client'

import Banner from "../../components/banner";
import Mentor from "../../components/mentor";
import List from "../../components/list";
import Sidebar from "../../components/sidebar"
import Card from "../../components/squareCard"

export default function Activities() {
    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar />
            <div className="w-full h-dvh">
                <div className="flex h-1/3 items-center justify-center bg-green">
                    <header className="text-white font-serif text-4xl font-normal">Name of Program</header>
                </div>
                <div className="flex h-2/3  bg-white justify-center">
                    <div className="grid-cols-5 full-h">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>

                    </div>
                </div>
            </div>
            <div>
                <List />
            </div>
        </div>
    );
}