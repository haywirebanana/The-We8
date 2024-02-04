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
    link: string;
    onChange?: (value: string) => void;
}

export default function Activities() {

    const data: ActivitiesProps[] = [
        {
            title: 'Night out on 17th Ave!',
            image: Seventeenth,
            link: '/activities/seventeenth'
        },
        {
            title: 'Visit Banff National Park',
            image: Banff,
            link: '/activities/banff'
        },
        {
            title: 'Crescent Heights Lookout',
            image: Crescent,
            link: '/activities/crescent'
        },
        {
            title: 'Flicks at HighPark',
            image: Highpark,
            link: '/seventeenth'
        },
        {
            title: 'Date night in Kensington',
            image: Kensington,
            link: '/seventeenth'
        },
        {
            title: 'Browse at the Glenbow Museum',
            image: Museum,
            link: '/seventeenth'
        },
        {
            title: 'Fun day at Prairie Winds',
            image: Prairie,
            link: '/seventeenth'
        },
        {
            title: 'Fine dine at Seniores',
            image: Seniores,
            link: '/seventeenth'
        },
        {
            title: 'Rodeo at the Calgary Stampede',
            image: Stampede,
            link: '/seventeenth'
        },
        {
            title: 'Explore at Telus spark',
            image: Telus,
            link: '/seventeenth'
        },
        {
            title: 'Vibe at the Calgary Tower',
            image: Tower,
            link: '/seventeenth'
        },
        {
            title: 'Go wild at the Zoo',
            image: Zoo,
            link: '/seventeenth'
        },
    ];


    return (
        <div className="flex h-full py-8 justify-center bg-green">
            <div className="grid grid-cols-3 gap-4">
                {data.map((activity, index) => (
                    <Card path={activity.link} key={index} title={activity.title} image={activity.image} />
                ))}
            </div>
        </div>
    );
}