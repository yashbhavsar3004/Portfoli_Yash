import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Layers, Award, Briefcase, Send, Download, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
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
  };

  const skills = {
  frontend: ['Angular 6+', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  backend: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate/JPA', 'Node.js', 'REST APIs'],
  databases: ['MySQL', 'MongoDB', 'SQL', 'SQLite'],
  cloud: ['AWS EC2', 'AWS S3', 'AWS Lambda', "Gradle", 'Git', 'Maven']
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
      'CI/CD enabled cloud deployments'
    ]
  },
  {
    title: 'Reflector IoT Platform',
    problem:
      'Centralized web platform used to manage, monitor, and control IoT Edge Hub and Shadow Hub devices for multiple tenants in industrial environments.',
    tech: ['NodeJs', 'REST APIs', 'MQTT', 'Angular'],
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
    tech: ['Linux', 'Node.js', 'MQTT', 'Grafana', 'SQLite', 'Vue.JS'],
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
      achievements: [
        'Delivered end-to-end features using Spring Boot, Angular, and AWS in Agile sprints',
        'Architected and deployed Insurance CRM serving enterprise clients',
        'Engineered IoT middleware platform ensuring 99.9% uptime',
        'Built performance-optimized Angular components with REST integration'
      ]
    },
    {
      role: 'Web Application Developer Intern',
      company: 'Vshoppie Online Services Pvt. Ltd.',
      location: 'Pune, India',
      period: 'Jan 2022 – Jun 2022',
      achievements: [
        'Developed full-stack applications using Vue.js and Node.js',
        'Integrated REST and MQTT APIs for IoT device control',
        'Improved system performance across 500+ active devices',
        'Implemented MVC architecture and reusable UI components'
      ]
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            YB
          </div>
          <div className="hidden md:flex gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
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
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Java Full Stack Developer
</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Yash Bhavsar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
           Angular • Spring Boot • REST APIs • AWS
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Innovative and result-oriented Java Full Stack Developer with 3+ years of experience building enterprise-grade web applications, RESTful APIs, and scalable backend systems using Spring Boot, Angular, and AWS.
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
            ].map((category, idx) => (
              <div
                key={category.title}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/10"
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
                      className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
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
            {projects.map((project, idx) => (
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
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
            
            {experience.map((exp, idx) => (
              <div key={idx} className={`relative mb-16 ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:pr-12' : 'md:pr-12'}`}>
                  {/* Timeline dot */}
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

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href="mailto:yashbhavsar0000@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      yashbhavsar0000@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a href="tel:+917218037403" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +91 7218037403
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
                    <a href="https://linkedin.com/in/yash-bhavsar-2b89371a9" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-gray-300">Pune, India</div>
                  </div>
                </div>
              </div>
            </div>
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
                Full Stack Developer • Building Enterprise Solutions
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:yashbhavsar0000@gmail.com"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yash-bhavsar-2b89371a9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
              >
                <Github size={20} />
              </a>
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