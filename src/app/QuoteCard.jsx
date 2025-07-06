import { useState } from "react"

export default function QuoteCard({ text }) {
  const [quote, author] = text.split(" – ")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative bg-white rounded-xl p-6 shadow border border-gray-200 text-gray-800 font-serif my-6 transition-transform duration-300 cursor-pointer hover:scale-105 group">
      {/* Left quote */}
      <div className="text-4xl text-sky-500 absolute top-4 left-4">“</div>

      {/* Right quote */}
      <div className="text-4xl text-sky-500 absolute bottom-4 right-4">”</div>
      
      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 bg-sky-500 text-white px-2 py-1 text-xs rounded opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Quote text */}
      <p className="italic px-8 text-lg">{quote}</p>

      {/* Author */}
      <p className="text-sm text-sky-500 font-sans mt-4 pl-8">— {author}</p>
    </div>
  )
}
