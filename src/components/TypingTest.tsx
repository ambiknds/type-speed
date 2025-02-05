import { useState, useEffect, useCallback, useMemo } from 'react';
import TextDisplay from './TextDisplay';
import UserInput from './UserInput';
import Timer from './Timer';

const sampleText =
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Typing practice is an excellent way to improve your speed and accuracy on the keyboard. Keep practicing and you'll see improvement in no time!";

export default function TypingTest({
  onTestComplete,
}: {
  onTestComplete: (results: {
    wpm: number;
    accuracy: number;
    time: number;
  }) => void;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [duration, setDuration] = useState(60);
  const [isTestActive, setIsTestActive] = useState(false);

  const words = useMemo(() => sampleText.split(' '), []);

  const handleInputChange = useCallback(
    (input: string) => {
      if (!startTime) {
        setStartTime(Date.now());
        setIsTestActive(true);
      }

      setUserInput(input);

      if (input.endsWith(' ')) {
        if (input.trim() !== words[currentWordIndex]) {
          setMistakes((prev) => prev + 1);
        }
        setCurrentWordIndex((prev) => prev + 1);
        setUserInput('');
      }
    },
    [currentWordIndex, startTime, words]
  );

  const handleTimerEnd = useCallback(() => {
    setEndTime(Date.now());
    setIsTestActive(false);
  }, []);

  useEffect(() => {
    if (endTime && startTime) {
      const timeInMinutes = duration / 60;
      const wordsTyped = currentWordIndex;
      const wpm = Math.round(wordsTyped / timeInMinutes);
      const accuracy = Math.round(((wordsTyped - mistakes) / wordsTyped) * 100);

      onTestComplete({ wpm, accuracy, time: duration });
    }
  }, [
    endTime,
    startTime,
    currentWordIndex,
    mistakes,
    onTestComplete,
    duration,
  ]);

  return (
    <div className="w-full max-w-2xl">
      {!isTestActive && (
        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
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
      )}
      <TextDisplay
        words={words}
        currentWordIndex={currentWordIndex}
        userInput={userInput}
      />
      <UserInput
        value={userInput}
        onChange={handleInputChange}
        disabled={!isTestActive && startTime !== null}
      />
      {isTestActive && (
        <Timer duration={duration} onTimerEnd={handleTimerEnd} />
      )}
    </div>
  );
}
