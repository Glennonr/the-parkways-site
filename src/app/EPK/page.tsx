"use client"; // Ensure this is a client component

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function EPK() {
    return (
        <main className="min-h-screen bg-black text-white py-12 px-6 text-center pt-24">
            {/* Hero Section */}
            <section className="mb-12">
                <h1 className="text-5xl font-bold text-green-500">Electronic Press Kit</h1>
                <p className="mt-2 text-xl">Everything you need to know about The Parkways</p>
            </section>

            {/* Bio Section */}
            <section className="mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-yellow-400">About The Parkways</h2>
                <p className="mt-4 text-lg">
                    The Parkways are a rock band from Haddonfield, NJ, with a seven-piece lineup—two guitars,
                    bass, drums, piano and often alto and tenor sax. We play a mix of originals and covers from the 50's to 2020's
                    bringing a big sound and a lot of energy to every show.
                    Our debut 5-song EP is recorded and coming out soon!
                </p>
            </section>

            <section className="mt-12 text-center pb-20">
                <h2 className="text-3xl font-bold mb-4">Listen to Our Demos</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div>
                        <h3 className="text-lg font-semibold">Gotta Be Taken (Demo)</h3>
                        <audio controls className="w-72" src="/audio/Gotta-Be-Taken-Demo.mp3"></audio>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Waiting Again (Demo)</h3>
                        <audio controls className="w-72" src="/audio/Waiting-Again-Demo.mp3"></audio>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Middle Distance Baby (Demo)</h3>
                        <audio controls className="w-72" src="/audio/Middle-Distance-Baby-Demo.mp3"></audio>
                    </div>
                </div>
            </section>

            {/* Photos Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-400">Promo Photos</h2>
                <div className="mt-4 relative max-w-3xl mx-auto">
                    <Swiper
                        navigation={true}
                        loop={true}
                        slidesPerView={1}
                        modules={[Navigation]}
                        className="w-full"
                    >
                        {["/gallery/BeatlesRooftop.jpeg", "/gallery/Bowery.jpg", "/gallery/Bowery2.jpg", "/gallery/DOTF.JPG"].map((src, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <img
                                    src={src}
                                    alt="The Parkways"
                                    className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Videos Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-400">Live Performances</h2>
                <div className="mt-4 flex flex-wrap justify-center gap-6">
                    <iframe src="https://drive.google.com/file/d/1ZT-KYzJhwCZnovBF-x6cTePsf17y058f/preview" allow="autoplay"></iframe>
                    <iframe src="https://www.youtube.com/embed/Cwyavufm07Y" allowFullScreen></iframe>
                    <iframe src="https://drive.google.com/file/d/11dHE4k8bzHBRkdXKvB8fpyXznj_9e6Ww/preview" allow="autoplay"></iframe>

                </div>
            </section>

            {/* Press & Reviews Section */}
            <section className="mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-yellow-400">What People Are Saying</h2>
                <blockquote className="mt-4 text-lg italic border-l-4 border-green-500 pl-4">
                    "The Parkways bring high energy and great vibes to every stage they hit! A must-see act."
                </blockquote>
                <p className="mt-2 text-sm">- Local Music Blog</p>
            </section>

            {/* Show Dates Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-400">Upcoming Shows</h2>
                <ul className="mt-4 space-y-2">
                    <li>February 26, 2025 - Pianos, New York, NY</li>
                    <li>March 8, 2025 - Pianos, New York, NY</li>
                    <li>March 9, 2025 - Gold Sound, Brooklyn, NY</li>
                    <li>March 15, 2025 - Kings Road Brewery, Haddonfield, NJ</li>
                    <li>August 2, 2025 - Musikest, Bethlehem, PA </li>
                </ul>
                <a href="/shows" className="mt-4 block text-green-400 hover:text-green">View All Shows</a>
            </section>

                        {/* Setlist & Songs Section */}
<section className="mb-12">
    <h2 className="text-3xl font-bold text-yellow-400">What Songs Do We Play?</h2>
    <p className="mt-4 text-lg">
        Our setlist includes a mix of classic covers and original songs. Check out the full list of what we can play at your event.
    </p>
    <a href="/songs" className="mt-4 inline-block bg-green font-bold py-3 px-6 rounded-lg shadow-md 
       hover:bg-green transition duration-200">
        View Our Setlist
    </a>
</section>


                        
            {/* Technical Requirements Section */}
            <section className="mb-16 max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-500 pb-2">
                    Technical Requirements
                </h2>

                <p className="mt-6 text-lg text-gray-300">
                    Below is our preferred stage setup and input list for sound engineers and venues.
                    Please contact us with any questions.
                </p>

                {/* Input List Grid */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
                    <div>
                        <h3 className="text-xl font-semibold text-green-400 border-b border-green-500 pb-1">
                            Vocals & Instruments
                        </h3>
                        <ul className="mt-3 space-y-2 text-gray-300">
                            <li><span className="font-semibold text-white">Lead Vocals:</span> 2x Vocal Mics </li>
                            <li><span className="font-semibold text-white">Guitar 1:</span> Amp Mic</li>
                            <li><span className="font-semibold text-white">Guitar 2:</span> Amp Mic</li>
                            <li><span className="font-semibold text-white">Keyboard:</span> DI </li>
                            <li><span className="font-semibold text-white">Bass:</span> DI Box preferred</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-400 border-b border-green-500 pb-1">
                            Horns & Drums
                        </h3>
                        <ul className="mt-3 space-y-2 text-gray-300">
                            <li><span className="font-semibold text-white">Alto Sax:</span> Clip-on Condenser Mic or Mic on stand</li>
                            <li><span className="font-semibold text-white">Tenor Sax:</span> Clip-on Condenser Mic or Mic on stand</li>
                            <li><span className="font-semibold text-white">Drums:</span> Kick, Snare, OH </li>
                        </ul>
                    </div>
                </div>

                {/* Download Section */}
                <div className="mt-8 text-center">
                    <a href="/Stage Plot.pdf" target="_blank"
                        className="inline-block bg-green text-white font-bold py-3 px-6 rounded-lg shadow-md 
                       transition duration-200">
                        Open Stage Plot
                    </a>
                </div>
            </section>



            {/* Contact Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-yellow-400">Booking & Contact</h2>
                <p className="mt-4 text-lg">For booking inquiries, fill out the form on our booking page or contact us at:</p>
                <p className="text-xl font-bold text-green-500">theparkwaysband@gmail.com</p>

                <div className="mt-4 flex justify-center gap-4">
                    <a href="https://www.instagram.com/theparkwaysband" target="_blank" className="text-yellow-400 hover:text-yellow">Instagram</a>
                    <a href="https://www.facebook.com/theparkways" target="_blank" className="text-yellow-400 hover:text-yellow">Facebook</a>
                    <a href="https://www.youtube.com/@TheParkwaysBand" target="_blank" className="text-yellow-400 hover:text-yellow">YouTube</a>
                </div>
            </section>

        </main>
    );
}
