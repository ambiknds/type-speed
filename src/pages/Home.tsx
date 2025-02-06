import { useState } from 'react';
import Header from '../components/Header';
import TypingTest from '../components/TypingTest';
import Results from '../components/Results';
import Leaderboard from '../components/Leaderboard';
import type { DifficultyLevel } from "../utils/sampleTexts"
// import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState({ wpm: 0, accuracy: 0, time: 0, difficulty: "easy" as DifficultyLevel })

  const handleTestComplete = (
    testResults: { wpm: number; accuracy: number; time: number },
    difficulty: DifficultyLevel,
  ) => {
    setResults({ ...testResults, difficulty })
    setShowResults(true)
  }

  const handleRestartTest = () => {
    setShowResults(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      {!showResults ? (
        <TypingTest onTestComplete={handleTestComplete} />
      ) : (
        <Results results={results} onRestart={handleRestartTest} />
      )}
      <Leaderboard />
      {/* <Analytics /> */}
    </main>
  )
}


