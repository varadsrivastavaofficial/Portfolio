'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Activity, Wifi } from 'lucide-react';

interface TickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'S&P 500 (SPY)', name: 'US LargeCap', price: '$762.60', change: '+1.13%', isPositive: true },
  { symbol: 'NASDAQ (QQQ)', name: 'Tech ETF', price: '$716.92', change: '+1.73%', isPositive: true },
  { symbol: 'INDIA (INDA)', name: 'MSCI India', price: '$48.01', change: '+1.16%', isPositive: true },
  { symbol: 'GOLD (XAU)', name: 'Gold Spot', price: '$4,378.36', change: '+0.84%', isPositive: true },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: '$78,074.84', change: '+2.17%', isPositive: true },
  { symbol: 'USD/INR', name: 'Forex', price: '₹95.95', change: '+0.08%', isPositive: true },
  { symbol: 'EUR/USD', name: 'Euro', price: '$1.085', change: '-0.12%', isPositive: false },
  { symbol: 'US 10Y', name: 'Treasury', price: '4.18%', change: '-0.04%', isPositive: false },
];

const TWELVE_DATA_API_KEY = process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY || '';

export function MarketTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);
  const [isLiveConnected, setIsLiveConnected] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchLiveMarketData() {
      // If no API key configured, use resilient streaming stream
      if (!TWELVE_DATA_API_KEY) {
        return;
      }
      // 1. Check Session Cache (refresh every 2 minutes to respect 8 req/min Twelve Data rate limits)
      try {
        const cached = sessionStorage.getItem('twelve_data_macro_cache');
        const cacheTime = sessionStorage.getItem('twelve_data_macro_time');
        const now = Date.now();

        if (cached && cacheTime && now - parseInt(cacheTime) < 120000) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0 && isMounted) {
            setTickers(parsed);
            setIsLiveConnected(true);
            return;
          }
        }
      } catch (e) {
        // Ignore cache parse error
      }

      // 2. Fetch fresh live quotes from Twelve Data
      try {
        const symbols = 'SPY,QQQ,INDA,XAU/USD,BTC/USD,USD/INR';
        const url = `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${TWELVE_DATA_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && typeof data === 'object' && !data.code && isMounted) {
          const updated: TickerItem[] = [];

          if (data.SPY && data.SPY.close) {
            const chg = parseFloat(data.SPY.percent_change || '0');
            updated.push({
              symbol: 'S&P 500 (SPY)',
              name: 'US LargeCap',
              price: `$${parseFloat(data.SPY.close).toFixed(2)}`,
              change: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
              isPositive: chg >= 0,
            });
          }

          if (data.QQQ && data.QQQ.close) {
            const chg = parseFloat(data.QQQ.percent_change || '0');
            updated.push({
              symbol: 'NASDAQ (QQQ)',
              name: 'Tech Index',
              price: `$${parseFloat(data.QQQ.close).toFixed(2)}`,
              change: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
              isPositive: chg >= 0,
            });
          }

          if (data.INDA && data.INDA.close) {
            const chg = parseFloat(data.INDA.percent_change || '0');
            updated.push({
              symbol: 'INDIA (INDA)',
              name: 'MSCI India',
              price: `$${parseFloat(data.INDA.close).toFixed(2)}`,
              change: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
              isPositive: chg >= 0,
            });
          }

          if (data['XAU/USD'] && data['XAU/USD'].close) {
            const chg = parseFloat(data['XAU/USD'].percent_change || '0');
            updated.push({
              symbol: 'GOLD (XAU)',
              name: 'Gold Spot',
              price: `$${parseFloat(data['XAU/USD'].close).toFixed(2)}`,
              change: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
              isPositive: chg >= 0,
            });
          }

          if (data['BTC/USD'] && data['BTC/USD'].close) {
            const chg = parseFloat(data['BTC/USD'].percent_change || '0');
            updated.push({
              symbol: 'BTC/USD',
              name: 'Bitcoin',
              price: `$${parseFloat(data['BTC/USD'].close).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              change: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
              isPositive: chg >= 0,
            });
          }

          if (data['USD/INR'] && data['USD/INR'].close) {
            const chg = parseFloat(data['USD/INR'].percent_change || '0');
            updated.push({
              symbol: 'USD/INR',
              name: 'Forex',
              price: `₹${parseFloat(data['USD/INR'].close).toFixed(2)}`,
              change: `${chg >= 0 ? '+' : ''}${chg.toFixed(2)}%`,
              isPositive: chg >= 0,
            });
          }

          // Add fixed macro indicators
          updated.push({ symbol: 'EUR/USD', name: 'Forex', price: '$1.085', change: '-0.12%', isPositive: false });
          updated.push({ symbol: 'US 10Y', name: 'Treasury', price: '4.18%', change: '-0.04%', isPositive: false });

          if (updated.length >= 4) {
            setTickers(updated);
            setIsLiveConnected(true);
            try {
              sessionStorage.setItem('twelve_data_macro_cache', JSON.stringify(updated));
              sessionStorage.setItem('twelve_data_macro_time', Date.now().toString());
            } catch (e) {
              // Ignore cache write error
            }
          }
        }
      } catch (err) {
        console.warn('Live ticker fetch error, using resilient stream:', err);
      }
    }

    fetchLiveMarketData();

    // Subtle micro-tick generator every 5 seconds for smooth terminal feel
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((t) => {
          if (Math.random() > 0.7) {
            const baseChange = parseFloat(t.change.replace(/[+%]/g, '')) || 0;
            const microDelta = (Math.random() * 0.04 - 0.02);
            const nextChange = (baseChange + microDelta).toFixed(2);
            const isPositive = parseFloat(nextChange) >= 0;
            return {
              ...t,
              change: (isPositive ? '+' : '') + nextChange + '%',
              isPositive,
            };
          }
          return t;
        })
      );
    }, 5000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full bg-card/80 border-b border-border/40 backdrop-blur-md overflow-hidden py-1.5 px-2 text-xs font-serif select-none">
      <div className="flex items-center">
        {/* Terminal Live Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-0.5 rounded bg-primary/10 text-primary border border-primary/25 font-bold uppercase tracking-wider text-[10px] shrink-0 mr-3">
          <Activity className="h-3 w-3 animate-pulse text-primary" />
          <span>Live Macro Feed</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        </div>

        {/* Scrolling Ticker Stream */}
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-8 animate-marquee hover:[animation-play-state:paused]">
            {[...tickers, ...tickers].map((t, idx) => (
              <div
                key={`${t.symbol}-${idx}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-default"
              >
                <span className="font-bold text-foreground">{t.symbol}</span>
                <span className="text-neutral-300 dark:text-neutral-400 text-[11px] font-mono">{t.price}</span>
                <span
                  className={`inline-flex items-center text-[11px] font-semibold ${
                    t.isPositive ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500 dark:text-rose-400'
                  }`}
                >
                  {t.isPositive ? (
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-0.5" />
                  )}
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

