// "use client"

// import React, { useRef, useState, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls, Environment } from "@react-three/drei";

// // Small component to handle the model loading and auto-rotation
// const MoneyModel = () => {
//   const { scene } = useGLTF("/500Ruppee.glb"); // Loads from public folder
//   const modelRef = useRef();

//   useFrame((state) => {
//     if (modelRef.current) {
//       // Gentle floating animation
//       modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
//     }
//   });

//   return <primitive ref={modelRef} object={scene} scale={1.5} />;
// };

// const FincogniaTailwind = () => {
//   const containerRef = useRef(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setRotation({ x: -y * 15, y: x * 15 });
//   };

//   return (
//     <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8]">
//       {/* 1. NAV BAR (Keep existing) */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl h-16 bg-white/70 backdrop-blur-xl border border-[#CFE3D8]/50 rounded-full flex items-center justify-between px-8 z-50 shadow-sm">
//         <div className="text-xl font-black tracking-tighter">FINCOGNIA</div>
//         <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
//           <a href="#" className="hover:text-[#1E3A2F] transition-colors">Money Weather™</a>
//           <a href="#" className="hover:text-[#1E3A2F] transition-colors">Agentic AI</a>
//           <a href="#" className="hover:text-[#1E3A2F] transition-colors">Audit Ledger</a>
//         </div>
//         <button className="bg-[#1E3A2F] text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-emerald-900/20 transition-all active:scale-95">
//           Live Demo
//         </button>
//       </nav>

//       <main className="relative pt-32 pb-20 px-6 overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

//         <div className="max-w-7xl mx-auto text-center">
//           <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-widest uppercase bg-[#E6EFEA] text-[#1E3A2F] rounded-full border border-[#CFE3D8]">
//             Agentic Finance for Gig-Earners
//           </span>

//           <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8">
//             Finance that <span className="text-gray-300 italic font-light">anticipates</span>.
//           </h1>

//           <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed mb-12">
//             Fincognia is an AI financial co-pilot that forecasts cashflow storms 
//             and <span className="text-[#1E3A2F] font-semibold">autonomously acts</span> to prevent credit damage.
//           </p>

//           {/* 3. MODIFIED 3D INTERACTIVE CENTERPIECE */}
//           <div 
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={() => setRotation({ x: 0, y: 0 })}
//             className="relative w-full max-w-5xl mx-auto aspect-video cursor-grab active:cursor-grabbing group"
//             style={{ perspective: "1000px" }}
//           >
//             <div 
//               className="w-full h-full rounded-[40px] shadow-2xl overflow-hidden border-[12px] border-white transition-transform duration-200 ease-out bg-gradient-to-br from-emerald-900 to-[#1E3A2F] relative"
//               style={{ 
//                 transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
//               }}
//             >
//               {/* Canvas for the 3D Model */}
//               <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
//                 <Suspense fallback={null}>
//                   <Stage environment="city" intensity={0.5} contactShadow={false}>
//                     <PresentationControls
//                       global
//                       config={{ mass: 2, tension: 500 }}
//                       snap={{ mass: 4, tension: 1500 }}
//                       rotation={[0, 0.3, 0]}
//                       polar={[-Math.PI / 3, Math.PI / 3]}
//                       azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
//                     >
//                       <MoneyModel />
//                     </PresentationControls>
//                   </Stage>
//                 </Suspense>
//               </Canvas>

//               {/* Tagline Overlays */}
//               <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
//                 <div className="flex justify-between items-start">
//                   <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
//                     <p className="text-white text-[10px] uppercase tracking-widest font-bold">Asset Analysis</p>
//                     <p className="text-emerald-400 font-mono text-sm font-bold">VERIFIED_LEDGER_0x55</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-white/50 text-xs uppercase tracking-tighter italic">Proprietary Rendering Engine</p>
//                   </div>
//                 </div>

