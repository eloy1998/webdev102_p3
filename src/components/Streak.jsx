import React from 'react'
import './Streak.css'

export default function Streak({ current, longest }) {
  return (
    <div className="streak-container">
      <div className="streak-box">
        <span className="streak-label">🔥 Current Streak</span>
        <span className="streak-value">{current}</span>
      </div>
      <div className="streak-box">
        <span className="streak-label">⭐ Longest Streak</span>
        <span className="streak-value">{longest}</span>
      </div>
    </div>
  )
}
