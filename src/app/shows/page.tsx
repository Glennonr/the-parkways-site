import Image from 'next/image';

const shows = [
  {
    date: "March 9, 2025",
    venue: "Gold Sounds, Brooklyn, NY",
    ticketLink: "https://dice.fm/event/7dndp9-mary-hail-the-parkways-metasin-9th-mar-gold-sounds-new-york-tickets?lng=en-US",
    image: "/show_images/gold_march_9.avif",
    headline: "Gold Sounds",
  },
  {
    date: "March 15, 2025",
    venue: "Kings Road Brewery, Haddonfield, NJ",
    ticketLink: "",
    image: "/show_images/kingsRoad.jpeg",
    headline: "Kings Road St Paddy's Day",
  },
  // {
  //   date: "March 29th, 2025",
  //   venue: "Fat Lady Brewing, Manayunk",
  //   ticketLink: "",
  //   image: "/show_images/fatLady.jpeg",
  //   headline: "Fat Lady Brewing in Manayunk",
  // },
  {
    date: "April 12, 2025",
    venue: "Ortleib's, Philadelphia, PA",
    ticketLink: "https://example.com/tickets/april-12",
    image: "/show_images/Ortliebs.jpg",
    headline: "Ortlieb's",
  },
  {
    date: "6pm August 2, 2025",
    venue: "Musikfest (Plaza Tropical), Bethlehem, PA",
    ticketLink: "",
    image: "/show_images/musikfest.jpeg",
    headline: "Plaza Tropical at Musikfest",
  },
];

export default function Shows() {
  return (
    <main className="min-h-screen p-6 bg-black text-white pt-24">
      <h1 className="text-3xl font-bold">Upcoming Shows</h1>
      <p className="mt-2 text-lg text-gray-300">
        New shows are always being added—check back soon for more dates!
      </p>
      <ul className="mt-4 space-y-8">
        {shows.map((show, index) => (
          <li key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col text-left">
            {/* Headline */}
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{show.headline}</h2>

            {/* Show Image */}
            <div className="mb-4 w-full">
              <Image
                src={show.image}
                alt={`Image for ${show.venue}`}
                className="w-auto h-48 object-contain rounded-lg"
                width={500}
                height={500}
              />
            </div>

            {/* Show Date and Venue */}
            <div>
              <strong>{show.date}</strong> - {show.venue}
            </div>

            {/* Ticket Link (Only if present) */}
            {show.ticketLink && (
              <a
                href={show.ticketLink}
                className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Tickets
              </a>
            )}
          </li>
        ))}
      </ul>
      <a href="/shows" className="mt-4 block text-green-400 hover:text-green-300">Back to Top</a>
    </main>
  );
}
