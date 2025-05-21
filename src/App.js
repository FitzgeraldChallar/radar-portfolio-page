import React from "react";
import "./index.css";

// Image imports 
import mainImage from "./assets/main-image.jpg"; 
import sideImg1 from "./assets/side-image-1.jpg";
import sideImg2 from "./assets/side-image-2.jpg";
import related1 from "./assets/related-1.jpg";
import related2 from "./assets/related-2.jpg";
import related3 from "./assets/related-3.jpg";
import avatar from "./assets/avatar.jpg"; 

function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-pink-100 to-pink-200 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Radar</div>
        <nav className="flex gap-4 items-center">
          <div className="flex flex-col">
            <select className="border px-2 py-1 rounded">
              <option>Directory</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select className="border px-2 py-1 rounded">
              <option>Business Services</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select className="border px-2 py-1 rounded">
              <option>Opportunities</option>
            </select>
          </div>
        </nav>
        <div className="flex gap-4 items-center">
          <input
            className="border px-3 py-1 rounded w-60"
            type="text"
            placeholder="Search for any service"
          />
          <button className="text-sm">Log in</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Sign up</button>
        </div>
      </header>

      {/* Main Section */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* Service Title Card */}
        <section className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">Figma UI/UX Designer & Product Designer</h1>
              <div className="flex items-center gap-2 text-sm">
                <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <span>Mardea Adams</span>
                <span>⭐ 4.5 (2 Reviews)</span>
                <span>👁️ 23,846 Views</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg w-full md:w-80 mt-4 md:mt-0">
              <h3 className="text-lg font-semibold">Fixed Price</h3>
              <p className="text-2xl font-bold">$160 <span className="text-sm font-normal">/ Hr</span></p>
              <p className="text-sm text-gray-600 mt-1">Lorem Ipsum dolor sit amet, consectetur adipiscinpariaturst laborum.</p>
              <ul className="text-sm mt-3 space-y-1">
                <li> 2 Days Delivery</li>
                <li> 4 Revisions</li>
                <li>✅ Access to Source File on Delivery</li>
                <li>✅ Access to Social Media Kit</li>
                <li>✅ High Resolution Designs</li>
              </ul>
              <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded">Buy Now $160</button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="flex gap-4 mt-6 text-sm">
            <div className="border px-3 py-2 rounded">📅 Delivery Time: <strong>4 Days</strong></div>
            <div className="border px-3 py-2 rounded">🌐 English Level: <strong>Fluent</strong></div>
            <div className="border px-3 py-2 rounded">📍 Location: <strong>Monrovia, Liberia</strong></div>
          </div>

          {/* Combined Layout */}
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            {/* Image Carousel */}
            <div className="flex-1">
              <div className="flex items-center justify-center">
                <img src={sideImg1} alt="side1" className="w-32 h-40 object-cover rounded-lg opacity-80" />
                <img src={mainImage} alt="main" className="w-48 h-52 object-cover rounded-lg mx-4 shadow-lg" />
                <img src={sideImg2} alt="side2" className="w-32 h-40 object-cover rounded-lg opacity-80" />
              </div>
            </div>

            {/* About the Seller */}
            <aside className="w-full lg:w-80 bg-white p-6 rounded-xl shadow-md h-fit">
              <h3 className="font-bold text-lg mb-4">About The Seller</h3>
              <div className="flex items-center mb-4">
                <img src={avatar} alt="avatar" className="w-14 h-14 rounded-full" />
                <div className="ml-3">
                  <h4 className="font-semibold">Mardea Adams</h4>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                  <p className="text-sm text-yellow-600">⭐ 5.0 (2 Reviews)</p>
                </div>
              </div>
              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p><strong>Location:</strong> Monrovia, Liberia</p>
                <p><strong>Rate:</strong> $50 - $100/hr</p>
              </div>
              <button className="w-full border border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50 transition">
                Contact Me Now →
              </button>
            </aside>
          </div>
        </section>

        {/* Service Description */}
        <section className="mt-6 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-3">Service Description</h3>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incidindunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate vellit esse
            cilum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum. 
          </p>
          <h4 className="font-semibold mb-1">Services I Provide</h4>
          <ul className="list-disc list-inside text-sm mb-4">
            <li>Website Design</li>
            <li>Mobile App Design</li>
            <li>Brochure Design</li>
            <li>Business Card Design</li>
            <li>Flyer Design</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1 text-gray-700">App Type</h4>
              <p className="text-gray-600">Business, Food & Drink, Graphics & Design</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1 text-gray-700">Design Tool</h4>
              <p className="text-gray-600">Adobe XD, Figma, Photoshop</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-1 text-gray-700">Device</h4>
              <p className="text-gray-600">Mobile, Desktop</p>
            </div>
          </div>


        </section>

        {/* FAQ */}
        <section className="mt-6 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-3">Frequently Asked Questions</h3>
          <details className="mb-2">
            <summary className="cursor-pointer font-medium">What methods of payment are supported</summary>
            <p className="text-sm text-gray-600 mt-1">Ask Marvin....</p>
          </details>
          <details className="mb-2">
            <summary className="cursor-pointer font-medium">Can I cancel at anytime</summary>
            <p className="text-sm text-gray-600 mt-1">Ask Marvin again....</p>
          </details>
          <details className="mb-2">   
            <summary className="cursor-pointer font-medium">How do I get a receipt for my purchase</summary>
            <p className="text-sm text-gray-600 mt-1">Ask Marvin yet again....</p>
          </details>
          <details className="mb-2">
            <summary className="cursor-pointer font-medium">How do I get access to a theme I purchased</summary>
            <p className="text-sm text-gray-600 mt-1">Keep asking Marvin....</p>
          </details>
        </section>

        {/* Reviews */}
