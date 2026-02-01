import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled 
                ? 'bg-white/85 backdrop-blur-[35px] shadow-lg' 
                : 'bg-white/50 backdrop-blur-[35px]'
            } font-raleway`}
            id="header"
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo (Clipping Webs branding) */}
                    <Link href="/" className="text-2xl font-bold text-black font-raleway group">
                        CLIPPING <span className="text-primary group-hover:text-primary-hover transition-colors">WEBS</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300">
                            Home
                        </Link>

                        {/* Services with Mega Menu */}
                        <div className="relative group">
                            <Link href="/services" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300 flex items-center">
                                Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </Link>

                            {/* Mega Menu - Exact match to HTML design */}
                            <div className="absolute left-0 top-full mt-10 w-[550px] bg-white/95 backdrop-blur-[60px] shadow-2xl rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-4 border border-white/30 transform translate-y-2 group-hover:translate-y-0 z-50">
                                {/* Service 1 */}
                                <Link href="/services/clipping-path" className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors duration-300 min-w-0 group/item">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary mr-3 shrink-0 shadow-sm transition-all duration-300">
                                        <i className="fas fa-cut"></i>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-black whitespace-nowrap group-hover/item:text-primary transition-colors">Clipping Path</h4>
                                        <p className="text-light-text text-sm whitespace-nowrap truncate">Precise manual selections</p>
                                    </div>
                                </Link>

                                {/* Service 2 */}
                                <Link href="/services/ghost-mannequin" className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors duration-300 min-w-0 group/item">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary mr-3 shrink-0 shadow-sm transition-all duration-300">
                                        <i className="fas fa-tshirt"></i>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-black whitespace-nowrap group-hover/item:text-primary transition-colors">Ghost Mannequin</h4>
                                        <p className="text-light-text text-sm whitespace-nowrap truncate">Invisible mannequin effect</p>
                                    </div>
                                </Link>

                                {/* Service 3 */}
                                <Link href="/services/jewelry-retouching" className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors duration-300 min-w-0 group/item">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary mr-3 shrink-0 shadow-sm transition-all duration-300">
                                        <i className="fas fa-gem"></i>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-black whitespace-nowrap group-hover/item:text-primary transition-colors">Jewelry Retouching</h4>
                                        <p className="text-light-text text-sm whitespace-nowrap truncate">Premium jewelry editing</p>
                                    </div>
                                </Link>

                                {/* Service 4 */}
                                <Link href="/services/ecommerce-retouching" className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors duration-300 min-w-0 group/item">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary mr-3 shrink-0 shadow-sm transition-all duration-300">
                                        <i className="fas fa-shopping-cart"></i>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-black whitespace-nowrap group-hover/item:text-primary transition-colors">E-Commerce Retouching</h4>
                                        <p className="text-light-text text-sm whitespace-nowrap truncate">Complete online store editing</p>
                                    </div>
                                </Link>

                                {/* Service 5 */}
                                <Link href="/services/color-correction" className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors duration-300 min-w-0 group/item">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary mr-3 shrink-0 shadow-sm transition-all duration-300">
                                        <i className="fas fa-palette"></i>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-black whitespace-nowrap group-hover/item:text-primary transition-colors">Color Correction</h4>
                                        <p className="text-light-text text-sm whitespace-nowrap truncate">Perfect color balance</p>
                                    </div>
                                </Link>

                                {/* Service 6 */}
                                <Link href="/services/photo-retouching" className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors duration-300 min-w-0 group/item">
                                    <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-primary mr-3 shrink-0 shadow-sm transition-all duration-300">
                                        <i className="fas fa-magic"></i>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-black whitespace-nowrap group-hover/item:text-primary transition-colors">Photo Retouching</h4>
                                        <p className="text-light-text text-sm whitespace-nowrap truncate">Professional image enhancement</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <Link href="/pricing" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300">
                            Pricing
                        </Link>
                        <Link href="/portfolio" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300">
                            Portfolio
                        </Link>
                        <Link href="/about" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300">
                            Contact
                        </Link>
                        <Link href="/blog" className="text-medium-gray hover:text-primary font-medium transition-colors duration-300">
                            Blog
                        </Link>
                    </nav>

                    {/* Get Quote Button */}
                    <Link href="/contact" className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated">
                        Get Quote
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-medium-gray text-xl p-2 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <i className={`fas ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-3xl absolute top-full left-0 w-full shadow-2xl border-b border-white/30 z-50 animate-fade-in">
                    <div className="container mx-auto px-4 py-4 space-y-2">
                        <Link href="/" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link href="/services" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        <Link href="/pricing" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                        <Link href="/portfolio" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
                        <Link href="/about" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/contact" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                        <Link href="/blog" className="block py-2 text-medium-gray hover:text-primary transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center mt-4 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover transition-all duration-300 btn-animated">
                            Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
