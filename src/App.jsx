import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Layers, Award, Briefcase, Download, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'experience'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const skills = {
  frontend: ['Angular 6+', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  backend: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate/JPA', 'Node.js', 'REST APIs'],
  databases: ['MySQL', 'MongoDB', 'SQL', 'SQLite'],
  cloud: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Gradle', 'Git', 'Maven']
};


 const projects = [
  {
    title: 'Insurance CRM Application',
    problem:
      'Enterprise Insurance CRM system built to manage customer information, insurance policies, and business workflows using Spring Boot, Angular, and MySQL.',
    tech: ['Spring Boot', 'Angular', 'MySQL', 'AWS'],
    features: [
      'Customer and policy management',
      'Role-based access and secure REST APIs',
      'Angular-based user dashboard',
      'Cloud deployments',
      
    ]
  },
   {
  title: "Mahindra Farm Division (FD) System Enhancement",
  problem:
    "Enterprise system enhancement for Mahindra to introduce a new Farm Division and role-based workflows within an existing internal platform.",
  tech: ["AngularJS", "Enterprise Systems", "Role-Based Access", "REST APIs"],
  features: [
    "Designed and implemented UI changes to support new Farm Division user roles",
    "Worked on registration and OTP-based user verification flow",
    "Implemented dynamic form behavior based on user roles and divisions",
    "Collaborated with backend teams to align UI and data model changes"
  ]
}
,
  {
    title: 'Reflector IoT Platform',
    problem:
      'Centralized web platform used to manage, monitor, and control IoT Edge Hub and Shadow Hub devices for multiple tenants in industrial environments.',
    tech: ['Spring Boot', 'REST APIs', 'MQTT', 'Microservices'],
    features: [
      'Tenant-based device management system',
      'User and role management for device access',
      'Real-time device online/offline status',
      'Secure communication with Edge and Shadow Hub devices'
    ]
  },
 
  {
    title: 'Edge Hub & Shadow Hub Device Platform',
    problem:
      'Linux-based IoT device platform designed to manage industrial network configurations and securely collect, process, and transmit data from PLC systems.',
    tech: ['Linux', 'Node.js', 'MQTT', 'Grafana', 'SQLite'],
    features: [
      'Network configuration UI for LAN, WiFi, Hotspot, and LTE',
      'Data collection and local storage from PLC devices',
      'MQTT-based data publishing to cloud systems',
      'Real-time monitoring and analytics using Grafana'
    ]
  }
];


  const experience = [
    {
      role: 'Java Full Stack Developer',
      company: 'Vshoppie Online Services Pvt. Ltd.',
      location: 'Pune, India',
      period: 'Apr 2023 – Present',
    achievements:  [
 "Worked on an enterprise client project for Mahindra to introduce a new Farm Division (FD) into their internal system",
"Designed UI workflows and data mapping for new roles and divisions",
"Built AngularJS screens for registration, login, and role-based UI behavior",
"Participated in on-site client meetings to discuss requirements, progress, and delivery",
"Coordinated with team members to track tasks and ensure timely implementation"

]

    },
    {
      role: 'Web Application Developer Intern',
      company: 'Vshoppie Online Services Pvt. Ltd.',
      location: 'Pune, India',
      period: 'Jan 2022 – Jun 2022',
     achievements: [
 'Developed full-stack applications using Vue.js, Node.js, and SQLite',
 'Integrated REST and MQTT APIs for IoT device communication',
 'Implemented MVC architecture and reusable UI components',
 'Improved performance and reliability for 50+ active devices'
]

    }
  ];

  // Parallax calculation
  const parallaxY = scrollY * 0.5;
  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans overflow-x-hidden">
      {/* Animated Background with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ transform: `translateY(${parallaxY}px)` }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ transform: `translateY(${-parallaxY * 0.8}px)` }}
        />
        <div 
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
        />

        {/* Floating Robot/Tech Icons */}
        <div 
          className="absolute top-1/4 right-10 text-blue-400 opacity-20"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
            fontSize: '120px'
          }}
        >
          🤖
        </div>
        
        <div 
          className="absolute top-2/3 left-10 text-purple-400 opacity-20"
          style={{ 
            transform: `translateY(${-scrollY * 0.25}px) rotate(${-scrollY * 0.08}deg)`,
            fontSize: '100px'
          }}
        >
          🚀
        </div>

        <div 
          className="absolute top-1/2 right-1/3 text-cyan-400 opacity-15"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`,
            fontSize: '90px'
          }}
        >
          💻
        </div>

        <div 
          className="absolute bottom-1/4 left-1/4 text-green-400 opacity-20"
          style={{ 
            transform: `translateY(${-scrollY * 0.15}px) rotate(${-scrollY * 0.06}deg)`,
            fontSize: '80px'
          }}
        >
          ⚡
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            YB
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="flex flex-col p-4 gap-4">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-400 hover:text-blue-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center z-10" style={{ opacity }}>
          <div className="mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Java Full Stack Developer</span>
          </div>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fadeIn" 
            style={{ 
              animationDelay: '0.4s', 
              animationFillMode: 'forwards',
              transform: `translateY(${-scrollY * 0.1}px)`
            }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Yash Bhavsar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Angular • Spring Boot • REST APIs • AWS

          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Innovative Java Full Stack Developer with 3+ years of experience designing enterprise-grade web applications, RESTful APIs, and scalable cloud solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              View Projects
            </button>
            <a
  href="/resume.pdf"
  download
  className="px-8 py-4 border border-gray-700 rounded-lg font-medium hover:border-blue-500 hover:bg-blue-500/10 transition-all flex items-center gap-2"
>
  <Download size={18} />
  Download Resume
</a>

          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-blue-400 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <Briefcase size={20} className="text-blue-400" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="text-blue-400" />
                <span>Pune, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Award size={20} className="text-blue-400" />
                <span>B.E. Electronics & Telecom (8.1 CGPA)</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a Java Full Stack Developer with over three years of experience in building enterprise web applications and backend services. I specialize in developing scalable systems using Java, Spring Boot, Angular, and RESTful APIs while following Agile development practices.
</p>
            <p className="text-gray-400 leading-relaxed mb-6">
             I have worked extensively on large-scale applications such as Insurance CRM platforms and IoT-based middleware systems, where I was responsible for designing APIs, building frontend interfaces, and deploying services on AWS including S3 and Lambda.
</p>
            <p className="text-gray-400 leading-relaxed">
             I strongly believe in clean code, design patterns, and building reliable software that solves real business problems. I enjoy working across the full stack — from database design and API development to building responsive user interfaces.
 </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Frontend', icon: Code, skills: skills.frontend, color: 'from-blue-500 to-cyan-500' },
              { title: 'Backend', icon: Layers, skills: skills.backend, color: 'from-purple-500 to-pink-500' },
              { title: 'Databases', icon: Database, skills: skills.databases, color: 'from-green-500 to-emerald-500' },
              { title: 'DevOps & Cloud', icon: Cloud, skills: skills.cloud, color: 'from-orange-500 to-red-500' }
            ].map((category) => (
              <div
                key={category.title}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.problem}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    Live Demo
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-400 hover:border-gray-600 transition-all flex items-center justify-center gap-2">
                    <Github size={14} />
                    GitHub
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
            
            {experience.map((exp, idx) => (
              <div key={idx} className={`relative mb-16 ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:pr-12' : 'md:pr-12'}`}>
                  <div className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black transform -translate-x-1.5 md:-translate-x-2 shadow-lg shadow-blue-500/50`} />
                  
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all ml-8 md:ml-0">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="text-blue-400 font-medium">{exp.company}</div>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-3">
                          <span className="text-blue-400 mt-1.5 text-xs">▹</span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:Yashbhavsar0000@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <Mail className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-xs text-gray-500">Email</div>
                <div className="text-gray-300">Yashbhavsar0000@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/yash-bhavsar-2b89371a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <Linkedin className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-xs text-gray-500">LinkedIn</div>
                <div className="text-gray-300">Connect with me</div>
              </div>
            </a>

            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <Github className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-xs text-gray-500">GitHub</div>
                <div className="text-gray-300">View my code</div>
              </div>
            </a> */}

            <a
              href="tel:+917218037403"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <Phone className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="text-xs text-gray-500">Phone</div>
                <div className="text-gray-300">+91 7218037403</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Yash Bhavsar
              </div>
              <div className="text-gray-500 text-sm">
               Java Full Stack Developer • Building Enterprise Solutions
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:Yashbhavsar0000@gmail.com"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-bhavsar-2b89371a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              >
                <Github size={20} />
              </a> */}
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm mt-8">
            © 2026 Yash Bhavsar. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;