'use client'
import Image from "next/image";

export default function Welcome() {
    return (
        <div className="flex h-dvh flex-row items-center justify-between bg-forest-green py-24">
                <div className="flex flex-col h-5/6 w-1/2 justify-between pl-24">
                    <div>
                        <header className="text-white w-96 font-serif text-6xl font-normal">
                            Welcome to CalPal
                        </header>
                    </div>
                    <div>
                        <h2 className="text-white font-montserrat text-lg font-normal leading-5">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                    </div>
                    <div>
                        <button className="h-150 w-60 rounded-lg bg-sand p-4">
                            Join 
                        </button>
                    </div>
                    <div>
                        <h3>
                            Have an account? <a href="/signin" className="hover:underline">Sign in</a>
                        </h3>
                    </div>
                </div>
                <div className="w-1/2">
                    we will add something here
                </div>
        </div>
    );
}