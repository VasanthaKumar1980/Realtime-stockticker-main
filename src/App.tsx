import { useState, useEffect } from 'react';
import { TickerTape } from './components/TickerTape';
import { WatchlistCard } from './components/WatchlistCard';
import { AddSymbolForm } from './components/AddSymbolForm';
import { DetailsPanel } from './components/DetailsPanel';
import { StockData } from './types/stock';
import { generateMockStockData, getTickerSymbols } from './services/stockApi';

function App() {
  const [tickerStocks, setTickerStocks] = useState<StockData[]>([]);
  const [watchlist, setWatchlist] = useState<string[]>(['AAPL', 'MSFT', 'TSLA']);
  const [watchlistData, setWatchlistData] = useState<StockData[]>([]);

  useEffect(() => {
    const updateTickerStocks = () => {
      const symbols = getTickerSymbols();
      const updated = symbols.map((symbol) => generateMockStockData(symbol));
      setTickerStocks(updated);
    };

    updateTickerStocks();
    const interval = setInterval(updateTickerStocks, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateWatchlist = () => {
      const updated = watchlist.map((symbol) => generateMockStockData(symbol));
      setWatchlistData(updated);
    };

    updateWatchlist();
    const interval = setInterval(updateWatchlist, 3000);

    return () => clearInterval(interval);
  }, [watchlist]);

  const handleAddSymbol = (symbol: string) => {
    if (!watchlist.includes(symbol)) {
      setWatchlist([...watchlist, symbol]);
    }
  };

  const handleRemoveSymbol = (symbol: string) => {
    setWatchlist(watchlist.filter((s) => s !== symbol));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Live Stocks</h1>
          <span className="text-sm text-red-500 font-medium">Mock data</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <TickerTape stocks={tickerStocks} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Watchlist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {watchlistData.map((stock) => (
                  <WatchlistCard
                    key={stock.symbol}
                    stock={stock}
                    onRemove={handleRemoveSymbol}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <AddSymbolForm onAdd={handleAddSymbol} />
            <DetailsPanel symbols={watchlist} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
