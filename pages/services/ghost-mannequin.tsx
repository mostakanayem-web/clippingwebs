import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function GhostMannequin() {
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
            question: "What Is Ghost Mannequin Photography?",
            answer: "Ghost mannequin (also known as invisible mannequin or neck joint) is a post-production technique that removes the mannequin from images while preserving the garment's shape. Multiple images are seamlessly blended to create a 3D hollow effect that shows the true fit and structure of your clothing."
        },
        {
            question: "What Images Do I Need To Provide?",
            answer: "You typically need to provide two images: one of the garment on a mannequin showing the front, and one close-up shot of the neck/collar area or interior details. Some garments may require additional shots (like sleeves or hemlines) depending on your desired final effect."
        },
        {
            question: "How Long Does Ghost Mannequin Service Take?",
            answer: "Standard turnaround is 24-48 hours for individual orders. We specialize in high-volume batch processing, so you can send hundreds or thousands of images and receive consistent results quickly. Rush orders are available with expedited processing."
        },
        {
            question: "Is Ghost Mannequin Suitable For All Clothing Types?",
            answer: "Ghost mannequin is ideal for shirts, jackets, dresses, trousers, skirts, and most apparel. It works best with structured garments. Stretchy or lightweight fabrics may require special handling, which we can discuss based on your specific products."
        },
        {
            question: "How Much Does Ghost Mannequin Service Cost?",
            answer: "Pricing depends on complexity and volume. Simple neck joints start at affordable rates, with bulk discounts available. Get a free quote by sending sample images to our team. We offer flexible pricing for high-volume orders."
        }
    ];

    return (
        <Layout>
            <Head>
                <title>Ghost Mannequin Services | Clipping Webs</title>
                <meta name="description" content="Professional ghost mannequin services for apparel photography. Create 3D neck joint effects. Free trial available." />
                <meta name="keywords" content="ghost mannequin, invisible mannequin, neck joint, apparel photography, clothing editing" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/services/ghost-mannequin" />

                {/* Open Graph */}
                <meta property="og:title" content="Ghost Mannequin Services | Clipping Webs" />
                <meta property="og:description" content="Professional ghost mannequin services for apparel photography. Create 3D neck joint effects. Free trial available." />
                <meta property="og:url" content="https://clippingwebs.com/services/ghost-mannequin" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Service */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Ghost Mannequin Service",
                            "description": "Professional ghost mannequin services for apparel photography. Create 3D neck joint effects with free trial available.",
                            "url": "https://clippingwebs.com/services/ghost-mannequin",
                            "provider": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com"
                            },
                            "serviceType": "Photo Editing",
                            "areaServed": "Worldwide",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Ghost Mannequin Packages",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Basic Ghost Mannequin"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Advanced Neck Joint"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Multiple Views"
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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="ghost-hero">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50 z-0"></div>
                
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element opacity-40"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl floating-element opacity-30" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-screen">
                        
                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-left">
                            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element">
                                <Image 
                                    src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Ghost Mannequin Service"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element ml-8" style={{ animationDelay: '1s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
                                Ghost Mannequin
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-raleway font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                3D Effects for Apparel Excellence
                            </p>

                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up font-raleway inline-block" style={{ animationDelay: '0.6s' }}>
                                FREE TRIAL
                            </Link>

                            <div className="mt-8 flex justify-center space-x-6 stagger-animation">
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '0.8s' }}>
                                        <i className="fas fa-shirt text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Neck Joint</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1s' }}>
                                        <i className="fas fa-magic text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">3D Effect</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1.2s' }}>
                                        <i className="fas fa-check-circle text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Seamless Blending</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-right">
                            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element ml-auto" style={{ animationDelay: '0.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Quality Work"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element mr-8" style={{ animationDelay: '1.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
                        {['Neck Joint', '3D Effect', 'Apparel Ready', 'Seamless Blend', 'Wrinkle Removal', 'Professional Quality', 'Neck Joint', '3D Effect', 'Apparel Ready', 'Seamless Blend', 'Wrinkle Removal', 'Professional Quality'].map((item, i) => (
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
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-raleway uppercase">Professional Ghost Mannequin Services</h2>
                                <div className="space-y-6 text-gray-600 mb-8 font-raleway">
                                    <p className="text-lg leading-relaxed text-gray-600">
                                        At <span className="font-semibold text-primary">Clipping Webs</span>, we specialize in professional ghost mannequin services that elevate your apparel photography. The ghost mannequin effect removes the distraction of the model or mannequin while preserving the garment&apos;s shape, creating stunning 3D-like images.
                                    </p>
                                    <p className="leading-relaxed text-gray-600">
                                        Ghost mannequin photography is essential for online apparel retailers. By seamlessly blending multiple images, we create a professional, distraction-free look that helps customers visualize how the clothing will fit and look on them.
                                    </p>
                                    <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 my-6">
                                        <p className="font-medium text-gray-700 italic">
                                            &quot;Professional ghost mannequin images increase conversion rates by letting customers focus purely on your garment.&quot;
                                        </p>
                                    </div>
                                    <p className="leading-relaxed text-gray-600">
                                        From simple neck joints to complex sleeve and bottom combinations, we handle all apparel types with precision and deliver seamless, natural-looking results.
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
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift floating-element" style={{ height: '280px' }}>
                                        <Image src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                             alt="Before" 
                                             fill
                                             className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-raleway font-bold text-xs">WITH MANNEQUIN</span>
                                        </div>
                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift floating-element" style={{ height: '280px', animationDelay: '0.3s' }}>
                                        <Image src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                             alt="After" 
                                             fill
                                             className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full font-raleway font-bold text-xs">GHOST EFFECT</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover-lift animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-primary font-raleway mb-1">5K+</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Apparel Edited</p>
                                            </div>
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-shirt text-primary text-lg"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-2xl p-6 border border-green-400/20 hover-lift animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-green-600 font-raleway mb-1">24H</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Fast Turnaround</p>
                                            </div>
                                            <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-bolt text-green-600 text-lg"></i>
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
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Our Ghost Mannequin Services</h2>
                    <div className="service-feature-grid">
                        {[
                            { icon: 'shirt', title: 'Neck Joint', desc: "Seamlessly remove the mannequin's body while preserving the perfect neck/collar fit." },
                            { icon: 'socks', title: 'Bottom Joint', desc: "Create a clean bottom hem for dresses, skirts, and pants with professional blending." },
                            { icon: 'hands', title: 'Sleeve Detail', desc: "Show sleeve construction and fit with our expert joint techniques." },
                            { icon: 'magic', title: '3D Effect', desc: "Create stunning 3D hollow effects that showcase garment structure beautifully." }
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

            {/* Why Ghost Mannequin Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="why-ghost">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Why Ghost Mannequin Photography?</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Professional Apparel Presentation</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Ghost mannequin removes the distraction of models or plastic forms, letting customers focus entirely on your garment. This technique creates a professional, clean look that improves conversion rates and reduces returns.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our expert editors seamlessly blend multiple images to create a natural 3D effect. Whether you need simple neck joints or complex multi-part combinations, we deliver flawless results.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                With high-volume capacity and fast turnaround, we handle everything from small boutiques to large retailers. Your apparel deserves professional presentation.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bulk Processing Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="bulk-processing">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Bulk Processing Expertise</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Handle Any Volume</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Whether you have 10 garments or 10,000, we handle your ghost mannequin editing with precision and speed. Our team processes high volumes daily while maintaining perfect consistency across every image.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Standard processing is 24-48 hours, with rush processing available. Send your images with instructions, and we&apos;ll deliver flawless results that meet your standards and timelines.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                Our expertise spans all apparel types and complexities. We deliver consistent quality every single time.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                FREE TRIAL
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-left text-center">
                            <div className="slider-container bg-white rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Professional Quality
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="benefits">

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Ghost Mannequin Benefits</h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-medium-gray mb-12 text-lg leading-relaxed font-raleway">
                            Professional ghost mannequin images increase customer confidence, boost conversions, and reduce return rates significantly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {[
                                { title: 'Increased Conversion Rates', desc: 'Focus entirely on your garment increases purchase confidence and sales.' },
                                { title: 'Reduced Return Rates', desc: 'Clear, accurate product representation means customers know exactly what to expect.' },
                                { title: 'Professional Brand Image', desc: 'Ghost mannequin images create a polished, high-end appearance for your brand.' },
                                { title: 'Faster Processing Times', desc: 'Bulk volume handling means quick turnaround without sacrificing quality.' }
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
                        See how Clipping Webs transforms apparel photography with professional ghost mannequin effects. Explore our samples.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Your Apparel Partner</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Since 2022, Clipping Webs has been trusted by apparel brands worldwide. We understand what it takes to make clothing look irresistible online.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                We handle high-volume orders with exceptional speed and consistency. Our team delivers seamless results every time. Whether you&apos;re a small boutique or large retailer, we scale to meet your needs.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                We enhance your apparel marketing to help your business grow and succeed.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block text-center font-raleway">
                                CONTACT US
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Professional Apparel Results
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
                        Partner with us for proven ghost mannequin expertise, reliable processing, and dedicated support.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {[
                            { icon: 'shirt', title: 'Apparel Expertise', desc: 'We specialize exclusively in ghost mannequin and apparel photography.' },
                            { icon: 'tachometer-alt', title: 'High Volume Capacity', desc: 'We handle thousands of garments daily without sacrificing quality.' },
                            { icon: 'certificate', title: 'Quality Guaranteed', desc: 'Every image passes our rigorous quality standards before delivery.' },
                            { icon: 'clock', title: 'Fast Turnaround', desc: 'We deliver bulk orders within 24-48 hours consistently.' },
                            { icon: 'dollar-sign', title: 'Competitive Pricing', desc: 'We offer affordable bulk rates that scale with your volume.' },
                            { icon: 'headset', title: 'Dedicated Support', desc: 'We\'re here to answer questions and ensure your satisfaction.' }
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
                                text: '"Clipping Webs transformed our apparel line. The seamless editing and quick turnaround allowed us to launch early. Their quality is unmatched!"',
                                name: 'Sarah Anderson',
                                role: 'Fashion Brand Owner',
                                img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
                            },
                            {
                                text: '"We process 1,000+ items monthly. Clipping Webs handles everything with precision and consistent quality. Our satisfaction has increased significantly!"',
                                name: 'James Mitchell',
                                role: 'E-Commerce Manager',
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
                                <h2 className="text-3xl font-bold mb-6 font-raleway uppercase">Get 05 Apparel Items Edited for Free</h2>
                                <p className="mb-8 opacity-90 leading-relaxed text-lg font-raleway text-white">Experience our ghost mannequin services with no commitment. Send us up to 5 apparel items and we&apos;ll apply professional effects for free.</p>
                                <div className="space-y-5">
                                    {[
                                        'No credit card required',
                                        'Up to 5 apparel items edited for free',
                                        '24-hour turnaround',
                                        'Professional quality guaranteed'
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
