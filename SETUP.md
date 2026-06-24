# Flashcards App - Setup Guide

## 🚀 Quick Start

### Running the Development Server
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser.

## 📁 Project Structure

```
src/
├── App.jsx              # Main app component (state & logic)
├── App.css              # App styling
├── index.jsx            # React entry point
├── index.css            # Global styles
└── components/
    ├── Card.jsx         # Flashcard display component
    ├── Card.css
    ├── GuessingBox.jsx  # Input & submit component
    ├── GuessingBox.css
    ├── Navigation.jsx   # Previous/Next buttons
    └── Navigation.css
```

## 🎯 How to Customize

### 1. Change Your Flashcard Data
In `src/App.jsx`, modify the `cards` array:

```javascript
const [cards] = useState([
  { id: 1, question: 'Your question?', answer: 'Your answer' },
  { id: 2, question: 'Another question?', answer: 'Another answer' },
  // Add more cards...
])
```

### 2. Implement Fuzzy Matching (Stretch Feature)
Modify the `handleSubmit` function in `src/components/GuessingBox.jsx`:

```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  if (guess.trim() === '') return

  // Fuzzy matching - ignore case and punctuation
  const cleanGuess = guess.toLowerCase().replace(/[.,!?;:]/g, '').trim()
  const cleanAnswer = correctAnswer.toLowerCase().replace(/[.,!?;:]/g, '').trim()
  const isCorrect = cleanGuess === cleanAnswer

  onGuess(isCorrect)
  setGuess('')
}
```

### 3. Add Shuffle Feature (Stretch Feature)
In `src/App.jsx`, add a shuffle button and state:

```javascript
const [shuffledCards, setShuffledCards] = useState(cards)

const handleShuffle = () => {
  const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5)
  setShuffledCards(shuffled)
  setCurrentIndex(0)
  setIsFlipped(false)
}
```

### 4. Add Streak Counter (Stretch Feature)
Add state tracking in `src/App.jsx`:

```javascript
const [currentStreak, setCurrentStreak] = useState(0)
const [longestStreak, setLongestStreak] = useState(0)

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
  setTimeout(() => setGuessResult(null), 1500)
}
```

## ✅ Required Features Checklist

- ✅ Input box with submit button
- ✅ Correct/incorrect visual feedback
- ✅ Previous/Next buttons
- ✅ Buttons disabled at beginning/end
- ✅ Card flipping animation
- ✅ Progress counter

## 🎨 Customization Tips

- Modify colors in the CSS files (look for gradient colors like `#667eea`)
- Change card height in `Card.css` (`.card` selector)
- Adjust animation speeds by changing `transition` values
- Add custom fonts by importing in `src/index.css`

## 📝 Next Steps

1. Replace the sample flashcard data with your own
2. Test all the required features
3. Add stretch features as desired
4. Create a GIF walkthrough for your README
5. Update the README.md with your project details and GIF
6. Commit your work to git: `git add . && git commit -m "Initial flashcard app"`

## 🐛 Troubleshooting

If you see errors:
- Make sure all files are in the correct directories
- Check that imports use correct file paths
- Verify `npm install` completed successfully
- Clear browser cache or hard refresh (Ctrl+Shift+R)

Happy coding! 🎉
