import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Pricing() {
    useScrollAnimation();

    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    useEffect(() => {
        const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const files = (e.target as HTMLInputElement).files;
                const count = files ? files.length : 0;
                const fileCountEl = document.getElementById('fileCount');
                if (fileCountEl) {
                    fileCountEl.textContent = count === 0 ? 'No files chosen' : `${count} file${count !== 1 ? 's' : ''} chosen`;
                }
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout>
            <Head>
                <title>Pricing - Transparent Photo Editing Services | Clipping Webs</title>
                <meta name="description" content="Affordable pricing for professional photo editing services. Clipping path, background removal, color correction, ghost mannequin, and jewelry retouching." />
                <meta name="keywords" content="photo editing pricing, clipping path cost, background removal price, color correction rates, ghost mannequin pricing" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/pricing" />

                {/* Open Graph */}
                <meta property="og:title" content="Pricing - Transparent Photo Editing Services | Clipping Webs" />
                <meta property="og:description" content="Affordable pricing for professional photo editing services. Clipping path, background removal, color correction, ghost mannequin, and jewelry retouching." />
                <meta property="og:url" content="https://clippingwebs.com/pricing" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Pricing Page */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Photo Editing Pricing",
                            "description": "Affordable pricing for professional photo editing services. Clipping path, background removal, color correction, ghost mannequin, and jewelry retouching.",
                            "url": "https://clippingwebs.com/pricing",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com",
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "Photo Editing Services Pricing",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Clipping Path Service",
                                                "description": "Professional background removal and clipping path services"
                                            },
                                            "priceSpecification": {
                                                "@type": "PriceSpecification",
                                                "priceCurrency": "USD"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Color Correction Service",
                                                "description": "Professional color correction and enhancement services"
                                            },
                                            "priceSpecification": {
                                                "@type": "PriceSpecification",
                                                "priceCurrency": "USD"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Ghost Mannequin Service",
                                                "description": "Invisible mannequin effect for clothing photography"
                                            },
                                            "priceSpecification": {
                                                "@type": "PriceSpecification",
                                                "priceCurrency": "USD"
                                            }
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Jewelry Retouching Service",
                                                "description": "Professional jewelry photo editing and enhancement"
                                            },
                                            "priceSpecification": {
                                                "@type": "PriceSpecification",
                                                "priceCurrency": "USD"
                                            }
                                        }
                                    ]
                                }
                            }
                        })
                    }}
                />
            </Head>

            {/* Progress Bar */}
            <div className="progress-container">
                <div 
                    className="progress-bar" 
                    id="progressBar" 
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            {/* Breadcrumbs */}
            <nav className="bg-light-gray py-4" aria-label="Breadcrumb">
                <div className="container mx-auto px-4 font-raleway">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li><Link href="/" className="text-medium-gray hover:text-primary transition-colors">Home</Link></li>
                        <li><i className="fas fa-chevron-right text-light-text text-xs"></i></li>
                        <li><span className="text-primary font-semibold" aria-current="page">Pricing</span></li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5 service-section animate-fade-in-up">
                <div className="container mx-auto px-4 text-center font-raleway">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-reveal animate-fade-in-up">Transparent Pricing</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto text-reveal animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Professional Quality at Affordable Rates
                    </p>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        FREE TRIAL
                    </button>
                </div>
            </section>

            {/* Pricing Tables Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">SERVICES</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Service Pricing</h2>
                        <p className="text-medium-gray max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Competitive pricing for all your photo editing needs. Bulk discounts available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 stagger-animation">
                        {[
                            { icon: 'cut', title: 'Clipping Path', price: '0.50 - 3.00', items: ['Simple Background Removal', 'Complex Object Isolation', 'Multiple Paths per Image', 'Transparent PNG Output'] },
                            { icon: 'shirt', title: 'Ghost Mannequin', price: '2.00 - 5.00', items: ['3D Product Effect', 'Multiple Angles', 'Professional Shadow', 'E-commerce Ready'] },
                            { icon: 'palette', title: 'Color Correction', price: '1.00 - 3.00', items: ['White Balance Adjustment', 'Exposure Correction', 'Color Enhancement', 'Batch Processing'] },
                            { icon: 'gem', title: 'Jewelry Retouching', price: '3.00 - 8.00', items: ['Reflection Removal', 'Scratch & Dust Cleanup', 'Sparkle Enhancement', 'High-Resolution Output'] }
                        ].map((plan, i) => (
                            <div key={i} className="pricing-card service-card-modern hover-lift text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="p-6">
                                    <div className="service-icon-modern mx-auto mb-6">
                                        <i className={`fas fa-${plan.icon} text-white`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-800">{plan.title}</h3>
                                    <div className="text-3xl font-bold text-primary mb-2">${plan.price}</div>
                                    <div className="text-medium-gray text-sm mb-6">per image</div>

                                    <ul className="text-left space-y-3 mb-8 text-sm text-medium-gray">
                                        {plan.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <i className="fas fa-check text-primary mr-3"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href="/contact" className="block w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 btn-animated">
                                        GET STARTED
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bulk Discounts Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">SAVE MORE</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Bulk Order Discounts</h2>
                        <p className="text-medium-gray max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            The more images you order, the more you save. Special rates for high-volume projects.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto hover-lift animate-zoom-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {[
                                { pct: '10%', title: '50+ Images', desc: 'Perfect for small catalogs', bg: 'bg-primary/10' },
                                { pct: '20%', title: '100+ Images', desc: 'Ideal for product launches', bg: 'bg-primary/20' },
                                { pct: '30%', title: '500+ Images', desc: 'Best for large catalogs', bg: 'bg-primary/30' }
                            ].map((tier, i) => (
                                <div key={i} className="discount-tier animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                                    <div className={`w-20 h-20 mx-auto mb-4 ${tier.bg} rounded-full flex items-center justify-center`}>
                                        <span className="text-2xl font-bold text-primary">{tier.pct}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{tier.title}</h3>
                                    <p className="text-gray-600 text-sm">{tier.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-6">
                                <strong className="text-gray-800">Custom pricing available</strong> for orders over 1000 images. Contact us for enterprise-level solutions.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn">
                                GET CUSTOM QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm animate-fade-in-up">VALUE</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>What&apos;s Included</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Every service comes with our comprehensive quality guarantee and additional benefits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
                        {[
                            { icon: 'sync-alt', title: 'Unlimited Revisions', desc: 'We\'ll keep editing until you\'re 100% satisfied' },
                            { icon: 'shield-alt', title: 'Quality Guarantee', desc: 'ISO-27001 certified security and quality standards' },
                            { icon: 'clock', title: 'Fast Turnaround', desc: '24-48 hour delivery for most projects' },
                            { icon: 'headset', title: 'Expert Support', desc: 'Dedicated account manager for all projects' }
                        ].map((item, i) => (
                            <div key={i} className="text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 floating-element" style={{ animationDelay: `${0.5 * (i + 1)}s` }}>
                                    <i className={`fas fa-${item.icon} text-2xl text-primary`}></i>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Payment Methods Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm animate-fade-in-up">PAYMENT</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Payment Methods</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Secure payment options for your convenience
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto hover-lift animate-zoom-in">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { icon: 'fab fa-cc-paypal', color: 'text-blue-600', name: 'PayPal' },
                                { icon: 'fab fa-cc-stripe', color: 'text-purple-600', name: 'Stripe' },
                                { icon: 'fas fa-credit-card', color: 'text-gray-600', name: 'Credit Card' },
                                { icon: 'fas fa-university', color: 'text-green-600', name: 'Bank Transfer' }
                            ].map((method, i) => (
                                <div key={i} className="payment-method hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className={`${method.icon} text-3xl ${method.color}`}></i>
                                    </div>
                                    <span className="font-semibold text-gray-800">{method.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 text-sm">
                                All payments are processed securely. We never store your payment information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Trial Form */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up" id="free-trial-form">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden font-raleway">
                        <div className="md:flex">
                            {/* Left Side - Green Section */}
                            <div className="md:w-1/2 bg-primary text-white p-8">
                                <h2 className="text-3xl font-bold mb-4">Start Your Free Trial</h2>
                                <p className="mb-6">Experience our professional photo editing services with no commitment. Send us up to 5 images and we&apos;ll edit them for free.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-check-circle mr-3 text-xl"></i>
                                        <span>No credit card required</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-check-circle mr-3 text-xl"></i>
                                        <span>Up to 5 images edited for free</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-check-circle mr-3 text-xl"></i>
                                        <span>24-48 hour turnaround</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-check-circle mr-3 text-xl"></i>
                                        <span>Professional quality guaranteed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="md:w-1/2 p-8">
                                <form id="freeTrialForm" className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors form-input" 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors form-input" 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-gray-700 mb-2 font-semibold">Service Needed</label>
                                        <select 
                                            id="service" 
                                            name="service" 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors form-input" 
                                            required
                                        >
                                            <option value="">Select a service</option>
                                            <option value="background-removal">Background Removal</option>
                                            <option value="clipping-path">Clipping Path</option>
                                            <option value="shadow-reflection">Shadow Reflection</option>
                                            <option value="color-correction">Color Correction</option>
                                            <option value="ghost-mannequin">Ghost Mannequin</option>
                                            <option value="image-masking">Image Masking</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-semibold">Upload Images</label>
                                        <div className="flex items-center gap-3">
                                            <input 
                                                type="file" 
                                                id="fileUpload" 
                                                name="fileUpload" 
                                                className="hidden" 
                                                multiple 
                                                accept="image/*" 
                                            />
                                            <button 
                                                type="button" 
                                                className="bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm magnetic-btn font-semibold"
                                                onClick={() => document.getElementById('fileUpload')?.click()}
                                            >
                                                Choose Files
                                            </button>
                                            <span id="fileCount" className="text-sm text-gray-500">No files chosen</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">Additional Details</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows={4} 
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors form-input resize-none" 
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full bg-primary text-white py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn uppercase tracking-widest"
                                    >
                                        SUBMIT FREE TRIAL REQUEST
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up" id="faq-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up font-raleway uppercase tracking-tight">Pricing Questions</h2>

                    <div className="max-w-4xl mx-auto text-left">
                        {[
                            { q: 'Do you offer refunds?', a: 'Yes, we offer a 100% satisfaction guarantee. If you\'re not happy with the results, we\'ll either re-edit your images or provide a full refund. Your satisfaction is our priority.' },
                            { q: 'How do bulk discounts work?', a: 'Bulk discounts are automatically applied based on the number of images in your order. The discount percentage increases with volume - 10% for 50+ images, 20% for 100+ images, and 30% for 500+ images. Contact us for custom pricing on orders over 1000 images.' },
                            { q: 'Are there any hidden fees?', a: 'No hidden fees. The price you see is the price you pay. Our pricing is transparent and includes unlimited revisions, quality checks, and standard delivery. Rush delivery and additional services are clearly priced and optional.' },
                            { q: 'Can I mix different services in one order?', a: 'Absolutely! You can combine different services in a single order. We\'ll provide a customized quote based on your specific requirements. Many clients use multiple services like clipping path + color correction for their e-commerce images.' },
                            { q: 'Do you offer subscription plans?', a: 'Yes, we offer monthly subscription plans for clients with regular editing needs. Subscription plans include discounted rates, priority processing, and dedicated account management. Contact us to discuss subscription options.' }
                        ].map((item, i) => (
                            <div key={i} className={`faq-item bg-white border border-border-light rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${activeFaq === i ? 'active' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                                <div 
                                    className="faq-question p-6 cursor-pointer flex justify-between items-center hover:bg-light-gray transition-colors duration-300"
                                    onClick={() => toggleFaq(i)}
                                >
                                    <h3 className={`font-bold transition-colors font-raleway ${activeFaq === i ? 'text-primary' : 'text-gray-800'}`}>{item.q}</h3>
                                    <i className={`fas fa-chevron-down faq-toggle text-primary transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}></i>
                                </div>
                                <div className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 text-medium-gray leading-relaxed font-raleway font-medium">
                                        {item.a.split('\n').map((line, idx) => (
                                            <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact" className="bg-primary text-white px-12 py-4 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-wider text-sm">
                            JOIN US NOW
                        </Link>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
