"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Filter, ExternalLink, Download, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = ['All', 'AI', 'HCI', 'Materials Science', 'Patents'];

const publications = [
  {
    id: 1,
    title: "Deep Learning Approaches for Seismic Event Detection and Classification",
    authors: "M.A. Rusho, J. Smith, K. Johnson",
    journal: "IEEE Transactions on Geoscience and Remote Sensing",
    year: 2024,
    category: "AI",
    doi: "10.1109/TGRS.2024.1234567",
    abstract: "A novel deep learning framework for real-time earthquake detection using convolutional neural networks...",
    tags: ["Deep Learning", "Seismic Analysis", "CNN"],
    citations: 45,
    cover: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Human-AI Collaboration in Educational Technology: A Comprehensive Study",
    authors: "M.A. Rusho, L. Chen, R. Patel",
    journal: "Computers & Education (Elsevier)",
    year: 2024,
    category: "HCI",
    doi: "10.1016/j.compedu.2024.104567",
    abstract: "This study examines the effectiveness of human-AI collaboration in educational settings...",
    tags: ["Human-Computer Interaction", "Education", "AI"],
    citations: 32,
    cover: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Advanced Materials Discovery Using Machine Learning Algorithms",
    authors: "M.A. Rusho, A. Williams, S. Kumar",
    journal: "Nature Materials",
    year: 2023,
    category: "Materials Science",
    doi: "10.1038/s41563-023-01234-5",
    abstract: "We present a machine learning approach for accelerating materials discovery...",
    tags: ["Materials Science", "Machine Learning", "Discovery"],
    citations: 78,
    cover: "https://images.pexels.com/photos/8439087/pexels-photo-8439087.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "Patent: Intelligent Adaptive Learning System with Real-time Feedback",
    authors: "M.A. Rusho, T. Anderson",
    journal: "US Patent Office",
    year: 2024,
    category: "Patents",
    doi: "US11,234,567",
    abstract: "An intelligent system for adaptive learning that provides personalized educational content...",
    tags: ["Patent", "Adaptive Learning", "AI"],
    citations: 12,
    cover: "https://images.pexels.com/photos/8439092/pexels-photo-8439092.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "Explainable AI for Medical Diagnosis: Bridging the Gap Between Accuracy and Interpretability",
    authors: "M.A. Rusho, M. Thompson, D. Lee",
    journal: "Journal of Medical Internet Research",
    year: 2023,
    category: "AI",
    doi: "10.2196/12345",
    abstract: "A comprehensive framework for explainable AI in medical applications...",
    tags: ["Explainable AI", "Medical AI", "Interpretability"],
    citations: 67,
    cover: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "Quantum-Enhanced Machine Learning for Complex Problem Solving",
    authors: "M.A. Rusho, Q. Zhang, F. Brown",
    journal: "Physical Review Applied",
    year: 2023,
    category: "AI",
    doi: "10.1103/PhysRevApplied.19.034567",
    abstract: "Integration of quantum computing principles with machine learning algorithms...",
    tags: ["Quantum Computing", "Machine Learning", "Physics"],
    citations: 23,
    cover: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export function ResearchSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPaper, setSelectedPaper] = useState<typeof publications[0] | null>(null);

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="research" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Research & <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge research spanning artificial intelligence, human-computer interaction, 
            and materials science with publications in top-tier journals.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-6 rounded-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass border-primary/30 focus:border-primary/60"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                        : 'glass border-primary/30 hover:border-primary/60'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedPaper(publication)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={publication.cover}
                    alt={publication.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      publication.category === 'AI' ? 'bg-blue-500/20 text-blue-300' :
                      publication.category === 'HCI' ? 'bg-green-500/20 text-green-300' :
                      publication.category === 'Materials Science' ? 'bg-purple-500/20 text-purple-300' :
                      'bg-orange-500/20 text-orange-300'
                    }`}>
                      {publication.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white/80 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{publication.year}</span>
                      <span>•</span>
                      <span>{publication.citations} citations</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{publication.authors}</p>
                  <p className="text-sm font-medium text-primary mb-4">{publication.journal}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {publication.tags.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{publication.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://doi.org/${publication.doi}`, '_blank');
                      }}
                      className="flex-1 group/btn"
                    >
                      <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform duration-200" />
                      DOI
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Download functionality would be implemented here
                      }}
                      className="group/btn"
                    >
                      <Download className="h-3 w-3 group-hover/btn:scale-110 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">No publications found matching your criteria.</p>
          </motion.div>
        )}
      </div>

      {/* Publication Detail Modal */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPaper(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="glass-card rounded-3xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{selectedPaper.title}</h3>
                  <p className="text-muted-foreground mb-2">{selectedPaper.authors}</p>
                  <p className="text-primary font-medium">{selectedPaper.journal} • {selectedPaper.year}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPaper(null)}
                  className="shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="font-semibold mb-3">Abstract</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{selectedPaper.abstract}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPaper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <img
                    src={selectedPaper.cover}
                    alt={selectedPaper.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  
                  <div className="space-y-3">
                    <div className="text-center p-4 glass rounded-xl">
                      <div className="text-2xl font-bold text-primary">{selectedPaper.citations}</div>
                      <div className="text-sm text-muted-foreground">Citations</div>
                    </div>
                    
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-accent text-white"
                      onClick={() => window.open(`https://doi.org/${selectedPaper.doi}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}