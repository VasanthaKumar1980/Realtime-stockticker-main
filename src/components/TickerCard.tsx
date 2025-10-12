import { useEffect, useRef } from 'react';
import { StockData } from '../types/stock';

interface TickerCardProps {
  stock: StockData;
}

export const TickerCard = ({ stock }: TickerCardProps) => {
  const isPositive = stock.change >= 0;
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
    <div className="flex-shrink-0 bg-gray-50 rounded-lg px-4 py-3 min-w-[140px] transition-all duration-300">
      <div className="text-sm text-gray-600 font-medium mb-1">{stock.symbol}</div>
      <div
        ref={priceRef}
        className="text-2xl font-bold text-gray-900 mb-1 transition-all duration-200"
      >
        {stock.price.toFixed(2)}
      </div>
      <div className={`text-sm font-medium transition-colors duration-200 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '+' : ''}{stock.change.toFixed(2)}
      </div>
    </div>
  );
};
