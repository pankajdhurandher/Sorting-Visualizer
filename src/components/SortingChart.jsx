import { useContext, useEffect } from "react";
import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";
import { motion } from "framer-motion";
import { VscPlay, VscRefresh } from "react-icons/vsc";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

function SortingChart() {
    const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

    useEffect(() => {
        generateSortingArray();
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-[1100px] mx-auto px-6 font-sans text-white-light"
        >
            <div className="flex flex-col items-center mb-12 w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-center tracking-tight text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #3b82f6, #60a5fa, #d4af37)' }}>
                Sorting Visualizer
            </h1>
                <p className="text-[#9ca3af] font-mono text-sm max-w-lg text-center leading-relaxed">
                    A sleek, interactive tool to visualize how sorting algorithms operate under the hood.
                </p>
            </div>
            
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mb-10 w-full overflow-x-auto pb-4 md:pb-0 scrollbar-hide no-scrollbar snap-x">
                {Object.keys(algorithmInfos).map((algo) => (
                    <button
                        key={algo}
                        onClick={() => changeAlgorithm(algo)}
                        className={`shrink-0 snap-center px-6 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-300 font-mono border border-[#d4af37]/40 ${
                            sortingState.algorithm === algo 
                                ? "bg-[#3b82f6] text-white shadow-md shadow-soft-blue/20 border-[#3b82f6]" 
                                : "bg-[#121212] text-[#e5e5e5] hover:border-[#d4af37] hover:shadow-[0_0_8px_rgba(212,175,55,0.15)]"
                        }`}
                    >
                        {algorithmInfos[algo].name}
                    </button>
                ))}
            </div>

            <div className="w-full">
                <div className="mb-6 chart-container">
                    {sortingState.array.map((bar, i) => (
                        <div key={i} className="bar-container">
                            <div className={`select-none bar bar-${bar.state}`} style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}>
                                <p>{bar.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-10 bg-[#121212] p-3 border border-white/5 rounded-2xl shadow-xl">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-3 w-full sm:w-auto">
                        <button 
                            disabled={sortingState.sorting} 
                            onClick={startVisualizing} 
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-soft-blue text-white font-medium transition-all duration-300 shadow-lg shadow-soft-blue/20 hover:bg-blue-500 hover:shadow-soft-blue/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed flex-1 sm:flex-none"
                        >
                            <VscPlay className="w-5 h-5" /> Start
                        </button>
                        <button 
                            disabled={sortingState.sorting} 
                            onClick={() => generateSortingArray()} 
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex-1 sm:flex-none"
                        >
                            <VscRefresh className="w-5 h-5 text-white/70" /> Reset
                        </button>
                    </div>
                    <div className="relative w-full sm:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <HiOutlineAdjustmentsHorizontal className="h-5 w-5 text-white/50" />
                        </div>
                        <select
                            disabled={sortingState.sorting}
                            onChange={changeSortingSpeed}
                            defaultValue="slow"
                            className="w-full bg-white/5 border border-white/10 text-white pl-11 pr-10 py-3 rounded-xl cursor-pointer outline-none transition-all duration-300 hover:bg-white/10 hover:border-white/20 focus:border-soft-blue focus:ring-1 focus:ring-soft-blue disabled:opacity-50 disabled:cursor-not-allowed appearance-none font-mono text-sm"
                        >
                            <option value="slow" className="bg-[#121212]">Speed: Slow</option>
                            <option value="normal" className="bg-[#121212]">Speed: Normal</option>
                            <option value="fast" className="bg-[#121212]">Speed: Fast</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full mt-16 mt:md-24"
                >
                    <div className="flex flex-col items-center mb-10">
                        <h2 className="font-bold text-3xl md:text-4xl text-white mb-5 tracking-tight font-mono">
                            {algorithmInfos[sortingState.algorithm].name}
                        </h2>
                        <div className="w-16 h-[1px] bg-[#d4af37] opacity-80" />
                    </div>
                    
                    <p className="whitespace-pre-line mb-12 text-[#cfcfcf] leading-[1.6] text-lg font-light">
                        {algorithmInfos[sortingState.algorithm].description}
                    </p>
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-12" />
                    
                    <div className="overflow-x-auto bg-[#121212] rounded-[10px] border border-white/10 shadow-xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-sm text-[#888] uppercase tracking-wider bg-[#1a1a1a]/50">
                                    <th className="px-6 py-4 border-b border-white/10 border-r" rowSpan={2}>
                                        Algorithm
                                    </th>
                                    <th className="px-6 py-4 border-b border-white/10 text-center" colSpan={3}>
                                        Time Complexity
                                    </th>
                                    <th className="px-6 py-4 border-b border-white/10 border-l text-center">
                                        Space Complexity
                                    </th>
                                </tr>
                                <tr className="text-xs text-[#888] uppercase tracking-wider bg-[#1a1a1a]/50 border-b border-white/10">
                                    <th className="px-6 py-3 border-r border-white/10 font-medium text-center">Best</th>
                                    <th className="px-6 py-3 border-r border-white/10 font-medium text-center">Average</th>
                                    <th className="px-6 py-3 font-medium text-center">Worst</th>
                                    <th className="px-6 py-3 border-l border-white/10 font-medium text-center">Worst</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {Object.keys(algorithmInfos).map((key, i) => (
                                    <tr 
                                        key={i} 
                                        className={`hover:bg-white/[0.03] transition-colors whitespace-nowrap ${key === sortingState.algorithm ? 'bg-white/[0.02]' : ''}`}
                                    >
                                        <td className="px-6 py-4 border-r border-white/10 font-mono font-medium text-white/90">
                                            {algorithmInfos[key].name}
                                        </td>
                                        <td className="px-6 py-4 border-r border-white/10 text-center">
                                            <span className={`px-3 py-1.5 rounded-full bg-opacity-15 font-mono text-xs font-semibold uppercase tracking-wide ${algorithmInfos[key].time_complexity.best[1]}`}>
                                                {algorithmInfos[key].time_complexity.best[0]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 border-r border-white/10 text-center">
                                            <span className={`px-3 py-1.5 rounded-full bg-opacity-15 font-mono text-xs font-semibold uppercase tracking-wide ${algorithmInfos[key].time_complexity.average[1]}`}>
                                                {algorithmInfos[key].time_complexity.average[0]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1.5 rounded-full bg-opacity-15 font-mono text-xs font-semibold uppercase tracking-wide ${algorithmInfos[key].time_complexity.worst[1]}`}>
                                                {algorithmInfos[key].time_complexity.worst[0]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 border-l border-white/10 text-center">
                                            <span className={`px-3 py-1.5 rounded-full bg-opacity-15 font-mono text-xs font-semibold uppercase tracking-wide ${algorithmInfos[key].space_complexity[1]}`}>
                                                {algorithmInfos[key].space_complexity[0]}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default SortingChart;
