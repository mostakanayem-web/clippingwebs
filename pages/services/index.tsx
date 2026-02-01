import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '@/components/Layout';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Services() {
    useScrollAnimation();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <Layout>
            <Head>
                <title>Product Photo Retouching Services | Clipping Webs</title>
                <meta name="description" content="Professional product photo retouching services including background removal, clipping path, shadow reflection, color correction, ghost mannequin and image masking." />
                <meta name="keywords" content="photo retouching services, clipping path, background removal, color correction, ghost mannequin, jewelry retouching, e-commerce photo editing" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/services" />

                {/* Open Graph */}
                <meta property="og:title" content="Product Photo Retouching Services | Clipping Webs" />
                <meta property="og:description" content="Professional product photo retouching services including background removal, clipping path, shadow reflection, color correction, ghost mannequin and image masking." />
                <meta property="og:url" content="https://clippingwebs.com/services" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Service Collection */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Photo Editing Services",
                            "description": "Professional product photo retouching services including background removal, clipping path, shadow reflection, color correction, ghost mannequin and image masking.",
                            "url": "https://clippingwebs.com/services",
                            "mainEntity": {
                                "@type": "ItemList",
                                "name": "Photo Editing Services",
                                "numberOfItems": 6,
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Clipping Path Service",
                                            "description": "Professional background removal and clipping path services for e-commerce product photos.",
                                            "url": "https://clippingwebs.com/services/clipping-path",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Clipping Webs"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Color Correction",
                                            "description": "Professional color correction and enhancement services for product photography.",
                                            "url": "https://clippingwebs.com/services/color-correction",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Clipping Webs"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Ghost Mannequin",
                                            "description": "Invisible mannequin effect for clothing and apparel product photography.",
                                            "url": "https://clippingwebs.com/services/ghost-mannequin",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Clipping Webs"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 4,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Jewelry Retouching",
                                            "description": "Professional jewelry photo editing and enhancement services.",
                                            "url": "https://clippingwebs.com/services/jewelry-retouching",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Clipping Webs"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 5,
                                        "item": {
                                            "@type": "Service",
                                            "name": "E-commerce Retouching",
                                            "description": "Complete e-commerce product photo editing and retouching services.",
                                            "url": "https://clippingwebs.com/services/ecommerce-retouching",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Clipping Webs"
                                            }
                                        }
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 6,
                                        "item": {
                                            "@type": "Service",
                                            "name": "Photo Retouching",
                                            "description": "General photo retouching and enhancement services for various industries.",
                                            "url": "https://clippingwebs.com/services/photo-retouching",
                                            "provider": {
                                                "@type": "Organization",
                                                "name": "Clipping Webs"
                                            }
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="services-hero">
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
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Professional Services"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element ml-8" style={{ animationDelay: '1s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Quality Results"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Center Content */}
                        <div className="text-center relative z-10 py-8 animate-fade-in-up">
                            <div className="inline-block mb-4 animate-fade-in-up">
                                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs font-raleway block">
                                    Our Professional Services
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-raleway leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Explore Our Services
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 mb-6 font-raleway font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                Elevate Your E-commerce Visuals
                            </p>

                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold text-base shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up font-raleway" style={{ animationDelay: '0.6s' }}>
                                FREE TRIAL
                            </Link>

                            {/* Feature Icons */}
                            <div className="mt-10 flex justify-center space-x-8 stagger-animation">
                                {[
                                    { icon: 'check-circle', label: 'Fast Delivery', delay: '0.8s' },
                                    { icon: 'star', label: 'Quality Assured', delay: '0.9s' },
                                    { icon: 'handshake', label: 'Expert Support', delay: '1.0s' }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center hover-lift animate-fade-in-up group" style={{ animationDelay: item.delay }}>
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-all duration-300">
                                            <i className={`fas fa-${item.icon} text-primary text-lg`}></i>
                                        </div>
                                        <span className="text-xs font-medium text-gray-700 font-raleway group-hover:text-primary transition-colors">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Hero Images */}
                        <div className="relative h-full hidden md:flex flex-col justify-center gap-6 animate-slide-in-right">
                            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element ml-auto" style={{ animationDelay: '0.5s' }}>
                                <Image 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Professional Work"
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

                {/* Service Ticker at Bottom */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary/80 to-primary-hover/80 py-4 overflow-hidden z-20 backdrop-blur-sm">
                    <div className="service-ticker flex whitespace-nowrap">
                        {['Background Removal', 'Clipping Path', 'Shadow Reflection', 'Color Correction', 'Ghost Mannequin', 'Image Masking', 'Background Removal', 'Clipping Path', 'Shadow Reflection', 'Color Correction', 'Ghost Mannequin', 'Image Masking'].map((item, i) => (
                            <span key={i} className="ticker-item mx-8 font-bold text-white font-raleway text-sm tracking-wide">{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service 1: Background Removal */}
            <section className="py-16 bg-white service-section animate-fade-in-up" id="background-removal">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="mb-12 text-center relative">

                        <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight text-gray-800">Background Removal</h2>
                        <p className="text-medium-gray mt-4 max-w-2xl mx-auto text-lg font-medium">Transform your product images with professional background removal services for e-commerce and marketplaces.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation text-left">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <div className="slider-container bg-light-gray rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                                <BeforeAfterSlider
                                    beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Background Removal Comparison"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Expert Background Removal for E-commerce & Marketplaces</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-medium">
                                Transform your product images with professional background removal services. Our expert team ensures clean, precise cutouts that make your products stand out on any marketplace or e-commerce platform.
                            </p>
                            <h4 className="font-bold mb-4 text-gray-800">Why Choose Our Background Removal Service?</h4>
                            <ul className="text-medium-gray mb-6 space-y-3 font-medium">
                                {['Precise manual selection for complex edges', 'Clean, professional results for all product types', 'Fast turnaround with bulk order discounts', 'Optimized for Amazon, eBay, Shopify and more'].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 text-xl"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Clipping Path */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up" id="clipping-path">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="mb-12 text-center relative">

                        <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight text-gray-800">Clipping Path</h2>
                        <p className="text-medium-gray mt-4 max-w-2xl mx-auto text-lg font-medium">Precision clipping path services for razor-sharp edges and perfect product isolation.</p>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation text-left">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-white rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                                <BeforeAfterSlider
                                    beforeSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    afterSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Clipping Path Comparison"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Precision Clipping Path Services</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-medium">
                                Our hand-drawn clipping paths deliver razor-sharp edges and perfect isolation for your product images. We use the pen tool with meticulous care to create professional results for e-commerce and marketing materials.
                            </p>
                            <h4 className="font-bold mb-4 text-gray-800">Our Clipping Path Expertise</h4>
                            <ul className="text-medium-gray mb-6 space-y-3 font-medium">
                                {['Hand-drawn paths for perfect precision', 'Complex paths for intricate products', 'Multiple paths for layered editing', 'Compatible with all major design software'].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 text-xl"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Shadow & Reflection */}
            <section className="py-16 bg-white service-section animate-fade-in-up" id="shadow-reflection">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="mb-12 text-center relative">

                        <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight text-gray-800">Shadow & Reflection</h2>
                        <p className="text-medium-gray mt-4 max-w-2xl mx-auto text-lg font-medium">Add depth and dimension to your product images with realistic shadow and reflection effects.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation text-left">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <div className="slider-container bg-light-gray rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                                <BeforeAfterSlider
                                    beforeSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    afterSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Shadow Reflection Comparison"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Shadow & Reflection Effects</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-medium">
                                Add depth and dimension to your product images with realistic shadow and reflection effects. Our professional editing creates natural-looking shadows that make your products appear more tangible and appealing to customers.
                            </p>
                            <h4 className="font-bold mb-4 text-gray-800">Shadow & Reflection Services</h4>
                            <ul className="text-medium-gray mb-6 space-y-3 font-medium">
                                {['Natural drop shadows for depth', 'Realistic reflection effects', 'Customizable shadow direction and intensity', 'Perfect for e-commerce and advertising'].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 text-xl"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 4: Color Correction */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up" id="color-correction">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="mb-12 text-center relative">

                        <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight text-gray-800">Color Correction</h2>
                        <p className="text-medium-gray mt-4 max-w-2xl mx-auto text-lg font-medium">Achieve perfect color balance and consistency across all your product images.</p>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation text-left">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-white rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                                <BeforeAfterSlider
                                    beforeSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    afterSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Color Correction Comparison"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Professional Color Correction</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-medium">
                                Achieve perfect color balance and consistency across all your product images. Our color correction services ensure your products look exactly as they do in real life, building trust and increasing conversions.
                            </p>
                            <h4 className="font-bold mb-4 text-gray-800">Color Correction Services</h4>
                            <ul className="text-medium-gray mb-6 space-y-3 font-medium">
                                {['Accurate color matching to real products', 'White balance correction', 'Exposure and contrast adjustment', 'Consistency across product variations'].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 text-xl"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 5: Ghost Mannequin */}
            <section className="py-16 bg-white service-section animate-fade-in-up" id="ghost-mannequin">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="mb-12 text-center relative">

                        <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight text-gray-800">Ghost Mannequin</h2>
                        <p className="text-medium-gray mt-4 max-w-2xl mx-auto text-lg font-medium">Transform clothing photography with professional ghost mannequin effects.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation text-left">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <div className="slider-container bg-light-gray rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                                <BeforeAfterSlider
                                    beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Ghost Mannequin Comparison"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Ghost Mannequin & Invisible Mannequin Effects</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-medium">
                                Transform your clothing and apparel photography with professional ghost mannequin services. We create the illusion that garments are being worn, showcasing fit and shape while removing distracting mannequins.
                            </p>
                            <h4 className="font-bold mb-4 text-gray-800">Ghost Mannequin Services</h4>
                            <ul className="text-medium-gray mb-6 space-y-3 font-medium">
                                {['Professional invisible mannequin effects', 'Showcases garment fit and shape', 'Perfect for fashion e-commerce', 'Consistent results across product lines'].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 text-xl"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 6: Image Masking */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up" id="image-masking">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="mb-12 text-center relative">

                        <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight text-gray-800">Image Masking</h2>
                        <p className="text-medium-gray mt-4 max-w-2xl mx-auto text-lg font-medium">Advanced image masking techniques for complex product photos.</p>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 stagger-animation text-left">
                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <div className="slider-container bg-white rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                                <BeforeAfterSlider
                                    beforeSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    afterSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Image Masking Comparison"
                                    className="h-full"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Advanced Image Masking Services</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed font-medium">
                                For products with complex edges like hair, fur, or transparent elements, our advanced image masking techniques deliver perfect results. We use channel masking, layer masking, and other professional techniques.
                            </p>
                            <h4 className="font-bold mb-4 text-gray-800">Image Masking Expertise</h4>
                            <ul className="text-medium-gray mb-6 space-y-3 font-medium">
                                {['Complex masking for difficult edges', 'Hair and fur masking', 'Transparency and glass masking', 'Layer and channel masking techniques'].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 text-xl"></i>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                FREE TRIAL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership CTA */}
            <section className="py-16 bg-white service-section animate-zoom-in" id="partnership-section">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 text-center animate-slide-in-left">
                            <div className="relative inline-block">
                                <div className="w-64 h-64 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary-hover transition-colors duration-500 hover-lift floating-element">
                                    <i className="fas fa-handshake text-white text-6xl"></i>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 hover-lift floating-element" style={{ animationDelay: '1s' }}>
                                    <i className="fas fa-rocket text-primary text-2xl"></i>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 hover-lift floating-element" style={{ animationDelay: '2s' }}>
                                    <i className="fas fa-chart-line text-primary text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 animate-slide-in-right">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Clipping Webs | Expert Photo Editing Services</h2>
                            <h3 className="text-2xl font-bold text-primary mb-4">LET&apos;S START A Partnership</h3>
                            <p className="text-medium-gray mb-6 leading-relaxed">
                                Boost your presence on leading marketplaces like Amazon, Etsy, Shopify, eBay, and others with Clipping Webs&apos;s professional image editing and video editing services.
                            </p>
                            <p className="text-medium-gray mb-8 leading-relaxed">
                                Simply upload your photos or videos and let us handle the rest. Our expert photo editors and video editors will transform your content into high-quality, eye-catching visuals that will make your listings more engaging and increase conversions.
                            </p>
                            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                                JOIN US
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bulk Discount Section */}
            <section className="py-16 bg-linear-to-r from-primary to-primary-hover text-white service-section animate-fade-in-up" id="discount-section">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation">
                        <div className="w-full md:w-1/2 animate-slide-in-left">
                            <h2 className="text-3xl font-bold mb-4">Special Discount for Bulk Images!</h2>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                Do you have a large batch of images that need professional editing? Clipping Webs is your trusted partner for eCommerce photo editing and postproduction. We specialize in clipping paths, ghost mannequin, color correction, jewelry retouching, and bulk product image enhancement—helping your visuals shine across Amazon, Shopify, eBay, Etsy, and more.
                            </p>
                            <p className="mb-6 opacity-90 leading-relaxed">
                                Our skilled editors deliver consistent, high-quality results that build trust and boost sales. With special discounts on bulk orders, you get premium editing at affordable rates. Most projects are completed within 24 hours, with strict quality control at every step.
                            </p>
                            <p className="mb-8 opacity-90 leading-relaxed">
                                Whether you&apos;re a retailer, photographer, or brand, Clipping Webs provides fast, reliable, and tailored solutions to make your images stand out. Get your free bulk quote today!
                            </p>
                            <h3 className="text-xl font-bold mb-4">Get Your Free Quote on a Bulk Order Now!</h3>
                            <Link href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-light-gray hover:scale-105 transition-all duration-300 btn-animated magnetic-btn">
                                CONTACT US
                            </Link>
                        </div>

                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 animate-slide-in-right">
                            {[
                                { icon: 'percentage', title: 'Up to 40% Off', sub: 'On bulk orders', delay: '0s' },
                                { icon: 'shipping-fast', title: 'Fast Delivery', sub: '24-48 hours turnaround', delay: '0.5s' },
                                { icon: 'award', title: 'Quality Guarantee', sub: '100% satisfaction', delay: '1s' },
                                { icon: 'infinity', title: 'Unlimited Revisions', sub: 'Until you\'re happy', delay: '1.5s' }
                            ].map((item, i) => (
                                <div key={i} className="text-center hover-lift group">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all duration-300 floating-element" style={{ animationDelay: item.delay }}>
                                        <i className={`fas fa-${item.icon} text-3xl text-white`}></i>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 font-raleway text-white">{item.title}</h4>
                                    <p className="text-sm opacity-90 font-raleway text-white">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white service-section animate-fade-in-up" id="faq-section">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">FREQUENTLY ASKED QUESTIONS</h2>
                        <p className="text-medium-gray max-w-2xl mx-auto text-lg font-medium">
                            Find answers to frequently asked questions about our services and process.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto text-left">
                        {[
                            { q: 'What is your turnaround time for photo editing?', a: 'Our standard turnaround time is 24-48 hours for most projects. However, we also offer expedited services for urgent projects with turnaround times as quick as 4-6 hours, depending on the volume and complexity of the images.' },
                            { q: 'Do you offer bulk discounts?', a: 'Yes, we offer significant discounts for bulk orders. The discount percentage increases with the volume of images. Please contact our sales team with your specific requirements for a customized quote.' },
                            { q: 'What file formats do you accept?', a: 'We accept all common image file formats including JPG, PNG, TIFF, PSD, and RAW files from various camera manufacturers. We can also deliver the edited images in your preferred format.' },
                            { q: 'How do you ensure the security of my images?', a: 'We take data security seriously. As an ISO-27001 certified company, we implement strict security protocols including encrypted file transfer, secure servers, and confidentiality agreements with all our team members.' },
                            { q: 'Do you offer a free trial?', a: 'Yes, we offer a free trial for new clients. You can send us up to 5 images to edit completely free of charge so you can evaluate our quality and service before committing to a larger project.' }
                        ].map((faq, i) => (
                            <div key={i} className={`faq-item bg-white border border-border-light rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${activeFaq === i ? 'active' : ''}`}>
                                <div 
                                    className="faq-question p-6 cursor-pointer flex justify-between items-center hover:bg-light-gray transition-colors duration-300"
                                    onClick={() => toggleFaq(i)}
                                >
                                    <h3 className={`font-bold transition-colors font-raleway ${activeFaq === i ? 'text-primary' : 'text-gray-800'}`}>{faq.q}</h3>
                                    <i className={`fas fa-chevron-down faq-toggle text-primary transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}></i>
                                </div>
                                <div className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 text-medium-gray leading-relaxed font-raleway font-medium">
                                        {faq.a.split('\n').map((line, idx) => (
                                            <p key={idx} className={idx > 0 ? 'mt-2' : ''}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn">
                            JOIN US
                        </Link>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
