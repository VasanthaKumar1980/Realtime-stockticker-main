import { useEffect, useRef } from 'react';
import { StockData } from '../types/stock';

interface WatchlistCardProps {
  stock: StockData;
  onRemove: (symbol: string) => void;
}

export const WatchlistCard = ({ stock, onRemove }: WatchlistCardProps) => {
  const priceRef = useRef<HTMLDivElement>(null);
  const prevPriceRef = useRef<number>(stock.price);

  useEffect(() => {
    if (priceRef.current && prevPriceRef.current !== stock.price) {
      const isIncrease = stock.price > prevPriceRef.current;
      priceRef.current.classList.remove('price-flash-up', 'price-flash-down');

      void priceRef.current.offsetWidth;

      priceRef.current.classList.add(isIncrease ? 'price-flash-up' : 'price-flash-down');

      prevPriceRef.current = stock.price;
    }
  }, [stock.price]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="text-sm text-gray-600 font-medium mb-1">{stock.symbol}</div>
          <div
            ref={priceRef}
            className="text-3xl font-bold text-gray-900 transition-all duration-200"
          >
            {stock.price.toFixed(2)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 mb-1">Last</div>
          <div className="text-sm font-medium text-gray-700">{stock.lastUpdate}</div>
        </div>
      </div>
      <button
        onClick={() => onRemove(stock.symbol)}
        className="mt-3 w-full bg-red-50 hover:bg-red-100 text-red-700 text-sm font-medium py-2 px-4 rounded-md transition-colors"
      >
        Remove
      </button>
    </div>
  );
};