<section className="mt-6 bg-white p-6 rounded-xl shadow-md">
  <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>

  {/* Rating Summary */}
  <div className="flex flex-col md:flex-row gap-6">
    {/* Left: Score */}
    <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center justify-center w-full md:w-1/4">
      <div className="text-4xl font-bold">4.3</div>
      <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
      <div className="text-sm text-gray-600 mt-1">4 ratings</div>
    </div>

    {/* Right: Breakdown */}
    <div className="flex-1 space-y-2">
      {[{ star: 5, percent: 33 }, { star: 4, percent: 67 }, { star: 3, percent: 0 }, { star: 2, percent: 0 }, { star: 1, percent: 0 }].map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="w-12 text-sm">{item.star} Star</div>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
          <div className="w-10 text-sm text-right">{item.percent}%</div>
        </div>
      ))}
    </div>
  </div>

  {/* Reviews */}
  <div className="grid md:grid-cols-2 gap-4 mt-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col">
        <p className="font-semibold mb-1">"Excellent Designer & Developer"</p>
        <p className="text-sm text-gray-700 mb-3">
          Lorem ipsum dolor sit caecat cupidatat non proident, sunt in culpa qui officia at deserunt mollit anim id est
          officia at laborum. 
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <img
            src={avatar}
            alt="reviewer avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-semibold">James T. Flomo</div>
            <div className="text-xs text-gray-500">Entrepreneur ⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

 
  {/* Related Services */}
        <section className="mt-6">
          <h3 className="text-xl font-bold mb-3">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[related1, related2, related3].map((img, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                <img src={img} alt={`related-${index}`} className="rounded-lg h-40 object-cover w-full" />
                <h4 className="mt-2 font-bold text-md">Figma UI/UX</h4>
                <p className="text-sm">Developer drop the framework framework folder into a ne....</p>
                <p className="text-sm mt-1">⭐ 4.5 (2 Reviews)</p>
                <p className="text-sm mt-1">Starting at: $128</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-6 py-8 mt-10">
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-bold">Radar</h4>
            <p>Lorem ipsum dolor sit amet, consectetu ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis anim id est laborum. 
            </p>
          </div>
          <div>
            <h4>Directory</h4>
            <ul>
              <li>Ventures</li>
              <li>Individuals</li>
            </ul>
          </div>
          <div>
            <h4>Business Services</h4>
            <ul>
              <li>Tracker</li>
              <li>Document Verification</li>
              <li>Document Notarization</li>
              <li>Support Services</li>
            </ul>
          </div>
          <div>
            <h4>Opportunities</h4>
            <ul>
              <li>Jobs</li>
              <li>Events</li>
              <li>Projects</li>
              <li>Services</li>
              <li>Fundings</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center text-xs">
          <div>© 2025 Smart Liberia, Inc. All Rights Reserved</div>
          <div>Privacy Policy | Terms of Service | Report Vulnerability</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
