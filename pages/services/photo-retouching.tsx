import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function PhotoRetouching() {
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
            question: "What Is Professional Photo Retouching?",
            answer: "Professional photo retouching is the art of enhancing images through careful post-production editing. This includes removing blemishes and imperfections, adjusting lighting and exposure, correcting colors, removing unwanted objects, perfecting skin tones, and enhancing overall image quality while maintaining a natural appearance."
        },
        {
            question: "What Types of Photos Do You Retouch?",
            answer: "We retouch all types of photography: portrait photography (headshots, family portraits, weddings), product photography, real estate photography, automotive photography, lifestyle photography, event photography, and more. Each category has specialized editing techniques for optimal results."
        },
        {
            question: "How Does Retouching Improve Image Quality?",
            answer: "Professional retouching addresses common photography issues: fixes lighting problems, corrects color casts, removes dust and spots, smooths skin tones, enhances contrast and clarity, removes unwanted backgrounds or objects, and brings out details. The result is a polished, professional-quality image that exceeds expectations."
        },
        {
            question: "Is Retouching Noticeable or Natural?",
            answer: "Our retouching philosophy is to enhance while maintaining natural appearance. We avoid over-processing or artificial-looking results. Every image undergoes quality review to ensure it looks professional, polished, and authentic—not edited beyond recognition."
        },
        {
            question: "How Quickly Can You Deliver Retouched Photos?",
            answer: "Standard turnaround is 24-48 hours for most orders. We handle high-volume projects efficiently, processing hundreds of images daily. Rush processing is available for urgent deadlines. Our experienced team ensures fast delivery without compromising quality."
        }
    ];

    return (
        <Layout>
            <Head>
                <title>Photo Retouching Services | Clipping Webs</title>
                <meta name="description" content="Professional photo retouching for portraits, products, real estate, and more. Enhance your images with expert editing. Free trial available." />
                <meta name="keywords" content="photo retouching, image editing, portrait retouching, product photography, professional photo editing" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/services/photo-retouching" />

                {/* Open Graph */}
                <meta property="og:title" content="Photo Retouching Services | Clipping Webs" />
                <meta property="og:description" content="Professional photo retouching for portraits, products, real estate, and more. Enhance your images with expert editing. Free trial available." />
                <meta property="og:url" content="https://clippingwebs.com/services/photo-retouching" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Service */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Photo Retouching Service",
                            "description": "Professional photo retouching for portraits, products, real estate, and more. Enhance your images with expert editing and free trial available.",
                            "url": "https://clippingwebs.com/services/photo-retouching",
                            "provider": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com"
                            },
                            "serviceType": "Photo Editing",
                            "areaServed": "Worldwide",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Photo Retouching Packages",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Portrait Retouching"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Product Photo Editing"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Real Estate Photo Enhancement"
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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="photo-hero">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50 z-0"></div>
                
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element opacity-40"></div>
                <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl floating-element opacity-30" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-screen">
                        
                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-left">
                            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element">
                                <Image 
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Photo Retouching Service"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element ml-8" style={{ animationDelay: '1s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
                                Photo Retouching
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-raleway font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                Perfection in Every Pixel
                            </p>

                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up font-raleway inline-block" style={{ animationDelay: '0.6s' }}>
                                FREE TRIAL
                            </Link>

                            <div className="mt-8 flex justify-center space-x-6 stagger-animation">
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '0.8s' }}>
                                        <i className="fas fa-image text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">High Quality</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1s' }}>
                                        <i className="fas fa-wand-magic-sparkles text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Professional Polish</p>
                                </div>
                                <div className="text-center hover-lift group animate-fade-in-up">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all duration-300 floating-element" style={{ animationDelay: '1.2s' }}>
                                        <i className="fas fa-star text-primary text-xl"></i>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700 font-raleway">Perfect Results</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-right">
                            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element ml-auto" style={{ animationDelay: '0.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Quality Work"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element mr-8" style={{ animationDelay: '1.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
                        {['Blemish Removal', 'Color Correction', 'Lighting Fix', 'Portrait Polish', 'Professional Quality', 'Fast Delivery', 'Blemish Removal', 'Color Correction', 'Lighting Fix', 'Portrait Polish', 'Professional Quality', 'Fast Delivery'].map((item, i) => (
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
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-raleway uppercase">Comprehensive Photo Retouching</h2>
                                <div className="space-y-6 text-gray-600 mb-8 font-raleway">
                                    <p className="text-lg leading-relaxed text-gray-600">
                                        At <span className="font-semibold text-primary">Clipping Webs</span>, we transform good photos into great ones through professional retouching. From portraits to products, real estate to events, our expert editors enhance your images to meet industry standards and exceed expectations.
                                    </p>
                                    <p className="leading-relaxed text-gray-600">
                                        Professional photo retouching goes beyond basic filters. Our team uses advanced techniques to perfect lighting, correct colors, remove imperfections, and bring out the best in every image while maintaining a natural, authentic appearance.
                                    </p>
                                    <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 my-6">
                                        <p className="font-medium text-gray-700 italic">
                                            &quot;Every photo tells a story. We help your images tell the best version of that story.&quot;
                                        </p>
                                    </div>
                                    <p className="leading-relaxed text-gray-600">
                                        Whether you&apos;re a professional photographer, business owner, or creative professional, our retouching services elevate your visual content and help you achieve your goals.
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
                                {/* Carousel Style Layout */}
                                <div className="flex gap-4 mb-6 overflow-hidden">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift floating-element flex-1" style={{ height: '300px' }}>
                                        <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                             alt="Before" 
                                             fill
                                             className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full font-raleway font-bold text-xs">BEFORE</span>
                                        </div>
                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover-lift floating-element flex-1" style={{ height: '300px', animationDelay: '0.3s' }}>
                                        <Image src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                                             alt="After" 
                                             fill
                                             className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full font-raleway font-bold text-xs">AFTER</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Card 1 */}
                                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover-lift animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-primary font-raleway mb-1">15K+</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Photos Retouched</p>
                                            </div>
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-image text-primary text-lg"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl p-6 border border-blue-400/20 hover-lift animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-bold text-blue-600 font-raleway mb-1">98%</div>
                                                <p className="text-sm text-gray-700 font-raleway font-medium">Client Satisfaction</p>
                                            </div>
                                            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center">
                                                <i className="fas fa-smile text-blue-600 text-lg"></i>
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
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Our Photo Retouching Services</h2>
                    <div className="service-feature-grid">
                        {[
                            { icon: 'person', title: 'Portrait Retouching', desc: "Enhance skin tones, remove blemishes, brighten eyes, and perfect facial features." },
                            { icon: 'box', title: 'Product Photography', desc: "Perfect product images for e-commerce with lighting fixes and background adjustments." },
                            { icon: 'building', title: 'Real Estate Photos', desc: "Enhance property lighting, colors, and appeal for maximum marketing impact." },
                            { icon: 'star', title: 'General Photo Enhancement', desc: "Color correction, exposure fixes, sharpening, and professional polish for any photo." }
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

            {/* Why Photo Retouching Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up relative" id="why-photo">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Why Professional Retouching?</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Unlock Photo Potential</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Even great photos can be improved. Professional retouching fixes common photography challenges: poor lighting, color casts, unflattering skin tones, unwanted backgrounds, dust and spots, and more. The result is polished, professional-quality images.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Whether you&apos;re a photographer looking to enhance your portfolio, a business using photos for marketing, or a creative professional needing stunning visuals, our retouching elevates your work and achieves your goals.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                Professional retouching is an investment in quality that pays dividends across all your visual marketing efforts.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diverse Photography Section */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up relative" id="diverse-photography">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h2 className="text-3xl font-bold mb-6 font-raleway text-gray-800 uppercase">Specialized Expertise</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">All Photography Types</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                We handle all types of photography with specialized techniques. Portrait retouching brings out natural beauty. Product photography showcases items perfectly. Real estate photos make properties shine. Event photography captures the best moments.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our team understands the unique requirements of each photography type. We apply appropriate retouching techniques that enhance without overdoing, maintaining authentic and natural-looking results that serve your specific purpose.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                From individual shots to large batches, we deliver consistent, professional-quality retouching with fast turnaround times.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block font-raleway">
                                FREE TRIAL
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-left text-center">
                            <div className="slider-container bg-white rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    <h2 className="text-3xl font-bold text-center mb-12 font-raleway text-gray-800 uppercase">Retouching Benefits</h2>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-medium-gray mb-12 text-lg leading-relaxed font-raleway">
                            Professional photo retouching elevates your visual content, builds credibility, improves marketing impact, and helps you achieve your creative goals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {[
                                { title: 'Enhanced Visual Quality', desc: 'Professional retouching makes images look polished, professional, and impressive.' },
                                { title: 'Improved Marketing Impact', desc: 'Better photos increase engagement and drive results across all marketing channels.' },
                                { title: 'Time & Cost Savings', desc: 'Let us handle retouching so you focus on what you do best. Fast turnaround times.' },
                                { title: 'Versatile Applications', desc: 'Retouched images work across all platforms: web, print, social media, portfolios.' }
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
                        See how Clipping Webs transforms photos into professional, polished visual assets. Explore our sample retouching work.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    className="h-full"
                                />
                            </div>
                        </div>
                        <div className="gallery-slide">
                            <div className="slider-container bg-light-gray rounded-lg relative overflow-hidden shadow-lg" style={{ height: '560px' }}>
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                            <h3 className="text-2xl font-bold text-primary mb-4 font-raleway">Your Retouching Partner</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Since 2022, Clipping Webs has been trusted by photographers, businesses, and creative professionals. We understand the art and science of professional photo retouching and deliver consistent, high-quality results.
                            </p>
                            <p className="text-medium-gray mb-6 leading-relaxed font-raleway">
                                Our team combines technical expertise with artistic vision. We enhance your photos while maintaining natural appearance and authenticity. Whether you need basic retouching or advanced editing, we deliver professional results.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed font-raleway">
                                We handle all volume levels with fast turnaround and dedicated support. From individual shots to large projects, we&apos;re your trusted retouching partner.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn inline-block text-center font-raleway">
                                CONTACT US
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-light-gray rounded-lg relative w-full h-[560px]">
                                <BeforeAfterSlider 
                                    beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                    afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                />
                                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm font-raleway z-20">
                                    Professional Photo Results
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
                        Partner with us for expert retouching, consistent quality, and dedicated support that elevates your visual content.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {[
                            { icon: 'image', title: 'Photo Expertise', desc: 'We specialize in professional photo retouching across all photography types.' },
                            { icon: 'tachometer-alt', title: 'High Volume Capacity', desc: 'We handle large projects efficiently without sacrificing quality or detail.' },
                            { icon: 'certificate', title: 'Quality Obsessed', desc: 'Rigorous standards ensure every image meets our professional quality expectations.' },
                            { icon: 'clock', title: 'Quick Turnaround', desc: 'Fast delivery without compromising the meticulous attention to detail.' },
                            { icon: 'dollar-sign', title: 'Competitive Pricing', desc: 'Professional quality at affordable rates, even for bulk orders.' },
                            { icon: 'headset', title: 'Expert Support', desc: 'We understand photography and provide knowledgeable, helpful service.' }
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
                                text: '"Clipping Webs transformed my photography portfolio. Their retouching brought out details I didn\'t even notice in my originals. Highly recommended for any photographer!"',
                                name: 'Michael Torres',
                                role: 'Professional Photographer',
                                img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786'
                            },
                            {
                                text: '"Our product photos look incredible thanks to Clipping Webs. The attention to detail and fast turnaround have been amazing. Our conversion rates improved noticeably!"',
                                name: 'Lisa Patterson',
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
                                <h2 className="text-3xl font-bold mb-6 font-raleway uppercase">Get 05 Photos Retouched for Free</h2>
                                <p className="mb-8 opacity-90 leading-relaxed text-lg font-raleway text-white">Experience our professional photo retouching with no commitment. Send us up to 5 photos and we&apos;ll retouch them for free with our full professional service.</p>
                                <div className="space-y-5">
                                    {[
                                        'No credit card required',
                                        'Up to 5 photos retouched for free',
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
