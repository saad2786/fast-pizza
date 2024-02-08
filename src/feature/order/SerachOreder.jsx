import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SerachOreder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`order/${query}`)
    setQuery('')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search order....."
        className='px-4 py-2 text-sm rounded-full bg-yellow-100 placeholder:text-stone-400
        focus:outline-none focus:ring focus:ring-yellow-500 focus:w-72 transition-all duration-500 w-32 sm:w-64 '
  

        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
