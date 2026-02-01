import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-12 font-raleway group" id="footer-section">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1 - About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">CLIPPING WEBS</h3>
                        <p className="text-light-text mb-4">Perfection in Every Pixel</p>
                        <p className="text-light-text mb-6">
                            Professional e-commerce photo editing services for global brands since 2022.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: 'facebook-f', link: '#' },
                                { icon: 'twitter', link: '#' },
                                { icon: 'instagram', link: '#' },
                                { icon: 'linkedin-in', link: '#' },
                                { icon: 'pinterest', link: '#' },
                                { icon: 'youtube', link: '#' }
                            ].map((social, i) => (
                                <a key={i} href={social.link} className="text-light-text hover:text-primary transition-colors duration-300 hover-lift text-lg">
                                    <i className={`fab fa-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 uppercase">QUICK LINKS</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', link: '/' },
                                { name: 'About Us', link: '/about' },
                                { name: 'Services', link: '/services' },
                                { name: 'Pricing', link: '/pricing' },
                                { name: 'Portfolio', link: '/portfolio' },
                                { name: 'Contact', link: '/contact' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.link} className="text-light-text hover:text-primary transition-colors duration-300">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 uppercase">SERVICES</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Clipping Path', link: '/services/clipping-path', icon: 'cut' },
                                { name: 'Ghost Mannequin', link: '/services/ghost-mannequin', icon: 'tshirt' },
                                { name: 'Color Correction', link: '/services/color-correction', icon: 'palette' },
                                { name: 'Background Remove', link: '/services/background-remove', icon: 'shopping-cart' },
                                { name: 'Jewelry Retouching', link: '/services/jewelry-retouching', icon: 'gem' },
                                { name: 'Image Masking', link: '/services/image-masking', icon: 'mask' }
                            ].map((service, i) => (
                                <li key={i}>
                                    <Link href={service.link} className="text-light-text hover:text-primary transition-colors duration-300 flex items-center">
                                        <i className={`fas fa-${service.icon} mr-2 text-sm`}></i> {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 uppercase">CONTACT</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mr-3 mt-1 text-primary"></i>
                                <span className="text-light-text">Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt mr-3 text-primary"></i>
                                <span className="text-light-text">+44 756301 38325</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-primary"></i>
                                <span className="text-light-text">info@clippingwebs.com</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded inline-flex items-center hover:bg-primary-hover transition-colors duration-300 hover-lift uppercase font-bold text-sm tracking-wide">
                                <i className="fas fa-headset mr-2"></i>
                                <span>24/7 Support</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="text-light-text mb-4 md:mb-0">
                        &copy; {currentYear} Clipping Webs. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <div className="flex space-x-4 text-2xl text-light-text">
                            {['cc-visa', 'cc-paypal', 'cc-mastercard', 'cc-amex'].map((pay, i) => (
                                <i key={i} className={`fab fa-${pay} hover:text-white transition-colors cursor-pointer`}></i>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/privacy" className="text-light-text hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-light-text hover:text-primary transition-colors">Terms of Service</Link>
                        </div>
                        <div className="bg-black border border-primary text-white px-3 py-1 rounded text-sm flex items-center hover:bg-primary transition-colors duration-300 hover-lift">
                            <i className="fas fa-award mr-1"></i>
                            <span>ISO-27001</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
