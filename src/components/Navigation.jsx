import React from 'react'
import './Navigation.css'

export default function Navigation({ 
  onNext, 
  onPrevious, 
  isAtStart, 
  isAtEnd 
}) {
  return (
    <div className="navigation">
      <button 
        onClick={onPrevious}
        disabled={isAtStart}
        className="nav-btn prev-btn"
        aria-label="Previous card"
      >
        ← Previous
      </button>
      <button 
        onClick={onNext}
        disabled={isAtEnd}
        className="nav-btn next-btn"
        aria-label="Next card"
      >
        Next →
      </button>
    </div>
  )
}
