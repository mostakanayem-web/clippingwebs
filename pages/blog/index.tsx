import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Blog() {
    useScrollAnimation();
    const [visiblePosts, setVisiblePosts] = useState(5);

    const blogPosts = [
        {
            slug: 'ultimate-guide-color-correction',
            title: 'The Ultimate Guide to Professional Color Correction',
            excerpt: 'Learn how to achieve perfect color balance and make your product images pop with professional color correction techniques.',
            date: 'Jan 12, 2024',
            category: 'Tutorial',
            author: 'Sarah Chen',
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            slug: 'quality-images-boost-ecommerce-sales',
            title: 'How Quality Images Can Boost Your E-commerce Sales by 40%',
            excerpt: 'Discover the direct correlation between professional product images and increased conversion rates in online stores.',
            date: 'Jan 8, 2024',
            category: 'E-commerce',
            author: 'Mike Rodriguez',
            image: 'https://images.unsplash.com/photo-1558603668-6576fb9c6fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            slug: 'advanced-jewelry-retouching',
            title: 'Advanced Jewelry Retouching: Making Diamonds Sparkle',
            excerpt: 'Professional techniques for jewelry retouching that make precious stones and metals look their absolute best.',
            date: 'Jan 5, 2024',
            category: 'Technique',
            author: 'Alex Johnson',
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            slug: 'perfect-background-removal',
            title: 'Perfect Background Removal: Manual vs Automated Methods',
            excerpt: 'Compare manual clipping path techniques with AI-powered background removal tools and learn when to use each.',
            date: 'Jan 2, 2024',
            category: 'How-to',
            author: 'Emily Watson',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            slug: 'top-photo-editing-tools',
            title: 'Top 10 Photo Editing Tools Every E-commerce Business Needs',
            excerpt: 'Essential software and tools that can streamline your photo editing workflow and improve efficiency.',
            date: 'Dec 28, 2023',
            category: 'Tools',
            author: 'Sarah Chen',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            slug: 'ghost-mannequin-magic',
            title: 'Ghost Mannequin Magic: Creating 3D Apparel Images',
            excerpt: 'Step-by-step guide to creating professional ghost mannequin effects that make clothing look dynamic and appealing.',
            date: 'Dec 22, 2023',
            category: 'Fashion',
            author: 'Mike Rodriguez',
            image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            slug: 'image-masking-techniques',
            title: 'Advanced Masking Techniques for Complex Objects',
            excerpt: 'Master complex masking techniques for challenging objects like hair, fur, and transparent materials.',
            date: 'Dec 18, 2023',
            category: 'Advanced',
            author: 'Alex Johnson',
            image: 'https://images.unsplash.com/photo-1581094794329-cddf5c7d9cb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            slug: 'product-shadow-creation',
            title: 'How to Create Perfect Product Shadows in Photoshop',
            excerpt: 'Learn professional techniques for creating realistic shadows that make your products look natural and appealing.',
            date: 'Dec 15, 2023',
            category: 'Photoshop',
            author: 'Emily Watson',
            image: 'https://images.unsplash.com/photo-1555099962-419945f8c6b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
    ];

    const featuredPost = blogPosts.find(post => post.featured);
    const otherPosts = blogPosts.filter(post => !post.featured);

    const handleLoadMore = () => {
        setVisiblePosts(prev => Math.min(prev + 3, blogPosts.length - 1));
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

    return (
        <Layout>
            <Head>
                <title>Blog - Photo Editing Tips & E-commerce Insights | Clipping Webs</title>
                <meta name="description" content="Professional photo editing blog with tips, tutorials, and e-commerce insights. Learn about clipping path, ghost mannequin, color correction and more." />
                <meta name="keywords" content="photo editing blog, clipping path tutorial, ghost mannequin guide, color correction tips, e-commerce photo editing" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://clippingwebs.com/blog" />

                {/* Open Graph */}
                <meta property="og:title" content="Blog - Photo Editing Tips & E-commerce Insights | Clipping Webs" />
                <meta property="og:description" content="Professional photo editing blog with tips, tutorials, and e-commerce insights. Learn about clipping path, ghost mannequin, color correction and more." />
                <meta property="og:url" content="https://clippingwebs.com/blog" />
                <meta property="og:type" content="website" />

                {/* Structured Data - Blog */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            "name": "Clipping Webs Photo Editing Blog",
                            "description": "Professional photo editing blog with tips, tutorials, and e-commerce insights. Learn about clipping path, ghost mannequin, color correction and more.",
                            "url": "https://clippingwebs.com/blog",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Clipping Webs",
                                "url": "https://clippingwebs.com"
                            },
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": "https://clippingwebs.com/blog"
                            },
                            "about": [
                                {
                                    "@type": "Thing",
                                    "name": "Photo Editing",
                                    "description": "Professional photo editing techniques and services"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "Clipping Path",
                                    "description": "Background removal and image cutout techniques"
                                },
                                {
                                    "@type": "Thing",
                                    "name": "E-commerce Photography",
                                    "description": "Product photography and image optimization for online stores"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            {/* Progress Bar */}
            <div className="progress-container fixed top-0 left-0 w-full h-1 z-50 overflow-hidden pointer-events-none">
                <div id="progressBar" className="progress-bar h-full bg-primary transition-all duration-300" style={{ width: '0%' }}></div>
            </div>

            {/* Breadcrumbs */}
            <nav className="bg-light-gray py-4 mt-20" aria-label="Breadcrumb">
                <div className="container mx-auto px-4">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li><Link href="/" className="text-medium-gray hover:text-primary transition-colors">Home</Link></li>
                        <li><i className="fas fa-chevron-right text-light-text text-xs"></i></li>
                        <li><span className="text-primary font-semibold" aria-current="page">Blog</span></li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5 service-section animate-fade-in-up">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-reveal animate-fade-in-up font-raleway">Our Blog</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto text-reveal animate-fade-in-up font-raleway" style={{ animationDelay: '0.2s' }}>
                        Photo Editing Tips & E-commerce Insights
                    </p>
                    <Link href="#newsletter" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-primary btn-animated magnetic-btn animate-fade-in-up inline-block font-raleway" style={{ animationDelay: '0.4s' }}>
                        SUBSCRIBE TO NEWSLETTER
                    </Link>
                </div>
            </section>

            {/* Featured Post Section */}
            {featuredPost && (
                <section className="py-20 bg-white service-section animate-fade-in-up">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 fade-in">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm font-raleway">FEATURED</span>
                            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4 font-raleway">Featured Article</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-raleway">
                                In-depth guides and expert insights on professional photo editing
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-zoom-in">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Featured Image */}
                                <div className="relative overflow-hidden h-96">
                                    <Link href={`/blog/${featuredPost.slug}`}>
                                        <img src={featuredPost.image}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover image-hover-effect hover:scale-110 transition-transform duration-500" />
                                    </Link>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium font-raleway">Featured</span>
                                    </div>
                                </div>

                                {/* Featured Content */}
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 font-raleway flex-wrap gap-2">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">{featuredPost.category}</span>
                                        <span>•</span>
                                        <span>{featuredPost.date}</span>
                                        <span>•</span>
                                        <span>8 min read</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-gray-800 mb-4 font-raleway">
                                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                                            {featuredPost.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed font-raleway">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center text-gray-500">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="font-raleway">
                                            <h4 className="font-bold text-gray-800">{featuredPost.author}</h4>
                                            <p className="text-primary text-sm">Creative Director</p>
                                        </div>
                                    </div>

                                    <Link href={`/blog/${featuredPost.slug}`} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 btn-animated self-start inline-block text-center font-raleway">
                                        READ FULL ARTICLE
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Categories */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 fade-in">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-raleway">Browse by Category</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-raleway">Explore our blog posts by topic</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-animation">
                        {[
                            { title: 'Clipping Path', count: '12 Articles', icon: 'cut' },
                            { title: 'Ghost Mannequin', count: '8 Articles', icon: 'tshirt' },
                            { title: 'Color Correction', count: '15 Articles', icon: 'palette' },
                            { title: 'Jewelry Retouching', count: '10 Articles', icon: 'gem' }
                        ].map((cat, i) => (
                            <div key={i} className="category-card bg-white rounded-xl p-6 text-center hover-lift animate-fade-in-up block cursor-pointer font-raleway" style={{ animationDelay: `${i * 0.2}s` }}>
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className={`fas fa-${cat.icon} text-2xl text-primary`}></i>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{cat.title}</h3>
                                <p className="text-gray-600 text-sm">{cat.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white service-section animate-fade-in-up" id="blog-posts-container">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 fade-in">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-raleway">Latest Articles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-raleway">
                            Stay updated with the latest trends and techniques in professional photo editing
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                        {otherPosts.slice(0, visiblePosts).map((post, i) => (
                            <article key={i} className="blog-post service-card-modern hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="overflow-hidden h-48 rounded-t-lg">
                                    <Link href={`/blog/${post.slug}`}>
                                        <img src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover blog-image hover:scale-110 transition-transform duration-500" />
                                    </Link>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-3 font-raleway flex-wrap gap-2">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 font-raleway">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-raleway">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center font-raleway">
                                            <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-gray-200 flex items-center justify-center text-gray-500">
                                                <i className="fas fa-user-circle"></i>
                                            </div>
                                            <span className="text-sm text-gray-600">{post.author}</span>
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="text-primary text-sm font-semibold hover:text-primary-hover transition-colors read-more-link font-raleway">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visiblePosts < blogPosts.length && (
                        <div className="text-center mt-12 animate-fade-in-up">
                            <button 
                                onClick={handleLoadMore}
                                className="load-more-posts bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn font-raleway"
                            >
                                LOAD MORE ARTICLES
                            </button>
                            <p className="text-gray-600 mt-4 font-raleway">Showing {visiblePosts} of {blogPosts.length} articles</p>
                        </div>
                    )}

                    {visiblePosts >= blogPosts.length && (
                        <div className="text-center mt-12">
                            <p className="text-gray-600 font-raleway">Showing all {blogPosts.length} articles</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section id="newsletter" className="py-20 bg-gradient-to-r from-primary to-primary-hover text-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 font-raleway">Stay Updated with Our Blog</h2>
                        <p className="text-white/90 mb-8 text-lg font-raleway">
                            Get the latest photo editing tips, e-commerce insights, and industry news delivered to your inbox.
                        </p>
                        
                        <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <form className="newsletter-form max-w-md mx-auto">
                                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                    <input type="email" placeholder="Enter your email" required 
                                           className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white font-raleway" />
                                    <button type="submit" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 btn-animated font-raleway">
                                        SUBSCRIBE
                                    </button>
                                </div>
                                <p className="text-white/70 text-sm font-raleway">
                                    No spam. Unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Tags */}
            <section className="py-16 bg-light-gray service-section animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-raleway">Popular Topics</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-raleway">Explore articles by popular tags and topics</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto font-raleway">
                        {[
                            '#ClippingPath',
                            '#ColorCorrection',
                            '#GhostMannequin',
                            '#Ecommerce',
                            '#PhotoEditing',
                            '#ProductImages',
                            '#JewelryRetouching',
                            '#BackgroundRemoval'
                        ].map((tag, i) => (
                            <span key={i} className="blog-tag bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 btn-animated cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

        </Layout>
    );
}
