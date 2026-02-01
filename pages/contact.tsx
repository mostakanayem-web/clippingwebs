import Head from 'next/head';
import { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Contact() {
    useScrollAnimation();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const scrollToForm = () => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Layout>
            <Head>
                <title>Contact Us - Get a Free Trial | Clipping Webs</title>
                <meta name="description" content="Contact Clipping Webs for professional photo editing services. Get a free trial for up to 5 images. 24/7 support available." />
                <meta name="keywords" content="contact Clipping Webs, photo editing quote, free trial, customer support, image editing services" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/contact" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Us - Get a Free Trial | Clipping Webs" />
                <meta property="og:description" content="Contact Clipping Webs for professional photo editing services. Get a free trial for up to 5 images. 24/7 support available." />
                <meta property="og:url" content="https://clippingwebs.com/contact" />
                <meta property="og:type" content="website" />

                {/* Structured Data - ContactPage and LocalBusiness */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "name": "Contact Clipping Webs",
                            "description": "Contact Clipping Webs for professional photo editing services. Get a free trial for up to 5 images. 24/7 support available.",
                            "url": "https://clippingwebs.com/contact",
                            "mainEntity": {
                                "@type": "LocalBusiness",
                                "@id": "https://clippingwebs.com/#organization",
                                "name": "Clipping Webs",
                                "description": "Professional e-commerce photo editing company specializing in clipping path, color correction, ghost mannequin, and jewelry retouching services.",
                                "url": "https://clippingwebs.com",
                                "foundingDate": "2022",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+1-XXX-XXX-XXXX",
                                    "contactType": "customer service",
                                    "availableLanguage": "English",
                                    "hoursAvailable": {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                        "opens": "00:00",
                                        "closes": "23:59"
                                    }
                                },
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressCountry": "US"
                                },
                                "sameAs": [
                                    "https://www.facebook.com/clippingwebs",
                                    "https://www.instagram.com/clippingwebs",
                                    "https://www.linkedin.com/company/clippingwebs"
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
                        <li><span className="text-primary font-semibold uppercase tracking-wider" aria-current="page">Contact</span></li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-linear-to-br from-primary/10 to-primary/5 service-section animate-fade-in-up">
                <div className="container mx-auto px-4 text-center font-raleway">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 uppercase tracking-tight">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-medium-gray mb-8 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.2s' }}>
                        Get Free Quote & Professional Consultation
                    </p>
                    <button onClick={scrollToForm} className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up uppercase tracking-widest" style={{ animationDelay: '0.4s' }}>
                        FREE TRIAL
                    </button>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up" id="contact-form">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 stagger-animation">
                        
                        {/* Contact Form (Left Side) */}
                        <div className="animate-slide-in-left">
                            <div className="bg-light-gray rounded-2xl p-8 hover-lift border border-border-light/50 shadow-sm">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-tight">Send Us a Message</h2>
                                <p className="text-medium-gray mb-8 font-medium">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name *</label>
                                            <input type="text" className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name *</label>
                                            <input type="text" className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address *</label>
                                            <input type="email" className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                                            <input type="tel" className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Interested In *</label>
                                        <select className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium" required>
                                            <option value="">Select a service</option>
                                            <option value="clipping-path">Clipping Path</option>
                                            <option value="ghost-mannequin">Ghost Mannequin</option>
                                            <option value="color-correction">Color Correction</option>
                                            <option value="jewelry-retouching">Jewelry Retouching</option>
                                            <option value="ecommerce-retouching">E-commerce Retouching</option>
                                            <option value="custom">Custom Project</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Project Details *</label>
                                        <textarea rows={5} className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium resize-none" placeholder="Tell us about your project..." required></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn uppercase tracking-widest">
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info (Right Side) */}
                        <div className="animate-slide-in-right">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-tight">Get in Touch</h2>
                                    <p className="text-medium-gray mb-6 text-lg leading-relaxed font-medium">
                                        Ready to transform your product images? Contact us today for a free consultation and quote. Our team is here to help you achieve stunning visual results.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { icon: 'phone', title: 'Phone', text: '+44 756301 38325', sub: 'Mon-Fri, 9:00 AM - 6:00 PM GMT' },
                                        { icon: 'envelope', title: 'Email', text: 'info@clippingwebs.com', sub: 'We respond within 24 hours' },
                                        { icon: 'map-marker-alt', title: 'Location', text: 'Dhaka, Bangladesh', sub: 'Serving clients worldwide' },
                                        { icon: 'clock', title: 'Business Hours', text: 'Monday - Friday: 9:00 AM - 6:00 PM', sub: 'Weekend: Emergency projects only' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start hover-lift p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm border border-transparent hover:border-border-light/50">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                                                <i className={`fas fa-${item.icon} text-primary text-xl`}></i>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-1 uppercase tracking-wide text-sm">{item.title}</h3>
                                                <p className="text-medium-gray font-semibold">{item.text}</p>
                                                <p className="text-sm text-gray-500 font-medium">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <h3 className="font-bold text-gray-800 mb-4 uppercase tracking-wide text-sm">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {['facebook-f', 'twitter', 'instagram', 'linkedin-in', 'pinterest'].map((social, i) => (
                                            <a key={i} href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover-lift shadow-sm">
                                                <i className={`fab fa-${social}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">LOCATION</span>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4" style={{ animationDelay: '0.2s' }}>Find Us</h2>
                        <p className="text-medium-gray max-w-2xl mx-auto text-lg font-medium" style={{ animationDelay: '0.4s' }}>
                            While we serve clients globally, our main operations are based in Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift animate-zoom-in">
                        <div className="h-96 bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center relative">
                            {/* Simple map placeholder visual since actual gmaps iframe requires key */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
                            <div className="text-center relative z-10">
                                <i className="fas fa-map-marker-alt text-6xl text-primary mb-4 drop-shadow-md animate-bounce"></i>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dhaka, Bangladesh</h3>
                                <p className="text-medium-gray font-medium">Global Operation Hub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Guarantee Section */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4 font-raleway">
                    <div className="bg-linear-to-r from-primary to-primary-hover rounded-2xl p-12 text-white text-center relative overflow-hidden hover-lift animate-zoom-in shadow-xl">
                        {/* Background decor */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-clock text-3xl text-primary"></i>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">24-Hour Response Guarantee</h2>
                            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg font-medium">
                                We guarantee to respond to all inquiries within 24 hours. Your project is important to us, and we&apos;re committed to providing timely and professional communication.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                <div className="text-center animate-fade-in-up">
                                    <div className="text-2xl font-bold mb-2">1 Hour</div>
                                    <div className="text-sm opacity-90 font-medium uppercase tracking-wide">Initial Response</div>
                                </div>
                                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <div className="text-2xl font-bold mb-2">24 Hours</div>
                                    <div className="text-sm opacity-90 font-medium uppercase tracking-wide">Detailed Quote</div>
                                </div>
                                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                    <div className="text-2xl font-bold mb-2">48 Hours</div>
                                    <div className="text-sm opacity-90 font-medium uppercase tracking-wide">Project Start</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="py-20 bg-light-gray service-section animate-fade-in-up" id="faq-section">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up font-raleway uppercase tracking-tight">Common Questions</h2>

                    <div className="max-w-4xl mx-auto text-left">
                        {[
                            { q: 'How quickly can you start my project?', a: 'We can typically start your project within 24-48 hours. For rush projects, we offer expedited services with priority processing and dedicated support.' },
                            { q: 'What file formats do you work with?', a: 'We work with all professional formats including JPG, PNG, TIFF, PSD, and various RAW formats. We can deliver files in your preferred specifications.' },
                            { q: 'Do you sign NDAs for confidential projects?', a: 'Absolutely. We take data privacy seriously and are ISO-27001 certified. We regularly sign NDAs to ensure the complete security of your project data.' },
                            { q: 'Can I request specific editing styles?', a: 'Yes! We encourage clients to provide style guides or reference images. Our team will follow your brand guidelines to ensure consistent visual results.' },
                            { q: 'What if I\'m not satisfied with the results?', a: 'Your satisfaction is our priority. We offer unlimited revisions and a 100% satisfaction guarantee to ensure every pixel meets your expectations.' }
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
                        <button onClick={scrollToForm} className="bg-primary text-white px-12 py-4 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-wider text-sm">
                            SEND US A MESSAGE
                        </button>
                    </div>
                </div>
            </section>


        </Layout>
    );
}
