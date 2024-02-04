"use client";
import Image from "next/image";

import Sidebar from "../../../components/sidebar";
const name = 'Explore 17th Avenue',
      description = 'Nestled in the heart of Calgary, 17th Avenue SW boasts a vibrant and dynamic atmosphere, offering a fusion of culture, cuisine, and commerce. Lined with trendy boutiques, cozy cafes, and eclectic restaurants, this bustling street pulses with energy day and night, attracting locals and visitors alike. From leisurely strolls to indulgent dining experiences, 17th Ave promises something for everyone, making it a quintessential destination in the city\'s vibrant landscape.'

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
                            <br></br>
                            <h2
                                className="text-white font-montserrat font-normal"
                                style={{ fontSize: "14px" }}
                            >
                                {description}
                            </h2>
                        </div>
                        <div className="flex flex-row justify-center pb-8">
                            <iframe
                                width="90%"
                                height="450"
                                loading="lazy"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyFovAqLmx6V6T0xHEDO9LnPA60CI4A_w
        &q=17th+Avenue,Calgary+AB">
                            </iframe>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}