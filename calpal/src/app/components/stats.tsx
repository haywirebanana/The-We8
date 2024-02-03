'use client'
import Image from "next/image";

export default function Stats() {
    return (
        <div className="flex h-dvh flex-row items-center  bg-white">
                <div className="flex flex-col h-full w-1/2 px-24">
                    <div>
                        <header className="text-black w-112 font-serif text-5xl py-4">
                            Statistics and current barriers
                        </header>
                    </div>
                    <div>
                        <h2 className="text-black font-montserrat text-2xl font-normal leading-8">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/2 py-5 align-middle">
                    <div className="w-2/3 h-48 rounded-3xl bg-light-green my-5">
                        hello
                    </div>
                    <div className="w-2/3 h-48 rounded-3xl bg-green my-5">
                        hello
                    </div>
                    <div className="w-2/3 h-48 rounded-3xl bg-dark-green my-5">
                        hello
                    </div>
                </div>
        </div>
    );
}