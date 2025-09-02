"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Medal, Star, Calendar, MapPin, Users } from 'lucide-react';

const awards = [
  {
    id: 1,
    year: "2023",
    title: "Honorary Doctor of Science",
    organization: "QAHE & AUBSS",
    description: "Youngest ever recipient at age 15, recognizing exceptional contributions to artificial intelligence research and academic excellence.",
    icon: Award,
    level: "Highest Honor",
    location: "International",
    gradient: "from-yellow-400 to-orange-500",
    details: ["Youngest recipient in history", "Global recognition", "Lifetime achievement"]
  },
  {
    id: 2,
    year: "2024",
    title: "Doctor of Excellence in Mathematical Sciences",
    organization: "EAHEA",
    description: "Recognition for outstanding contributions to mathematical modeling and computational sciences in AI applications.",
    icon: Trophy,
    level: "Excellence Award",
    location: "International",
    gradient: "from-blue-400 to-cyan-500",
    details: ["Mathematical excellence", "Computational innovation", "Research impact"]
  },
  {
    id: 3,
    year: "2024",
    title: "Honorary Fellowship in Information Technology",
    organization: "IAMA",
    description: "Fellowship recognizing leadership in AI research and contributions to advancing information technology.",
    icon: Medal,
    level: "Fellowship",
    location: "International",
    gradient: "from-purple-400 to-pink-500",
    details: ["Leadership recognition", "IT advancement", "Research excellence"]
  },
  {
    id: 4,
    year: "2024",
    title: "Genius Olympiad Finalist",
    organization: "International Competition",
    description: "Finalist in Science category for machine learning earthquake detection project, competing among global talents.",
    icon: Star,
    level: "Competition",
    location: "Rochester, NY",
    gradient: "from-emerald-400 to-teal-500",
    details: ["Global competition", "Science category", "Innovation showcase"]
  },
  {
    id: 5,
    year: "2023",
    title: "Research Excellence Award",
    organization: "IEEE Computer Society",
    description: "Recognition for outstanding research contributions in artificial intelligence and computer science.",
    icon: Award,
    level: "Research Award",
    location: "IEEE",
    gradient: "from-red-400 to-pink-500",
    details: ["IEEE recognition", "Research impact", "Community contribution"]
  },
  {
    id: 6,
    year: "2023",
    title: "Young Researcher of the Year",
    organization: "AI Research Foundation",
    description: "Annual award recognizing the most promising young researcher in artificial intelligence.",
    icon: Trophy,
    level: "Annual Award",
    location: "International",
    gradient: "from-indigo-400 to-purple-500",
    details: ["Youngest recipient", "AI innovation", "Future potential"]
  }
];

export function AwardsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="awards" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            International recognition for groundbreaking research, academic excellence, 
            and contributions to the advancement of artificial intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30" />

          <div className="space-y-16">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                    className="glass-card p-8 rounded-2xl group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${award.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <award.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                            {award.level}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{award.location}</span>
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                          {award.title}
                        </h3>
                        
                        <p className="text-primary font-medium mb-3">{award.organization}</p>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {award.description}
                        </p>

                        <div className="space-y-2">
                          {award.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="w-16 h-16 rounded-full glass border-4 border-primary/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{award.year}</span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-primary/20 blur-md"
                    />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 glass-card p-8 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">6</div>
              <div className="text-muted-foreground">Major Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15</div>
              <div className="text-muted-foreground">Age at First Doctorate</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-muted-foreground">International Honors</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-muted-foreground">Potential</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}