'use client'
import Image from "next/image";

export default function List() {
    const data = ['Dashboard', 'Activities', 'Journal'];

    return (
        <div className="h-dvh w-80 bg-white pt-4">
                <div className="flex flex-col justify-end px-2">
                    {data.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-row">
                                <span style={{ marginLeft: '16px' }}>{item}</span>
                                <button>+</button>
                            </div>
                            <div className="w-full my-5 border-t border-neutral-100 opacity-100 dark:opacity-50"></div>
                        </div>
                    ))}
                </div>
        </div>
    );
}