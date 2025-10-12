import { useEffect, useRef, useState } from 'react';

interface AnimatedChartProps {
  symbol: string;
  color?: string;
}

export const AnimatedChart = ({ symbol, color = '#3b82f6' }: AnimatedChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const animationRef = useRef<number>();
  const startPriceRef = useRef<number>(100);

  useEffect(() => {
    const basePrices: Record<string, number> = {
      AAPL: 175,
      MSFT: 380,
      GOOGL: 140,
      TSLA: 240,
      AMZN: 145,
      META: 320,
      NVDA: 480,
      NFLX: 450,
    };

    startPriceRef.current = basePrices[symbol] || 100;
    const initial = Array(60).fill(startPriceRef.current);
    setDataPoints(initial);
  }, [symbol]);

  useEffect(() => {
    const updateData = () => {
      setDataPoints((prev) => {
        const lastPrice = prev[prev.length - 1] || startPriceRef.current;
        const volatility = startPriceRef.current * 0.01;
        const change = (Math.random() - 0.5) * volatility;
        const newPrice = Math.max(
          startPriceRef.current * 0.85,
          Math.min(startPriceRef.current * 1.15, lastPrice + change)
        );

        const newData = [...prev.slice(1), newPrice];
        return newData;
      });
    };

    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dataPoints.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      const padding = 10;
      const width = rect.width - padding * 2;
      const height = rect.height - padding * 2;

      const min = Math.min(...dataPoints);
      const max = Math.max(...dataPoints);
      const range = max - min || 1;

      const points = dataPoints.map((value, index) => {
        const x = padding + (index / (dataPoints.length - 1)) * width;
        const y = padding + height - ((value - min) / range) * height;
        return { x, y };
      });

      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      gradient.addColorStop(0, color + '40');
      gradient.addColorStop(1, color + '00');

      ctx.beginPath();
      ctx.moveTo(points[0].x, rect.height);
      points.forEach((point, index) => {
        if (index === 0) {
          ctx.lineTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.lineTo(points[points.length - 1].x, rect.height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      points.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });

      ctx.stroke();

      const lastPoint = points[points.length - 1];
      ctx.beginPath();
      ctx.arc(lastPoint.x, lastPoint.y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dataPoints, color]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
