import { useState } from "react"
import "./quoteCard.css" // Make sure this path matches your file structure

export default function QuoteCard({ text }) {
  const [quote, author] = text.split(" – ")
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="quote-card relative group">
      {/* Quote marks */}
      <div className="left-quote">“</div>
      <div className="right-quote">”</div>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="copy-button"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Quote text and author */}
      <p className="quote-text">{quote}</p>
      <p className="quote-author">— {author}</p>
    </div>
  )
}
