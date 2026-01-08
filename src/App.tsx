import React, { useState } from 'react';
import { User, BookOpen, Mail, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

// Type definitions
type TabType = 'about' | 'blog';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}


function App() {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt: "Exploring the latest patterns and best practices in React development...",
      date: "Jan 5, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt: "How artificial intelligence is transforming the way we build websites...",
      date: "Dec 28, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Mastering Responsive Design in 2026",
      excerpt: "Advanced techniques for creating fluid, mobile-first experiences...",
      date: "Dec 15, 2025",
      readTime: "6 min read"
    }
  ];

  const skills: string[] = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'AI/ML',
    'Tailwind CSS',
    'Next.js',
    'MongoDB'
  ];

  const socialLinks: SocialLink[] = [
    { href: "#", icon: <Github size={24} />, label: "GitHub" },
    { href: "#", icon: <Linkedin size={24} />, label: "LinkedIn" },
    { href: "#", icon: <Twitter size={24} />, label: "Twitter" },
    { href: "#", icon: <Mail size={24} />, label: "Email" }
  ];

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  return (
    <>
     <div className="min-h-screen bg-white text-black">
{/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">
              Kinjal Maurya
            </h1>
            
            {/* Navigation */}
            <nav className="flex gap-2">
              <button
                onClick={() => handleTabChange('about')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'about'
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-black'
                }`}
                aria-label="About Me"
              >
                <User size={18} />
                <span className="hidden sm:inline">About Me</span>
              </button>
              <button
                onClick={() => handleTabChange('blog')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'blog'
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-black'
                }`}
                aria-label="Blog"
              >
                <BookOpen size={18} />
                <span className="hidden sm:inline">Blog</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-stone-50 rounded-2xl p-8 md:p-12 mb-8 border border-gray-200 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-6xl">
                  👋
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                    Hi, I'm <span className="text-black">Your Name</span>
                  </h2>
                  <p className="text-xl text-black mb-6">
                    Full Stack Developer • AI Enthusiast • Tech Writer
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-black">About Me</h3>
                <p className="text-black leading-relaxed mb-4">
                  I'm a passionate developer with expertise in building modern, scalable web applications. 
                  I love exploring new technologies and sharing my knowledge through writing and open-source contributions.
                </p>
                <p className="text-black leading-relaxed">
                  Currently focused on AI integration, responsive design, and creating exceptional user experiences.
                </p>
              </div>
              
              <div className="bg-stone-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-black">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-black hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 text-black">Latest Articles</h2>
              <p className="text-black text-lg">Thoughts on technology, development, and innovation</p>
            </div>
            
            <div className="grid gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-black transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-black">
                        {post.title}
                      </h3>
                      <p className="text-black mb-4">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-black">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </main>
     </div>

    </>
  )
}

export default App
