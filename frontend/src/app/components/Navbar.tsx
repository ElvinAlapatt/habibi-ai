export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-8 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo - Matching the Hero's italic style */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-xl font-light italic tracking-tighter text-white/90">
            SYNAPSE
          </span>
        </div>

        {/* Links - Optional: Adding the center menu from the reference */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Changelog</a>
        </div>

        {/* Action Button - Matching the Hero's pill style */}
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95">
          Get started
        </button>
      </div>
    </nav>
  );
}