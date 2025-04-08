'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-16">
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-400 mb-6">
          We'd love to hear from you. Fill out the form below and we’ll get back to you shortly.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}