//                 <div className="text-left">
//                     <div className="text-xs uppercase opacity-70 tracking-widest text-white">Solvency Status</div>
//                     <div className="text-4xl font-bold text-white mb-2">Safe for 14 Days</div>
//                     <div className="h-1 w-32 bg-emerald-500 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* 4. THE BENTO GRID (Keep existing) */}
//       <section className="max-w-7xl mx-auto px-6 pb-32">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2 bg-white border border-[#CFE3D8] rounded-[32px] p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
//             <div className="max-w-md">
//               <div className="w-12 h-12 bg-[#E6EFEA] rounded-xl flex items-center justify-center text-2xl mb-6">⛅</div>
//               <h3 className="text-3xl font-bold mb-4">Money Weather™</h3>
//               <p className="text-gray-500 leading-relaxed">
//                 Our proprietary ML model simulates 10,000+ cashflow scenarios to predict your 
//                 "Financial Storms." It detects liquidity gaps before your bank does.
//               </p>
//             </div>
//             <div className="mt-10 h-32 w-full bg-[#FAFAF7] rounded-2xl border border-dashed border-[#CFE3D8] flex items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
//                 [ Probabilistic Forecast Visual ]
//             </div>
//           </div>

//           <div className="bg-[#1E3A2F] text-[#FAFAF7] rounded-[32px] p-10 flex flex-col justify-between">
//             <h3 className="text-2xl font-bold leading-tight">Autonomous Agentic Actions</h3>
//             <p className="opacity-70 text-sm mt-4">
//               With your consent, Fincognia locks safety buffers and pauses 
//               subscriptions when the risk of an EMI bounce exceeds 85%.
//             </p>
//             <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
//                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                 <span className="text-[10px] font-mono opacity-60">MONITORING LIVE STREAMS</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FincogniaTailwind;



// import React, { Suspense, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Float, Html, Environment, ContactShadows, PresentationControls } from "@react-three/drei";

// const Scene = () => {
//   // Loading the model from your public folder
//   const { scene } = useGLTF("/500Ruppee.glb");

//   return (
//     // Scale reduced to 1.2 to keep it elegant and not overwhelming
//     <group scale={0.2} position={[0, 0, 0]}>
//       <Float 
//         speed={1.5} 
//         rotationIntensity={0.8} 
//         floatIntensity={0.5}
//       >
//         <primitive 
//           object={scene} 
//           rotation={[0.2, -0.4, 0]} // Slight tilt for better perspective
//         />

//         {/* HTML Labels that track with the model */}
//         <Html position={[1.5, 0.2, 0]} distanceFactor={8}>
//           <div className="whitespace-nowrap bg-white/80 backdrop-blur-md border border-[#CFE3D8] p-2 px-3 rounded-lg shadow-xl">
//             <p className="text-[9px] text-emerald-700 font-bold uppercase tracking-widest">Verification</p>
//             <p className="text-[#1E3A2F] font-bold text-xs underline decoration-emerald-400">0x882...FF9</p>
//           </div>
//         </Html>

//         <Html position={[-1.8, -0.6, 0]} distanceFactor={8}>
//           <div className="whitespace-nowrap bg-[#1E3A2F] p-2 px-3 rounded-lg shadow-xl border border-emerald-500/20">
//             <p className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">Agent Status</p>
//             <p className="text-white font-bold text-xs">Watching Risk</p>
//           </div>
//         </Html>
//       </Float>
//     </group>
//   );
// };

// const FincogniaV2 = () => {
//   return (
//     <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">
//       {/* HEADER */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-14 bg-white/40 backdrop-blur-xl border border-[#CFE3D8]/30 rounded-full flex items-center justify-between px-8 z-50">
//         <div className="text-lg font-black tracking-tighter">FINCOGNIA</div>
//         <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
//           <span>Forecast</span>
//           <span>Security</span>
//           <span>Ledger</span>
//         </div>
//         <div className="w-8 h-8 bg-[#1E3A2F] rounded-full flex items-center justify-center text-white text-[10px]">↗</div>
//       </nav>

