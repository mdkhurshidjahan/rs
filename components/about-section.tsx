"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, Lightbulb, Brain, Globe } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: "Honorary Doctor of Science",
    description: "Youngest ever recipient at age 15",
    organization: "QAHE & AUBSS",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: GraduationCap,
    title: "Master's Degrees",
    description: "MS-DS & ME-EM from UC Boulder",
    organization: "University of Colorado",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Research Associate",
    description: "HCI Research at Brain-Station 23",
    organization: "Leading Tech Company",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "UntieAI Research Lab",
    description: "Founder & Head of AI Research",
    organization: "Innovation Center",
    gradient: "from-emerald-400 to-teal-500"
  }
];

const stats = [
  { label: "Research Papers", value: "50+", icon: "📚" },
  { label: "Citations", value: "500+", icon: "📈" },
  { label: "Patents Filed", value: "8", icon: "💡" },
  { label: "International Collaborations", value: "25+", icon: "🌍" }
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Dr. Rusho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A visionary AI researcher breaking conventional boundaries, combining cutting-edge 
            research with practical innovation to shape the future of artificial intelligence.
          </p>
        </motion.div>

        {/* Biography Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold mb-6">Research Pioneer</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Dr. Maher Ali Rusho stands as a remarkable figure in the world of artificial intelligence 
                    and computer science research. At the unprecedented age of 15, he became the youngest 
                    person ever to receive an Honorary Doctor of Science degree, marking the beginning of 
                    an extraordinary academic journey.
                  </p>
                  <p>
                    Currently pursuing dual Master's degrees in Data Science (MS-DS) and Engineering 
                    Management (ME-EM) at the University of Colorado Boulder, Dr. Rusho combines theoretical 
                    expertise with practical innovation. His work as a Research Associate in Human-Computer 
                    Interaction at Brain-Station 23 demonstrates his commitment to bridging academic research 
                    with real-world applications.
                  </p>
                  <p>
                    As the Founder and Head of the Centre for UntieAI Artificial Intelligence Research Lab 
                    (UAIRL), he leads groundbreaking research initiatives that span multiple disciplines, 
                    from machine learning algorithms to materials science applications.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="glass p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{achievement.description}</p>
                  <p className="text-xs text-primary font-medium">{achievement.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}