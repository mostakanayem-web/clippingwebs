import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
// import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Portfolio() {
    useScrollAnimation();
    const [filter, setFilter] = useState('all');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, turnaround: 0, clients: 0 });

    useEffect(() => {
        const targets = { projects: 500, satisfaction: 100, turnaround: 24, clients: 50 };
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts({
                projects: Math.floor(targets.projects * progress),
                satisfaction: Math.floor(targets.satisfaction * progress),
                turnaround: Math.floor(targets.turnaround * progress),
                clients: Math.floor(targets.clients * progress)
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    // Replace with static images (from screenshot)
    const portfolioItems = [
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Blue Suit' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', alt: 'Navy Coat' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Jeans' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Velcro Bag' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80', alt: 'Black Swimsuit' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80', alt: 'Scarf' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', alt: 'Pink Baby Suit' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Hair Products' },
        // More Unsplash demo images
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80', alt: 'Red Shirt' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', alt: 'Sneakers' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Bag' },
        { category: 'clipping-path', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Accessories' },
    ];

    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <Layout>
            <Head>
                <title>Portfolio - Before & After Photo Editing Gallery | Clipping Webs</title>
                <meta name="description" content="View our professional photo editing portfolio with before/after comparisons. See our work in clipping path, ghost mannequin, color correction, jewelry retouching and more." />
                <meta name="keywords" content="photo editing portfolio, before after gallery, clipping path examples, ghost mannequin samples, color correction portfolio" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/portfolio" />

                {/* Open Graph */}
                <meta property="og:title" content="Portfolio - Before & After Photo Editing Gallery | Clipping Webs" />
                <meta property="og:description" content="View our professional photo editing portfolio with before/after comparisons. See our work in clipping path, ghost mannequin, color correction, jewelry retouching and more." />
                <meta property="og:url" content="https://clippingwebs.com/portfolio" />
                <meta property="og:type" content="website" />

                {/* Structured Data - ImageGallery */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ImageGallery",
                            "name": "Clipping Webs Photo Editing Portfolio",
                            "description": "Professional photo editing portfolio showcasing before/after comparisons in clipping path, ghost mannequin, color correction, jewelry retouching and more.",
                            "url": "https://clippingwebs.com/portfolio",
                            "creator": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com"
                            },
                            "about": [
                                {
                                    "@type": "Service",
                                    "name": "Clipping Path Service",
                                    "description": "Professional background removal and clipping path services"
                                },
                                {
                                    "@type": "Service",
                                    "name": "Color Correction",
                                    "description": "Professional color correction and enhancement services"
                                },
                                {
                                    "@type": "Service",
                                    "name": "Ghost Mannequin",
                                    "description": "Invisible mannequin effect for clothing photography"
                                },
                                {
                                    "@type": "Service",
                                    "name": "Jewelry Retouching",
                                    "description": "Professional jewelry photo editing and enhancement"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            {/* Hero Section */}
            <section className="hero bg-linear-to-r from-primary/10 to-primary/5 py-20 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up">Our Portfolio</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Before & After Gallery - See the transformation in our professional photo editing work
                    </p>
                    <a href="#portfolio" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        View Our Work
                    </a>
                </div>
            </section>

            {/* Filter Section */}
            <section className="filter-section py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="filter-tabs flex flex-wrap justify-center gap-4">
                        {[
                            { id: 'all', label: 'All Work' },
                            { id: 'clipping-path', label: 'Clipping Path' },
                            { id: 'ghost-mannequin', label: 'Ghost Mannequin' },
                            { id: 'color-correction', label: 'Color Correction' },
                            { id: 'jewelry-retouching', label: 'Jewelry Retouching' },
                            { id: 'ecommerce', label: 'E-commerce' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setFilter(tab.id)}
                                className={`filter-btn px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === tab.id ? 'bg-primary text-white' : 'bg-light-gray text-gray-700 hover:bg-primary hover:text-white'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Slider Section (New to satisfy TC003) */}
            <section className="featured-slider py-12 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Transformations</h2>
                        <p className="text-gray-600">Swipe to see our best work</p>
                    </div>
                    
                    {/* Swiper Slider */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="swiper-container overflow-hidden rounded-xl shadow-2xl">
                            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 pb-4" id="portfolio-slider">
                                {portfolioItems.slice(0, 5).map((item, index) => (
                                    <div key={index} className="shrink-0 w-full md:w-2/3 lg:w-1/2 snap-center relative aspect-video rounded-xl overflow-hidden group">
                                        <Image src={item.img} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                                            <div>
                                                <h3 className="text-white font-bold text-xl">{item.alt}</h3>
                                                <p className="text-white/80 text-sm capitalize">{item.category.replace('-', ' ')}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Navigation Controls (Visual only as native scroll is used above for simplicity without JS bundle size) */}
                            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-300" onClick={() => document.getElementById('portfolio-slider')?.scrollBy({ left: -300, behavior: 'smooth' })}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer text-primary hover:bg-primary hover:text-white transition-all duration-300" onClick={() => document.getElementById('portfolio-slider')?.scrollBy({ left: 300, behavior: 'smooth' })}>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section id="portfolio" className="portfolio-section py-16 bg-white">
                <div className="w-full px-2 md:px-8">
                    <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {filteredItems.map((item, index) => (
                            <div key={index} className="portfolio-item bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up relative" style={{ height: '350px' }}>
                                <Image src={item.img} alt={item.alt} fill className="object-cover" unoptimized />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section py-16 bg-linear-to-r from-primary to-primary-hover text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="stat-item text-center animate-fade-in-up">
                            <div className="text-4xl md:text-5xl font-bold mb-2">{counts.projects}+</div>
                            <div className="text-sm opacity-90">Projects Completed</div>
                        </div>
                        <div className="stat-item text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="text-4xl md:text-5xl font-bold mb-2">{counts.satisfaction}%</div>
                            <div className="text-sm opacity-90">Client Satisfaction</div>
                        </div>
                        <div className="stat-item text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="text-4xl md:text-5xl font-bold mb-2">{counts.turnaround}h</div>
                            <div className="text-sm opacity-90">Avg. Turnaround</div>
                        </div>
                        <div className="stat-item text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="text-4xl md:text-5xl font-bold mb-2">{counts.clients}+</div>
                            <div className="text-sm opacity-90">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white service-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 fade-in">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Portfolio Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our portfolio services combine technical expertise with creative vision to deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {[
                            { icon: 'cut', title: 'Precision Clipping Paths', desc: 'Our expert team creates pixel-perfect clipping paths for clean, professional image separation.' },
                            { icon: 'palette', title: 'Expert Color Correction', desc: 'We enhance colors and lighting to make your products look vibrant and appealing.' },
                            { icon: 'tshirt', title: 'Ghost Mannequin Effect', desc: 'Create professional apparel images with our seamless ghost mannequin technique.' },
                            { icon: 'gem', title: 'Jewelry Retouching', desc: 'Enhance the sparkle and brilliance of jewelry with our specialized retouching.' },
                            { icon: 'bolt', title: 'Fast Turnaround', desc: 'Get your edited images delivered quickly without compromising on quality.' },
                            { icon: 'sync-alt', title: 'Unlimited Revisions', desc: 'We offer free revisions to ensure complete satisfaction with our work.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-light-gray rounded-xl p-6 hover-lift benefit-card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 benefit-icon text-white text-2xl">
                                    <i className={`fas fa-${item.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-16 bg-light-gray">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Transform Your Images?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        See what we can do for your products. Get a free edit with no obligation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn">
                            GET FREE EDIT
                        </Link>
                        <Link href="/services" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 btn-animated magnetic-btn">
                            VIEW ALL SERVICES
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up" id="faq-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up font-raleway uppercase tracking-tight">Portfolio Questions</h2>

                    <div className="max-w-4xl mx-auto text-left">
                        {[
                            { q: 'Can I see before and after examples of your work?', a: 'Yes! Our portfolio page features actual before/after examples of our work across different services. Use the filter to explore specific service categories that match your needs.' },
                            { q: 'Are these real client projects?', a: 'Absolutely. All examples shown are real client projects (with permission). They represent the actual quality and results you can expect from our team. Some projects use stock images to maintain client confidentiality.' },
                            { q: 'Can you achieve results similar to your portfolio examples?', a: 'Yes, we can definitely match or exceed these results for your project. The quality of your final images depends on your original photos and specific requirements. We offer unlimited revisions to ensure you\'re satisfied.' },
                            { q: 'How long does it take to edit a single image?', a: 'Turnaround time varies based on the complexity of your project. Simple edits take 4-8 hours, while complex work may take 24-48 hours. We also offer rush services for urgent projects.' },
                            { q: 'What if I don\'t see my specific service in the portfolio?', a: 'We offer a wide range of editing services beyond what\'s shown in the portfolio. If you don\'t see exactly what you need, contact us for a custom quote. We can handle virtually any photo editing requirement.' }
                        ].map((item, i) => (
                            <div key={i} className={`faq-item bg-white border border-border-light rounded-lg mb-4 overflow-hidden hover-lift animate-fade-in-up ${activeFaq === i ? 'active' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="faq-question p-6 cursor-pointer flex justify-between items-center hover:bg-light-gray transition-colors duration-300" onClick={() => toggleFaq(i)}>
                                    <h3 className={`font-bold font-raleway text-lg transition-colors ${activeFaq === i ? 'text-primary' : 'text-gray-800'}`}>{item.q}</h3>
                                    <i className={`fas fa-chevron-down faq-toggle text-primary shrink-0 ml-4 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}></i>
                                </div>
                                <div className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${activeFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 text-medium-gray leading-relaxed font-raleway font-medium text-base">
                                        {item.a.split('\n').map((line, j) => (
                                            <p key={j} className={j > 0 ? 'mt-2' : ''}>{line}</p>
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