//       <main className="relative h-screen w-full flex flex-col items-center justify-center pt-20">
//         {/* TEXT CONTENT - Z-Index 20 to stay on top */}
//         <div className="relative z-20 text-center pointer-events-none px-6">
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
//             Agentic <br />
//             <span className="text-gray-300 italic font-light">Capital</span>.
//           </h1>
//           <p className="max-w-md mx-auto text-sm md:text-base text-gray-500 font-medium">
//             The first AI co-pilot that doesn't just show you charts, 
//             but <span className="text-[#1E3A2F]">autonomously secures</span> your solvency.
//           </p>

//           <div className="mt-8 flex gap-3 justify-center pointer-events-auto">
//             <button className="bg-[#1E3A2F] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-all">
//               Launch Live Demo
//             </button>
//             <button className="bg-white border border-[#CFE3D8] text-[#1E3A2F] px-6 py-3 rounded-xl font-bold text-sm">
//               Read Docs
//             </button>
//           </div>
//         </div>

//         {/* 3D MODEL CONTAINER - Set to a fixed height to prevent "Bigness" */}
//         <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center">
//           <div className="w-full h-[70vh] max-w-4xl">
//             <Canvas 
//               camera={{ position: [0, 0, 5], fov: 45 }}
//               dpr={[1, 2]} // Optimizes resolution
//             >
//               <ambientLight intensity={0.6} />
//               <pointLight position={[5, 5, 5]} intensity={1} />
//               <spotLight position={[-5, 10, 10]} angle={0.15} penumbra={1} />

//               <Suspense fallback={null}>
//                 <PresentationControls
//                   global
//                   config={{ mass: 1, tension: 200 }}
//                   snap={{ mass: 2, tension: 400 }}
//                   rotation={[0, 0, 0]}
//                   polar={[-Math.PI / 6, Math.PI / 6]} // Restricts vertical rotation
//                   azimuth={[-Math.PI / 3, Math.PI / 3]} // Restricts horizontal rotation
//                 >
//                   <Scene />
//                 </PresentationControls>

//                 {/* Subtle shadow on the "floor" to ground the model */}
//                 <ContactShadows 
//                   position={[0, -1.8, 0]} 
//                   opacity={0.3} 
//                   scale={8} 
//                   blur={2.5} 
//                   far={4} 
//                 />

//                 <Environment preset="apartment" />
//               </Suspense>
//             </Canvas>
//           </div>
//         </div>

//         {/* BOTTOM METRICS */}
//         <div className="absolute bottom-12 w-full max-w-6xl px-10 flex justify-between items-center z-20 pointer-events-none">
//           <div className="flex flex-col">
//             <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">System Load</span>
//             <span className="text-xl font-mono font-bold italic">NORMAL</span>
//           </div>
//           <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-transparent via-[#CFE3D8] to-transparent hidden md:block" />
//           <div className="flex flex-col text-right">
//             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Payout</span>
//             <span className="text-xl font-mono font-bold">14:02:55</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FincogniaV2;

// import React, { Suspense, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Float, Html, Environment, ContactShadows, PresentationControls } from "@react-three/drei";

// const Scene = () => {
//   const { scene } = useGLTF("/500Ruppee.glb");

//   return (
//     // Scale set to 0.2 as requested to keep the note refined
//     <group scale={0.2} position={[0, 0, 0]}>
//       <Float 
//         speed={1.2} 
//         rotationIntensity={0.5} 
//         floatIntensity={0.4}
//       >
//         <primitive 
//           object={scene} 
//           rotation={[0, -0.2, 0]} 
//         />

//         {/* AUTHENTIC UI CARD 1: TOP LEFT */}
//         <Html 
//           position={[-25, 5, 0]} 
//           distanceFactor={12}
//           center
//         >
//           <div className="w-40 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Active Guardian</span>
//             </div>
//             <div className="space-y-1">
//               <p className="text-gray-300 text-[10px] uppercase font-bold">Ledger Hash</p>
//               <p className="text-gray-200 font-mono text-xs truncate">finc_auth_8829x_secure</p>
//             </div>
//           </div>
//         </Html>

