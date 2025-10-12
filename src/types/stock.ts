export interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  lastUpdate: string;
}

export interface StockQuote {
  '01. symbol': string;
  '05. price': string;
  '09. change': string;
  '10. change percent': string;
}

export interface ChartDataPoint {
  time: string;
  price: number;
}
