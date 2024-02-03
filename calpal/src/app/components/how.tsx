"use client";
import Image from "next/image";

export default function How() {
  return (
    <div className="flex h-3753 flex-col items-center justify-between bg-white">
      <div className="w-full justify-between py-5">
        <header className="text-black  font-serif text-5xl py-4 text-center mx-10 my-10">
          How it works
        </header>
      </div>
      <div className="mx-10 mb-10" style={{ display: "flex" }}>
        <div style={{ position: "relative", display: "inline" }}>
          <div
            className="rounded-3xl bg-clay mx-10"
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#BC6C25",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "60px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#FAEDCD", // Customize the circle's color
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#BC6C25", // Customize the text color
            }}
          >
            1
          </div>
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            className="rounded-3xl bg-clay mx-10"
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#BC6C25",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "60px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#FAEDCD", // Customize the circle's color
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#BC6C25", // Customize the text color
            }}
          >
            2
          </div>
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            className="rounded-3xl bg-clay mx-10"
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#BC6C25",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "60px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#FAEDCD", // Customize the circle's color
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#BC6C25", // Customize the text color
            }}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
}