//         {/* AUTHENTIC UI CARD 2: BOTTOM RIGHT */}
//         <Html 
//           position={[25, -5, 0]} 
//           distanceFactor={8}
//           center
//         >
//           <div className="w-60 p-5 rounded-[24px] bg-[#1E3A2F]/80 backdrop-blur-3xl border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-white font-bold text-base tracking-tight">Liquidity Forecast</h3>
//               <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md font-bold uppercase">Safe</span>
//             </div>
//             <div className="flex items-end gap-2">
//               <span className="text-3xl font-light text-white leading-none">₹50,000</span>
//               <span className="text-emerald-400 text-[10px] font-bold pb-1">+14.2%</span>
//             </div>
//             <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
//                 <div className="h-full w-3/4 bg-emerald-500" />
//             </div>
//           </div>
//         </Html>
//       </Float>
//     </group>
//   );
// };

// const FincogniaV2 = () => {
//   return (
//     <div className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">
//       {/* HEADER (Same as original) */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-14 bg-white/40 backdrop-blur-xl border border-[#CFE3D8]/30 rounded-full flex items-center justify-between px-8 z-50">
//         <div className="text-lg font-black tracking-tighter text-[#1E3A2F]">FINCOGNIA</div>
//         <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
//           <span>Forecast</span>
//           <span>Security</span>
//           <span>Ledger</span>
//         </div>
//         <div className="w-8 h-8 bg-[#1E3A2F] rounded-full flex items-center justify-center text-white text-[10px]">↗</div>
//       </nav>

//       <main className="relative h-screen w-full flex flex-col items-center justify-center pt-20">
//         {/* TEXT CONTENT - Pushed forward with z-index */}
//         <div className="relative z-30 text-center pointer-events-none px-6">
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
//             Agentic <br />
//             <span className="text-gray-300 italic font-light">Capital</span>.
//           </h1>
//           <p className="max-w-md mx-auto text-sm md:text-base text-gray-500 font-medium">
//             The first AI co-pilot that doesn't just show you charts, 
//             but <span className="text-[#1E3A2F]">autonomously secures</span> your solvency.
//           </p>

//           <div className="mt-8 flex gap-3 justify-center pointer-events-auto">
//             <button className="bg-[#1E3A2F] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-2xl active:scale-95 transition-all">
//               Launch Live Demo
//             </button>
//           </div>
//         </div>

//         {/* 3D MODEL CONTAINER - Increased Width and Height */}
//         <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center">
//           <div className="w-full h-[90vh]"> {/* Increased from 70vh */}
//             <Canvas 
//               // Set far to 1000 to solve the vanishing problem
//               camera={{ position: [0, 0, 12], fov: 35, near: 0.1, far: 1000 }}
//               dpr={[1, 2]}
//             >
//               <ambientLight intensity={0.8} />
//               <pointLight position={[10, 10, 10]} intensity={1.5} />
//               <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} />

//               <Suspense fallback={null}>
//                 <PresentationControls
//                   global
//                   config={{ mass: 1, tension: 200 }}
//                   snap={{ mass: 2, tension: 400 }}
//                   rotation={[0, 0, 0]}
//                   // RESTRICTED INTERACTION: Keeps the model from rotating into "vanishing" zones
//                   polar={[-Math.PI / 4, Math.PI / 4]} 
//                   azimuth={[-Math.PI / 2.5, Math.PI / 2.5]} 
//                 >
//                   <Scene />
//                 </PresentationControls>

//                 <ContactShadows 
//                   position={[0, -4, 0]} 
//                   opacity={0.25} 
//                   scale={15} 
//                   blur={3} 
//                   far={10} 
//                 />

//                 <Environment preset="city" />
//               </Suspense>
//             </Canvas>
//           </div>
//         </div>

