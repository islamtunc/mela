// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
import React from 'react'

function page() {
  return (
    <main className="flex-grow container mx-auto py-8">
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Get Started */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
            alt="Get Started"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Get Started with Mela</h3>
          <p className="text-gray-600">Learn the basics of the Mela programming language and start building your first project.</p>
          <a href="/malper/dokumantasyon/getting-started" className="text-blue-500 hover:underline mt-4 block">
            Read the Getting Started Guide
          </a>
        </div>

        {/* Card 2: Try Online */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
            alt="Try Online"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Try Mela Online</h3>
          <p className="text-gray-600">Use our online compiler to write and run Mela code instantly in your browser.</p>
          <a href="/malper/cevrimici-derleyici" className="text-blue-500 hover:underline mt-4 block">
            Open Online Compiler
          </a>
        </div>

        {/* Card 3: Join the Community */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Community"
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Join the Community</h3>
          <p className="text-gray-600">Connect with other Mela developers, ask questions, and share your projects.</p>
          <a href="/malper/topluluk" className="text-blue-500 hover:underline mt-4 block">
            Visit the Community Page
          </a>
        </div>
      </div>

      {/* Recent Updates Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Version 1.2 released with improved error messages and new standard library modules.</li>
          <li>Online compiler now supports syntax highlighting and code sharing.</li>
          <li>Join our Discord for weekly Q&A sessions and community support.</li>
        </ul>
      </div>
    </main>
  )
}

export default page