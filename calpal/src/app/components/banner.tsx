'use client'
import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex h-96 items-center justify-center bg-green">
                <div className="flex flex-col h-1/6 w-1/2 items-center justify-between py-5">
                        <header className="text-white font-serif text-4xl font-normal">
                            Name of Program
                        </header>
                </div>
        </div>
    );
}