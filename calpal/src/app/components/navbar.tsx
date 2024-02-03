'use client';


import Link from "next/link";
const Navbar = () => {

    
  return (
        <div className="flex-none flex flex-row justify-between bg-white py-3">
            <div className="flex items-center w-1/3 justify-between px-10">
                <div className="text-clay">
                    LOGO
                </div>
                <div>
                    <Link className="text-clay" href="/">Haseeb</Link>   
                </div>
                <div>
                    <Link className="text-clay" href="/ryan">Ryan</Link>
                </div>
                <div>
                    <Link className="text-clay" href="/armin">Armin</Link>
                </div>
                <div>
                    <Link className="text-clay" href="/armin">Link</Link>
                </div>
            </div>
            <div className="flex">
                <button className=" hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-roboto h-14 w-48 rounded-3xl font-light text-3xl bg-clay hover:dark-brown">
                    Join 
                </button>
            </div>
    </div>
  );
};
export default Navbar;
