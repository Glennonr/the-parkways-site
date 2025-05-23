

  // Cover song categories

  // Cover song type for better organization
  export type CoverSongCategory = {
    name: string;
    description: string;
    songs: string[];
  };

  export const coverSongCategories: CoverSongCategory[] = [
    {
      name: "Classic Rock Anthems",
      description: "Timeless rock classics that get everyone singing",
      songs: [
        "American Girl – Tom Petty",
        "Dancing in the Dark – Bruce Springsteen",
        "Hungry Heart – Bruce Springsteen",
        "Gimme Three Steps – Lynyrd Skynyrd",
        "The Boys Are Back in Town – Thin Lizzy",
        "Lido Shuffle – Boz Skaggs",
        "Talk to Me - Southside Johnny"
      ]
    },
    {
      name: "Indie & Alternative Favorites",
      description: "Modern rock and indie classics with attitude",
      songs: [
        "Don't Look Back in Anger – Oasis",
        "She's Electric – Oasis",
        "Slide Away – Oasis",
        "Is This It – The Strokes",
        "Last Nite – The Strokes",
        "There She Goes – The La's",
        "Take Me Out – Franz Ferdinand",
        "Boys Don't Cry – The Cure",
        "My Type - Saint Motel"
      ]
    },
    {
      name: "High-Energy Party Starters",
      description: "Songs guaranteed to get the crowd moving",
      songs: [
        "Valerie – Amy Winehouse",
        "Everybody Talks – Neon Trees",
        "Kilby Girl – The Backseat Lovers",
        "Build Me Up Buttercup - The Foundations",
        "What I Like About You – The Romantics",
        "I Wanna Be Sedated – The Ramones",
        "Scotty Doesn't Know – Lustra",
        "Chelsea Dagger – The Fratellis",
        "All Apologies – Nirvana",
        "Bad Habit - Steve Lacy"
      ]
    },
    {
      name: "50s & 60s Classics",
      description: "Vintage hits from the golden era of rock",
      songs: [
        "Come Together – The Beatles",
        "Got to Get You Into My Life – The Beatles",
        "Saw Her Standing There – The Beatles",
        "Twist and Shout – The Beatles",
        "Blackbird - The Beatles",
        "Lucille - Little Richard",
        "Runaround Sue - Dion"
      ]
    }
  ];