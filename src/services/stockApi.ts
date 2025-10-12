import { StockData } from '../types/stock';

const DEMO_STOCKS = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'AMZN', 'META', 'NVDA', 'NFLX'];

const mockStockData: Record<string, { basePrice: number; volatility: number }> = {
  AAPL: { basePrice: 175, volatility: 2 },
  MSFT: { basePrice: 380, volatility: 3 },
  GOOGL: { basePrice: 140, volatility: 2 },
  TSLA: { basePrice: 240, volatility: 8 },
  AMZN: { basePrice: 145, volatility: 3 },
  META: { basePrice: 320, volatility: 4 },
  NVDA: { basePrice: 480, volatility: 10 },
  NFLX: { basePrice: 450, volatility: 5 },
};

let priceCache: Record<string, number> = {};

export const generateMockStockData = (symbol: string): StockData => {
  const config = mockStockData[symbol] || { basePrice: 100, volatility: 2 };

  if (!priceCache[symbol]) {
    priceCache[symbol] = config.basePrice;
  }

  const change = (Math.random() - 0.5) * config.volatility;
  priceCache[symbol] += change;

  priceCache[symbol] = Math.max(priceCache[symbol], config.basePrice * 0.8);
  priceCache[symbol] = Math.min(priceCache[symbol], config.basePrice * 1.2);

  const price = priceCache[symbol];
  const changePercent = (change / config.basePrice) * 100;

  return {
    symbol,
    price: Number(price.toFixed(2)),
    change: Number(change.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2)),
    lastUpdate: new Date().toLocaleTimeString(),
  };
};

export const getTickerSymbols = (): string[] => {
  return DEMO_STOCKS;
};

export const generateChartData = (symbol: string, points: number = 50): number[] => {
  const config = mockStockData[symbol] || { basePrice: 100, volatility: 2 };
  const data: number[] = [];
  let currentPrice = config.basePrice;

  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * config.volatility * 0.5;
    currentPrice += change;
    data.push(currentPrice);
  }

  return data;
};
