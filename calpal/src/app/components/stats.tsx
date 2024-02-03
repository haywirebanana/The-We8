'use client'
import Image from "next/image";

export default function Stats() {
    return (
        <div className="flex h-3753 flex-row items-center justify-between bg-white">
                <div className="flex flex-col h-full w-1/2 justify-between py-5">
                        <header className="text-black font-serif text-4xl font-normal">
                            Statistics and current barriers
                        </header>
                        <h2 className="text-black font-montserrat text-lg font-normal leading-5">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                </div>
                <div className="flex flex-col w-1/2">
                    <div className="w-537 h-278.239 rounded-lg bg-light-green">
                        hello
                    </div>
                    <div className="w-537 h-278.239 rounded-lg bg-green">
                        hello
                    </div>
                    <div className="w-537 h-278.239 rounded-lg bg-dark-green">
                        hello
                    </div>
                </div>
        </div>
    );
}