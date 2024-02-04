"use client";
import Image from "next/image";

const MISSION_JPG = "/images/home/MISSION.jpg";

export default function Mission() {
  return (
    <div className="flex h-716 flex-row items-center justify-between bg-white">
      <div
        className="flex items-center justify-center h-80 mx-auto my-20 border-solid border-orange-500 rounded-3xl"
        style={{ width: "500px", height: "500px", backgroundColor: "#DDA15E" }}
      >
        <Image
          src={MISSION_JPG}
          alt="event image"
          width={400}
          height={400}
          objectFit="center"
          className="border border-solid border-gray-500 rounded-lg" // Add border and border-radius styling here
        />
      </div>

      <div className="flex flex-col h-full w-1/2 justify-between">
        <header className="text-black w-112 font-serif text-5xl py-4">
          Mission
        </header>

        <h2
          className="text-black font-montserrat font-normal pe-40 pt-10"
          style={{ fontSize: "18px" }}
        >
          Our mission at CalPal is to empower newcomers in Calgary by fostering
          meaningful connections with dedicated mentors.
          <br />
          <br />
          We strive to reduce the challenges of settling into a new community by
          providing personalized resources, facilitating connections with fellow
          newcomers, and building a supportive network.
          <br />
          <br />
          Through mentorship, we aim to inspire confidence, inclusion, and a
          sense of belonging, ensuring that no newcomer navigates their journey
          alone. Together, we are creating a community where everyone can
          thrive, share experiences, and build a brighter future in Calgary.
        </h2>
      </div>
    </div>
  );
}
