import React from 'react'
import './Card.css'

export default function Card({ question, answer, isFlipped, onFlip }) {
  return (
    <div className="card-wrapper">
      <div 
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={onFlip}
      >
        <div className="card-inner">
          <div className="card-front">
            <p className="card-label">Question:</p>
            <p className="card-content">{question}</p>
            <p className="card-hint">Click to reveal answer</p>
          </div>
          <div className="card-back">
            <p className="card-label">Answer:</p>
            <p className="card-content">{answer}</p>
            <p className="card-hint">Click to go back</p>
          </div>
        </div>
      </div>
    </div>
  )
}
