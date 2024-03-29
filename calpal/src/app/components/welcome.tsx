"use client";
import Button from "./button";
import Link from "next/link";

export default function Welcome() {
  const handleSubmit = () => {
    //to be implemented
  };

  return (
    <div className="flex h-dvh flex-row items-center bg-forest-green">
      <div className="flex flex-col h-5/6 w-1/2 align-center justify-center pl-24 mb-28">
        <div>
          <header className="text-white w-96 font-serif text-5xl font-normal py-4 leading-14">
            Bridging Lives, Building Futures{" "}
          </header>
        </div>
        <div>
          <h2 className="text-white font-sans font-light w-112 text-2xl leading-8 pb-10">
            Introducing CalPal, a community-driven initiative dedicated to
            empowering newcomers in Calgary.
          </h2>
        </div>
        <div>
          <Link
            href="/register"
            className=" hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 px-20 py-3 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-roboto rounded-3xl font-light text-3xl bg-clay hover:dark-brown"
          >
            Join
          </Link>
        </div>
        <div>
          <h3 className="text-white text-lg pt-4">
            Have an account?{" "}
            <a
              href="/login"
              className="text-light-green hover:underline py-5 mt-3"
            >
              Sign in
            </a>
          </h3>
        </div>
      </div>
      {/* <div className="w-1/2">
                    we will add something here
                </div> */}

    </div>
  );
}
