export default function TextDisplay({
  words,
  currentWordIndex,
  userInput,
}: {
  words: string[];
  currentWordIndex: number;
  userInput: string;
}) {
  return (
    <div className="text-lg mb-4 p-4 bg-gray-100 rounded max-w-xl flex flex-wrap mx-auto">
      {words.map((word, index) => (
        <span
          key={index}
          className={`mr-2 ${
            index === currentWordIndex ? 'bg-yellow-200' : ''
          }`}
        >
          {index === currentWordIndex
            ? word.split('').map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={
                    letterIndex < userInput.length
                      ? userInput[letterIndex] === letter
                        ? 'text-green-600'
                        : 'text-red-600'
                      : ''
                  }
                >
                  {letter}
                </span>
              ))
            : word}
        </span>
      ))}
    </div>
  );
}
