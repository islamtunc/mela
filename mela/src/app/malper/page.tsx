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
      {/* Card 1: Build Your Website */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
          alt="Malpera xwe biafirîne"
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Malpera xwe biafirîne</h3>
        <p className="text-gray-600">Bi şablonan me yên hêsan malpera xwe biafirîne.</p>
        <a href="#projects" className="text-blue-500 hover:underline mt-4 block">
          Şablonan bibîne û dest bi avakirina bike
        </a>
      </div>

      {/* Card 2: Mobile Apps */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
          alt="Sepanên mobîl"
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Sepana mobîlê xwe bibe</h3>
        <p className="text-gray-600">Bi platforma me sepanên mobîl hêsan biafirîne.</p>
        <a href="#team" className="text-blue-500 hover:underline mt-4 block">
           Çareseriyên sepanê mobîl bibîne
        </a>
      </div>
  
      {/* Card 3: AI Solutions */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Çareseriyên zêrekîya zanistî"
          className="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-bold mb-2">Çareseriyên zêrekîya zanistî bistîne</h3>
        <p className="text-gray-600">Çareseriyên AI yên li gorî xwestina te bistîne.</p>
        <a href="#deadlines" className="text-blue-500 hover:underline mt-4 block">
          Dema dawî bibîne
        </a>
      </div>
    </div>
  
    {/* Recent Updates Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Nûvekirinên Dawî</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Amûra rêvebirina projeyan hate zêdekirin.</li>
        <li>Civîna hefteyê ya tîmê di roja înê de ye.</li>
        <li>Parastina pergala di şevê şemiyê de tê kirin.</li>
      </ul>
    </div>
  </main>
  )
}

export default page