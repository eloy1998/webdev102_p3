import React, { useState } from 'react'
import Card from './components/Card.jsx'
import GuessingBox from './components/GuessingBox.jsx'
import Navigation from './components/Navigation.jsx'
import Streak from './components/Streak.jsx'
import './App.css'

export default function App() {
  // Sample flashcard data - replace with your own!
  const initialCards = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'What is 2 + 2?', answer: '4' },
    { id: 3, question: 'What is the largest planet?', answer: 'Jupiter' },
    { id: 4, question: 'What is the chemical symbol for gold?', answer: 'Au' },
    { id: 5, question: 'What year did World War II end?', answer: '1945' },
  ]

  const [cards, setCards] = useState(initialCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [guessResult, setGuessResult] = useState(null) // 'correct', 'incorrect', or null
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const currentCard = cards[currentIndex]

  const handleGuess = (isCorrect) => {
    if (isCorrect) {
      const newStreak = currentStreak + 1
      setCurrentStreak(newStreak)
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak)
      }
    } else {
      setCurrentStreak(0)
    }
    
    setGuessResult(isCorrect ? 'correct' : 'incorrect')
    // Reset result after 1.5 seconds
    setTimeout(() => setGuessResult(null), 1500)
  }

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setCurrentIndex(0)
    setIsFlipped(false)
    setGuessResult(null)
  }

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
      setGuessResult(null)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
      setGuessResult(null)
    }
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>📚 Flashcards</h1>
        
        <div className="header-row">
          <div className="progress">
            Card {currentIndex + 1} of {cards.length}
          </div>
          <button 
            onClick={handleShuffle}
            className="shuffle-btn"
            title="Shuffle cards"
          >
            🔀 Shuffle
          </button>
        </div>

        <Streak 
          current={currentStreak}
          longest={longestStreak}
        />

        <Card 
          question={currentCard.question} 
          answer={currentCard.answer} 
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        <GuessingBox 
          correctAnswer={currentCard.answer}
          onGuess={handleGuess}
          guessResult={guessResult}
          isDisabled={guessResult !== null}
        />

        <Navigation 
          onNext={handleNext}
          onPrevious={handlePrevious}
          isAtStart={currentIndex === 0}
          isAtEnd={currentIndex === cards.length - 1}
        />
      </div>
    </div>
  )
}