//         {/* BOTTOM METRICS (Same as original) */}
//         <div className="absolute bottom-12 w-full max-w-6xl px-10 flex justify-between items-center z-20 pointer-events-none opacity-50">
//           <div className="flex flex-col">
//             <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">System Load</span>
//             <span className="text-xl font-mono font-bold italic">NORMAL</span>
//           </div>
//           <div className="flex flex-col text-right">
//             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Payout</span>
//             <span className="text-xl font-mono font-bold">14:02:55</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FincogniaV2;




// import React, { Suspense, useRef, memo } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Float, Html, Environment, ContactShadows, PresentationControls } from "@react-three/drei";

// // Preload the model to prevent vanishing during re-renders
// useGLTF.preload("/500Ruppee.glb");

// const MoneyModel = memo(({ scene }) => {
//   return (
//     <primitive 
//       object={scene} 
//       rotation={[0, -0.2, 0]} 
//     />
//   );
// });

// const Scene = () => {
//   const { scene } = useGLTF("/500Ruppee.glb");

//   return (
//     <group scale={0.2} position={[0, 0, 0]}>
//       <Float 
//         speed={1.2} 
//         rotationIntensity={0.5} 
//         floatIntensity={0.4}
//       >
//         <MoneyModel scene={scene} />

//         {/* AUTHENTIC UI CARD 1: TOP LEFT */}
//         <Html 
//           position={[-25, -24, 0]} 
//           distanceFactor={12}
//           center
//           // This ensures the HTML doesn't block mouse events
//           style={{ pointerEvents: 'none' }}
//         >
//           <div className="w-48 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Active Guardian</span>
//             </div>
//             <div className="space-y-1">
//               <p className="text-gray-400 text-[9px] uppercase font-bold">Ledger Hash</p>
//               <p className="text-gray-200 font-mono text-[10px] truncate leading-none">finc_auth_8829x_secure</p>
//             </div>
//           </div>
//         </Html>

//         {/* AUTHENTIC UI CARD 2: BOTTOM RIGHT */}
//         <Html 
//           position={[25, -40, 0]} 
//           distanceFactor={10}
//           center
//           style={{ pointerEvents: 'none' }}
//         >
//           <div className="w-64 p-5 rounded-[24px] bg-[#1E3A2F]/90 backdrop-blur-3xl border border-emerald-500/30 shadow-2xl">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-white font-bold text-xs uppercase tracking-tighter opacity-70">Liquidity Forecast</h3>
//               <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md font-bold uppercase">Safe</span>
//             </div>
//             <div className="flex items-end gap-2">
//               <span className="text-3xl font-light text-white leading-none">₹50,000</span>
//               <span className="text-emerald-400 text-[10px] font-bold pb-1">+14.2%</span>
//             </div>
//             <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
//                 <div className="h-full w-3/4 bg-emerald-500" />
//             </div>
//           </div>
//         </Html>
//       </Float>
//     </group>
//   );
// };

// const FincogniaV2 = () => {
//   const container = useRef();

//   return (
//     <div ref={container} className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">
//       {/* HEADER */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-14 bg-white/40 backdrop-blur-xl border border-[#CFE3D8]/30 rounded-full flex items-center justify-between px-8 z-50">
//         <div className="text-lg font-black tracking-tighter text-[#1E3A2F]">FINCOGNIA</div>
//         <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
//           <span>Forecast</span>
//           <span>Security</span>
//           <span>Ledger</span>
//         </div>
//         <div className="w-8 h-8 bg-[#1E3A2F] rounded-full flex items-center justify-center text-white text-[10px] cursor-pointer">↗</div>
//       </nav>

//       <main className="relative pt-40 pb-10 px-6 flex flex-col items-center">
//         {/* Abstract Background Glows */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -z-10" />

//         <div className="max-w-7xl mx-auto text-center relative z-20">
//           <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-widest uppercase bg-[#E6EFEA] text-[#1E3A2F] rounded-full border border-[#CFE3D8]">
//             Agentic Finance for Gig-Earners
//           </span>

//           <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8">
//             Finance that <span className="text-gray-300 italic font-light">anticipates</span>.
//           </h1>

