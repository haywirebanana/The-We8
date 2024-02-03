'use client'
import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex h-420 flex-row items-center justify-between bg-green">
                <div className="flex flex-col h-full w-1/2 justify-between py-5">
                        <header className="text-white font-serif text-4xl font-normal">
                            Name of Program
                        </header>
                </div>
        </div>
    );
}