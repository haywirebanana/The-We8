"use client";
import Image from "next/image";

import Sidebar from "../../../components/sidebar";
const name = 'Crescent Heights Lookout',
      description = 'Nestled in the heart of Calgary, Crescent Heights offers a vibrant blend of urban living and natural beauty. Perched atop the city\'s escarpment, this eclectic neighborhood boasts stunning views of the downtown skyline and the majestic Rocky Mountains. Lined with tree-canopied streets and historic homes, Crescent Heights exudes charm and character at every turn. Its diverse community celebrates a rich tapestry of cultures, reflected in its bustling cafes, boutique shops, and vibrant arts scene. With its proximity to parks, pathways, and cultural landmarks, Crescent Heights invites residents and visitors alike to immerse themselves in its unique blend of serenity and excitement.'

export default function Crescent() {
    return (
        <div className="flex flex-row w-full flex-1 min-h-screen bg-white">
            <Sidebar />
            <div className="flex flex-col">
                <Image
                    src='/images/activity/crescent.jpg'
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
    &q=Crescent+Heights+Lookout+Point,Calgary+AB">
                        </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}