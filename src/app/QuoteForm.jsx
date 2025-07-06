'use client'

import { useState } from 'react'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"

export default function QuoteForm({ onSubmit }) {
  const [topic, setTopic] = useState("")

  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        placeholder="Enter topic e.g. funny"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={() => onSubmit(topic)}>Get Quotes</Button>
    </div>
  )
}
