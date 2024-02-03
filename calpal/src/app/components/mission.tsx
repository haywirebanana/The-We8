'use client'
import Image from "next/image";

export default function Mission() {
    return (
        <div className="flex h-716 flex-row items-center justify-between bg-white">
                <div className="w-1/2">
                    we will add something here
                </div>
                <div className="flex flex-col h-full w-1/2 justify-between py-5">
                        <header className="text-black font-serif text-4xl font-normal">
                            Mission
                        </header>
                        <h2 className="text-black font-montserrat font-normal leading-5">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                        <h2 className="text-black font-montserrat font-normal leading-5">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                </div>
        </div>
    );
}