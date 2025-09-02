"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@maherusho.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Research Papers', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative mt-32 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MR</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dr. Maher Ali Rusho</h3>
                  <p className="text-sm text-muted-foreground">AI Scientist & Researcher</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Pioneering artificial intelligence research and innovation at the intersection of 
                computer science, machine learning, and human-computer interaction.
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <motion.div key={link.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => window.open(link.href, '_blank')}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Research Labs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Research</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <span className="block font-medium text-foreground">UntieAI Research Lab</span>
                  <span className="text-sm">Founder & Head</span>
                </li>
                <li>
                  <span className="block font-medium text-foreground">Brain-Station 23</span>
                  <span className="text-sm">Research Associate</span>
                </li>
                <li>
                  <span className="block font-medium text-foreground">UC Boulder</span>
                  <span className="text-sm">MS-DS, ME-EM</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>© 2025 Dr. Maher Ali Rusho. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>for advancing AI research.</span>
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Youngest Honorary Doctor of Science</span>
            <span className="hidden md:inline">•</span>
            <span>AI Research Pioneer</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}