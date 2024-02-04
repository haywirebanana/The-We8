"use client";
import Image from "next/image";

import Activity from "../../components/activities";
import Sidebar from "../../components/sidebar";
export default function Activities() {
    return (
        <div className="flex flex-row w-full flex-1 min-h-screen bg-green">
                    <Sidebar />
                    <div className="flex flex-col">
                        <Image
                            src='/images/banners/activities.png'
                            alt="banner"
                            width={2000}
                            height={300}>    

                        </Image>
                        <div className="w-full justify-center overflow-scroll">

                        <Activity />
                        </div>
                    </div>
        </div>
    );

}