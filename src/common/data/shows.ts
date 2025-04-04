// **Editing the list of shows here will update the Shows page and the home page**


export type Show = {
    id: number;
    date: string;
    venue: string;
    ticketLink: string;
    image: string;
    headline: string;
    time?: string;
    location?: string;
};

export const shows: Show[] = [
    {
        id: 1,
        date: "April 12, 2025",
        venue: "Ortleib's",
        ticketLink: "https://www.eventbrite.com/e/landline-the-parkways-the-blackouts-tickets-1307021178529?aff=oddtdtcreator",
        image: "/show_images/Ortliebs2.jpeg",
        headline: "Ortlieb's",
        time: "7:00 PM",
        location: "Philadelphia, PA"
    },
    {
        id: 2,
        date: "August 2, 2025",
        venue: "Musikfest (Plaza Tropical)",
        ticketLink: "",
        image: "/show_images/musikfest.jpeg",
        headline: "Plaza Tropical at Musikfest",
        time: "6:00 PM",
        location: "Bethlehem, PA"
    },
];
