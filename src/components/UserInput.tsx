export default function UserInput({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Start typing here..."
      autoFocus
      disabled={disabled}
    />
  );
}
