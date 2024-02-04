"use client";
import Image from "next/image";

import Sidebar from "../../../components/sidebar";
const name = 'Explore 17th Avenue',
      pronouns = 'test3', 
      description = 'test4'

export default function Seventeenth() {
    return (
        <div className="flex flex-row w-full flex-1 min-h-screen bg-white">
            <Sidebar />
            <div className="flex flex-col">
                <Image
                    src='/images/activity/17.jpg'
                    alt="banner"
                    width={2000}
                    height={300}>

                </Image>
                <div className="w-full justify-center p-4">
                    <div
                        className=" rounded-3xl bg-green w-full"
                    >
                        <div className="w-full full-h p-4 text-white">
                            <h1 className='font-serif text-white text-left text-5xl font-normal'>{name}</h1>
                            <p>{pronouns}</p>
                            <br></br>
                            <h2
                                className="text-white font-montserrat font-normal"
                                style={{ fontSize: "14px" }}
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}