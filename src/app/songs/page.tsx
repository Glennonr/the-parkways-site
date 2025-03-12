export default function Songs() {
  return (
    <main className="min-h-screen p-6 bg-gray-900 text-white font-highway pt-24">
      {/* <h1 className="text-4xl font-bold text-yellow mb-6">Our Songs</h1> */}
      
          {/* EP Announcement */}
          <section className="bg-yellow text-black p-6 rounded-2xl shadow-lg mbt-10 text-center">
            <h1 className="text-4xl font-bold font-highway">Our EP (Name Pending)</h1>
            <p className="text-lg mt-2">Coming Out (Date Pending)</p>
            <p className="text-md mt-4">
              Check back in to see it here and on all streaming platforms!
            </p>
          </section>

                {/* Covers List */}
      <section>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Classic Rock & Oldies */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-white">EP Songs</h3>
            <ul className="list-disc pl-5">
              <li>Waiting Again</li>
              <li>Middle Distance Baby</li>
              <li>Any Other Way (Spin)</li>
              <li>Avaline</li>
              <li>Zynnie</li>
            </ul>
          </div>
          </div>
          </section>

          {/* Embedded YouTube Videos */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-yellow mb-4">Watch Us Perform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/TN1OLbCLbrI" title="Live Performance Avaline" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <iframe className="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/Cwyavufm07Y" title="Live Performance Beach Boy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </section>

          {/* Live Performances Section */}
          <section className="bg-black text-white p-6 rounded-lg shadow-lg mt-10 text-center">
            <h2 className="text-3xl font-bold text-yellow">Want to see more?</h2>
            <p className="text-lg mt-2">Check out our YouTube channel for live recordings of our shows!</p>
            <a href="https://www.youtube.com/channel/UCC8OzABpYTa1goeiMBcf6lQ" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow text-black px-6 py-3 mt-4 text-lg font-bold rounded-lg shadow-lg hover:bg-white">Watch on YouTube</a>
          </section>

      {/* Covers List */}
      <section>
        <h2 className="text-3xl font-bold text-yellow mb-4 pt-5">Some of the Covers We Perform</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Classic Rock & Oldies */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Classic Rock Anthems</h3>
            <ul className="list-disc pl-5">
              <li>American Girl – Tom Petty</li>
              <li>Dancing in the Dark – Bruce Springsteen</li>
              <li>Hungry Heart – Bruce Springsteen</li>
              <li>Gimme Three Steps – Lynyrd Skynyrd</li>
              <li>The Boys Are Back in Town – Thin Lizzy</li>
              <li>Lido Shuffle – Boz Skaggs</li>
              <li>Talk to Me - Southside Johnny</li>
            </ul>
          </div>

          {/* British Rock & Britpop */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Indie & Alternative Favorites</h3>
            <ul className="list-disc pl-5">
              <li>Don’t Look Back in Anger – Oasis</li>
              <li>She’s Electric – Oasis</li>
              <li>Slide Away – Oasis</li>
              <li>Is This It – The Strokes</li>
              <li>Last Nite – The Strokes</li>
              <li>There She Goes – The La’s</li>
              <li>Take Me Out – Franz Ferdinand</li>
              <li>Boys Don’t Cry – The Cure</li>
              <li>My Type - Saint Motel</li>
            </ul>
          </div>

          {/* Indie & Alternative Rock */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">High-Energy Party Starters</h3>
            <ul className="list-disc pl-5">
              <li>Valerie – Amy Winehouse</li>
              <li>Everybody Talks – Neon Trees</li>
              <li>Kilby Girl – The Backseat Lovers</li>
              <li>Build Me Up Buttercup - The Foundations</li>
              <li>What I Like About You – The Romantics</li>
              <li>I Wanna Be Sedated – The Ramones</li>
              <li>Scotty Doesn’t Know – Lustra</li>
              <li>Chelsea Dagger – The Fratellis</li>
              <li>All Apologies – Nirvana</li>
              <li>Bad Habit - Steve Lacy</li>
            </ul>
          </div>

          {/* The Beatles Collection */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">50s & 60s Classics</h3>
            <ul className="list-disc pl-5">
              <li>Come Together – The Beatles</li>
              <li>Got to Get You Into My Life – The Beatles</li>
              <li>Saw Her Standing There – The Beatles</li>
              <li>Twist and Shout – The Beatles</li>
              <li>Blackbird - The Beatles</li>
              <li>Lucille - Little Richard</li>
              <li>Runaround Sue - Dion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Request Message */}
      <section className="text-center mb-6">
        <p className="text-lg text-yellow font-bold">
          We’re always open to learning new songs and taking requests to match your venue's vibe!
        </p>
      </section>

    </main>
  );
}
