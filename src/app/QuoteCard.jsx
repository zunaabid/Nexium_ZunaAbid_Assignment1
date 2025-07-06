import "./QuoteCard.css"


export default function QuoteCard({ text }) {
  const [quote, author] = text.split(" – ")

  return (
    <div className="quote-card relative">
      <div className="left-quote">“</div>
      <div className="right-quote">”</div>
      <p className="quote-text">{quote}</p>
      <p className="quote-author">— {author}</p>
    </div>
  )
}
