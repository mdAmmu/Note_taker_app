import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact