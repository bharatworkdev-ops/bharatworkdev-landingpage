import React from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaClock, FaAward, FaNewspaper, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

// Import custom generated thumbnails
import gseaThumb from "../assets/webp/gsea_award_thumb.webp";
import tieThumb from "../assets/webp/tie_pitch_thumb.webp";

const BlogPage = () => {
  const actualBlogs = [
    {
      id: 1,
      title: "Student Startup 'BharatWork' Wins GSEA Hyderabad Chapter Finals",
      excerpt: "BharatWork, a voice-assisted, tech-enabled employment marketplace designed for the unorganized informal workforce, secures a cash prize of ₹1.5 Lakh and advances to the GSEA South Asia Finals.",
      category: "Awards & Press",
      publisher: "Times of India",
      date: "March 14, 2026",
      readTime: "3 min read",
      image: gseaThumb,
      link: "https://timesofindia.indiatimes.com/education/student-startup-bharatwork-wins-gsea-hyderabad-chapter-finals/articleshow/108502391.cms",
      icon: <FaAward className="text-xl text-action" />,
    },
    {
      id: 2,
      title: "BharatWork Secures First Place in TiE U Startup Competition",
      excerpt: "Demonstrating exceptional social impact and technological innovation, BharatWork wins the TiE U (The Indus Entrepreneurs) regional finals in Uttar Pradesh, highlighting its commitment to India's daily wage workers.",
      category: "Milestones",
      publisher: "The Edu Express",
      date: "December 18, 2025",
      readTime: "2 min read",
      image: tieThumb,
      link: "https://theeduexpress.com",
      icon: <FaNewspaper className="text-xl text-action" />,
    }
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BharatWork Blog & News",
    "url": "https://thebharatwork.com/blog",
    "description": "Read the latest press releases, startup wins, and updates from the BharatWork team.",
    "blogPost": actualBlogs.map((blog) => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "publisher": {
        "@type": "Organization",
        "name": blog.publisher
      }
    }))
  };

  return (
    <div className="min-h-screen bg-screen text-text-primary font-sans overflow-x-hidden pt-20 flex flex-col justify-between relative">
      <SEO 
        title="Blog & News | BharatWork"
        description="Stay updated with BharatWork's latest developments, press coverage, milestones, and impact stories from the ground."
        schemaMarkup={blogSchema}
      />
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-action/5 via-orange-400/5 to-transparent rounded-full filter blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-gradient-end/5 via-amber-400/5 to-transparent rounded-full filter blur-[100px] pointer-events-none -z-10"></div>

      <main className="grow py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header Section */}
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-action/10 border border-action/20 text-action font-extrabold text-xs uppercase tracking-widest"
            >
              <FaNewspaper className="text-xs" />
              Latest News & Press Releases
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary leading-tight"
            >
              Our Journey & <span className="gradient-primary">Updates</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              Follow BharatWork's achievements, media features, and community updates as we build India's most inclusive labour marketplace.
            </motion.p>
          </div>

          {/* Grid Layout of Real Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {actualBlogs.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border-medium/60 rounded-[2rem] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg relative group"
              >
                <div>
                  {/* Category and Image */}
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-border-light text-text-primary text-xs font-extrabold shadow-sm">
                        {post.icon}
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-text-tertiary">
                      <span className="flex items-center gap-1.5">
                        <FaCalendar className="text-action text-[11px]" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-action text-[11px]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-text-primary leading-snug group-hover:text-action transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Action Link */}
                <div className="p-8 pt-0 border-t border-border-light mt-auto flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-text-tertiary">
                    Published on <span className="text-text-primary">{post.publisher}</span>
                  </span>
                  
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-action/10 hover:bg-action text-action hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    Read Article
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
