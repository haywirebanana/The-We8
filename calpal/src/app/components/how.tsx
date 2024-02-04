"use client";
import Image from "next/image";

export default function How() {
  return (
    <div className="flex h-3753 flex-col items-center justify-between bg-white">
      <div className="w-full justify-between py-5">
        <header className="text-black  font-serif text-5xl py-4 text-center mx-10 mt-2 mb-10">
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
              backgroundColor: "#FAEDCD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#BC6C25",
              fontSize: "24px",
            }}
          >
            1
          </div>
          <p
            className="font-montserrat text-3xl font-normal "
            style={{
              position: "absolute",
              top: "35%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              color: "#FAEDCD",
              textAlign: "center",
            }}
          >
            <a href='/register'>Join CalPal</a>{" "}
          </p>
        </div>
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
              backgroundColor: "#FAEDCD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#BC6C25",
              fontSize: "24px",
            }}
          >
            2
          </div>
          <p
            className="font-montserrat text-3xl font-normal "
            style={{
              position: "absolute",
              top: "35%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              color: "#FAEDCD",
              textAlign: "center",
            }}
          >
            Get Matched{" "}
          </p>
        </div>
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
              backgroundColor: "#FAEDCD",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#BC6C25",
              fontSize: "24px",
            }}
          >
            3
          </div>
          <p
            className="font-montserrat text-3xl font-normal "
            style={{
              position: "absolute",
              top: "35%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              color: "#FAEDCD",
              textAlign: "center",
            }}
          >
            Feel at home
          </p>
        </div>
      </div>
    </div>
  );
}
