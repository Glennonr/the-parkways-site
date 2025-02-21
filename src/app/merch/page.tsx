export default function Merch() {
    return (
      <main className="min-h-screen p-6 bg-gray-900 text-white font-highway text-center">
        <h1 className="text-4xl font-bold text-yellow mb-6">Merch</h1>
        <p className="text-lg mb-10">Come to one of our shows to take home a piece of The Parkways!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
          {/* Shirt 1 */}
          <div className="bg-black p-4 rounded-lg shadow-lg">
            <img src="/merch/tour shirt.png" alt="Parkways Shirt 1" className="w-full rounded-lg" />
            <p className="mt-2 text-lg font-bold">Original Shirt</p>
          </div>
          
          {/* Shirt 2 */}
          <div className="bg-black p-4 rounded-lg shadow-lg">
            <img src="/merch/KellyGreen.png" alt="Parkways Kelly Green" className="w-full rounded-lg" />
            <p className="mt-2 text-lg font-bold">Kelly Green Shirt</p>
          </div>
          
          {/* Sticker */}
          <div className="bg-black p-4 rounded-lg shadow-lg">
            <img src="/merch/Stickers.png" alt="Parkways Sticker" className="w-full rounded-lg" />
            <p className="mt-2 text-lg font-bold">Parkways Sticker</p>
          </div>
        </div>
      </main>
    );
  }
  