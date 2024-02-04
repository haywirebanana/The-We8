'use client'
import Image from "next/image";
import Card from './card';

const Seventeenth = "/images/activity/17.jpg";
const Banff = "/images/activity/banff.jpg";

interface ActivitiesProps {
    title: string;
    image: string;
    onChange?: (value: string) => void;
}

export default function Activities() {

    const data: ActivitiesProps[] = [
        {
            title: 'Night out on 17th Ave!',
            image: Seventeenth
        },
        {
            title: 'Visit Banff National Park',
            image: Banff
        },
    ];


    return (
        <div className="flex flex-col h-full justify-center text-center font-montserrat text-4xl bg-sand px-2">
            <h1 className="text-white">My Activities</h1>
            <div className="flex flex-col py-1  justify-evenly">
                {data.map((activity, index) => (
                    <div className="py-2">
                        <Card key={index} title={activity.title} image={activity.image} />
                    </div>
                ))}
            </div>
        </div>
    )
};