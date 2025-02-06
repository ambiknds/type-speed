export default function Results({
  results,
  onRestart,
}: { results: { wpm: number; accuracy: number; time: number; difficulty: string }; onRestart: () => void }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Test Results</h2>
      <p className="text-xl">Words per minute: {results.wpm}</p>
      <p className="text-xl">Accuracy: {results.accuracy}%</p>
      <p className="text-xl">Test duration: {results.time} seconds</p>
      <p className="text-xl">Difficulty: {results.difficulty}</p>
      <button
        onClick={onRestart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Restart Test
      </button>
    </div>
  )
}

