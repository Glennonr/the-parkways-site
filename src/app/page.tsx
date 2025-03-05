"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [activeButton, setActiveButton] = useState<string | null>(null);

  // Set the scroll variable only on the client side
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);
    // Initial scroll position setting
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleComingSoon = (platform: string) => {
    setMessage(`${platform} coming soon!`);
    setActiveButton(platform);
    setTimeout(() => {
      setMessage("");
      setActiveButton(null);
    }, 2000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white pt-16">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Bowery.jpg')",
            transform: "translateY(calc(var(--scroll) * 0.5px))",
            transition: "transform 0.1s linear",
          }}
        />
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-center">
          <h1 className="text-5xl font-bold">
            We are <span className="text-green-500" style={{ color: '#50b147', fontWeight: 'bold' }}>The Parkways</span>
          </h1>
          <p className="mt-2 text-xl">South Jersey Rock and Roll</p>
          <a 
            href="/shows" 
            className="mt-4 px-6 py-3 border-2 border-white bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-300" 
            style={{ backgroundColor: '#50b147' }}
          >
            Come see us
          </a>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="py-7 flex flex-wrap justify-center gap-4 relative z-10">
        {[  
          { name: "Instagram", link: "https://www.instagram.com/theparkwaysband" },
          { name: "Spotify", action: () => handleComingSoon("Spotify") },
          { name: "Apple Music", action: () => handleComingSoon("Apple Music") },
          { name: "TikTok", link: "https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc" },
          { name: "YouTube", link: "https://www.youtube.com/@TheParkwaysBand" },
          { name: "Facebook", link: "https://www.facebook.com/theparkways" },
        ].map((button) => (
          button.link ? (
            <a
              key={button.name}
              href={button.link}
              className="px-6 py-3 border-2 border-white text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#50b147' }}
            >
              {button.name}
            </a>
          ) : (
            <div key={button.name} className="relative inline-block">
              <button
                onClick={button.action}
                className="px-6 py-3 border-2 border-white text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-300 relative"
                style={{ backgroundColor: '#50b147' }}
              >
                {button.name}
              </button>
              {message && activeButton === button.name && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white px-4 py-2 rounded-md shadow-lg text-lg whitespace-nowrap z-50">
                  {message}
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </main>
  );
}

