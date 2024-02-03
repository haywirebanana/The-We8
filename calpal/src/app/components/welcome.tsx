'use client'
import Image from "next/image";

export default function Welcome() {
    return (
        <div className="flex h-3753 flex-row items-center justify-between bg-forest-green">
                <div className="flex flex-col h-full w-1/2 justify-between py-5">
                        <header className="text-white font-serif text-4xl font-normal">
                            Welcome to CalPal
                        </header>
                        <h2 className="text-white font-montserrat text-lg font-normal leading-5">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                        <button className="h-150 w-60 rounded-lg bg-sand p-4">
                            Join 
                        </button>
                        <h3>
                            Have an account? <a href="/signin" className="hover:underline">Sign in</a>
                        </h3>
                </div>
                <div className="w-1/2">
                    we will add something here
                </div>
        </div>
    );
}