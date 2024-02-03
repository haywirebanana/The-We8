'use client'
import Image from "next/image";

export default function Welcome() {
    return (
        <div className="flex h-dvh flex-row items-center bg-forest-green">
                <div className="flex flex-col h-5/6 w-1/2 align-center justify-center pl-24 mb-28">
                    <div>
                        <header className="text-white w-112 font-serif text-7xl font-normal py-4">
                            Welcome to CalPal
                        </header>
                    </div>
                    <div>
                        <h2 className="text-white font-montserrat font-light w-112 text-2xl leading-8 pb-10">
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua.
                        </h2>
                    </div>
                    <div>
                        <button className="text-white h-16 w-60 rounded-3xl text-2xl bg-clay p-4">
                            Join 
                        </button>
                    </div>
                    <div>
                        <h3 className="text-white text-lg">
                            Have an account? <a href="/signin" className="text-light-green hover:underline py-5">Sign in</a>
                        </h3>
                    </div>
                </div>
                {/* <div className="w-1/2">
                    we will add something here
                </div> */}
        </div>
    );
}