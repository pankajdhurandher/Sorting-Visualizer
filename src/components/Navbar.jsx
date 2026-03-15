import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#0b0b0b] border-b border-white/5 py-4 px-6 md:px-12 sticky top-0 z-50">
            <div className="max-w-[1100px] mx-auto flex justify-between items-center">
                {/* Logo / Name */}
                <a href="#" className="font-bold text-xl md:text-2xl tracking-tight text-white flex items-center gap-2">
                    <span className="text-soft-blue">&lt;</span>
                    Pankaj Dhurandher
                    <span className="text-soft-blue">/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            className="text-[#e5e5e5] text-sm font-medium relative group py-1"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-soft-blue transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger Icon */}
                <button 
                    className="md:hidden text-[#e5e5e5] flex flex-col gap-1.5 p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#121212] border-b border-white/5 shadow-2xl flex flex-col py-4 px-6">
                    {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[#e5e5e5] py-3 text-lg font-medium border-b border-white/5 last:border-0 hover:text-soft-blue transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
