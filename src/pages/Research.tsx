import React from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, Brain, Watch, CheckCircle2 } from 'lucide-react';
import { RESEARCH_AREAS } from '../constants';

const Research = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our lab explores the frontiers of biomedical engineering and artificial intelligence, focusing on creating intelligent systems that enhance human health and communication.
          </p>
        </div>

        <div className="space-y-24">
          {RESEARCH_AREAS.map((area, i) => {
            const Icon = area.icon === 'Activity' ? Activity : area.icon === 'Cpu' ? Cpu : area.icon === 'Brain' ? Brain : Watch;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{area.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {area.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                    <img
                      src={`https://picsum.photos/seed/${area.id}/800/450`}
                      alt={area.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Research;
