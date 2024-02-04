'use client'
import Image from "next/image";

export default function Banner() {
    return (
        <div className="flex h-112 justify-center bg-green">
                <div className="flex flex-col h-1/6 w-1/2 items-center">
                    <Image src="/logo.png" width={500} height={500} alt="lgog" />
                </div>
        </div>
    );
}