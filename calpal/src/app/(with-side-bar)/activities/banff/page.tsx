"use client";
import Image from "next/image";

import Sidebar from "../../../components/sidebar";
const name = 'Visit Banff National Park',
      description = 'Nestled within the stunning Canadian Rockies, Banff is a picturesque town that captivates visitors with its breathtaking natural beauty and charming mountain atmosphere. Surrounded by towering peaks, pristine lakes, and dense forests, Banff offers a paradise for outdoor enthusiasts and adventurers alike. From exhilarating hikes along scenic trails to tranquil moments by turquoise lakes, Banff beckons travelers to explore its awe-inspiring landscapes and immerse themselves in the splendor of nature.'

export default function Banff() {
    return (
        <div className="flex flex-row w-full flex-1 min-h-screen bg-white">
            <Sidebar />
            <div className="flex flex-col">
                <Image
                    src='/images/activity/banff.jpg'
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
                        <iframe
                            width="90%"
                            height="450"
                            loading="lazy"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyFovAqLmx6V6T0xHEDO9LnPA60CI4A_w
    &q=Banff+AB">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );

}