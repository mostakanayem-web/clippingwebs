import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function EcommerceRetouching() {
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
            question: "What Is E-Commerce Retouching Service?",
            answer: "E-commerce retouching is comprehensive product image editing specifically designed for online retailers. It includes background removal/replacement, color correction, dust and scratch removal, resizing, alignment, and optimization for marketplace requirements like Amazon, Shopify, eBay, and Etsy."
        },
        {
            question: "What Does E-Commerce Retouching Do?",
            answer: "E-commerce retouching allows you to:\n- Remove unwanted backgrounds or replace with pure white\n- Fix product lighting and color issues\n- Clean up dust, scratches, and imperfections\n- Resize images for specific platform requirements\n- Ensure consistency across your entire catalog\n- Increase conversion rates with polished product images\n- Meet marketplace compliance standards"
        },
        {
            question: "Why Is E-Commerce Retouching Service Necessary?",
            answer: "E-commerce retouching is necessary for:\n- Professional appearance across online stores\n- Compliance with marketplace standards (Amazon, eBay)\n- Increasing customer trust and confidence\n- Reducing return rates with accurate product representation\n- Improving conversion rates with polished visuals\n- Creating consistent brand imagery\n- Standing out from competitors\n- Optimizing for mobile viewing on smartphones"
        },
        {
            question: "How Do I Select The Best E-Commerce Retouching Service?",
            answer: "When selecting an e-commerce retouching service, consider:\n- Experience with your product category\n- Understanding of marketplace requirements\n- Quality of samples provided\n- Turnaround time for bulk orders\n- Pricing structure and volume discounts\n- Revision policy and satisfaction guarantee\n- Ability to handle high-volume projects\n- Support for multiple image formats and sizes"
        },
        {
            question: "What Are The Types of E-Commerce Retouching?",
            answer: "There are several types of e-commerce retouching:\n- Basic Retouching: Background removal and color correction\n- Advanced Retouching: Including shadow effects and lifestyle images\n- Lifestyle Photography Retouching: Enhanced with models and props\n- Batch Retouching: Consistent editing across entire catalogs\n- Marketplace-Specific Retouching: Optimized for Amazon, Shopify requirements\n- 360 Product Photography Retouching: Multi-angle image editing"
        }
    ];

    return (
        <Layout>
            <Head>
                <title>E-Commerce Product Photo Retouching | Clipping Webs</title>
                <meta name="description" content="Professional e-commerce product photo retouching. Complete image editing for Amazon, Shopify, eBay, Etsy. Free trial available." />
                <meta name="keywords" content="e-commerce retouching, product photo editing, background removal, marketplace optimization, product image editing" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/services/ecommerce-retouching" />

                {/* Open Graph */}
                <meta property="og:title" content="E-Commerce Product Photo Retouching | Clipping Webs" />
                <meta property="og:description" content="Professional e-commerce product photo retouching. Complete image editing for Amazon, Shopify, eBay, Etsy. Free trial available." />
                <meta property="og:url" content="https://clippingwebs.com/services/ecommerce-retouching" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Service */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "E-Commerce Retouching Service",
                            "description": "Professional e-commerce product photo retouching. Complete image editing for Amazon, Shopify, eBay, Etsy with free trial available.",
                            "url": "https://clippingwebs.com/services/ecommerce-retouching",
                            "provider": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com"
                            },
                            "serviceType": "Photo Editing",
                            "areaServed": "Worldwide",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "E-Commerce Retouching Packages",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Amazon Product Editing"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Shopify Store Optimization"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Marketplace Photo Editing"
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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="ecommerce-hero">
                {/* Soft Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50 z-0"></div>
                
                {/* Floating Background Shapes */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element opacity-40"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl floating-element opacity-30" style={{ animationDelay: '2s' }}></div>

                {/* Main Content Container */}
                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-screen">
                        
                        {/* Left Side - Images Stack */}
                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-left">
                            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element">
                                <Image 
                                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="E-Commerce Retouching Service"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element ml-8" style={{ animationDelay: '1s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Professional Results"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Center Content */}
                        <div className="text-center relative z-10 py-12 animate-fade-in-up">
                            <div className="inline-block mb-6 animate-fade-in-up">
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs font-raleway block mb-2">Professional Services</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-raleway leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                E-Commerce Retouching
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-raleway font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                Perfect Products, Perfect Sales
                            </p>

                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up font-raleway inline-block" style={{ animationDelay: '0.6s' }}>
                                FREE TRIAL
                            </Link>

                            <div className="mt-8 flex justify-center space-x-6 stagger-animation">
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '0.8s' }}>
                                        <i className="fas fa-shopping-cart text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Marketplace Ready</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1s' }}>
                                        <i className="fas fa-images text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Bulk Processing</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1.2s' }}>
                                        <i className="fas fa-check-circle text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">100% Consistent</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Hero Images */}
                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-right">
                            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element ml-auto" style={{ animationDelay: '0.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Quality Work"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element mr-8" style={{ animationDelay: '1.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Expert Results"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Service Ticker at Bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary/80 to-primary-hover/80 py-4 overflow-hidden z-20 backdrop-blur-sm">
                    <div className="service-ticker flex whitespace-nowrap">
                        {['Background Removal', 'Product Polishing', 'Color Correction', 'Amazon Optimized', 'Batch Processing', 'White Background', 'Background Removal', 'Product Polishing', 'Color Correction', 'Amazon Optimized', 'Batch Processing', 'White Background'].map((item, i) => (
                            <span key={i} className="ticker-item mx-8 font-medium text-white font-raleway">{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction Section - With Unique Photo Style */}
            <section className="py-20 bg-white service-section animate-fade-in-up relative" id="introduction">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 stagger-animation">
                        <div className="w-full lg:w-1/2 animate-slide-in-left">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-raleway uppercase">Professional E-Commerce Retouching</h2>
                                <div className="space-y-6 text-gray-600 mb-8 font-raleway">
                                    <p className="text-lg leading-relaxed text-gray-600">
                                        At <span className="font-semibold text-primary">Clipping Webs</span>, we specialize in professional e-commerce product photo retouching that transforms ordinary images into high-converting assets. Our expert team handles everything from background removal to detailed product polishing, ensuring your products look their absolute best.
                                    </p>
                                    <p className="leading-relaxed text-gray-600">
                                        E-commerce success depends on stunning product images. Whether you&apos;re selling on Amazon, Shopify, eBay, or your own website, professional retouching is essential. Our meticulous editing ensures consistency, compliance with marketplace standards, and visual excellence across your entire catalog.
                                    </p>
                                    <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 my-6">
                                        <p className="font-medium text-gray-700 italic">
                                            &quot;Polished product images increase trust, improve conversion rates, and reduce return rates significantly.&quot;
                                        </p>
                                    </div>
                                    <p className="leading-relaxed text-gray-600">
                                        From fashion and electronics to jewelry and home goods, we handle all product types. Our expertise in marketplace requirements means your images will pass all compliance checks while looking professionally polished and ready to sell.
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
                                {/* Single Large Featured Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl image-hover-effect mb-6 hover-lift floating-element" style={{ height: '450px' }}>
                                    <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                         alt="E-Commerce Excellence" 
                                         fill
                                         className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <span className="inline-block bg-primary text-white px-4 py-2 rounded-full font-raleway font-bold text-sm mb-3">Marketplace Optimized</span>
                                        <h3 className="text-white text-2xl font-bold font-raleway">Professional Product Photos</h3>
                                    </div>
                                </div>

                                {/* Two Floating Cards Below */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Stats Card 1 */}
                                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover-lift animate-fade-in-up" style={{ animationDelay: '1s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-primary font-raleway mb-1">10K+</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Products Edited</p>
                                            </div>
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-shopping-bag text-primary text-lg"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Card 2 */}
                                    <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-2xl p-6 border border-green-400/20 hover-lift animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-green-600 font-raleway mb-1">95%</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Approval Rate</p>
                                            </div>
                                            <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-star text-green-600 text-lg"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Badge */}
                                <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift floating-element" style={{ animationDelay: '1.4s' }}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-white text-2xl shadow-green-glow">
                                            <i className="fas fa-images"></i>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-gray-800 font-raleway">Amazon Compliant</div>
                                            <p className="text-sm text-gray-600 font-raleway">All requirements met</p>
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
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Our E-Commerce Retouching Services</h2>
                    <div className="service-feature-grid">
                        {[
                            { icon: 'cut', title: 'Background Removal', desc: "Remove or replace backgrounds with pure white or custom colors for marketplace compliance." },
                            { icon: 'wand-magic-sparkles', title: 'Product Polishing', desc: "Clean dust, scratches, and imperfections while enhancing product appeal and vibrancy." },
                            { icon: 'palette', title: 'Color Correction', desc: "Adjust colors to match real products and ensure consistency across your entire catalog." },
                            { icon: 'expand', title: 'Resize & Optimize', desc: "Resize images for marketplace requirements and optimize for web performance." }
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

            {/* Why E-Commerce Retouching Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="why-ecommerce">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Why Is E-Commerce Retouching Necessary?</h2>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-raleway">Transform Photos Into Sales Tools</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                In e-commerce, product photos are your only salespeople. Professional retouching ensures customers see your products in the best possible light, building trust and driving conversions. Studies show that high-quality product images can increase conversion rates by up to 40%.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                At Clipping Webs, our e-commerce experts understand marketplace requirements inside and out. We ensure your images meet Amazon, eBay, and Shopify standards while looking professionally polished. Every detail matters—from background consistency to color accuracy.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                Our team delivers high-quality results on time, every time, helping your business scale with confidence.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketplace Optimization Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="marketplace-optimization">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Marketplace Compliance & Optimization</h2>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-raleway">Ready for Every Platform</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Different marketplaces have different requirements. Amazon demands pure white backgrounds, Shopify needs specific dimensions, and Etsy values lifestyle photography. We know all the rules and ensure your images are compliant with every platform you use.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our editors are trained in marketplace optimization. We provide white backgrounds at RGB 255,255,255, proper file formats, web-ready compression, and all the technical specifications your platforms require. Your images will pass every check on first submission.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                Whether you need consistent catalog-wide editing or complex product variations, we deliver professional results that meet and exceed marketplace standards.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                FREE TRIAL
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-left text-center">
                            <div className="slider-container bg-white rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Marketplace Optimized
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="benefits">

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">E-Commerce Success Through Quality Images</h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-medium-gray mb-12 text-lg leading-relaxed font-raleway">
                            Professional e-commerce retouching directly impacts your bottom line. Polished product images reduce returns, increase conversion rates, and help you scale your business across all marketplaces. Our service ensures consistent, professional-looking products that sell.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {[
                                { title: 'Increased Conversion Rates', desc: 'High-quality images can increase sales by up to 40% by building customer confidence.' },
                                { title: 'Reduced Return Rates', desc: 'Accurate, polished images mean fewer returns due to customer mismatches.' },
                                { title: 'Catalog Consistency', desc: 'Professional editing ensures every product looks equally polished and professional.' },
                                { title: 'Time & Cost Savings', desc: 'Bulk processing at affordable rates saves time and lets you focus on sales.' }
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

            {/* Before/After Gallery - Carousel */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="before-after-gallery">

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase tracking-tight">OUR PREVIOUS WORK</h2>
                    <p className="text-medium-gray text-center mb-12 max-w-2xl mx-auto font-raleway leading-relaxed">
                        See how Clipping Webs transforms product photos into marketplace-ready assets. Explore our samples to check the quality and attention to detail.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1506755855726-7c89eba92343?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-raleway">Your E-Commerce Success Partner</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Choosing Clipping Webs for e-commerce retouching means working with a team that understands marketplace success. Since 2022, we&apos;ve been trusted by global retailers to deliver consistent, marketplace-compliant images that increase sales and reduce returns.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                We handle high-volume projects with military precision. Our team can process thousands of images daily while maintaining perfect consistency. We understand Amazon, Shopify, eBay, and Etsy requirements inside and out, ensuring every image passes the first time.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                At Clipping Webs, we don&apos;t just edit images—we enhance your product marketing to help your business scale and succeed across all platforms.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block text-center font-raleway">
                                CONTACT US
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Professional E-Commerce Results
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
                        Partner with us for proven expertise in marketplace requirements, reliable high-volume processing, and dedicated support that helps your business grow.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {[
                            { icon: 'shopping-bag', title: 'E-Commerce Expertise', desc: 'We specialize in e-commerce retouching with deep knowledge of marketplace requirements.' },
                            { icon: 'tachometer-alt', title: 'High Volume Capacity', desc: 'We handle thousands of images daily without sacrificing quality or consistency.' },
                            { icon: 'certificate', title: 'Marketplace Certified', desc: 'Our work consistently passes Amazon, eBay, Shopify, and Etsy compliance checks.' },
                            { icon: 'clock', title: 'Fast Turnaround', desc: 'Your deadlines matter. We deliver bulk orders within 24-48 hours consistently.' },
                            { icon: 'dollar-sign', title: 'Competitive Pricing', desc: 'We offer affordable bulk rates that scale with your volume without compromising quality.' },
                            { icon: 'headset', title: 'Dedicated Support', desc: 'We\'re here 24/7 to answer questions and ensure your satisfaction.' }
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
                                text: '"Clipping Webs\'s e-commerce retouching has transformed our Amazon listings. Our conversion rates jumped 35% after switching to their professional editing. Fast, consistent, and incredibly affordable for bulk orders!"',
                                name: 'Marcus Thompson',
                                role: 'Amazon Seller, Electronics',
                                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
                            },
                            {
                                text: '"We were struggling with inconsistent product images across our Shopify store. Clipping Webs fixed thousands of images with perfect quality and Amazon-compliance standards. Highly recommended for e-commerce!"',
                                name: 'Rachel Martinez',
                                role: 'E-Commerce Manager, Retail Brand',
                                img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
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
                                <h2 className="text-3xl font-bold mb-6 font-raleway uppercase">Get 05 Products Retouched for Free</h2>
                                <p className="mb-8 opacity-90 leading-relaxed text-lg font-raleway text-white">Experience our professional e-commerce retouching services with no commitment. Send us up to 5 product images and we&apos;ll retouch them for free.</p>
                                <div className="space-y-5">
                                    {[
                                        'No credit card required',
                                        'Up to 5 products retouched for free',
                                        '24-hour turnaround',
                                        'Marketplace-compliant quality guaranteed'
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
