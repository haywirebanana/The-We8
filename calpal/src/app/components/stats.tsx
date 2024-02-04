"use client";
import Image from "next/image";

export default function Stats() {
  return (
    <div className="flex h-dvh flex-row items-center  bg-white">
      <div className="flex flex-col h-full w-1/2 px-24">
        <div>
          <header className="text-black w-112 font-serif text-5xl py-4">
            The Numbers and
            <br />
            Existing Challenges
          </header>
        </div>
        <div>
          <h2
            className="text-black font-montserrat font-normal pe-40 pt-10"
            style={{ fontSize: "18px" }}
          >
            Calgary offers an extensive array of services to support newcomers,
            addressing needs ranging from language skills to various other
            aspects.
            <br />
            <br />
            However, a significant number of individuals are unaware or face
            barriers to accessing these available resources.
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 py-5 align-middle">
        <div className="w-2/3 h-48 rounded-3xl bg-light-green text-283618 text-2xl px-5 my-5 flex items-center justify-center text-center">
          According to a 2021 survey, only 8% of respondents learned about
          available services at a government office upon landing.
        </div>
        <div className="w-2/3 h-48 rounded-3xl bg-green text-283618 text-2xl px-5 my-5 flex items-center justify-center text-center">
          There is no official process or location (physical or web-based) to
          communicate information on settlement services.
        </div>
        <div className="w-2/3 h-60 rounded-3xl bg-dark-green text-white text-2xl px-5 my-5 flex items-center justify-center text-center">
          In Alberta, there are more than 90 programs and resources, requiring
          newcomers to navigate a complex landscape independently, dealing with
          intricacies, and logistical considerations.
        </div>
      </div>
    </div>
  );
}
