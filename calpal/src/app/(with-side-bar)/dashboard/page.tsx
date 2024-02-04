'use client'


import List from "../../components/list";
import Sidebar from "../../components/sidebar"
import Card from "../../components/squareCard"

export default function Activities() {
 
    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar />
            <div className="w-full h-dvh">
                <div className="flex h-1/3 items-center justify-center bg-green">
                    <img src='/images/banners/mentors.png' ></img>
                </div>
                <div className="flex flex-wrap overscroll-auto justify-center w-full h-2/3 py-8 bg-white gap-2">
                <Card route='/live-chat2' name="armin" pronouns="she/her" description="First-generation Punjabi Canadian, wants to make a difference."></Card>
                <Card route='/live-chat1' name="celine" pronouns="she/her" description="First-generation Chinese Canadian, local food expert."></Card>
                <Card route='/live-chat' name="ryan" pronouns="he/him" description="First generation Filipino Canadian, Educational Assistant"></Card>
                <Card route='/live-chat3' name="haseeb" pronouns="he/him" description="First generation Pakistani Canadian, Street Photographer"></Card>
                </div>
            </div>
            <div>
                <List />
            </div>
        </div>
    );
}