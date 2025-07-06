export default function QuoteCard({ text }) {
  const [quote, author] = text.split(" – ")

  return (
    <div className="bg-white rounded-xl shadow p-6 border relative text-gray-800 font-serif">
      {/* Left quote icon */}
      <div className="text-4xl text-sky-500 absolute top-4 left-4">“</div>

      {/* Right quote icon */}
      <div className="text-4xl text-sky-500 absolute bottom-4 right-4">”</div>

      {/* Quote text */}
      <p className="text-lg italic pl-8 pr-8">{quote}</p>

      {/* Author */}
      <p className="text-sm text-sky-500 font-sans mt-4 pl-8">— {author}</p>
    </div>
  )
}