//           <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
//             Fincognia is an AI financial co-pilot that forecasts cashflow storms
//             and <span className="text-[#1E3A2F] font-semibold">autonomously acts</span> to prevent credit damage.
//           </p>
//         </div>
//       </main>

//       <main className="relative h-screen w-full flex flex-col items-center justify-center pt-20">
//         {/* TEXT CONTENT */}
//         <div className="relative z-30 text-center pointer-events-none px-6 mb-12">
//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
//             Agentic <br />
//             <span className="text-gray-300 italic font-light">Capital</span>.
//           </h1>
//           <p className="max-w-md mx-auto text-sm md:text-base text-gray-500 font-medium">
//             The first AI co-pilot that doesn't just show you charts, 
//             but <span className="text-[#1E3A2F]">autonomously secures</span> your solvency.
//           </p>

//           <div className="mt-8 flex gap-3 justify-center pointer-events-auto">
//             <button className="bg-[#1E3A2F] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-2xl active:scale-95 transition-all">
//               Launch Live Demo
//             </button>
//           </div>
//         </div>

//         {/* 3D MODEL CONTAINER */}
//         <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center pointer-events-none">
//           <div className="w-full h-[90vh] pointer-events-auto"> 
//             <Canvas 
//               // eventSource ensures mouse tracking doesn't break on leave
//               eventSource={container}
//               camera={{ position: [0, 0, 15], fov: 35, near: 0.1, far: 1000 }}
//               dpr={[1, 2]}
//               gl={{ antialias: true, alpha: true }}
//             >
//               <ambientLight intensity={0.8} />
//               <pointLight position={[10, 10, 10]} intensity={1.5} />

//               <Suspense fallback={null}>
//                 <PresentationControls
//                   enabled={true} 
//                   global={false} // Prevents conflict with page-level scrolling
//                   cursor={true}
//                   snap={true} // Snaps back to original position on release
//                   speed={2}
//                   zoom={1}
//                   rotation={[0, 0, 0]}
//                   polar={[-Math.PI / 4, Math.PI / 4]} 
//                   azimuth={[-Math.PI / 3, Math.PI / 3]} 
//                 >
//                   <Scene />
//                 </PresentationControls>

//                 <ContactShadows 
//                   position={[0, -5, 0]} 
//                   opacity={0.2} 
//                   scale={20} 
//                   blur={3} 
//                   far={10} 
//                 />

//                 <Environment preset="city" />
//               </Suspense>
//             </Canvas>
//           </div>
//         </div>

//         {/* BOTTOM METRICS */}
//         <div className="absolute bottom-12 w-full max-w-6xl px-10 flex justify-between items-center z-20 pointer-events-none opacity-40">
//           <div className="flex flex-col">
//             <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">System Status</span>
//             <span className="text-xl font-mono font-bold italic">ENCRYPTED</span>
//           </div>
//           <div className="flex flex-col text-right">
//             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime</span>
//             <span className="text-xl font-mono font-bold">99.9%</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FincogniaV2;




"use client";

import React, { Suspense, useRef, memo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, Html, Environment, ContactShadows, PresentationControls } from "@react-three/drei";

// Preload the model
useGLTF.preload("/500Ruppee.glb");

const MoneyModel = memo(({ scene }) => {
  return <primitive object={scene} rotation={[0, -0.2, 0]} />;
});

