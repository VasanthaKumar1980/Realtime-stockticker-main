import { useState } from 'react';

interface AddSymbolFormProps {
  onAdd: (symbol: string) => void;
}

export const AddSymbolForm = ({ onAdd }: AddSymbolFormProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const symbol = input.trim().toUpperCase();
    if (symbol) {
      onAdd(symbol);
      setInput('');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Symbol</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. NIFTY, AAPL"
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
};
