'use client'
import Image from "next/image";
import Card from './card';

const Seventeenth = "/images/activity/17.jpg";
const Banff = "/images/activity/banff.jpg";
const Crescent = "/images/activity/crescent.jpg";
const Highpark = "/images/activity/highpark.jpg";
const Kensington = "/images/activity/kensington.jpg";
const Museum = "/images/activity/museum.jpg";
const Prairie = "/images/activity/prairie.jpg";
const Seniores = "/images/activity/seniores.jpg";
const Stampede = "/images/activity/stampede.jpg";
const Telus = "/images/activity/telus.jpg";
const Tower = "/images/activity/tower.jpg";
const Zoo = "/images/activity/zoo.jpg";

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
        {
            title: 'Crescent Heights Lookout',
            image: Crescent
        },
        {
            title: 'Flicks at HighPark',
            image: Highpark
        },
        {
            title: 'Date night in Kensington',
            image: Kensington
        },
        {
            title: 'Browse at the Glenbow Museum',
            image: Museum
        },
        {
            title: 'Fun day at Prairie Winds',
            image: Prairie
        },
        {
            title: 'Fine dine at Seniores',
            image: Seniores
        },
        {
            title: 'Rodeo at the Calgary Stampede',
            image: Stampede
        },
        {
            title: 'Explore at Telus spark',
            image: Telus
        },
        {
            title: 'Vibe at the Calgary Tower',
            image: Tower
        },
        {
            title: 'Go wild at the Zoo',
            image: Zoo
        },
    ];


    return (
        <div className="flex h-full py-8 justify-center bg-green">
            <div className="grid grid-cols-3 gap-4">
                {data.map((activity, index) => (
                    <Card key={index} title={activity.title} image={activity.image} />
                ))}
            </div>
        </div>
    );
}