import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ratione accusamus velit, sit impedit placeat possimus illo. Perspiciatis natus porro dolorem odit temporibus dolor dolorum, maiores culpa ex excepturi ducimus? Quia sit vel doloremque hic iste debitis minus sint commodi repellat laudantium deserunt exercitationem ex quibusdam, fuga cum odio necessitatibus.
                </p>
                <br />

                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni cumque expedita repellat, totam, suscipit asperiores mollitia vel molestias, magnam quidem porro a esse eum! Dolores reprehenderit mollitia ratione labore, doloribus quisquam vero? Voluptatem voluptates qui minus eos, dicta ut cupiditate aperiam recusandae numquam hic, consectetur nihil itaque dolores inventore.
                </p>
            </div>
        </div>
    )
};

export default About;
