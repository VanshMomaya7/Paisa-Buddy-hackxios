import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">
            {/* HEADER */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-14 bg-white/40 backdrop-blur-xl border border-[#CFE3D8]/30 rounded-full flex items-center justify-between px-8 z-50">
                <div className="text-lg font-black tracking-tighter text-[#1E3A2F]">FINCOGNIA</div>
                <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    <span>Forecast</span><span>Security</span><span>Ledger</span>
                </div>
                <div className="w-8 h-8 bg-[#1E3A2F] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer">↗</div>
            </nav>

            <main className="relative min-h-screen w-full flex flex-col items-center pt-32">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

                {/* HERO SECTION */}
                <div className="max-w-7xl mx-auto text-center relative z-20 mb-12 px-6">
                    <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-widest uppercase bg-[#E6EFEA] text-[#1E3A2F] rounded-full border border-[#CFE3D8]">
                        Agentic Finance for Gig-Earners
                    </span>

                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8">
                        Finance that <br />
                        <span className="text-gray-300 italic font-light">anticipates</span>.
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed mb-12">
                        Fincognia is an AI financial co-pilot that forecasts cashflow storms
                        and <span className="text-[#1E3A2F] font-semibold">autonomously acts</span> to prevent credit damage.
                    </p>

                    <div className="flex gap-3 justify-center">
                        <button className="bg-[#1E3A2F] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-2xl hover:shadow-emerald-900/20 active:scale-95 transition-all">
                            Launch Live Demo
                        </button>
                        <button
                            onClick={() => setCount((count) => count + 1)}
                            className="bg-white border border-[#CFE3D8] text-[#1E3A2F] px-8 py-4 rounded-2xl font-bold text-sm hover:shadow-lg transition-all"
                        >
                            Count: {count}
                        </button>
                    </div>
                </div>

                {/* HERO SECTION 2 */}
                <div className="relative flex-grow w-full flex flex-col items-center justify-center mb-16">
                    <div className="relative z-30 text-center px-6 mb-8">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-6">
                            Agentic <br />
                            <span className="text-gray-300 italic font-light">Capital</span>.
                        </h2>
                        <p className="max-w-md mx-auto text-sm md:text-base text-gray-500 font-medium">
                            The first AI co-pilot that doesn't just show you charts,
                            but <span className="text-[#1E3A2F] font-semibold">autonomously secures</span> your solvency.
                        </p>
                    </div>

                    {/* Placeholder for 3D Model */}
                    <div className="w-full max-w-4xl aspect-video bg-gradient-to-br from-emerald-900 to-[#1E3A2F] rounded-[40px] shadow-2xl border-[12px] border-white flex items-center justify-center">
                        <div className="text-center text-white/80 p-8">
                            <div className="text-6xl mb-4">💰</div>
                            <p className="text-sm uppercase tracking-widest font-bold">3D Model Placeholder</p>
                            <p className="text-xs opacity-60 mt-2">Add 500Ruppee.glb to /public folder</p>
                        </div>
                    </div>
                </div>

                {/* FEATURE GRID */}
                <section className="max-w-7xl mx-auto px-6 pb-32 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white border border-[#CFE3D8] rounded-[32px] p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
                            <div className="max-w-md">
                                <div className="w-12 h-12 bg-[#E6EFEA] rounded-xl flex items-center justify-center text-2xl mb-6">⛅</div>
                                <h3 className="text-3xl font-bold mb-4">Money Weather™</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Our proprietary ML model simulates 10,000+ cashflow scenarios to predict your
                                    "Financial Storms." It detects liquidity gaps before your bank does.
                                </p>
                            </div>
                            <div className="mt-10 h-32 w-full bg-[#FAFAF7] rounded-2xl border border-dashed border-[#CFE3D8] flex items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
                                [ Probabilistic Forecast Visual ]
                            </div>
                        </div>

                        <div className="bg-[#1E3A2F] text-[#FAFAF7] rounded-[32px] p-10 flex flex-col justify-between">
                            <h3 className="text-2xl font-bold leading-tight">Autonomous Agentic Actions</h3>
                            <p className="opacity-70 text-sm mt-4">
                                With your consent, Fincognia locks safety buffers and pauses
                                subscriptions when the risk of an EMI bounce exceeds 85%.
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[10px] font-mono opacity-60">MONITORING LIVE STREAMS</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOTTOM METRICS */}
                <div className="w-full max-w-6xl px-10 pb-12 flex justify-between items-center z-20 opacity-40">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">System Status</span>
                        <span className="text-xl font-mono font-bold italic">ENCRYPTED</span>
                    </div>
                    <div className="flex flex-col text-right">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime</span>
                        <span className="text-xl font-mono font-bold">99.9%</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
