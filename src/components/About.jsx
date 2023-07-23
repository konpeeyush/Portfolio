import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>

                <p className="text-xl mt-20 ">
                    Hey! 👋 I'm <strong>Peeyush</strong> , a tech enthusiast who weaves code into captivating experiences. From React to AI, I've ventured into the tech realm to create a better tomorrow. 🌟
                    <br />
                    <br />
                    My passion lies in shaping the future with lines of code, while my love for human connections fuels user-centric designs. 🚀
                </p>
                <br />
                <p className="text-xl">
                    Hackathons and open-source projects invigorate my creativity, but when I'm not coding, you'll find me with a book, coffee in hand, or humming along to my favorite tunes. 🎵☕📚
                    <br />
                    <br />
                    Let's embark on this tech adventure together, solving challenges and leaving a lasting impact. Reach out, and let's make magic happen! 🌈✨
                </p>
            </div>
        </div>
    )
};

export default About;
