'use client'

import { useState } from 'react'
import QuoteForm from './QuoteForm'
import QuoteCard from './QuoteCard'
import quotes from "./quotes"

export default function HomePage() {
  const [result, setResult] = useState([])


  const handleSearch = (topic) => {
    const matched = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.text)

    setResult(matched.length ? matched : ["No quotes found for this topic."])
  }

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Quote Generator</h1>
      <QuoteForm onSubmit={handleSearch} />
      <div className="mt-6 w-full max-w-md">
        {result.map((q, i) => <QuoteCard key={i} text={q} />)}
      </div>
    </main>
  )
}
