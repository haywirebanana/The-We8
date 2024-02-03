"use client";
import Image from "next/image";

export default function Mission() {
  return (
    <div className="flex h-716 flex-row items-center justify-between bg-white">
      <div
        className="box-content h-80 mx-auto my-20 border-solid border-orange-500 rounded-3xl	"
        style={{ width: "500px", height: "500px", backgroundColor: "#DDA15E" }}
      >
        we will add something here
      </div>
      <div className="flex flex-col h-full w-1/2 justify-between">
        <header className="text-black w-112 font-serif text-5xl py-4">
          Mission
        </header>

        <h2 className="text-black font-montserrat text-2xl font-normal leading-5 pe-40 pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <h2 className="text-black font-montserrat text-2xl font-normal leading-5 pe-40 pt-10">
          Lorem ipsum dolor sit amet, consecstetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
    </div>
  );
}
