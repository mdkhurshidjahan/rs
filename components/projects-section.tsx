"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Play, Award, Code, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Earthquake Detection ML System",
    description: "Advanced machine learning approach for real-time seismic event detection using deep neural networks. Finalist project at Genius Olympiad 2024.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    category: "Machine Learning",
    status: "Genius Olympiad Finalist",
    image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["98.5% accuracy", "Real-time processing", "Multi-sensor integration"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "UntieAI Research Platform",
    description: "Comprehensive research management platform for AI labs with collaboration tools, paper tracking, and automated citation management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API"],
    category: "Web Application",
    status: "In Production",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Multi-lab support", "Automated workflows", "AI-powered insights"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    title: "Adaptive Learning AI Tutor",
    description: "Intelligent tutoring system that adapts to individual learning styles using reinforcement learning and natural language processing.",
    tech: ["Python", "PyTorch", "Transformers", "FastAPI"],
    category: "Educational AI",
    status: "Patent Pending",
    image: "https://images.pexels.com/photos/8439087/pexels-photo-8439087.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Personalized learning", "95% retention rate", "Multi-modal content"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Materials Discovery Engine",
    description: "AI-powered platform for discovering new materials with specific properties using graph neural networks and quantum simulations.",
    tech: ["Python", "PyTorch Geometric", "Quantum ESPRESSO", "Django"],
    category: "Materials Science",
    status: "Research Phase",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["10x faster discovery", "Quantum simulations", "Property prediction"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Explainable AI Framework",
    description: "Open-source framework for building interpretable machine learning models with visual explanations and uncertainty quantification.",
    tech: ["Python", "SHAP", "LIME", "Streamlit"],
    category: "AI Framework",
    status: "Open Source",
    image: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Model agnostic", "Interactive explanations", "1000+ stars"],
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Neural Architecture Search",
    description: "Automated neural architecture search system that discovers optimal network designs for specific tasks using evolutionary algorithms.",
    tech: ["Python", "JAX", "Optuna", "MLflow"],
    category: "AutoML",
    status: "In Development",
    image: "https://images.pexels.com/photos/8439092/pexels-photo-8439092.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    highlights: ["Automated optimization", "Multi-objective search", "GPU acceleration"],
    gradient: "from-green-500 to-blue-500"
  }
];

export function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Projects & <span className="gradient-text">Innovations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of cutting-edge projects that demonstrate practical applications of 
            AI research in solving real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="glass-card rounded-2xl overflow-hidden group relative"
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status.includes('Finalist') || project.status.includes('Production') 
                    ? 'bg-green-500/20 text-green-300' :
                  project.status.includes('Pending') || project.status.includes('Development')
                    ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="backdrop-blur-sm"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1 group/btn"
                  >
                    <Github className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex-1 bg-gradient-to-r from-primary to-accent text-white group/btn"
                  >
                    <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}