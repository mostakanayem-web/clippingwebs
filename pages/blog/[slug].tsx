import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    authorRole?: string;
    authorImage?: string;
    content?: string;
    image: string;
    tags?: string[];
    sections: Array<{
        id: string;
        title: string;
        content: string;
    }>;
    relatedPosts?: Array<{
        slug: string;
        title: string;
        category: string;
        date: string;
    }>;
}

const blogPosts: Record<string, BlogPost> = {
    'ultimate-guide-color-correction': {
        title: 'The Ultimate Guide to Professional Color Correction',
        excerpt: 'Learn how to achieve perfect color balance and make your product images pop with professional color correction techniques.',
        date: 'Jan 12, 2024',
        readTime: '8 min read',
        category: 'Tutorial',
        author: 'Sarah Chen',
        authorRole: 'Senior Photo Editor',
        image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'understanding-color',
                title: '1. Understanding Color Theory Basics',
                content: 'Understanding different color models is crucial for effective color correction. Color correction is the process of adjusting colors in photos to match reality or achieve a desired look. In the RGB color model, colors are created by combining red, green, and blue light in different intensities. The CMYK model, used in print, combines cyan, magenta, yellow, and black inks. HSL (Hue, Saturation, Lightness) provides another approach by separating color into its visual properties. For e-commerce photography, understanding these models helps you make informed decisions about color adjustments. Different color spaces like sRGB and Adobe RGB have different gamuts, affecting how colors appear on different devices. When correcting product images, you need to consider the target platform - what looks good on a website may need adjustments for printed catalogs. Proper color theory knowledge prevents oversaturation and maintains natural-looking results that build customer trust.'
            },
            {
                id: 'white-balance',
                title: '2. Mastering White Balance',
                content: 'White balance ensures that colors appear natural under different lighting conditions. Incorrect white balance can make images look too warm (yellow/orange) or too cool (blue). Daylight typically has a color temperature of 5500K, while tungsten lighting is around 2700K, and overcast conditions around 6500K. Your camera needs to know the light source to render whites correctly. Most cameras offer preset white balance modes like daylight, cloudy, tungsten, and fluorescent. Custom white balance using a gray card gives the most accurate results. In post-production, white balance adjustment is one of the most powerful tools available. A slight warm cast can make products appear more inviting, while a cool cast can emphasize freshness and cleanliness. For e-commerce, consistency across your product catalog is essential - all images should have similar color temperature to create a cohesive brand appearance. Using the temperature and tint sliders in Lightroom or Adobe Camera Raw gives you precise control for professional results.'
            },
            {
                id: 'exposure-correction',
                title: '3. Exposure Correction Techniques',
                content: 'Proper exposure ensures details are visible in both shadows and highlights. Use histograms to guide adjustments and maintain detail in important areas. The histogram is your most reliable tool, showing the distribution of tones from pure black to pure white. A histogram bunched up on the left indicates underexposure, while bunching on the right indicates overexposure. Your goal is usually to have detail across the entire tonal range. The Exposure slider makes overall adjustments, while Shadows and Highlights sliders allow selective adjustments to specific tonal ranges. Blacks and Whites sliders set the darkest and brightest points. For product photography, proper exposure is critical because customers need to see details clearly. Underexposed images make products appear dull and uninviting, while overexposed images hide texture and detail. Using exposure blending or HDR techniques can help maintain detail in both shadow and highlight areas. Always shoot with proper exposure in-camera when possible, then use post-production adjustments for fine-tuning rather than major corrections.'
            },
            {
                id: 'color-grading',
                title: '4. Professional Color Grading',
                content: 'Color grading goes beyond correction to create a specific mood or style that enhances your brand identity. Different color tones convey different messages to your audience. Warm color grades (adding yellows and oranges) create feelings of warmth, comfort, and luxury, perfect for fashion, jewelry, and lifestyle products. Cool color grades (emphasizing blues and purples) convey freshness, cleanliness, and modernity, ideal for tech products and wellness items. Cinematic color grading techniques like lifting blacks or crushing blacks create specific moods. Split toning allows you to apply different colors to shadows and highlights, a powerful creative technique. For e-commerce, color grading should enhance your brand identity while maintaining product color accuracy. You can create signature looks using LUTs (Look-Up Tables) for consistency across your catalog. Popular color grades include warm golden tones for luxury brands, cool blues for tech companies, and vibrant saturated colors for fashion. The key is balancing creative vision with customer expectations - the product color should be recognizable while benefiting from your brand\'s visual style.'
            },
            {
                id: 'advanced-techniques',
                title: '5. Advanced Color Correction Techniques',
                content: 'Master selective color adjustments, color matching between images, and batch processing techniques for professional results. Selective color adjustments target specific color ranges - you can adjust reds without affecting blues, for example. HSL (Hue, Saturation, Lightness) panels in Lightroom and Capture One allow this precision. Vibrance increases color intensity while avoiding oversaturation, a more intelligent approach than simple saturation sliders. Color matching becomes critical when shooting multiple products in different lighting or at different times. Reference images help maintain consistency - use the same color checker or gray card in your shots. Curves and levels offer advanced control over specific tonal ranges and colors. Luminance masks allow selective adjustments to specific brightness levels. For batch processing, develop presets that maintain consistency across product catalogs while respecting individual images. Advanced techniques also include color correction for different skin tones in lifestyle photography, ensuring inclusive representation. Working with 16-bit or RAW files gives you maximum flexibility for advanced corrections without quality loss.'
            },
            {
                id: 'ecommerce-tips',
                title: '6. E-commerce Specific Color Correction Tips',
                content: 'Product color accuracy is critical to avoid returns. Maintain consistency across your product catalog and follow platform-specific color profile requirements. Inaccurate colors are a leading cause of e-commerce returns - customers receive products that don\'t match website images. Use color-managed workflows with calibrated monitors to ensure what you see is accurate. Different platforms display colors differently - Amazon, Shopify, and WooCommerce may have different color profiles. Test your images on the actual platform before uploading. Create a color reference library for your brand so new products match existing inventory. Consistent white balance and exposure across your catalog creates a professional appearance that builds customer trust. Platform specifications recommend sRGB color space for web images. Some platforms use automatic color enhancement, so shooting slightly cooler or warmer compensates for their adjustments. Document your color correction process so new team members can maintain consistency. Consider creating before-and-after documentation showing your typical adjustments for training purposes. Quality control checks comparing on-hand products with website images ensure accuracy.'
            }
        ],
        relatedPosts: [
            { slug: 'quality-images-boost-ecommerce-sales', title: 'How Quality Images Can Boost Your E-commerce Sales by 40%', category: 'E-commerce', date: 'Jan 8, 2024' },
            { slug: 'advanced-jewelry-retouching', title: 'Advanced Jewelry Retouching: Making Diamonds Sparkle', category: 'Technique', date: 'Jan 5, 2024' },
            { slug: 'perfect-background-removal', title: 'Perfect Background Removal: Manual vs Automated Methods', category: 'How-to', date: 'Jan 2, 2024' }
        ]
    },
    'quality-images-boost-ecommerce-sales': {
        title: 'How Quality Images Can Boost Your E-commerce Sales by 40%',
        excerpt: 'Discover the direct correlation between professional product images and increased conversion rates in online stores.',
        date: 'Jan 8, 2024',
        readTime: '6 min read',
        category: 'E-commerce',
        author: 'Mike Rodriguez',
        authorRole: 'E-commerce Specialist',
        image: 'https://images.unsplash.com/photo-1558603668-6576fb9c6fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'visual-impact',
                title: '1. The Visual Impact on Sales',
                content: 'High-quality product images are the primary way customers evaluate products online. Professional images build trust and significantly increase conversion rates.'
            },
            {
                id: 'key-elements',
                title: '2. Key Elements of E-commerce Product Images',
                content: 'Focus on proper lighting, clean backgrounds, accurate colors, multiple angles, and detailed close-ups to showcase your products effectively.'
            },
            {
                id: 'conversion-metrics',
                title: '3. Measuring Impact on Conversions',
                content: 'Track metrics like click-through rates, time spent on product pages, and conversion rates to measure the impact of image quality improvements.'
            },
            {
                id: 'platform-optimization',
                title: '4. Optimizing for Different Platforms',
                content: 'Each e-commerce platform has specific image requirements and best practices. Tailor your images to each platform for maximum impact.'
            },
            {
                id: 'mobile-optimization',
                title: '5. Mobile-First Image Strategy',
                content: 'With most e-commerce traffic coming from mobile devices, optimize images for small screens while maintaining quality.'
            },
            {
                id: 'seo-benefits',
                title: '6. SEO Benefits of Quality Images',
                content: 'Properly optimized images with alt text and structured data improve your SEO and drive more organic traffic to your products.'
            }
        ],
        relatedPosts: [
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' },
            { slug: 'ghost-mannequin-magic', title: 'Ghost Mannequin Magic: Creating 3D Apparel Images', category: 'Fashion', date: 'Dec 22, 2023' },
            { slug: 'top-photo-editing-tools', title: 'Top 10 Photo Editing Tools Every E-commerce Business Needs', category: 'Tools', date: 'Dec 28, 2023' }
        ]
    },
    'advanced-jewelry-retouching': {
        title: 'Advanced Jewelry Retouching: Making Diamonds Sparkle',
        excerpt: 'Professional techniques for jewelry retouching that make precious stones and metals look their absolute best.',
        date: 'Jan 5, 2024',
        readTime: '7 min read',
        category: 'Technique',
        author: 'Alex Johnson',
        authorRole: 'Jewelry Photography Expert',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'jewelry-photography',
                title: '1. Jewelry Photography Fundamentals',
                content: 'Jewelry requires specialized lighting and photography techniques to capture the brilliance and beauty of precious stones and metals.'
            },
            {
                id: 'gemstone-enhancement',
                title: '2. Gemstone Enhancement Techniques',
                content: 'Learn how to make diamonds sparkle, enhance color saturation of gemstones, and create natural-looking brilliance.'
            },
            {
                id: 'metal-polishing',
                title: '3. Metal Polishing and Shine',
                content: 'Professional techniques for enhancing the luster and shine of gold, silver, platinum, and other precious metals.'
            },
            {
                id: 'reflection-mastery',
                title: '4. Mastering Reflections',
                content: 'Control and enhance reflections to add depth and dimension to jewelry images without creating unrealistic effects.'
            },
            {
                id: 'batch-jewelry-editing',
                title: '5. Batch Editing Jewelry Collections',
                content: 'Maintain consistency across your entire jewelry catalog while optimizing each piece for maximum visual impact.'
            },
            {
                id: 'luxury-positioning',
                title: '6. Positioning Jewelry as Luxury',
                content: 'Use editing techniques to communicate luxury, craftsmanship, and premium quality to justify higher price points.'
            }
        ],
        relatedPosts: [
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' },
            { slug: 'product-shadow-creation', title: 'How to Create Perfect Product Shadows in Photoshop', category: 'Photoshop', date: 'Dec 15, 2023' },
            { slug: 'quality-images-boost-ecommerce-sales', title: 'How Quality Images Can Boost Your E-commerce Sales by 40%', category: 'E-commerce', date: 'Jan 8, 2024' }
        ]
    },
    'perfect-background-removal': {
        title: 'Perfect Background Removal: Manual vs Automated Methods',
        excerpt: 'Compare manual clipping path techniques with AI-powered background removal tools and learn when to use each.',
        date: 'Jan 2, 2024',
        readTime: '9 min read',
        category: 'How-to',
        author: 'Emily Watson',
        authorRole: 'Image Editing Specialist',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'background-removal-importance',
                title: '1. Why Background Removal Matters',
                content: 'Clean backgrounds improve product visibility, create professional presentation, and enhance focus on the product itself.'
            },
            {
                id: 'manual-clipping-path',
                title: '2. Manual Clipping Path Technique',
                content: 'Master precise selection tools for maximum control over complex edges and fine details in product images.'
            },
            {
                id: 'ai-background-removal',
                title: '3. AI-Powered Background Removal',
                content: 'Explore modern AI tools that automatically detect and remove backgrounds with minimal effort and impressive accuracy.'
            },
            {
                id: 'when-to-use-each',
                title: '4. When to Use Manual vs Automated',
                content: 'Understand the pros and cons of each method to choose the best approach for different product types and scenarios.'
            },
            {
                id: 'edge-refinement',
                title: '5. Professional Edge Refinement',
                content: 'Learn advanced techniques for refining edges, managing transparency, and creating realistic results.'
            },
            {
                id: 'batch-background-processing',
                title: '6. Batch Processing Background Removal',
                content: 'Scale your workflow to handle large product catalogs efficiently while maintaining consistency and quality.'
            }
        ],
        relatedPosts: [
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' },
            { slug: 'image-masking-techniques', title: 'Advanced Masking Techniques for Complex Objects', category: 'Advanced', date: 'Dec 18, 2023' },
            { slug: 'top-photo-editing-tools', title: 'Top 10 Photo Editing Tools Every E-commerce Business Needs', category: 'Tools', date: 'Dec 28, 2023' }
        ]
    },
    'top-photo-editing-tools': {
        title: 'Top 10 Photo Editing Tools Every E-commerce Business Needs',
        excerpt: 'Essential software and tools that can streamline your photo editing workflow and improve efficiency.',
        date: 'Dec 28, 2023',
        readTime: '10 min read',
        category: 'Tools',
        author: 'Sarah Chen',
        authorRole: 'Technology Specialist',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'professional-editing-software',
                title: '1. Professional Editing Software',
                content: 'Industry-standard tools like Photoshop and Lightroom remain essential for professional photo editing and batch processing.'
            },
            {
                id: 'specialized-tools',
                title: '2. Specialized Editing Tools',
                content: 'Discover powerful specialized tools designed for specific tasks like background removal, color correction, and enhancement.'
            },
            {
                id: 'ai-powered-solutions',
                title: '3. AI-Powered Solutions',
                content: 'Explore cutting-edge AI tools that automate common editing tasks and save significant time in your workflow.'
            },
            {
                id: 'batch-processing-software',
                title: '4. Batch Processing Software',
                content: 'Tools designed for efficiently processing large quantities of images while maintaining consistency.'
            },
            {
                id: 'automation-plugins',
                title: '5. Automation and Plugins',
                content: 'Extend your editing software with plugins and scripts that automate repetitive tasks and boost productivity.'
            },
            {
                id: 'workflow-optimization',
                title: '6. Building Your Complete Workflow',
                content: 'Combine multiple tools strategically to create an efficient, scalable editing workflow for your e-commerce business.'
            }
        ],
        relatedPosts: [
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' },
            { slug: 'perfect-background-removal', title: 'Perfect Background Removal: Manual vs Automated Methods', category: 'How-to', date: 'Jan 2, 2024' },
            { slug: 'image-masking-techniques', title: 'Advanced Masking Techniques for Complex Objects', category: 'Advanced', date: 'Dec 18, 2023' }
        ]
    },
    'ghost-mannequin-magic': {
        title: 'Ghost Mannequin Magic: Creating 3D Apparel Images',
        excerpt: 'Step-by-step guide to creating professional ghost mannequin effects that make clothing look dynamic and appealing.',
        date: 'Dec 22, 2023',
        readTime: '8 min read',
        category: 'Fashion',
        author: 'Mike Rodriguez',
        authorRole: 'Fashion Photography Expert',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'understanding-ghost-mannequin',
                title: '1. Understanding Ghost Mannequin',
                content: 'Ghost mannequin is a photography and post-production technique that removes the mannequin while retaining the garment shape.'
            },
            {
                id: 'photography-setup',
                title: '2. Photography Setup and Technique',
                content: 'Learn the proper photography techniques and preparation needed to create ghost mannequin effects during the shoot.'
            },
            {
                id: 'removal-process',
                title: '3. Mannequin Removal Process',
                content: 'Master advanced selection and removal techniques to cleanly extract the mannequin while preserving garment details.'
            },
            {
                id: 'detail-enhancement',
                title: '4. Enhancing Details and Texture',
                content: 'Bring out fabric textures, stitching details, and garment contours for professional, high-quality results.'
            },
            {
                id: 'color-and-lighting',
                title: '5. Color Correction and Lighting',
                content: 'Apply professional color correction and lighting adjustments to create consistent, appealing apparel images.'
            },
            {
                id: 'batch-apparel-editing',
                title: '6. Batch Processing Apparel Collections',
                content: 'Scale your ghost mannequin workflow to handle large clothing catalogs efficiently and consistently.'
            }
        ],
        relatedPosts: [
            { slug: 'quality-images-boost-ecommerce-sales', title: 'How Quality Images Can Boost Your E-commerce Sales by 40%', category: 'E-commerce', date: 'Jan 8, 2024' },
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' },
            { slug: 'perfect-background-removal', title: 'Perfect Background Removal: Manual vs Automated Methods', category: 'How-to', date: 'Jan 2, 2024' }
        ]
    },
    'image-masking-techniques': {
        title: 'Advanced Masking Techniques for Complex Objects',
        excerpt: 'Master complex masking techniques for challenging objects like hair, fur, and transparent materials.',
        date: 'Dec 18, 2023',
        readTime: '9 min read',
        category: 'Advanced',
        author: 'Alex Johnson',
        authorRole: 'Advanced Photo Editor',
        image: 'https://images.unsplash.com/photo-1581094794329-cddf5c7d9cb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'masking-fundamentals',
                title: '1. Image Masking Fundamentals',
                content: 'Understand the different types of masks and when to use each method for precise image editing.'
            },
            {
                id: 'hair-and-fur-masking',
                title: '2. Masking Hair and Fur',
                content: 'Learn specialized techniques for selecting and masking fine details like hair strands and fur texture.'
            },
            {
                id: 'transparent-materials',
                title: '3. Transparent Material Masking',
                content: 'Master techniques for working with glass, plastic, and other transparent or translucent materials.'
            },
            {
                id: 'edge-detection',
                title: '4. Advanced Edge Detection',
                content: 'Utilize advanced tools and techniques for detecting and preserving complex edges accurately.'
            },
            {
                id: 'refining-masks',
                title: '5. Mask Refinement and Feathering',
                content: 'Polish your masks with professional feathering and refinement techniques for seamless results.'
            },
            {
                id: 'practical-applications',
                title: '6. Practical Applications in E-commerce',
                content: 'Apply advanced masking techniques to real-world e-commerce product photography scenarios.'
            }
        ],
        relatedPosts: [
            { slug: 'perfect-background-removal', title: 'Perfect Background Removal: Manual vs Automated Methods', category: 'How-to', date: 'Jan 2, 2024' },
            { slug: 'top-photo-editing-tools', title: 'Top 10 Photo Editing Tools Every E-commerce Business Needs', category: 'Tools', date: 'Dec 28, 2023' },
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' }
        ]
    },
    'product-shadow-creation': {
        title: 'How to Create Perfect Product Shadows in Photoshop',
        excerpt: 'Learn professional techniques for creating realistic shadows that make your products look natural and appealing.',
        date: 'Dec 15, 2023',
        readTime: '7 min read',
        category: 'Photoshop',
        author: 'Emily Watson',
        authorRole: 'Photoshop Expert',
        image: 'https://images.unsplash.com/photo-1555099962-419945f8c6b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        authorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        sections: [
            {
                id: 'shadow-importance',
                title: '1. Why Product Shadows Matter',
                content: 'Shadows add depth, dimension, and realism to product images. Well-created shadows enhance perceived value and appeal.'
            },
            {
                id: 'shadow-types',
                title: '2. Understanding Different Shadow Types',
                content: 'Learn about drop shadows, contact shadows, and natural shadows and when to use each type effectively.'
            },
            {
                id: 'creating-natural-shadows',
                title: '3. Creating Natural-Looking Shadows',
                content: 'Master techniques for creating realistic shadows that appear naturally beneath and around your products.'
            },
            {
                id: 'shadow-customization',
                title: '4. Shadow Customization Techniques',
                content: 'Learn how to adjust shadow properties like angle, softness, and opacity for perfect results.'
            },
            {
                id: 'shadow-layering',
                title: '5. Advanced Shadow Layering',
                content: 'Create complex, realistic shadow effects using multiple layers and blending techniques.'
            },
            {
                id: 'different-surfaces',
                title: '6. Shadows on Different Surfaces',
                content: 'Create appropriate shadows for various background types and surface materials used in e-commerce photography.'
            }
        ],
        relatedPosts: [
            { slug: 'quality-images-boost-ecommerce-sales', title: 'How Quality Images Can Boost Your E-commerce Sales by 40%', category: 'E-commerce', date: 'Jan 8, 2024' },
            { slug: 'ultimate-guide-color-correction', title: 'The Ultimate Guide to Professional Color Correction', category: 'Tutorial', date: 'Jan 12, 2024' },
            { slug: 'image-masking-techniques', title: 'Advanced Masking Techniques for Complex Objects', category: 'Advanced', date: 'Dec 18, 2023' }
        ]
    }
};

