export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white" style={{ backgroundColor: '#123456' }}>
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center mt-0 pt-0"
        style={{ backgroundImage: "url('/Parkways Film.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">The Parkways</h1>
          <p className="mt-2 text-lg">New Jersey Rock and Roll</p>
        </div>
      </div>

      {/* Upcoming Shows Button */}
      <a href="/shows" className="mt-4 px-6 py-3 border-2 border-white bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transform transition duration-300" style={{ backgroundColor: '#50b147' }}>
        Upcoming Shows
      </a>

      {/* Social Media Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
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
    </main>
  );
}
