import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '@/components/Layout';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function About() {
    useScrollAnimation();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <Layout>
            <Head>
                <title>About Clipping Webs - Professional Image Editing Since 2022</title>
                <meta name="description" content="Learn about Clipping Webs's journey since 2022. Professional image editing services with quality guarantee, ISO certification, and expert team." />
                <meta name="keywords" content="about Clipping Webs, photo editing company, image editing team, professional editors, ISO certified" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/about" />

                {/* Open Graph */}
                <meta property="og:title" content="About Clipping Webs - Professional Image Editing Since 2022" />
                <meta property="og:description" content="Learn about Clipping Webs's journey since 2022. Professional image editing services with quality guarantee, ISO certification, and expert team." />
                <meta property="og:url" content="https://clippingwebs.com/about" />
                <meta property="og:type" content="website" />

                {/* Structured Data - AboutPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About Clipping Webs",
                            "description": "Learn about Clipping Webs's journey since 2022. Professional image editing services with quality guarantee, ISO certification, and expert team.",
                            "url": "https://clippingwebs.com/about",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "foundingDate": "2022",
                                "description": "Professional e-commerce photo editing company specializing in clipping path, color correction, ghost mannequin, and jewelry retouching services.",
                                "hasCertification": {
                                    "@type": "Certification",
                                    "name": "ISO-27001",
                                    "issuingAuthority": "International Organization for Standardization"
                                },
                                "knowsAbout": [
                                    "Photo Editing",
                                    "Clipping Path",
                                    "Color Correction",
                                    "Ghost Mannequin",
                                    "Jewelry Retouching",
                                    "E-commerce Image Editing"
                                ]
                            }
                        })
                    }}
                />
            </Head>

            {/* Breadcrumbs */}
            <nav className="bg-light-gray py-4 mt-20" aria-label="Breadcrumb">
                <div className="container mx-auto px-4 font-raleway">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li><Link href="/" className="text-medium-gray hover:text-primary transition-colors">Home</Link></li>
                        <li><i className="fas fa-chevron-right text-light-text text-[10px]"></i></li>
                        <li><span className="text-primary font-semibold" aria-current="page">About Us</span></li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-linear-to-br from-primary/10 to-primary/5 service-section animate-fade-in-up">
                <div className="container mx-auto px-4 text-center font-raleway">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-reveal animate-fade-in-up">About Clipping Webs</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto text-reveal animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Professional Image Editing Excellence Since 2022
                    </p>
                    <Link href="/portfolio" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up flex items-center justify-center w-fit mx-auto" style={{ animationDelay: '0.4s' }}>
                        VIEW PORTFOLIO
                    </Link>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="flex flex-col lg:flex-row items-center gap-16 stagger-animation">
                        {/* Left Side - Content */}
                        <div className="w-full lg:w-1/2 animate-slide-in-left">
                            <div className="max-w-2xl">
                                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Journey</span>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">Our Story</h2>

                                <div className="space-y-6 text-gray-600 mb-8">
                                    <p className="text-lg leading-relaxed">
                                        Founded in 2022, <span className="font-semibold text-primary">Clipping Webs</span> began with a simple vision: to provide exceptional image editing services that help businesses showcase their products in the best possible light.
                                    </p>

                                    <p className="leading-relaxed">
                                        What started as a small team of passionate graphic designers has grown into a trusted partner for e-commerce businesses worldwide. Our commitment to quality, attention to detail, and customer-centric approach has been the cornerstone of our success.
                                    </p>

                                    <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 my-6">
                                        <p className="font-medium text-gray-700">
                                            &quot;Every pixel matters. We believe that great visuals are not just about aesthetics—they&apos;re about telling your brand&apos;s story and driving conversions.&quot;
                                        </p>
                                    </div>

                                    <p className="leading-relaxed">
                                        Today, we serve clients across various industries, from fashion and jewelry to electronics and home goods. Our team continues to innovate and adapt to the evolving needs of the e-commerce landscape.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8 mt-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">500+</div>
                                        <div className="text-sm text-gray-600">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                                        <div className="text-sm text-gray-600">Happy Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="w-full lg:w-1/2 animate-slide-in-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl image-hover-effect">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Clipping Webs Team"
                                    className="w-full h-96 object-cover floating-element" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <span className="bg-primary/90 px-3 py-1 rounded-full text-sm font-medium">Our Creative Space</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-animation">
                        {/* Mission Card */}
                        <div className="service-card-modern hover-lift animate-slide-in-left">
                            <div className="p-8 text-center">
                                <div className="service-icon-modern mx-auto mb-6">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To empower e-commerce businesses with stunning visual content that drives sales and builds brand trust. We strive to deliver pixel-perfect editing that exceeds expectations while maintaining fast turnaround times and affordable pricing.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="service-card-modern hover-lift animate-slide-in-right">
                            <div className="p-8 text-center">
                                <div className="service-icon-modern mx-auto mb-6">
                                    <i className="fas fa-eye"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To become the world&apos;s most trusted partner for e-commerce image editing, known for unparalleled quality, innovation, and customer satisfaction. We envision a future where every online business has access to professional-grade visual content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm animate-fade-in-up">OUR TEAM</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Meet Our Experts</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Skilled professionals dedicated to perfecting your visuals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
                        {[
                            { name: 'Alex Johnson', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', desc: 'With over 8 years in photo editing, Alex leads our creative vision and quality assurance.' },
                            { name: 'Sarah Chen', role: 'Senior Photo Editor', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786', desc: 'Specializing in jewelry retouching and color correction with 6+ years of experience.' },
                            { name: 'Mike Rodriguez', role: 'Quality Assurance Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e', desc: 'Ensures every project meets our high standards with meticulous attention to detail.' },
                            { name: 'Emily Watson', role: 'Client Success Manager', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9', desc: 'Dedicated to ensuring client satisfaction and smooth project communication.' }
                        ].map((member, i) => (
                            <div key={i} className="service-card-modern hover-lift text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                                <div className="p-6">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 image-hover-effect">
                                        <img src={`${member.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                                            alt={member.name}
                                            className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {member.desc}
                                    </p>
                                    <div className="flex justify-center space-x-3">
                                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        {i % 2 === 0 ? (
                                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        ) : (
                                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 bg-linear-to-r from-primary to-primary-hover text-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 text-center font-raleway">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Quality Certifications</h2>

                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover-lift animate-zoom-in">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                                <i className="fas fa-award text-3xl text-primary"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">ISO-27001 Certified</h3>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Clipping Webs is proud to be ISO-27001 certified, ensuring the highest standards of data security and confidentiality for all client projects. Your images and intellectual property are protected with enterprise-grade security protocols.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mt-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-1 border-b-2 border-primary/50 pb-1 inline-block">100%</div>
                                    <div className="text-sm opacity-90 mt-1">Data Security</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-1 border-b-2 border-primary/50 pb-1 inline-block">24/7</div>
                                    <div className="text-sm opacity-90 mt-1">Monitoring</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold mb-1 border-b-2 border-primary/50 pb-1 inline-block">Encrypted</div>
                                    <div className="text-sm opacity-90 mt-1">File Transfer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm animate-fade-in-up">TESTIMONIALS</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>What Our Clients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            Don&apos;t just take our word for it - hear from our satisfied clients
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {[
                            { name: 'James Wilson', role: 'Fashion Retailer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', text: 'Clipping Webs transformed our product images. The ghost mannequin work is exceptional and has significantly boosted our conversion rates. Highly recommended!' },
                            { name: 'Lisa Thompson', role: 'Jewelry Store Owner', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786', text: 'The jewelry retouching service is outstanding. They make our products look absolutely stunning while maintaining natural beauty. Fast turnaround too!' },
                            { name: 'Robert Garcia', role: 'E-commerce Manager', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e', text: 'We\'ve been using Clipping Webs for over a year for all our product images. Consistent quality, great communication, and reliable delivery every time.' }
                        ].map((client, i) => (
                            <div key={i} className="service-card-modern hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                                            <img src={`${client.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                                                alt={client.name}
                                                className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{client.name}</h4>
                                            <p className="text-primary text-sm">{client.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-yellow-400 mb-3 flex gap-1">
                                        {[...Array(5)].map((_, j) => <i key={j} className="fas fa-star text-xs"></i>)}
                                    </div>
                                    <p className="text-gray-600 text-sm italic">
                                        &quot;{client.text}&quot;
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 text-center font-raleway">
                    <div className="bg-linear-to-r from-primary/10 to-primary/5 rounded-2xl p-12 max-w-4xl mx-auto hover-lift border border-primary/10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                            Join our growing family of satisfied clients and experience the Clipping Webs difference.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn">
                                Start Free Trial
                            </Link>
                            <Link href="/contact" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 btn-animated magnetic-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up" id="faq-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up font-raleway uppercase tracking-tight">Frequently Asked Questions</h2>

                    <div className="max-w-4xl mx-auto text-left">
                        {[
                            { q: 'What is Clipping Webs\'s experience in photo editing?', a: 'Since 2022, we\'ve been delivering professional photo editing services to e-commerce businesses, photographers, and agencies. Our team has extensive experience across all major editing services and maintains ISO-27001 certification.' },
                            { q: 'What makes Clipping Webs different from other editing services?', a: 'We combine quality, speed, and affordability. Our team of expert editors uses the latest tools and techniques, we maintain 100% satisfaction guarantee, and we offer transparent pricing with no hidden fees.' },
                            { q: 'How many images can you handle?', a: 'We handle projects of any size, from single images to high-volume bulk orders. Whether you\'re a small shop or a large enterprise, we scale our team to meet your deadlines and quality standards.' },
                            { q: 'Do you provide custom editing solutions?', a: 'Absolutely! We work closely with clients to understand their specific needs. Whether it\'s custom color grading, unique effects, or brand-specific editing styles, we create solutions tailored to your requirements.' },
                            { q: 'How do you ensure consistent quality?', a: 'We have a rigorous quality control process for every project. Each image is reviewed against our quality checklist, and we offer unlimited revisions until you\'re 100% satisfied. Our ISO-27001 certification reflects our commitment to excellence.' }
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
