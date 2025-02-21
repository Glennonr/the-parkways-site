export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white pt-16" >
      {/* Hero Section with Parallax */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: "url('/Parkways Film.jpg')",
            backgroundImage: "url('/gallery/Bowery.jpg')",
            transform: "translateY(calc(var(--scroll) * 0.5px))",
            transition: "transform 0.1s linear",
          }}
        />
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-center">
          <h1 className="text-5xl font-bold">
            We are <span className="text-green-500" style={{ color: '#50b147', fontWeight:'bold' }}>The Parkways</span>
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

      {/* Upcoming Shows Button
      <a href="/shows" className="mt-4 px-6 py-3 border-2 border-white bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-300" style={{ backgroundColor: '#50b147' }}>
        Upcoming Shows
      </a> */}

      {/* Social Media Buttons */}
      <div className=" py-7 flex flex-wrap justify-center gap-4" >
        {[
          { name: "Instagram", link: "https://www.instagram.com/theparkways" },
          { name: "Spotify", link: "https://open.spotify.com/artist/xxxxxxx" },
          { name: "Apple Music", link: "https://music.apple.com/artist/xxxxxxx" },
          { name: "TikTok", link: "https://www.tiktok.com/@the_parkways?is_from_webapp=1&sender_device=pc" },
          { name: "YouTube", link: "https://www.youtube.com/channel/UCXoZkvWQVQuXDviev4ZEHFQ" },
          { name: "Facebook", link: "https://www.facebook.com/theparkways" },
        ].map((button) => (
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
        ))}
      </div>

      {/* Parallax Script */}
      <script>
        {`
          document.addEventListener('scroll', () => {
            document.documentElement.style.setProperty('--scroll', window.scrollY);
          });
        `}
      </script>
    </main>
  );
}