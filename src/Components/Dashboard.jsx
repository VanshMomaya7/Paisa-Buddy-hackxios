import React from 'react';
import useAuthStore from '../store/useAuthStore';


const Dashboard = () => {
    const { user } = useAuthStore();

    return (
        <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] p-8 pt-32">
            {/* Main Content Area */}

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Welcome Card */}
                <div className="md:col-span-2 bg-[#1E3A2F] text-white rounded-[32px] p-10 flex flex-col justify-between min-h-[300px]">
                    <div>
                        <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-widest rounded-lg mb-4">
                            Live Status
                        </div>
                        <h1 className="text-4xl font-bold mb-4">
                            Welcome back, <br />
                            <span className="text-emerald-400">{user?.displayName || user?.email?.split('@')[0] || "Trader"}</span>
                        </h1>
                        <p className="text-white/60 max-w-md">
                            Your autonomous financial agent is currently monitoring 12 liquidity streams. No immediate risks detected.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest opacity-50">Cashflow</span>
                            <span className="text-2xl font-mono">₹1,24,000</span>
                        </div>
                        <div className="w-[1px] h-full bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest opacity-50">Burn Rate</span>
                            <span className="text-2xl font-mono text-emerald-400">-₹12,400</span>
                        </div>
                    </div>
                </div>

                {/* Action Card */}
                <div className="bg-white border border-[#CFE3D8] rounded-[32px] p-8 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 bg-[#E6EFEA] rounded-2xl flex items-center justify-center text-xl mb-6">
                            ⚡
                        </div>
                        <h3 className="text-xl font-bold mb-2">Your Actions</h3>
                        <p className="text-gray-500 text-sm">Approvals pending for automated buffer transfers.</p>
                    </div>

                    <button className="w-full mt-8 bg-[#FAFAF7] border border-[#CFE3D8] py-3 rounded-xl text-xs font-bold hover:bg-[#E6EFEA] transition-colors">
                        View 3 Pending Actions
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {['Liquidity Score', 'Debt Shield', 'Savings Rate', 'Credit Health'].map((item) => (
                        <div key={item} className="bg-white border border-[#CFE3D8] p-6 rounded-[24px]">
                            <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">{item}</h4>
                            <div className="text-2xl font-mono font-bold text-[#1E3A2F]">98/100</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
