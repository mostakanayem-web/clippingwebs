import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<'clipping' | 'ghost' | 'color' | 'salt'>('clipping');

  const router = useRouter();

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToContact = () => {
    router.push('/contact');
  };

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
    { q: 'What is your turnaround time for photo editing?', a: 'Our standard turnaround time is 24-48 hours for most projects. However, we also offer expedited services for urgent projects with turnaround times as quick as 4-6 hours, depending on the volume and complexity of the images.' },
    { q: 'Do you offer bulk discounts?', a: 'Yes, we offer significant discounts for bulk orders. The discount percentage increases with the volume of images. Please contact our sales team with your specific requirements for a customized quote.' },
    { q: 'What file formats do you accept?', a: 'We accept all common image file formats including JPG, PNG, TIFF, PSD, and RAW files from various camera manufacturers. We can also deliver the edited images in your preferred format.' },
    { q: 'How do you ensure the security of my images?', a: 'We take data security seriously. As an ISO-27001 certified company, we implement strict security protocols including encrypted file transfer, secure servers, and confidentiality agreements with all our team members.' },
    { q: 'Do you offer a free trial?', a: 'Yes, we offer a free trial for new clients. You can send us up to 5 images to edit completely free of charge so you can evaluate our quality and service before committing to a larger project.' }
  ];

  const serviceShowcase = {
    clipping: {
      before: 'https://pixeelstudio.com/wp-content/uploads/2025/08/before-2-2-1.webp',
      after: 'https://pixeelstudio.com/wp-content/uploads/2025/08/after-2-2-1.webp',
      mainTitle: 'Clipping',
      subTitle: 'Path Services',
      intro: 'Manually Crafted Clipping Paths for Clearer, Sharper Images.',
      desc: 'At Clipping Webs, we specialize in hand-drawn clipping path services that deliver precise, high-quality results. Our expert team uses the pen tool with meticulous care to create sharp, clean edges, ensuring your images have absolute clarity and professionalism. Whether for background removal or image enhancement, we guarantee flawless results that make your images stand out.',
      link: '/services/clipping-path'
    },
    ghost: {
      before: 'https://pixeelstudio.com/wp-content/uploads/2025/08/image-9-1.jpeg',
      after: 'https://pixeelstudio.com/wp-content/uploads/2025/08/image-8-1.jpeg',
      mainTitle: 'Ghost',
      subTitle: 'Mannequin',
      intro: 'Transform Clothing & Accessories with a Professional Ghost Mannequin Effect.',
      desc: 'Hook your buyers and elevate your brand with Clipping Webs’s Ghost Mannequin service. We specialize in turning standard 2D photos into dynamic 3D apparel images, giving your clothing a realistic, confident look that builds customer trust. Each image is carefully edited to perfection, offering a professional ghost mannequin effect at an affordable price. We deliver high-quality results on time, every time.',
      link: '/services/ghost-mannequin'
    },
    color: {
      before: 'https://pixeelstudio.com/wp-content/uploads/2025/08/before-2-1-1-1.webp',
      after: 'https://pixeelstudio.com/wp-content/uploads/2025/08/after-2-1-1-1.webp',
      mainTitle: 'Color',
      subTitle: 'Correction',
      intro: 'Achieve the Perfect Color Balance for Your Photos.',
      desc: 'Enhance your photos with Clipping Webs’s professional color correction services. We go beyond basic filters, meticulously fine-tuning every aspect of your images—from white balance and exposure to saturation and tonal range. Whether you need to ensure accurate product colors for your e-commerce store or set a specific mood for portraits, we adjust your photos to perfectly align with your brand’s style and vision.',
      link: '/services/color-correction'
    },
    salt: {
      before: 'https://pixeelstudio.com/wp-content/uploads/2025/08/before-7-1-1.webp',
      after: 'https://pixeelstudio.com/wp-content/uploads/2025/08/after-7-1-1.webp',
      mainTitle: 'E-Commerce',
      subTitle: 'Retouching',
      intro: 'Complete photo editing for online stores.',
      desc: 'In e-commerce, your product photo is your most powerful sales tool. Clipping Webs’s e-commerce retouching services transform standard images into high-conversion assets. We focus on enhancing your product photos to create a polished, eye-catching appearance that highlights the key features of your products. This not only attracts attention but also builds customer trust, leading to higher sales. Let Clipping Webs help you sell more.',
      link: '/services/ecommerce-retouching'
    }
  };

  return (
    <Layout>
      <Head>
        <title>Clipping Webs - Professional E-Commerce Photo Editing Services</title>
        <meta name="description" content="Professional e-commerce photo editing services including clipping path, background removal, color correction, jewelry retouching, ghost mannequin and more. Free trial available." />
        <meta name="keywords" content="photo editing, e-commerce photo editing, clipping path, background removal, color correction, jewelry retouching, ghost mannequin, image editing services" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://clippingwebs.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Clipping Webs - Professional E-Commerce Photo Editing Services" />
        <meta property="og:description" content="Professional e-commerce photo editing services including clipping path, background removal, color correction, jewelry retouching, ghost mannequin and more. Free trial available." />
        <meta property="og:url" content="https://clippingwebs.com/" />
        <meta property="og:image" content="https://clippingwebs.com/images/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Clipping Webs - Professional E-Commerce Photo Editing Services" />
        <meta name="twitter:description" content="Professional e-commerce photo editing services including clipping path, background removal, color correction, jewelry retouching, ghost mannequin and more." />
        <meta name="twitter:image" content="https://clippingwebs.com/images/twitter-card.jpg" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Clipping Webs",
              "url": "https://clippingwebs.com",
              "logo": "https://clippingwebs.com/images/logo.png",
              "description": "Professional e-commerce photo editing services including clipping path, background removal, color correction, jewelry retouching, ghost mannequin and more.",
              "foundingDate": "2022",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Bangladesh",
                "addressLocality": "Dhaka"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-756301-38325",
                "contactType": "customer service",
                "email": "info@clippingwebs.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/clippingwebs",
                "https://www.instagram.com/clippingwebs",
                "https://www.linkedin.com/company/clippingwebs"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photo Editing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Clipping Path Service",
                      "description": "Professional clipping path services for e-commerce products"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Photo Retouching",
                      "description": "Professional photo retouching and enhancement services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ghost Mannequin",
                      "description": "Ghost mannequin effect for apparel photography"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Color Correction",
                      "description": "Professional color correction and enhancement"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Clipping Webs",
              "url": "https://clippingwebs.com",
              "description": "Professional e-commerce photo editing services",
              "publisher": {
                "@type": "Organization",
                "name": "Clipping Webs"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://clippingwebs.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white" id="hero-section">
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
              {/* Top Left Image */}
              <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element">
                <Image 
                  src="/images/image/img_28.webp"
                  alt="Professional Editing"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Bottom Left Image */}
              <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element ml-8" style={{ animationDelay: '1s' }}>
                <Image 
                  src="/images/image/image.webp"
                  alt="Quality Work"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center relative z-10 py-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-block mb-4 animate-fade-in-up">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs font-raleway block">
                  Welcome to Clipping Webs
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-raleway leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Expert Photo Editing
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-raleway font-semibold animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Perfection in Every Pixel
              </p>

              {/* CTA Button */}
              <button onClick={scrollToContact} className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-base shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up font-raleway" style={{ animationDelay: '0.6s' }}>
                FREE TRIAL
              </button>

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
              {/* Top Right Image */}
              <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl hover-lift floating-element ml-auto" style={{ animationDelay: '0.5s' }}>
                <Image 
                  src="/images/beg/img_13.webp"
                  alt="Professional Work"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="w-72 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift floating-element mr-8" style={{ animationDelay: '1.5s' }}>
                <Image 
                  src="/images/image/IMG-20250805-WA0014.webp"
                  alt="Quality Results"
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
            {['Clipping Path', 'Ghost Mannequin', 'Color Correction', 'E-Commerce Retouching', 'Background Remove', 'Jewelry Retouching', 'Clipping Path', 'Ghost Mannequin', 'Color Correction', 'E-Commerce Retouching', 'Background Remove', 'Jewelry Retouching'].map((item, i) => (
              <span key={i} className="ticker-item mx-8 font-bold text-white font-raleway text-sm tracking-wide">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Introduction Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="about-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 stagger-animation">
            <div className="w-full lg:w-1/2 animate-slide-in-left">
              <div className="max-w-2xl text-left">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block font-raleway">About Our Studio</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-raleway">Crafting Visual Excellence Since 2022</h2>

                <div className="space-y-6 text-medium-gray mb-8 font-raleway">
                  <p className="text-lg leading-relaxed text-medium-gray">
                    Welcome to <span className="font-semibold text-primary">Clipping Webs</span> – Your Trusted Partner for Professional Image Post-Production. We are proud to be known as the House of Experienced Graphic Designers.
                  </p>
                  <p className="leading-relaxed text-medium-gray">
                    Since our launch in 2022, we&apos;ve been delivering high-quality, affordable image editing and graphic design services, helping businesses save time while achieving stunning visual results that drive conversions.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 my-6">
                    <p className="font-medium text-gray-700 italic">
                      &quot;Professional, high-resolution visuals help establish trust, increase engagement, and drive conversions.&quot;
                    </p>
                  </div>
                  <p className="leading-relaxed text-medium-gray">
                    Clipping Webs specializes in premium image editing services that elevate your brand presence. Our skilled team ensures every project meets the highest European quality standards, serving clients worldwide.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToContact} className="simple-btn simple-btn--primary px-8 py-4 rounded-lg font-semibold font-raleway flex items-center justify-center">
                    <span>CONTACT US</span>
                    <i className="fas fa-arrow-right ml-2 text-white"></i>
                  </button>
                  <Link href="/portfolio" className="simple-btn simple-btn--outline px-8 py-4 rounded-lg font-semibold font-raleway text-center">
                    VIEW PORTFOLIO
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 animate-slide-in-right">
              <div className="relative w-full">
                {/* Creative 3-Image Staggered Design */}
                <div className="relative w-full">
                  {/* Image 1 - Top Left - Large */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl image-hover-effect mb-6 floating-element" style={{ animationDelay: '0s' }}>
                    <div className="relative h-80 w-full">
                      <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Professional Team"
                        fill
                        className="object-cover" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white text-sm font-medium">
                        <span className="bg-primary/90 px-4 py-2 rounded-full font-raleway">Our Team</span>
                      </div>
                    </div>
                  </div>

                  {/* Images 2 & 3 - Bottom Side by Side with Stagger */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Image 2 - Left Card */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg image-hover-effect floating-element" style={{ animationDelay: '0.5s' }}>
                      <div className="relative h-64 w-full">
                        <Image src="/images/homepageimage/image (5).webp"
                          alt="Editing Process"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="bg-primary px-3 py-1 rounded-lg font-raleway text-xs font-bold uppercase">Professional</span>
                          <p className="text-xs mt-2 font-medium">Expert Editing</p>
                        </div>
                      </div>
                    </div>

                    {/* Image 3 - Right Card */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg image-hover-effect floating-element" style={{ animationDelay: '1s' }}>
                      <div className="relative h-64 w-full">
                        <Image src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                          alt="Quality Results"
                          fill
                          className="object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="bg-primary px-3 py-1 rounded-lg font-raleway text-xs font-bold uppercase">Quality</span>
                          <p className="text-xs mt-2 font-medium">Stunning Results</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Card - Below Images, Normal Flow */}
                  <div className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20 hover-lift">
                    <div className="grid grid-cols-2 gap-6 font-raleway">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-check text-primary text-lg"></i>
                          <div className="text-3xl font-bold text-primary">500+</div>
                        </div>
                        <p className="text-sm text-medium-gray font-medium">Projects Completed</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-star text-primary text-lg"></i>
                          <div className="text-3xl font-bold text-primary">4.9/5</div>
                        </div>
                        <p className="text-sm text-medium-gray font-medium">Client Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 stagger-animation">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { icon: 'award', title: 'Quality Guarantee', delay: '0s', floatDelay: '0s' },
                { icon: 'clock', title: '24h Turnaround', delay: '0.2s', floatDelay: '1s' },
                { icon: 'globe', title: 'Global Clients', delay: '0.4s', floatDelay: '1.5s' },
                { icon: 'headset', title: 'Expert Support', delay: '0.6s', floatDelay: '2s' }
              ].map((item, i) => (
                <div key={i} className="text-center hover-lift animate-fade-in-up" style={{ animationDelay: item.delay }}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 floating-element" style={{ animationDelay: item.floatDelay }}>
                    <i className={`fas fa-${item.icon} text-2xl text-primary`}></i>
                  </div>
                  <div className="font-semibold text-gray-800 font-raleway uppercase text-sm tracking-wide">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Premium Services Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="services-section">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="section-title-modern text-4xl font-bold text-gray-800 font-raleway">Our Premium Services</h2>
            <p className="text-medium-gray max-w-2xl mx-auto mt-6 text-lg font-raleway">
              We offer a comprehensive range of professional photo editing services tailored to elevate your e-commerce business
            </p>
          </div>

          <div className="services-grid stagger-animation">
            {[
              { img: 'photo-1553062407-98eeb64c6a62', icon: 'cut', title: 'Clipping Path', subtitle: 'Manually Crafted Clipping Paths for Clearer, Sharper Images', desc: 'At Clipping Webs, we specialize in hand-drawn clipping path services that deliver precise, high-quality results. Our expert team uses the pen tool with meticulous care to create sharp, edges.', link: '/services/clipping-path' },
              { img: 'photo-1553062407-98eeb64c6a62', icon: 'shirt', title: 'Ghost Mannequin', subtitle: 'Transform Clothing & Accessories with Professional Effects', desc: 'Hook your buyers and elevate your brand with Clipping Webs\'s Ghost Mannequin service. We specialize in turning standard 2D photos into dynamic 3D apparel images.', link: '/services/ghost-mannequin' },
              { img: 'photo-1545235617-9465d2a55698', icon: 'palette', title: 'Color Correction', subtitle: 'Achieve the Perfect Color Balance for Your Photos', desc: 'Enhance your photos with Clipping Webs\'s professional color correction services. We go beyond basic filters, meticulously fine-tuning every aspect of your images.', link: '/services/color-correction' },
              { img: 'photo-1523275335684-37898b6baf30', icon: 'shopping-cart', title: 'E-Commerce Retouching', subtitle: 'Complete Photo Editing for Online Stores and brand', desc: 'In e-commerce, your product photo is your most powerful sales tool. Clipping Webs\'s e-commerce retouching services transform standard images into high-conversion assets.', link: '/services/ecommerce-retouching' }
            ].map((service, i) => (
              <div key={i} className="service-card-modern hover-lift text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="overflow-hidden">
                  <Image src={`https://images.unsplash.com/${service.img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={`${service.title} Service`}
                    width={600}
                    height={400}
                    className="service-image-modern w-full h-auto" />
                </div>

                <div className="p-6">
                  <div className="service-icon-modern">
                    <i className={`fas fa-${service.icon} text-white`}></i>
                  </div>

                  <h3 className="text-xl font-bold mb-3 font-raleway uppercase tracking-tight text-gray-800">{service.title}</h3>
                  <p className="text-medium-gray mb-4 font-raleway text-sm font-medium">{service.subtitle}</p>
                  <p className="text-medium-gray text-xs mb-6 font-raleway leading-relaxed">{service.desc}</p>

                  <div className="text-center">
                    <Link href={service.link} className="btn-modern btn-animated font-raleway uppercase text-xs tracking-wider inline-flex items-center text-white">
                      Read More <i className="fas fa-arrow-right ml-2 text-white text-[10px]"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center animate-zoom-in">
            <div className="bg-white rounded-2xl p-10 shadow-xl max-w-4xl mx-auto hover-lift border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-raleway uppercase">Ready to Transform Your Product Images?</h3>
              <p className="text-medium-gray mb-8 max-w-2xl mx-auto font-raleway font-medium">
                Join thousands of satisfied clients who have elevated their e-commerce presence with our professional photo editing services.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button onClick={scrollToContact} className="simple-btn simple-btn--primary px-10 py-4 rounded-lg text-sm font-raleway uppercase tracking-wider">
                  Start Free Trial
                </button>
                <Link href="/portfolio" className="simple-btn simple-btn--outline px-10 py-4 rounded-lg font-bold font-raleway uppercase text-sm tracking-wider text-center">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Showcase Section */}
      <section className="py-20 bg-white" id="interactive-services-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Content Section */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold font-raleway text-gray-800 mb-1 leading-tight">{serviceShowcase[activeService].mainTitle}</h2>
              <h3 className="text-3xl lg:text-4xl font-bold font-raleway text-primary mb-6 leading-tight">{serviceShowcase[activeService].subTitle}</h3>
              <p className="text-lg font-semibold text-gray-800 mb-4 font-raleway">{serviceShowcase[activeService].intro}</p>
              <p className="text-medium-gray mb-8 font-raleway leading-relaxed text-lg font-medium">{serviceShowcase[activeService].desc}</p>
              <Link href={serviceShowcase[activeService].link} className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full transition-all duration-300 bg-white hover:bg-primary hover:text-white hover:border-primary font-raleway">
                Read More
              </Link>
            </div>

            {/* Image Section with Before/After Slider */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="slider-container bg-white rounded-2xl relative shadow-2xl overflow-hidden w-full max-w-2xl" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  key={activeService}
                  beforeSrc={serviceShowcase[activeService].before}
                  afterSrc={serviceShowcase[activeService].after}
                  alt="Service Before After"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Service Options */}
              <div className="flex gap-4 mt-10 w-full justify-center items-center flex-nowrap" style={{overflowX: 'auto'}}>
                {[
                  { type: 'clipping', title: 'Clipping Path' },
                  { type: 'ghost', title: 'Ghost Mannequin' },
                  { type: 'color', title: 'Color Correction' },
                  { type: 'salt', title: 'E-Commerce Retouching' }
                ].map((option) => (
                  <button
                    key={option.type}
                    onClick={() => setActiveService(option.type as typeof activeService)}
                    className={`h-12 px-8 rounded-full font-semibold border-2 transition-all duration-300 font-raleway text-base leading-none flex items-center justify-center ${activeService === option.type ? 'bg-primary text-white border-primary' : 'bg-white text-gray-800 border-gray-300 hover:border-primary hover:text-primary'}`}
                    style={{ minWidth: '160px', maxWidth: '220px', whiteSpace: 'nowrap' }}
                  >
                    {option.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Photo Retouching Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="retouching-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 stagger-animation text-left">
            <div className="w-full md:w-1/2 animate-slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 font-raleway">Professional Photo Retouching</h2>
              <p className="text-medium-gray mb-8 font-raleway leading-relaxed text-lg font-medium">
                We offer premium editorial retouching services, including color correction, blemish removal, wrinkle and stain removal, image sharpening, airbrushing, glare removal, background swapping, and noise reduction to perfect your visuals.
              </p>
              <h3 className="text-xl font-bold mb-6 text-gray-800 font-raleway uppercase tracking-tight">Visual Content for E-Commerce & Brands</h3>
              <ul className="text-medium-gray mb-8 space-y-4 font-raleway">
                {['Color Correction & Grading.', 'Blemish, Wrinkle & Stain Removal.', 'Professional Airbrushing & Skin Smoothing.', 'Image Sharpening & Noise Reduction.'].map((item, i) => (
                  <li key={i} className="flex items-center group">
                    <i className="fas fa-check-circle text-primary mr-4 text-xl group-hover:scale-110 transition-transform"></i>
                    <span className="font-medium text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-widest text-sm">
                GET A QUOTE
              </button>
            </div>

            <div className="w-full md:w-1/2 animate-slide-in-right">
              <div className="slider-container bg-light-gray rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Retouching Comparison"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Professional Image Post-Production Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="postproduction-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 stagger-animation text-left">
            <div className="w-full md:w-1/2 animate-slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 font-raleway">Professional Image Post-Production</h2>
              <p className="text-medium-gray mb-8 font-raleway leading-relaxed text-lg font-medium">
                At Clipping Webs, we specialize in professional image postproduction and ecommerce photo editing services. Our team is committed to delivering high-quality photo editing, including clipping paths, ghost mannequin photography, color correction, and more. Whether you need professional ecommerce image editing or advanced image post-production, we are here to support your brand&apos;s success. With Clipping Webs as your trusted partner, you can rely on exceptional quality and timely delivery, every time.
              </p>
              <h3 className="text-xl font-bold mb-6 text-gray-800 font-raleway uppercase tracking-tight">Our Core Specializations</h3>
              <ul className="text-medium-gray mb-8 space-y-4 font-raleway font-medium">
                {['Advanced Clipping Path Services', 'Ghost Mannequin & Invisible Mannequin Effects', 'Professional Color Correction & Enhancement', 'High-Volume Background Removal'].map((item, i) => (
                  <li key={i} className="flex items-center group">
                    <i className="fas fa-check-circle text-primary mr-4 text-xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-widest text-sm">
                GET A QUOTE
              </button>
            </div>

            <div className="w-full md:w-1/2 animate-slide-in-left">
              <div className="slider-container bg-light-gray rounded-2xl relative shadow-2xl overflow-hidden h-[560px]">
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1558603668-6576fb9c6fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Post-Production Comparison"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Clipping Webs Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="why-choose-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 stagger-animation text-left">
            <div className="w-full md:w-1/2 animate-slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 font-raleway">Why Choose Clipping Webs?</h2>
              <div className="space-y-6 font-raleway text-medium-gray text-lg font-medium leading-relaxed mb-8">
                  <p>
                    Choosing Clipping Webs means partnering with a team dedicated to your brand&apos;s success. With over a decade of experience since 2022, we&apos;ve earned a reputation for reliability, professionalism, and exceptional customer support.
                  </p>
                  <p>
                    We specialize in hand-crafted editing and have the capacity to manage high-volume and complex projects. Whether you need image postproduction, e-commerce retouching, or professional photo editing, we deliver exceptional quality on time, every time.
                  </p>
                  <p>
                    At Clipping Webs, we are not just a service; we are an extension of your creative team, committed to helping your brand thrive.
                  </p>
              </div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 font-raleway tracking-tight">Your Trusted Partner for Professional Image Editing & Postproduction</h3>
              <ul className="text-medium-gray mb-10 space-y-4 font-raleway font-medium">
                {['Globally Trusted and Reliable', 'Expert Support Team', 'Affordable Pricing', 'Bulk Image Processing', 'Effective QC and Assurance'].map((item, i) => (
                  <li key={i} className="flex items-center group">
                    <i className="fas fa-check-circle text-primary mr-4 text-xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-widest text-sm">
                CONTACT US
              </button>
            </div>

            <div className="w-full md:w-1/2 animate-slide-in-right">
              <div className="slider-container bg-white rounded-2xl relative shadow-2xl overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Quality Comparison"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Discount Section */}
      <section className="py-16 bg-linear-to-r from-primary to-primary-hover text-white service-section animate-fade-in-up" id="discount-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 stagger-animation text-left">
            <div className="w-full md:w-1/2 animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-4 font-raleway text-white">Special Discount for Bulk Images!</h2>
              <p className="mb-6 opacity-90 font-raleway leading-relaxed text-white">
                Do you have a large batch of images that need professional editing? Clipping Webs is your trusted partner for eCommerce photo editing and postproduction. We specialize in clipping paths, ghost mannequin, color correction, jewelry retouching, and bulk product image enhancement—helping your visuals shine across Amazon, Shopify, eBay, Etsy, and more.
              </p>
              <p className="mb-6 opacity-90 font-raleway leading-relaxed text-white">
                Our skilled editors deliver consistent, high-quality results that build trust and boost sales. With special discounts on bulk orders, you get premium editing at affordable rates. Most projects are completed within 24 hours, with strict quality control at every step.
              </p>
              <p className="mb-8 opacity-90 font-raleway leading-relaxed text-white">
                Whether you&apos;re a retailer, photographer, or brand, Clipping Webs provides fast, reliable, and tailored solutions to make your images stand out. Get your free bulk quote today!
              </p>
              <h3 className="text-xl font-bold mb-4 font-raleway text-white">Get Your Free Quote on a Bulk Order Now!</h3>
              <button onClick={scrollToContact} className="bg-white text-primary px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-light-gray hover:scale-105 transition-all duration-300 btn-animated magnetic-btn font-raleway">
                CONTACT US
              </button>
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

      {/* Partnership Section */}
      <section className="py-24 bg-white service-section animate-fade-in-up" id="partnership-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 stagger-animation text-left">
            <div className="w-full md:w-1/2 text-center animate-slide-in-left">
              <div className="relative inline-block">
                <div className="w-72 h-72 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary-hover transition-colors duration-500 hover-lift floating-element shadow-green-glow">
                  <i className="fas fa-handshake text-white text-7xl"></i>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-6 shadow-2xl hover:scale-125 transition-transform duration-300 hover-lift floating-element border border-gray-50" style={{ animationDelay: '1s' }}>
                  <i className="fas fa-rocket text-primary text-3xl"></i>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-6 shadow-2xl hover:scale-125 transition-transform duration-300 hover-lift floating-element border border-gray-50" style={{ animationDelay: '2s' }}>
                  <i className="fas fa-chart-line text-primary text-3xl"></i>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 animate-slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 font-raleway uppercase">Clipping Webs | Expert Photo Editing Services</h2>
              <h3 className="text-2xl font-bold text-primary mb-6 font-raleway uppercase italic tracking-wider">LET&apos;S START A Partnership</h3>
              <p className="text-medium-gray mb-6 font-raleway text-lg font-medium leading-relaxed">
                Boost your presence on leading marketplaces like Amazon, Etsy, Shopify, eBay, and others with Clipping Webs&apos;s professional image editing and video editing services.
              </p>
              <p className="text-medium-gray mb-10 font-raleway text-lg font-medium leading-relaxed">
                Simply upload your photos or videos and let us handle the rest. Our expert photo editors and video editors will transform your content into high-quality, eye-catching visuals that will make your listings more engaging and increase conversions.
              </p>
              <button onClick={scrollToContact} className="bg-primary text-white px-12 py-4 rounded-xl font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-[0.2em] text-sm">
                JOIN US NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="how-it-works-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 animate-fade-in-up font-raleway uppercase tracking-tight text-gray-800">How It Works</h2>

          <div className="flex flex-col md:flex-row justify-between text-center stagger-animation gap-12">
            {[
              { icon: 'cloud-upload-alt', title: 'Upload', desc: 'Send us your images through our secure portal or via email.', delay: '0s', float: '1s' },
              { icon: 'edit', title: 'We Edit', desc: 'Our expert team edits your images according to your specifications.', delay: '0.2s', float: '1.5s' },
              { icon: 'download', title: 'Download', desc: 'Receive your perfectly edited images ready for your e-commerce platform.', delay: '0.4s', float: '2s' }
            ].map((step, i) => (
              <div key={i} className="step flex-1 px-8 animate-fade-in-up group hover-lift" style={{ animationDelay: step.delay }}>
                <div className="step-icon w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-8 hover:bg-primary-hover hover:scale-110 transition-all duration-300 floating-element shadow-green-glow" style={{ animationDelay: step.float }}>
                  <i className={`fas fa-${step.icon} text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-raleway uppercase tracking-tight text-gray-800 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-medium-gray font-raleway font-medium leading-relaxed text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white service-section animate-fade-in-up" id="faq-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up font-raleway uppercase tracking-tight">Frequently Asked Questions</h2>

          <div className="max-w-4xl mx-auto text-left">
            {faqData.map((item, i) => (
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
            <button onClick={scrollToContact} className="bg-primary text-white px-12 py-4 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn font-raleway uppercase tracking-wider text-sm">
              JOIN US NOW
            </button>
          </div>
        </div>
      </section>

      {/* Floating Quote Button */}

      <div id="contact-section"></div>

    </Layout>
  );
}
