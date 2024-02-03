import Image from "next/image";
import Welcome from "./components/welcome";
import Mission from "./components/mission";
import Stats from "./components/stats";
import How from "./components/how";
import Banner from "./components/banner";
import DivideLine from "./components/divideLine";

export default function Landing() {
  return (
    <div className=" bg-white">
      <Welcome />
      <Mission />
      <DivideLine />
      <Stats />
      <How />
      <Banner />
    </div>
  );
}
