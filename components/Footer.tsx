export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-white/10 py-16 px-6 md:px-12 relative z-10 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-2xl tracking-wide bg-gradient-to-r from-orange-500 to-amber-800 bg-clip-text text-transparent">
                        Nano Brew
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Pushing the boundaries of cold extraction. Bold, structured, and uncompromisingly cold.
                    </p>
                </div>

                <div className="flex flex-col gap-3 text-sm">
                    <h4 className="text-white font-semibold mb-2">Shop</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Arctic Iced Coffee</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Midnight Mocha</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Black Cold Brew</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a>
                </div>

                <div className="flex flex-col gap-3 text-sm">
                    <h4 className="text-white font-semibold mb-2">Support</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                </div>

                <div className="flex flex-col gap-3 text-sm">
                    <h4 className="text-white font-semibold mb-2">Join the Cult</h4>
                    <p className="text-gray-400 mb-2">Get early access to limited lot beans and exclusive drops.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-black/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500 w-full transition-colors"
                        />
                        <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs gap-4">
                <p>© {new Date().getFullYear()} Nano Brew Corporation. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">TikTok</a>
                </div>
            </div>
        </footer>
    );
}
