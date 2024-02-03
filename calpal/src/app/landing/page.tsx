import Image from "next/image";
import Welcome from "../components/welcome";
import Mission from "../components/mission";
import Stats from "../components/stats"
import How from "../components/how";
import Banner from "../components/banner";

export default function Login() {
    return (
        <div className="h-3753">
            <Welcome />
            <Mission />
            <Stats />
            <How />
            <Banner />
        </div>
    );
}