import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Cpu, Activity, Watch, Users, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LAB_INFO, RESEARCH_AREAS } from '../constants';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Innovating Bio-Intelligence</span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Smart <span className="text-blue-600">Bio-Communication</span> & Machine Learning
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                {LAB_INFO.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/research"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center group"
                >
                  Explore Research
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Join the Lab
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://picsum.photos/seed/lab/800/800"
                  alt="Lab Environment"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium opacity-80 mb-1 tracking-wider uppercase">Current Focus</p>
                  <p className="text-xl font-bold">Neural Decoding for Next-Gen BCI</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Publications', value: '150+', icon: BookOpen },
              { label: 'Researchers', value: '20+', icon: Users },
              { label: 'Patents', value: '15+', icon: Cpu },
              { label: 'Years', value: '10+', icon: Activity },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <stat.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pioneering Research Areas</h2>
            <p className="text-gray-600">We push the boundaries of what's possible at the intersection of biology and computing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESEARCH_AREAS.map((area, i) => {
              const Icon = area.icon === 'Activity' ? Activity : area.icon === 'Cpu' ? Cpu : area.icon === 'Brain' ? Brain : Watch;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <Link to="/research" className="text-blue-600 text-sm font-bold flex items-center hover:underline">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Interested in our research?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            We are always looking for passionate researchers and students to join our team.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all inline-flex items-center"
          >
            Get in Touch <Mail className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
