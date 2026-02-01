import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function JewelryRetouching() {
    useScrollAnimation();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4;
    const sliderWidth = 400;
    const gap = 32;
    const autoPlayInterval = 5000;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);

        return () => {
            resetTimeout();
        };
    }, [currentSlide]);

    useEffect(() => {
        const handleScroll = () => {
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.scrollY / windowHeight) * 100;
                progressBar.style.width = scrolled + '%';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqData = [
        {
            question: "What Is Jewelry Retouching?",
            answer: "Jewelry retouching is the art of enhancing jewelry product images through careful post-production editing. This includes removing scratches, dust, fingerprints, enhancing metal shine, amplifying gemstone brilliance, and perfecting reflections to create flawless, luxurious-looking jewelry photographs."
        },
        {
            question: "What Issues Does Jewelry Retouching Fix?",
            answer: "We fix a wide range of jewelry photography issues: scratches and surface blemishes on metals, dust particles, fingerprints, inconsistent polishing, dull gemstone appearance, harsh reflections, poor lighting, color inconsistencies, and background issues. Every detail is enhanced to showcase your jewelry's true beauty."
        },
        {
            question: "How Do You Enhance Gemstone Brilliance?",
            answer: "Our experts use advanced techniques to enhance gemstone appearance: increasing internal sparkle and fire, improving color saturation, fixing reflection patterns, removing unwanted shadows, and creating depth. All enhancements maintain a natural appearance while making stones look their absolute best."
        },
        {
            question: "Is Jewelry Retouching Suitable For All Types?",
            answer: "Absolutely! We retouch all jewelry types: diamonds, gemstone rings, necklaces, bracelets, earrings, watches, brooches, and more. Regardless of metal type (gold, silver, platinum) or stone complexity, our team has the expertise to deliver flawless results."
        },
        {
            question: "How Long Does Jewelry Retouching Take?",
            answer: "Standard turnaround is 24-48 hours. For bulk orders, we can process hundreds of items daily while maintaining exceptional quality. Rush processing is available for urgent deadlines. Our team works efficiently without compromising on the meticulous attention to detail your jewelry deserves."
        }
    ];

    return (
        <Layout>
            <Head>
                <title>Jewelry Retouching Services | Clipping Webs</title>
                <meta name="description" content="Professional jewelry retouching services. Remove scratches, enhance sparkle, perfect reflections. Flawless jewelry images for catalogs and e-commerce." />
                <meta name="keywords" content="jewelry retouching, jewelry editing, gemstone enhancement, jewelry photography, luxury jewelry retouching" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/services/jewelry-retouching" />

                {/* Open Graph */}
                <meta property="og:title" content="Jewelry Retouching Services | Clipping Webs" />
                <meta property="og:description" content="Professional jewelry retouching services. Remove scratches, enhance sparkle, perfect reflections. Flawless jewelry images for catalogs and e-commerce." />
                <meta property="og:url" content="https://clippingwebs.com/services/jewelry-retouching" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Service */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Jewelry Retouching Service",
                            "description": "Professional jewelry retouching services. Remove scratches, enhance sparkle, perfect reflections. Flawless jewelry images for catalogs and e-commerce.",
                            "url": "https://clippingwebs.com/services/jewelry-retouching",
                            "provider": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com"
                            },
                            "serviceType": "Photo Editing",
                            "areaServed": "Worldwide",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Jewelry Retouching Packages",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Basic Jewelry Retouching"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Gemstone Enhancement"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Luxury Jewelry Editing"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>

            {/* Progress Bar */}
            <div className="progress-container fixed top-0 left-0 w-full h-1 z-50 overflow-hidden pointer-events-none">
                <div id="progressBar" className="progress-bar h-full bg-primary transition-all duration-300" style={{ width: '0%' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="jewelry-hero">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50 z-0"></div>
                
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element opacity-40"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl floating-element opacity-30" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-screen">
                        
                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-left">
                            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element">
                                <Image 
                                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Jewelry Retouching Service"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element ml-8" style={{ animationDelay: '1s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Professional Results"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="text-center relative z-10 py-12 animate-fade-in-up">
                            <div className="inline-block mb-6 animate-fade-in-up">
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs font-raleway block mb-2">Professional Services</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-raleway leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Jewelry Retouching
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-raleway font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                Sparkle and Shine Perfected
                            </p>

                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up font-raleway inline-block" style={{ animationDelay: '0.6s' }}>
                                FREE TRIAL
                            </Link>

                            <div className="mt-8 flex justify-center space-x-6 stagger-animation">
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '0.8s' }}>
                                        <i className="fas fa-gem text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Gemstone Polishing</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1s' }}>
                                        <i className="fas fa-sparkles text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Scratch Removal</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1.2s' }}>
                                        <i className="fas fa-star text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Luxury Polish</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-right">
                            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element ml-auto" style={{ animationDelay: '0.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Quality Work"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element mr-8" style={{ animationDelay: '1.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Expert Results"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary/80 to-primary-hover/80 py-4 overflow-hidden z-20 backdrop-blur-sm">
                    <div className="service-ticker flex whitespace-nowrap">
                        {['Gemstone Enhancement', 'Scratch Removal', 'Metal Polishing', 'Dust Removal', 'Luxury Finish', 'Professional Quality', 'Gemstone Enhancement', 'Scratch Removal', 'Metal Polishing', 'Dust Removal', 'Luxury Finish', 'Professional Quality'].map((item, i) => (
                            <span key={i} className="ticker-item mx-8 font-medium text-white font-raleway">{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up relative" id="introduction">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 stagger-animation">
                        <div className="w-full lg:w-1/2 animate-slide-in-left">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-raleway uppercase">High-End Jewelry Retouching</h2>
                                <div className="space-y-6 text-gray-600 mb-8 font-raleway">
                                    <p className="text-lg leading-relaxed text-gray-600">
                                        At <span className="font-semibold text-primary">Clipping Webs</span>, we specialize in high-end jewelry retouching that showcases the true beauty of your pieces. Jewelry photography is uniquely challenging—reflections, dust, scratches, and color inconsistencies can ruin an otherwise perfect shot.
                                    </p>
                                    <p className="leading-relaxed text-gray-600">
                                        Our expert editors meticulously retouch every detail. We remove imperfections, polish metals to perfection, enhance gemstone brilliance, and create stunning, luxurious-looking images that captivate buyers and increase confidence in your jewelry.
                                    </p>
                                    <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 my-6">
                                        <p className="font-medium text-gray-700 italic">
                                            &quot;Showcase the true beauty and value of your jewelry pieces with flawless, professional photography.&quot;
                                        </p>
                                    </div>
                                    <p className="leading-relaxed text-gray-600">
                                        From delicate diamond rings to statement necklaces, every piece gets the premium treatment it deserves. Our retouching enhances natural beauty while maintaining authenticity.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 flex items-center justify-center btn-animated magnetic-btn font-raleway">
                                        <span>FREE TRIAL</span>
                                        <i className="fas fa-arrow-right ml-2 text-white"></i>
                                    </Link>
                                    <Link href="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 magnetic-btn font-raleway">
                                        GET A QUOTE
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 animate-slide-in-right">
                            <div className="relative h-full flex flex-col justify-center">
                                {/* Masonry Grid Layout */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {/* Large Image - Span 2 columns */}
                                    <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg hover-lift floating-element" style={{ height: '320px' }}>
                                        <Image src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                             alt="Jewelry" 
                                             fill
                                             className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full font-raleway font-bold text-xs">LUXURY FINISH</span>
                                        </div>
                                    </div>

                                    {/* Small Image - Right */}
                                    <div className="col-span-1 relative rounded-2xl overflow-hidden shadow-lg hover-lift floating-element" style={{ height: '320px', animationDelay: '0.3s' }}>
                                        <Image src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                             alt="Detail" 
                                             fill
                                             className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    </div>
                                </div>

                                {/* Bottom Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Stat Card 1 */}
                                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover-lift animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-primary font-raleway mb-1">3K+</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Jewelry Retouched</p>
                                            </div>
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-gem text-primary text-lg"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stat Card 2 */}
                                    <div className="bg-gradient-to-br from-amber-400/10 to-amber-300/5 rounded-2xl p-6 border border-amber-300/20 hover-lift animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-amber-600 font-raleway mb-1">99%</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Satisfaction Rate</p>
                                            </div>
                                            <div className="w-12 h-12 bg-amber-300/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-star text-amber-600 text-lg"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="service-features">

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Our Jewelry Retouching Services</h2>
                    <div className="service-feature-grid">
                        {[
                            { icon: 'gem', title: 'Gemstone Enhancement', desc: "Amplify brilliance, sparkle, and fire in diamonds and precious stones." },
                            { icon: 'sparkles', title: 'Dust & Scratch Removal', desc: "Remove every imperfection while maintaining natural appearance and texture." },
                            { icon: 'ring', title: 'Metal Polishing', desc: "Perfect reflective surfaces and create luxurious metallic finishes." },
                            { icon: 'star', title: 'Reflection Mastery', desc: "Control and perfect reflections for professional, magazine-quality results." }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-card hover-lift animate-fade-in-up bg-white p-6 rounded-xl shadow-md transition-all duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="feature-icon">
                                    <i className={`fas fa-${feature.icon} text-white`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-raleway text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 font-raleway">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Jewelry Retouching Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="why-jewelry">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Why Jewelry Retouching?</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Unlock True Potential</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Jewelry is inherently beautiful, but photography doesn&apos;t always capture that beauty. Dust particles, scratches, harsh reflections, and inconsistent lighting can undermine even the most exquisite pieces. Professional retouching fixes these issues.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our meticulous editing brings out the true luxury and craftsmanship of your jewelry. Every stone sparkles, every metal surface gleams, and every detail shines. Buyers will be captivated by images that accurately represent your premium pieces.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                From online marketplaces to luxury catalogs, professional jewelry retouching is essential for showcasing value and driving sales.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Luxury Finish Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="luxury-finish">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Catalog & E-Commerce Ready</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Professional Magazine Quality</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Whether creating a luxury jewelry catalog or updating e-commerce listings, our retouching delivers magazine-quality results. We understand the specific requirements of jewelry presentation across all platforms.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our team handles all jewelry types and complexities: engagement rings, wedding bands, bracelets, necklaces, earrings, watches, brooches, and more. From fine diamonds to costume jewelry, we deliver flawless results.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                High-volume processing available. Bulk orders receive consistent quality and competitive rates without compromise.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                FREE TRIAL
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-left text-center">
                            <div className="slider-container bg-white rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Premium Results
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="benefits">

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Jewelry Retouching Benefits</h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-medium-gray mb-12 text-lg leading-relaxed font-raleway">
                            Professional jewelry retouching increases buyer confidence, drives sales, and protects the reputation of your brand through stunning, premium-quality imagery.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {[
                                { title: 'Increased Trust & Sales', desc: 'Premium-looking images build confidence and increase conversion rates.' },
                                { title: 'Brand Reputation', desc: 'Flawless images elevate your brand perception and luxury positioning.' },
                                { title: 'Accurate Representation', desc: 'Retouching enhances while maintaining authenticity and true product appearance.' },
                                { title: 'Competitive Advantage', desc: 'Professional presentation sets you apart from competitors in the market.' }
                            ].map((benefit, idx) => (
                                <div key={idx} className="benefit-item flex items-start">
                                    <div className="benefit-icon mr-4 mt-1">
                                        <i className="fas fa-check text-primary"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2 font-raleway text-gray-800">{benefit.title}</h4>
                                        <p className="text-medium-gray font-raleway">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Before/After Gallery */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="before-after-gallery">

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase tracking-tight">OUR PREVIOUS WORK</h2>
                    <p className="text-medium-gray text-center mb-12 max-w-2xl mx-auto font-raleway leading-relaxed">
                        See how Clipping Webs transforms jewelry photography into stunning, luxurious visual assets. Explore our sample retouching.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="why-choose-us">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Why Choose Clipping Webs?</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Your Jewelry Partner</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Since 2022, Clipping Webs has specialized in high-end jewelry retouching. We understand the unique challenges of jewelry photography and the importance of flawless presentation for luxury products.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our team combines technical expertise with artistic vision. We enhance your jewelry&apos;s natural beauty while maintaining authenticity. Every stone, every metal surface, every detail receives meticulous attention.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                We handle all volume levels with consistent quality. From individual custom pieces to large catalog projects, we deliver premium results that exceed expectations.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block text-center font-raleway">
                                CONTACT US
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Luxury Jewelry Results
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="what-sets-us-apart">

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-12 font-raleway text-gray-800 uppercase tracking-tight">What Sets Clipping Webs Apart?</h2>
                    <p className="text-medium-gray mb-12 max-w-2xl mx-auto font-raleway leading-relaxed">
                        Partner with us for specialized jewelry expertise, meticulous attention to detail, and results that make your pieces shine.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {[
                            { icon: 'gem', title: 'Jewelry Expertise', desc: 'We specialize exclusively in professional jewelry retouching.' },
                            { icon: 'tachometer-alt', title: 'Meticulous Detail', desc: 'Every stone, every surface receives careful, expert attention.' },
                            { icon: 'certificate', title: 'Quality Obsessed', desc: 'Rigorous standards ensure flawless results on every project.' },
                            { icon: 'clock', title: 'Quick Turnaround', desc: 'Fast delivery without compromising on luxury quality standards.' },
                            { icon: 'dollar-sign', title: 'Competitive Pricing', desc: 'Premium quality at affordable rates, even for bulk orders.' },
                            { icon: 'headset', title: 'Expert Support', desc: 'We understand jewelry and provide knowledgeable, caring service.' }
                        ].map((item, idx) => (
                            <div key={idx} className="feature-card hover-lift animate-fade-in-up bg-white p-6 rounded-xl shadow-md transition-all duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto text-white text-2xl">
                                    <i className={`fas fa-${item.icon} text-white`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-raleway text-gray-800 uppercase">{item.title}</h3>
                                <p className="text-gray-600 font-raleway text-center leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="testimonials">

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-12 font-raleway text-gray-800 uppercase tracking-tight">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation text-left">
                        {[
                            {
                                text: '"Clipping Webs transformed my jewelry photography. Every stone sparkles perfectly, and my sales have increased dramatically. Their expertise in jewelry is unmatched!"',
                                name: 'Victoria Chen',
                                role: 'Jewelry Designer',
                                img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
                            },
                            {
                                text: '"We send 500+ pieces monthly. Clipping Webs maintains consistent, flawless quality every time. They understand luxury jewelry presentation better than anyone I\'ve worked with."',
                                name: 'Robert Goldstein',
                                role: 'Fine Jewelry Retailer',
                                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
                            }
                        ].map((testi, idx) => (
                            <div key={idx} className="testimonial-card hover-lift animate-fade-in-up p-8 bg-white rounded-2xl shadow-md border border-gray-100" style={{ animationDelay: `${idx * 0.2}s` }}>
                                <p className="text-medium-gray mb-6 italic leading-relaxed text-lg font-raleway text-left">
                                    {testi.text}
                                </p>
                                <div className="client-info flex items-center">
                                    <div className="client-avatar w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                                        <Image src={`${testi.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`} alt={testi.name} fill className="object-cover" />
                                    </div>
                                    <div className="text-left leading-tight">
                                        <h4 className="font-bold text-gray-800 font-raleway">{testi.name}</h4>
                                        <p className="text-light-text text-sm font-raleway">{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Trial Form Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="free-trial-form">

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="md:flex">
                            <div className="md:w-1/2 bg-primary text-white p-12 flex flex-col justify-center text-left">
                                <h2 className="text-3xl font-bold mb-6 font-raleway uppercase">Get 05 Jewelry Items Retouched for Free</h2>
                                <p className="mb-8 opacity-90 leading-relaxed text-lg font-raleway text-white">Experience our professional jewelry retouching with no commitment. Send us up to 5 jewelry pieces and we&apos;ll apply our premium retouching service for free.</p>
                                <div className="space-y-5">
                                    {[
                                        'No credit card required',
                                        'Up to 5 jewelry items retouched for free',
                                        '24-hour turnaround',
                                        'Professional luxury quality guaranteed'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center text-white">
                                            <i className="fas fa-check-circle mr-3 text-xl text-white"></i>
                                            <span className="font-medium font-raleway text-white">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-1/2 p-12 bg-white text-left">
                                <form className="space-y-5">
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2 font-raleway uppercase text-sm">Full Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-raleway" required placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2 font-raleway uppercase text-sm">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-raleway" required placeholder="Email Address" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2 font-raleway uppercase text-sm">Upload Images</label>
                                        <div className="flex items-center gap-3">
                                            <input type="file" id="fileUpload" className="hidden" multiple accept="image/*" />
                                            <button type="button" className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl transition-all duration-200 text-sm font-bold font-raleway magnetic-btn shadow-sm" onClick={() => (document.getElementById('fileUpload') as HTMLInputElement)?.click()}>
                                                Choose Files
                                            </button>
                                            <span className="text-sm text-gray-500 font-medium font-raleway">No files chosen</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2 font-raleway uppercase text-sm">Additional Notes</label>
                                        <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-raleway" placeholder="Any specific requirements..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover hover:-translate-y-1 transition-all duration-300 btn-animated magnetic-btn uppercase tracking-wider font-raleway">
                                        SUBMIT FREE TRIAL REQUEST
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="faq-section">

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-12 font-raleway text-gray-800 uppercase tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
                    <div className="max-w-3xl mx-auto text-left">
                        {faqData.map((faq, idx) => (
                            <div key={idx} className={`faq-item bg-white border border-border-light rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${activeFaq === idx ? 'active' : ''}`}>
                                <div 
                                    className="faq-question p-6 cursor-pointer flex justify-between items-center hover:bg-light-gray transition-colors duration-300"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <h3 className={`font-bold transition-colors font-raleway ${activeFaq === idx ? 'text-primary' : 'text-gray-800'}`}>{faq.question}</h3>
                                    <i className={`fas fa-chevron-down faq-toggle text-primary transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}></i>
                                </div>
                                <div className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 text-medium-gray leading-relaxed font-raleway font-medium">
                                        {faq.answer.split('\n').map((line, i) => (
                                            <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block uppercase tracking-wide font-raleway">
                            CONTACT US FOR MORE INFO
                        </Link>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
