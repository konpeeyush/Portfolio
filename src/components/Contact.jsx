const Contact = () => {
    return (
        <div name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Let's Connect</p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div>
                    <form action="https://getform.io/f/e08b9171-90b5-48e0-a7cc-6e522da6157d"
                        className="flex flex-col gap-4 w-full sm:w-1/2 mx-auto"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />

                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows={10}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />

                        <button
                            type="submit"
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300"
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
