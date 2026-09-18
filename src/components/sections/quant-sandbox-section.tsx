'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/shared/reveal';
import { Calculator, Play, RefreshCw, BarChart3, TrendingUp, Cpu, Info } from 'lucide-react';

// Deterministic pseudo-random number generator (Mulberry32)
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function QuantSandboxSection() {
  const [activeTab, setActiveTab] = useState<'montecarlo' | 'footballfield'>('montecarlo');

  // --- Monte Carlo Simulation State ---
  const [initialPrice, setInitialPrice] = useState<number>(100);
  const [expectedReturn, setExpectedReturn] = useState<number>(14); // in %
  const [volatility, setVolatility] = useState<number>(22); // in %
  const [riskFreeRate, setRiskFreeRate] = useState<number>(4.5); // in %
  const [days, setDays] = useState<number>(180);
  const [seed, setSeed] = useState<number>(1);

  // --- Football Field State ---
  const [wacc, setWacc] = useState<number>(9.0); // %
  const [terminalGrowth, setTerminalGrowth] = useState<number>(2.5); // %

  // Generate Monte Carlo GBM Paths
  const { paths, stats } = useMemo(() => {
    const numPaths = 12;
    const dt = 1 / 252;
    const steps = Math.floor(days * (252 / 365));
    const mu = expectedReturn / 100;
    const sigma = volatility / 100;
    const rf = riskFreeRate / 100;

    const generatedPaths: number[][] = [];
    const terminalPrices: number[] = [];

    // Seeded deterministic PRNG to guarantee exact match across SSR & client hydration
    const prng = mulberry32(seed * 2654435761 + days * 7919 + Math.floor(initialPrice * 100));

    // Box-Muller transformation for normal distribution
    const randomNormal = () => {
      let u = 0,
        v = 0;
      while (u === 0) u = prng();
      while (v === 0) v = prng();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    for (let p = 0; p < numPaths; p++) {
      const path = [initialPrice];
      let current = initialPrice;
      for (let t = 1; t <= steps; t++) {
        const drift = (mu - 0.5 * sigma * sigma) * dt;
        const diffusion = sigma * Math.sqrt(dt) * randomNormal();
        current = current * Math.exp(drift + diffusion);
        path.push(current);
      }
      generatedPaths.push(path);
      terminalPrices.push(current);
    }

    const meanTerminal = terminalPrices.reduce((a, b) => a + b, 0) / numPaths;
    const sharpeRatio = sigma > 0 ? (mu - rf) / sigma : 0;
    const var95 = initialPrice * (1.645 * (sigma / Math.sqrt(252)));

    return {
      paths: generatedPaths,
      stats: {
        meanTerminal: meanTerminal.toFixed(2),
        sharpeRatio: sharpeRatio.toFixed(2),
        var95: var95.toFixed(2),
        steps,
      },
    };
  }, [initialPrice, expectedReturn, volatility, riskFreeRate, days, seed]);

  // Football Field Calculated Valuation Ranges based on WACC and growth
  const footballFieldRanges = useMemo(() => {
    // Dynamic shift based on WACC and Terminal Growth
    const dcfBase = 135 * (9.0 / wacc) * (1 + (terminalGrowth - 2.5) * 0.1);
    const dcfMin = Math.round(dcfBase * 0.85);
    const dcfMax = Math.round(dcfBase * 1.22);

    return [
      { name: '52-Week Range', low: 88, high: 146, color: 'bg-neutral-500/70', desc: 'Market Historical Extremes' },
      { name: 'P/E Multiples (18x - 25x)', low: 95, high: 140, color: 'bg-amber-600/70', desc: 'Peer Comparables' },
      { name: 'EV/EBITDA (10x - 14x)', low: 104, high: 152, color: 'bg-emerald-600/70', desc: 'Enterprise Multiples' },
      { name: 'DCF Model (Unlevered FCF)', low: dcfMin, high: dcfMax, color: 'bg-primary', desc: 'Intrinsic Cash Flow' },
    ];
  }, [wacc, terminalGrowth]);

  // SVG Chart bounds
  const minVal = 60;
  const maxVal = 200;
  const getXPercent = (val: number) => Math.max(0, Math.min(100, ((val - minVal) / (maxVal - minVal)) * 100));

  return (
    <section id="quant-sandbox" className="container mx-auto py-24 sm:py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Reveal>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Quantitative <span className="text-primary">Sandbox</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Simulate stochastic price paths using Geometric Brownian Motion and explore dynamic Equity Valuation football field models in real-time.
            </p>

            {/* Tab Selector */}
            <div className="mt-8 inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-card border border-border/60 shadow-lg max-w-full w-full sm:w-auto gap-1">
              <button
                onClick={() => setActiveTab('montecarlo')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                  activeTab === 'montecarlo'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monte Carlo & Sharpe Simulator
              </button>
              <button
                onClick={() => setActiveTab('footballfield')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                  activeTab === 'footballfield'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Football Field Valuation Chart
              </button>
            </div>
          </Reveal>
        </div>

        {/* Tab 1: Monte Carlo Simulation */}
        {activeTab === 'montecarlo' && (
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Controls Column */}
              <div className="lg:col-span-4 space-y-6">
                <Card className="border-border/50 bg-card/80 backdrop-blur-xl p-6 shadow-xl">
                  <CardHeader className="p-0 pb-4 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-headline text-lg font-bold text-foreground flex items-center gap-2">
                        <Calculator className="h-4 w-4 text-primary" /> Parameters
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">
                        Stochastic GBM: dS = μS dt + σS dW
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSeed((s) => s + 1)}
                      className="h-8 w-8 rounded-lg border-border hover:border-primary/50"
                      title="Re-simulate paths"
                    >
                      <RefreshCw className="h-3.5 w-3.5 text-primary" />
                    </Button>
                  </CardHeader>

                  <CardContent className="p-0 space-y-5 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">Initial Asset Price (S₀)</span>
                        <span className="text-primary font-bold">${initialPrice}</span>
                      </div>
                      <Slider
                        value={[initialPrice]}
                        min={50}
                        max={300}
                        step={5}
                        onValueChange={(val) => setInitialPrice(val[0])}
                        className="py-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">Expected Drift / Return (μ)</span>
                        <span className="text-primary font-bold">+{expectedReturn}%</span>
                      </div>
                      <Slider
                        value={[expectedReturn]}
                        min={-10}
                        max={40}
                        step={1}
                        onValueChange={(val) => setExpectedReturn(val[0])}
                        className="py-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">Annual Volatility (σ)</span>
                        <span className="text-primary font-bold">{volatility}%</span>
                      </div>
                      <Slider
                        value={[volatility]}
                        min={8}
                        max={60}
                        step={1}
                        onValueChange={(val) => setVolatility(val[0])}
                        className="py-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">Risk-Free Rate (Rf)</span>
                        <span className="text-primary font-bold">{riskFreeRate}%</span>
                      </div>
                      <Slider
                        value={[riskFreeRate]}
                        min={1}
                        max={8}
                        step={0.25}
                        onValueChange={(val) => setRiskFreeRate(val[0])}
                        className="py-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">Time Horizon (Days)</span>
                        <span className="text-primary font-bold">{days} Days</span>
                      </div>
                      <Slider
                        value={[days]}
                        min={30}
                        max={365}
                        step={15}
                        onValueChange={(val) => setDays(val[0])}
                        className="py-1"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Key Metrics Output */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase">Sharpe Ratio</p>
                    <p className="text-2xl font-bold font-headline text-primary mt-1">{stats.sharpeRatio}</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Risk-Adjusted Return</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/50 text-center">
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase">1-Day VaR (95%)</p>
                    <p className="text-2xl font-bold font-headline text-rose-400 mt-1">${stats.var95}</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">Parametric Risk</p>
                  </div>
                </div>
              </div>

              {/* Simulation Chart Canvas */}
              <div className="lg:col-span-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-xl p-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-border/40">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-foreground flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" /> Geometric Brownian Motion Paths (N=12)
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Simulated stochastic trajectories over {days} days • Mean Expected: ${stats.meanTerminal}
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border border-primary/30 font-mono text-xs">
                      Dt = 1/252 yr
                    </Badge>
                  </div>

                  {/* SVG Multi-Path Line Graph */}
                  <div className="relative w-full h-[320px] bg-background/50 rounded-xl border border-border/40 p-4 overflow-hidden flex flex-col justify-between">
                    {/* Gridlines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                      <div className="border-b border-border w-full" />
                      <div className="border-b border-border w-full" />
                      <div className="border-b border-border w-full" />
                      <div className="border-b border-border w-full" />
                    </div>

                    <svg className="w-full h-full overflow-hidden" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {paths.map((p, idx) => {
                        const totalSteps = p.length - 1;
                        const minP = initialPrice * 0.5;
                        const maxP = initialPrice * 1.8;
                        const points = p
                          .map((val, step) => {
                            const x = (step / totalSteps) * 100;
                            const y = 100 - ((val - minP) / (maxP - minP)) * 100;
                            return `${x.toFixed(1)},${y.toFixed(1)}`;
                          })
                          .join(' ');

                        const isTop = idx === 0;
                        return (
                          <polyline
                            key={idx}
                            fill="none"
                            stroke={isTop ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.35)'}
                            strokeWidth={isTop ? '2.5' : '1.2'}
                            points={points}
                            className="transition-all duration-300"
                          />
                        );
                      })}
                    </svg>

                    <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-muted-foreground font-mono pt-2 border-t border-border/40 z-10 flex-wrap gap-1">
                      <span>Day 0 (${initialPrice})</span>
                      <span>Day {Math.round(days / 2)}</span>
                      <span>Day {days} (Exp: ${stats.meanTerminal})</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Reveal>
        )}

        {/* Tab 2: Football Field Valuation Chart */}
        {activeTab === 'footballfield' && (
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Model Adjustments */}
              <div className="lg:col-span-4 space-y-6">
                <Card className="border-border/50 bg-card/80 backdrop-blur-xl p-6 shadow-xl">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="font-headline text-lg font-bold text-foreground flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-primary" /> DCF Sensitivities
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      Adjust discount & growth assumptions to update valuation bands.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-5 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">WACC Discount Rate</span>
                        <span className="text-primary font-bold">{wacc.toFixed(1)}%</span>
                      </div>
                      <Slider
                        value={[wacc]}
                        min={7.0}
                        max={12.0}
                        step={0.2}
                        onValueChange={(val) => setWacc(val[0])}
                        className="py-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1.5">
                        <span className="text-muted-foreground">Terminal Growth Rate (g)</span>
                        <span className="text-primary font-bold">{terminalGrowth.toFixed(1)}%</span>
                      </div>
                      <Slider
                        value={[terminalGrowth]}
                        min={1.5}
                        max={4.0}
                        step={0.1}
                        onValueChange={(val) => setTerminalGrowth(val[0])}
                        className="py-1"
                      />
                    </div>

                    <div className="p-3.5 rounded-xl bg-background/60 border border-border/40 text-xs text-muted-foreground">
                      <p className="flex items-center gap-1 font-semibold text-foreground mb-1">
                        <Info className="h-3.5 w-3.5 text-primary" /> Methodology Note
                      </p>
                      Football Field analysis benchmarks Multiple-based approaches (P/E, EV/EBITDA) against Intrinsic Discounted Cash Flow models to establish fair value bounds.
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Football Field Chart */}
              <div className="lg:col-span-8">
                <Card className="border-border/50 bg-card/80 backdrop-blur-xl p-6 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-border/40">
                    <div>
                      <h3 className="font-headline text-xl font-bold text-foreground">
                        Equity Valuation Football Field Chart
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Implied Per Share Value Range ($) • Current Market Price: $128.00
                      </p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border border-primary/30 text-xs font-bold">
                      Implied Fair Value: $118 - $162
                    </Badge>
                  </div>

                  {/* Horizontal Range Bars */}
                  <div className="space-y-6 pt-2 pb-4">
                    {footballFieldRanges.map((range) => {
                      const leftPercent = Math.max(0, Math.min(95, getXPercent(range.low)));
                      const rawWidth = getXPercent(range.high) - leftPercent;
                      const widthPercent = Math.max(4, Math.min(rawWidth, 100 - leftPercent));

                      return (
                        <div key={range.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-foreground truncate mr-2">{range.name}</span>
                            <span className="text-primary font-bold shrink-0">${range.low} — ${range.high}</span>
                          </div>

                          <div className="relative h-7 w-full bg-background/60 rounded-lg border border-border/40 overflow-hidden flex items-center">
                            {/* Current Price Marker line */}
                            <div
                              className="absolute top-0 bottom-0 w-0.5 bg-rose-500 z-20"
                              style={{ left: `${getXPercent(128)}%` }}
                              title="Current Market Price: $128"
                            />

                            {/* Range Bar */}
                            <div
                              className={`h-full ${range.color} rounded-md transition-all duration-500 shadow-md flex items-center justify-center text-[10px] text-white font-bold px-2 truncate`}
                              style={{
                                marginLeft: `${leftPercent}%`,
                                width: `${widthPercent}%`,
                              }}
                            >
                              ${range.low} - ${range.high}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Axis Legend */}
                  <div className="flex justify-between text-[11px] font-mono text-muted-foreground pt-4 border-t border-border/40">
                    <span>${minVal}</span>
                    <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-rose-500" /> Current: $128
                    </span>
                    <span>${maxVal}+</span>
                  </div>
                </Card>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
