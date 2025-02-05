import { useState, useEffect } from 'react';

interface TimerProps {
  duration: number;
  onTimerEnd: () => void;
}

export default function Timer({ duration, onTimerEnd }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      onTimerEnd();
    }
  }, [timeLeft, onTimerEnd]);

  return <div className="text-xl mt-4">Time left: {timeLeft} seconds</div>;
}