export default function BlogPost() {
    useScrollAnimation();
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const handleScroll = () => {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.scrollY / windowHeight) * 100;
                progressBar.style.width = scrolled + '%';
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    if (!slug || !blogPosts[slug as string]) {
        return (
            <Layout>
                <Head>
                    <title>Blog Post Not Found | Clipping Webs</title>
                </Head>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                        <Link href="/blog" className="text-primary hover:text-primary-hover transition-colors">
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    const post = blogPosts[slug as string];

    return (
        <Layout>
            <Head>
                <title>{post.title} | Clipping Webs Blog</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.image} />
            </Head>

            {/* Progress Bar */}
            <div className="progress-container fixed top-0 left-0 w-full h-1 z-50 overflow-hidden pointer-events-none">
                <div id="progressBar" className="progress-bar h-full bg-primary transition-all duration-300" style={{ width: '0%' }}></div>
            </div>

            {/* Breadcrumbs */}
            <nav className="bg-light-gray py-4 mt-20" aria-label="Breadcrumb">
                <div className="container mx-auto px-4">
                    <ol className="flex items-center space-x-2 text-sm font-raleway flex-wrap gap-1">
                        <li><Link href="/" className="text-medium-gray hover:text-primary transition-colors">Home</Link></li>
                        <li><i className="fas fa-chevron-right text-light-text text-xs"></i></li>
                        <li><Link href="/blog" className="text-medium-gray hover:text-primary transition-colors">Blog</Link></li>
                        <li><i className="fas fa-chevron-right text-light-text text-xs"></i></li>
                        <li><span className="text-primary font-semibold" aria-current="page">{post.title.substring(0, 30)}...</span></li>
                    </ol>
                </div>
            </nav>

            {/* Blog Post Header */}
            <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-primary/5 service-section animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Category & Meta */}
                        <div className="flex items-center justify-center text-sm text-gray-500 mb-6 animate-fade-in-up font-raleway flex-wrap gap-4">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                            <span className="text-gray-400">•</span>
                            <span>{post.date}</span>
                            <span className="text-gray-400">•</span>
                            <span>{post.readTime}</span>
                        </div>
                        
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-6 text-reveal animate-fade-in-up font-raleway leading-tight">
                            {post.title}
                        </h1>
                        
                        {/* Excerpt */}
                        <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto text-reveal animate-fade-in-up font-raleway">
                            {post.excerpt}
                        </p>
                        
                        {/* Author Info */}
                        <div className="flex items-center justify-center animate-fade-in-up font-raleway">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-300">
                                <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="font-bold text-gray-800">{post.author}</h4>
                                <p className="text-primary text-sm">{post.authorRole}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-12 bg-white animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={post.image} alt={post.title} className="w-full h-96 object-cover image-hover-effect hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20 bg-white service-section animate-fade-in-up">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-12 font-raleway">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                {post.sections[0]?.content}
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="bg-light-gray rounded-2xl p-8 mb-16 hover-lift border border-gray-200 font-raleway">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <i className="fas fa-list mr-3 text-primary"></i>
                                Table of Contents
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                {post.sections.map((section, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-primary mr-3 font-semibold">{idx + 1}.</span>
                                        <Link href={`#${section.id}`} className="text-primary hover:text-primary-hover transition-colors hover:underline">
                                            {section.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Content Sections */}
                        {post.sections.map((section, idx: number) => (
                            <div key={idx} id={section.id} className="mb-16 scroll-mt-20 font-raleway">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-primary/20">{section.title}</h2>
                                <p className="text-gray-700 mb-8 leading-relaxed text-lg">{section.content}</p>
                                
                                {idx === 0 && (
                                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-lg p-6 mb-8">
                                        <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                                            <i className="fas fa-lightbulb text-primary mr-3"></i>
                                            Pro Tip
                                        </h4>
                                        <p className="text-gray-700">
                                            Master these fundamentals first before moving to advanced techniques. Building a strong foundation is key to professional results.
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Conclusion */}
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-10 text-center mt-16 border border-primary/20 font-raleway">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Elevate Your Images?</h3>
                            <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                                Professional photo editing can significantly improve your product images and drive conversions. Let us help you achieve stunning results.
                            </p>
                            <Link href="/contact" className="bg-primary text-white px-10 py-4 rounded-lg font-bold shadow-green-glow hover:bg-primary-hover hover:shadow-green-glow-hover transition-all duration-300 btn-animated magnetic-btn inline-block text-lg">
                                GET PROFESSIONAL EDITING
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
}
