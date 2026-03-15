function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#0b0b0b] mt-10">
            <div className="max-w-[1100px] mx-auto py-12 px-6 flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center w-full">
                    <p className="text-[#e5e5e5] text-sm md:text-base">
                        Designed by <span className="text-[#d4af37] font-medium">Pankaj Dhurandher</span>
                    </p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="text-[#e5e5e5] text-sm md:text-base uppercase tracking-wider hover:text-[#3b82f6] transition-colors flex items-center gap-2 group"
                    >
                        BACK TO TOP <span className="group-hover:-translate-y-1 transition-transform text-lg leading-none mt-1">^</span>
                    </button>
                </div>
                
                <div className="text-center w-full pt-2">
                    <p className="text-[#e5e5e5] text-sm md:text-base">
                        Thank you for visiting my website <span className="text-red-500 ml-1">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
