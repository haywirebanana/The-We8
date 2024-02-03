'use client'
import Image from "next/image";

export default function How() {
    return (
        <div className="flex h-3753 flex-col items-center justify-between bg-white">
                <div className="w-full justify-between py-5">
                        <header className="text-black font-serif text-4xl font-normal">
                            How it works
                        </header>
                </div>
                <div className="flex flex-row justify-between w-1/2">
                    <div className="w-287 h-287 rounded-lg bg-clay">
                        Join Program
                    </div>
                    <div className="w-287 h-287 rounded-lg bg-clay">
                        Get Matched
                    </div>
                    <div className="w-287 h-287 rounded-lg bg-clay">
                        Build Outcome
                    </div>
                </div>
        </div>
    );
}