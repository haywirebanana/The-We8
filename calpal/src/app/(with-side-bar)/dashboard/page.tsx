'use client'

import Banner from "../../components/banner";
import Mentor from "../../components/mentor";
import List from "../../components/list";
import Sidebar from "../../components/sidebar"
import Card from "../../components/squareCard"

export default function Activities() {
    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar />
            <div className="w-full h-dvh">
                <div className="flex h-1/3 items-center justify-center bg-green">
                    <header className="text-white font-serif text-4xl font-normal">Name of Program</header>
                </div>
                <div className="flex flex-wrap overscroll-auto justify-center w-full h-2/3 py-8 bg-white gap-2">
                <Card name="armin" pronouns="she/her" description="First-generation Punjabi Canadian, wants to make a difference."></Card>
                <Card name="celine" pronouns="she/her" description="First-generation Chinese Canadian, local food expert."></Card>
                <Card name="ryan" pronouns="he/him" description="First generation Filipino Canadian, Educational Assistant"></Card>
                <Card name="haseeb" pronouns="he/him" description="First generation Pakistani Canadian, Street Photographer"></Card>
                </div>
            </div>
            <div>
                <List />
            </div>
        </div>
    );
}