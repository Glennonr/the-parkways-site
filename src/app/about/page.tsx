import Image from 'next/image'

export default function AboutUs() {
    return (
      <main className="min-h-screen bg-yellow-50 pt-16">
        {/* Hero Section */}
        <div className="flex justify-center items-center bg-yellow-100 pt-8">
          <h1 className="text-4xl font-bold text-center">Get to Know the Parkways</h1>
        </div>
  
        {/* About Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 bg-yellow-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Section */}
                        {/* Image Section */}
                        <div className="flex justify-center items-center">
              <Image
                src="/Group.JPG" 
                alt="The Parkways Band"
                className="w-full rounded-lg shadow-lg"
                width={50000}
                height={50000}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Our Story</h2>
              <p className="text-lg">
                Think of The Parkways as Springsteen + The Strokes + Oasis + Pork Roll + Egg + Cheese. 
                We are a rock band with strong New Jersey roots that can put on a show. Our setlists 
                span a wide variety of material—check out our songs page to see for yourself. 
                Plus, our debut 5-song EP is recorded and dropping soon!
              </p>
              <p className="text-lg">
              We love playing bars and venues that know how to have a good time. If you’re looking for a band 
              to bring the energy and keep the crowd engaged, The Parkways are ready to take the stage. 
              Let’s make it a night to remember!
              </p>
            </div>
          </div>
        </section>
  
        {/* Band Members Section */}
        <section className="bg-yellow-200 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center">Meet the Band</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {/* Band Member 1 */}
              <div className="text-center">
                <Image
                  src="/band_members/John2.jpeg" // Replace with the actual image path for member 1
                  alt="Band Member 1"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">John Dwyer</h3>
                <p className="text-lg">Lead Vocals and Guitar</p>
              </div>
  
              {/* Band Member 2 */}
              <div className="text-center">
                <Image
                  src="/band_members/Jimmy.jpg" // Replace with the actual image path for member 2
                  alt="Band Member 2"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Jimmy Peterman</h3>
                <p className="text-lg">Bass</p>
              </div>
  
              {/* Band Member 3 */}
              <div className="text-center">
                <Image
                  src="/band_members/Sam.jpg" // Replace with the actual image path for member 3
                  alt="Band Member 3"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Sam Decencio</h3>
                <p className="text-lg">Guitar</p>
              </div>


              {/* Band Member 4 */}
              <div className="text-center">
                <Image
                  src="/band_members/Greg.jpg" // Replace with the actual image path for member 4
                  alt="Band Member 4"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Greg Eisenhower</h3>
                <p className="text-lg">Drums</p>
              </div>
  
              {/* Band Member 5 */}
              <div className="text-center">
                <Image
                  src="/band_members/Alison.png" // Replace with the actual image path for member 5
                  alt="Band Member 5"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Alison Nicolosi</h3>
                <p className="text-lg">Tenor Saxophone</p>
              </div>
  
              {/* Band Member 6 */}
              <div className="text-center">
                <Image
                  src="/band_members/Richie.JPG" // Replace with the actual image path for member 6
                  alt="Band Member 3"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Richie Glennon</h3>
                <p className="text-lg">Alto Saxophone</p>
              </div>

                            {/* Band Member 7 */}
                            <div className="text-center">
                <Image
                  src="/band_members/Flan.png" 
                  alt="Jack Flanagan"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Jack Flanagan</h3>
                <p className="text-lg">Keyboard</p>
              </div>

                {/* Band Member 8 */}
                {/* <div className="text-center">
                <Image
                  src="/band_members/Liam.JPG" // Replace with the actual image path for member 6
                  alt="Liam Glennon"
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                  width={500}
                  height={500}
                />
                <h3 className="mt-4 text-xl font-bold">Liam Glennon</h3>
                <p className="text-lg">Tambourine</p>
              </div> */}



            </div>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="bg-yellow-100 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold">Want to Learn More?</h2>
            <p className="mt-4 text-lg">Inquire about booking us for your next event or just say hello!</p>
            <a
              href="/book-us"
              className="mt-6 border-2 border-white inline-block px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-400 transition duration-300"
            >
              Take me to our message form
            </a>
          </div>
        </section>
      </main>
    );
  }
  