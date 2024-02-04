'use client'

interface CardProps {
    name?: string;
    pronouns?: string,
    description?: string;
}

export default function Card({ name, pronouns, description }: CardProps) {
    return (
        <div
            className=" rounded-3xl bg-sand mx-10"
            style={{
                width: "350px",
                height: "150px",
            }}
        >
            <div className="full-w full-h p-3 text-white">
                <h1 className='font-serif text-left text-2xl font-normal'>{name}</h1>
                <p>{pronouns}</p>
                <br></br>
                <h2
                    className="text-white font-montserrat font-normal"
                    style={{ fontSize: "14px" }}
                >
                    {description}
                </h2>
            </div>
        </div>
    )
}