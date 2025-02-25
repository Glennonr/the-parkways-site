import Image from 'next/image'

const shows = [
  {
    date: "February 26, 2025",
    venue: "Pianos, New York, NY",
    ticketLink: "https://dice.fm/event/dkwgmq-the-parkways-the-fictionals-the-blackouts-26th-feb-pianos-showroom-new-york-tickets?lng=en-US",
    image: "/show_images/pianos_feb_26.avif",  
  },
  {
    date: "March 8, 2025",
    venue: "Pianos, New York, NY",
    ticketLink: "https://example.com/tickets/march-8",
    image: "/show_images/pianos.jpg",  
  },
  {
    date: "March 9, 2025",
    venue: "Gold Sound, Brooklyn, NY",
    ticketLink: "https://example.com/tickets/march-9",
    image: "/show_images/gold_march_9.avif",  
  },
  {
    date: "March 15, 2025",
    venue: "Kings Road Brewery, Haddonfield, NJ",
    ticketLink: "https://example.com/tickets/march-15",
    image: "/show_images/kings_road.jpeg",  
  },
  {
    date: "March 21, 2025",
    venue: "The Stone Pony, Asbury Park, NJ",
    ticketLink: "https://example.com/tickets/march-21",
    image: "/show_images/stone_pony.jpg",  
  },
  {
    date: "April 12, 2025",
    venue: "Ortleib's, Philadelphia, PA",
    ticketLink: "https://example.com/tickets/april-12",
    image: "/show_images/Ortliebs.jpg",  
  },
];

export default function Shows() {
  return (
    <main className="min-h-screen p-6 bg-black text-white pt-24">
      <h1 className="text-3xl font-bold">Upcoming Shows</h1>
      <p className="mt-2 text-lg text-gray-300">
        New shows are always being added—check back soon for more dates!
      </p>
      <ul className="mt-4 space-y-4">
        {shows.map((show, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg flex flex-col text-left">
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

            {/* Ticket Link */}
            <a
              href={show.ticketLink}
              className="text-yellow-400 hover:text-yellow-300 mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
            </a>
          </li>
        ))}
      </ul>
      <a href="/shows" className="mt-4 block text-green-400 hover:text-green-300">Back to Top</a>
    </main>
  );
}

