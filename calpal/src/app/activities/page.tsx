"use client";

import Activity from "../components/activities";
import Sidebar from "../components/sidebar";
export default function Activities() {
    return (
        <div className="flex flex-row w-full flex-1 min-h-screen bg-green">
                    <Sidebar />
                    <div className="w-full justify-center overflow-scroll">

                    <Activity />
                    </div>
        </div>
    );

}