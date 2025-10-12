import { AnimatedChart } from './AnimatedChart';

interface DetailsPanelProps {
  symbols: string[];
}

export const DetailsPanel = ({ symbols }: DetailsPanelProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Details</h2>
      <div className="space-y-6">
        {symbols.map((symbol) => (
          <div key={symbol}>
            <div className="text-sm font-semibold text-gray-900 mb-3">{symbol}</div>
            <div className="h-24">
              <AnimatedChart symbol={symbol} color="#3b82f6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