const Scene = () => {
  const { scene } = useGLTF("/500Ruppee.glb");
  return (
    <group scale={0.2} position={[0, 0, 0]}>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.4}>
        <MoneyModel scene={scene} />

        {/* UI CARD 1: TOP LEFT */}
        <Html position={[-25, -18, 0]} distanceFactor={12} center style={{ pointerEvents: 'none' }}>
          <div className="w-48 p-4 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-all">
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Active Guardian</span>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-[9px] uppercase font-bold">Ledger Hash</p>
              <p className="text-gray-200 font-mono text-[10px] truncate">finc_auth_8829x_secure</p>
            </div>
          </div>
        </Html>

        {/* UI CARD 2: BOTTOM RIGHT */}
        <Html position={[25, -32, 0]} distanceFactor={10} center style={{ pointerEvents: 'none' }}>
          <div className="w-64 p-5 rounded-[24px] bg-[#1E3A2F]/90 backdrop-blur-3xl border border-emerald-500/30 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-bold text-xs uppercase tracking-tighter opacity-70">Liquidity Forecast</h3>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md font-bold uppercase">Safe</span>
            </div>
            <div className="flex items-end gap-2 text-white">
              <span className="text-3xl font-light leading-none">₹50,000</span>
              <span className="text-emerald-400 text-[10px] font-bold pb-1">+14.2%</span>
            </div>
            <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-emerald-500" />
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
};

const FincogniaLandingPage = () => {
  const container = useRef();
  const [index, setIndex] = useState(0);
  const words = ["anticipates", "protects", "secures", "optimizes"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={container} className="min-h-screen bg-[#FAFAF7] text-[#1E3A2F] font-sans selection:bg-[#CFE3D8] overflow-hidden">
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

        {/* HERO SECTION 1: Finance that... */}
        <div className="max-w-7xl mx-auto text-center relative z-20 mb-12 px-6">
          <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-bold tracking-widest uppercase bg-[#E6EFEA] text-[#1E3A2F] rounded-full border border-[#CFE3D8]">
            Agentic Finance for Gig-Earners
          </span>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[0.9] mb-8">
            Finance that <br />
            <div className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
              {words.map((word, i) => (
                <span
                  key={word}
                  className={`absolute left-0 w-full text-gray-300 italic font-light transition-all duration-700 ease-in-out ${i === index ? "translate-y-0 opacity-100" : i < index ? "-translate-y-full opacity-0" : "translate-y-full opacity-0"
                    }`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {word}.
                </span>
              ))}
              {/* Invisible spacer to maintain height */}
              <span className="opacity-0 italic font-light">anticipates.</span>
            </div>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
            Fincognia is an AI financial co-pilot that forecasts cashflow storms
            and <span className="text-[#1E3A2F] font-semibold">autonomously acts</span> to prevent credit damage.
          </p>
        </div>

        {/* HERO SECTION 2: Agentic Capital + 3D */}
        <div className="relative flex-grow w-full flex flex-col items-center justify-center">
          {/* TEXT CONTENT */}
          <div className="relative z-30 text-center pointer-events-none px-6 mb-8 mt-12">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
              Agentic <br />
              <span className="text-gray-300 italic font-light">Capital</span>.
            </h1>
            <p className="max-w-md mx-auto text-sm md:text-base text-gray-500 font-medium">
              The first AI co-pilot that doesn't just show you charts,
              but <span className="text-[#1E3A2F]">autonomously secures</span> your solvency.
            </p>

            <div className="mt-8 flex gap-3 justify-center pointer-events-auto">
              <button className="bg-[#1E3A2F] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-2xl active:scale-95 transition-all">
                Launch Live Demo
              </button>
            </div>
          </div>

          {/* 3D MODEL CONTAINER */}
          <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="w-full h-[90vh] pointer-events-auto">
              <Canvas
                eventSource={container}
                camera={{ position: [0, 0, 15], fov: 35, near: 0.1, far: 1000 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
              >
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />

                <Suspense fallback={null}>
                  <PresentationControls
                    enabled={true}
                    global={false}
                    cursor={true}
                    snap={true}
                    speed={2}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 3, Math.PI / 3]}
                  >
                    <Scene />
                  </PresentationControls>
                  <ContactShadows position={[0, -5, 0]} opacity={0.2} scale={20} blur={3} far={10} />
                  <Environment preset="city" />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 pb-32">
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
        <div className="w-full max-w-6xl px-10 pb-12 flex justify-between items-center z-20 pointer-events-none opacity-40">
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
  );
};

export default FincogniaLandingPage;