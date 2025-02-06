import { useState, useEffect, useCallback, useMemo } from 'react';
import TextDisplay from './TextDisplay';
import UserInput from './UserInput';
import Timer from './Timer';
import { sampleTexts, type DifficultyLevel } from "../utils/sampleTexts";

export default function TypingTest({
  onTestComplete,
}: { onTestComplete: (results: { wpm: number; accuracy: number; time: number }, difficulty: DifficultyLevel) => void }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [mistakes, setMistakes] = useState(0)
  const [duration, setDuration] = useState(60)
  const [isTestActive, setIsTestActive] = useState(false)
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("easy")
  const [selectedTextIndex, setSelectedTextIndex] = useState(0)

  const words = useMemo(() => sampleTexts[difficulty][selectedTextIndex].split(" "), [difficulty, selectedTextIndex])

  const handleInputChange = useCallback(
    (input: string) => {
      if (!startTime) {
        setStartTime(Date.now())
        setIsTestActive(true)
      }

      setUserInput(input)

      if (input.endsWith(" ")) {
        if (input.trim() !== words[currentWordIndex]) {
          setMistakes((prev) => prev + 1)
        }
        setCurrentWordIndex((prev) => prev + 1)
        setUserInput("")
      }
    },
    [currentWordIndex, startTime, words],
  )

  const handleTimerEnd = useCallback(() => {
    setEndTime(Date.now())
    setIsTestActive(false)
  }, [])

  useEffect(() => {
    if (endTime && startTime) {
      const timeInMinutes = duration / 60
      const wordsTyped = currentWordIndex
  
      if (wordsTyped > 0) {
        const wpm = Math.round(wordsTyped / timeInMinutes)
        const accuracy = Math.max(0, Math.round(((wordsTyped - mistakes) / wordsTyped) * 100))
  
        onTestComplete({ wpm, accuracy, time: duration }, difficulty) // Pass difficulty
      } else {
        onTestComplete({ wpm: 0, accuracy: 0, time: duration }, difficulty) // Pass difficulty
      }
    }
  }, [endTime, startTime, currentWordIndex, mistakes, onTestComplete, duration, difficulty])
  
  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as DifficultyLevel)
    setSelectedTextIndex(0)
    resetTest()
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTextIndex(Number(e.target.value))
    resetTest()
  }

  const resetTest = () => {
    setCurrentWordIndex(0)
    setUserInput("")
    setStartTime(null)
    setEndTime(null)
    setMistakes(0)
    setIsTestActive(false)
  }

  return (
    <div className="w-full max-w-2xl">
      {!isTestActive && (
        <div className="mb-4 space-y-4">
          <div>
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
              Select difficulty:
            </label>
            <select
              id="difficulty"
              value={difficulty}
              onChange={handleDifficultyChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
              Select text:
            </label>
            <select
              id="text"
              value={selectedTextIndex}
              onChange={handleTextChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {sampleTexts[difficulty].map((_, index) => (
                <option key={index} value={index}>
                  Text {index + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Select test duration:
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value={30}>30 seconds</option>
              <option value={60}>1 minute</option>
              <option value={120}>2 minutes</option>
              <option value={300}>5 minutes</option>
            </select>
          </div>
        </div>
      )}
      <TextDisplay words={words} currentWordIndex={currentWordIndex} userInput={userInput} />
      <UserInput value={userInput} onChange={handleInputChange} disabled={!isTestActive && startTime !== null} />
      {isTestActive && <Timer duration={duration} onTimerEnd={handleTimerEnd} />}
    </div>
  )
}

