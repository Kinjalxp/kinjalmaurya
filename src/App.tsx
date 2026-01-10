import React, { useState } from "react";
import {
  User,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import pic from "./assets/kinjalcropped.png";
import logo from "./assets/AIpractitionerLogo.png";

// Type definitions
type TabType = "about" | "blog";

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

interface EducationItem {
  id: number;
  level: string;
  institution: string;
  degree: string;
  period: string;
  status: "completed" | "in-progress";
  description: string;
}

interface VolunteeringItem {
  id: number;
  name: string;
  description: string;
  period: string;
  duration: string;
}

function App() {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  const education: EducationItem[] = [
    {
      id: 1,
      level: "High School",
      institution: "John P.  Stevens High School",
      degree: "High School Diploma",
      period: "Sep 2021 - Jun 2025",
      status: "completed",
      description: "Graduated with honors. Focused on Science and Mathematics.",
    },
    {
      id: 2,
      level: "Undergraduate",
      institution: "Rutgers State University",
      degree: "Bachelor of Science in Computer Science",
      period: "Sep 2025 - May 2029",
      status: "in-progress",
      description:
        "Currently pursuing a degree in Computer Science. GPA: 3.7/4.0",
    },
  ];

  const volunteering: VolunteeringItem[] = [
    {
      id: 1,
      name: "Greenhouse Internship Program",
      description:
        "Learned about growing vegetables and how to properly take care of them at John P.  Stevens High School.",
      period: "Aug 2021 ",
      duration: "6 hours",
    },
    {
      id: 2,
      name: "Kumon Math and Reading Center",
      description:
        "Facilitated students in their learning at the South Plainfield, NJ, branch.",
      period: "Oct 2022 - Dec 2023",
      duration: "88.75 hours",
    },
    {
      id: 3,
      name: "Ideal Beach Cleanup",
      description: "Helped clean up the Ideal Beach in Middletown Township, NJ",
      period: "Aug 2024",
      duration: "30 hours",
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      excerpt:
        "Exploring the latest patterns and best practices in React development...",
      date: "Jan 5, 2026",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Future of AI in Web Development",
      excerpt:
        "How artificial intelligence is transforming the way we build websites...",
      date: "Dec 28, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Mastering Responsive Design in 2026",
      excerpt:
        "Advanced techniques for creating fluid, mobile-first experiences...",
      date: "Dec 15, 2025",
      readTime: "6 min read",
    },
  ];

  const skills: string[] = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AI/ML",
    "Tailwind CSS",
    "Next.js",
    "MongoDB",
  ];

  const socialLinks: SocialLink[] = [
    { href: "#", icon: <Github size={24} />, label: "GitHub" },
    { href: "#", icon: <Linkedin size={24} />, label: "LinkedIn" },
    { href: "#", icon: <Twitter size={24} />, label: "Twitter" },
    { href: "#", icon: <Mail size={24} />, label: "Email" },
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
            <div className="flex items-center justify-end">
              {/* Navigation */}
              <nav className="flex gap-2">
                <button
                  onClick={() => handleTabChange("about")}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === "about"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-black"
                  }`}
                  aria-label="About Me"
                >
                  <User size={18} />
                  <span className="hidden sm:inline">About Me</span>
                </button>
                <button
                  onClick={() => handleTabChange("blog")}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeTab === "blog"
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-black"
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
          {activeTab === "about" && (
            <>
              <div className="animate-fadeIn">
                {/* Hero Section */}
                <div className="bg-stone-50 rounded-2xl p-8 md:p-12 mb-8 border border-gray-200 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
                      <img
                        src={pic}
                        alt="styled"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                        Hi, I'm{" "}
                        <span className="text-black">Kinjal Maurya</span>
                      </h2>
                      <p className="text-xl text-black mb-6">
                        CS Undergraduate • AI Enthusiast • Tech Writer
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
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      About Me
                    </h3>
                    <p className="text-black leading-relaxed mb-4">
                      I am an undergraduate Computer Science student at Rutgers
                      State University with a strong interest in technology,
                      problem-solving, and continuous learning. My interest in
                      computing began at a young age and has developed through
                      both academic study and hands-on exploration. I am
                      currently pursuing the AWS Cloud Practitioner
                      certification to strengthen my understanding of cloud
                      technologies and scalable systems. Outside of technology,
                      I enjoy reading in my free time, which helps me maintain
                      perspective and encourages thoughtful thinking.
                    </p>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Skills
                    </h3>
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
                {/* Education */}
                <div className=" rounded-2xl p-8 border border-gray-200 mb-8">
                  <div>
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        Education
                      </h3>
                      <p className="text-lg text-black">
                        My academic journey and achievements
                      </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      {/* Vertical Line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                      {/* Education Items */}
                      <div className="space-y-8">
                        {education.map((item, index) => (
                          <div key={item.id} className="relative flex gap-8">
                            {/* Timeline Dot */}
                            <div className="relative flex-shrink-0">
                              <div
                                className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center z-10 ${
                                  item.status === "completed"
                                    ? "bg-black"
                                    : "bg-white border-gray-300"
                                }`}
                              >
                                {item.status === "completed" ? (
                                  <GraduationCap
                                    className="text-white"
                                    size={24}
                                  />
                                ) : (
                                  <BookOpen
                                    className="text-gray-400"
                                    size={24}
                                  />
                                )}
                              </div>
                            </div>

                            {/* Card */}
                            <div
                              className={`flex-1 ${
                                index === 0 ? "bg-stone-50" : "bg-gray-100"
                              } rounded-2xl p-8 border border-gray-200 shadow-lg -mt-2`}
                            >
                              {/* Status Badge */}
                              <div className="mb-4">
                                <span
                                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                                    item.status === "completed"
                                      ? "bg-black text-white"
                                      : "bg-white border border-gray-300 text-black"
                                  }`}
                                >
                                  {item.status === "completed"
                                    ? "Completed"
                                    : "In Progress"}
                                </span>
                              </div>

                              {/* Content */}
                              <h3 className="text-2xl font-bold mb-2 text-black">
                                {item.level}
                              </h3>
                              <h4 className="text-xl font-semibold mb-2 text-black">
                                {item.institution}
                              </h4>
                              <p className="text-lg mb-2 text-black">
                                {item.degree}
                              </p>
                              <p className="text-sm mb-4 text-gray-600">
                                {item.period}
                              </p>
                              <p className="text-black leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-12 grid md:grid-cols-1 gap-6">
                  <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Key Achievements
                    </h3>
                    <div className="border-none border-gray-600 flex flex-row items-center gap-8">
                      <div className="border-none border-gray-300">
                        <img
                          src={logo}
                          alt="styled"
                          className="w-[150px] h-[150px]"
                        />
                      </div>
                      <div className="border-none border-gray-400">
                        <ul className="space-y-2 text-black">
                          <div>
                            <h2 className="mb-4">
                              AWS AI Practitioner Certification
                            </h2>
                            <h3 className="text-sm mb-4 text-gray-500">
                              Jul 2025
                            </h3>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Volunteering */}

                  <div className=" rounded-2xl p-8 border border-gray-200 mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-black">
                      Volunteering
                    </h3>
                    <div className="space-y-5">
                      {volunteering.map((item, index) => (
                        <div key={item.id} className="relative flex gap-2">
                          {/* Card */}
                          <div
                            className={`flex-1 ${
                              index === 0 ? "bg-stone-50" : "bg-gray-100"
                            } rounded-2xl p-8 border border-gray-100 shadow-lg -mt-2`}
                          >
                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-1 text-black">
                              {item.name}
                            </h3>
                            <h4 className="text-md  mb-1 text-black">
                              {item.description}
                            </h4>
                            <p className="text-sm  text-black">
                              <span>{item.period} </span>
                              <span className="text-sm mb-1 text-gray-500">
                                • {item.duration}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "blog" && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-black">
                  Latest Articles
                </h2>
                <p className="text-black text-lg">
                  Thoughts on technology, development, and innovation
                </p>
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

        {/* Floating Chat Button (Future Integration Point) */}
        <button
          className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-50"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </>
  );
}

export default App;
