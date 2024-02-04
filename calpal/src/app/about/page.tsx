'use client'
import AboutForm from '../components/aboutForm';

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center py-36 w-full flex-1 min-h-screen flex-col bg-green">
                <div className="bg-light-cream rounded-xl p-12 w-2/3">
                        <AboutForm />
                </div>
        </div>
    );
}
