import React, { useState } from 'react'
import './GuessingBox.css'

export default function GuessingBox({ correctAnswer, onGuess, guessResult, isDisabled }) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (guess.trim() === '') return

    // Exact match check (you can modify this for fuzzy matching)
    const isCorrect = guess.toLowerCase() === correctAnswer.toLowerCase()
    onGuess(isCorrect)
    setGuess('')
  }

  return (
    <form className="guessing-box" onSubmit={handleSubmit}>
      <label htmlFor="guess-input" className="input-label">
        Your Guess:
      </label>
      <div className="input-wrapper">
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your answer..."
          disabled={isDisabled}
          className="guess-input"
        />
        <button 
          type="submit" 
          disabled={isDisabled || guess.trim() === ''}
          className="submit-btn"
        >
          Submit
        </button>
      </div>

      {guessResult && (
        <div className={`result ${guessResult}`}>
          {guessResult === 'correct' ? (
            <span>✅ Correct!</span>
          ) : (
            <span>❌ Incorrect. Try again!</span>
          )}
        </div>
      )}
    </form>
  )
}
