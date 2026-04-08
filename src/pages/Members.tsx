import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { MEMBERS } from '../constants';

const Members = () => {
  const pi = MEMBERS.find(m => m.role === 'Principal Investigator');
  const students = MEMBERS.filter(m => m.role !== 'Principal Investigator');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Lab Members</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Meet the dedicated team of researchers and students driving innovation at SBCML.
          </p>
        </div>

        {/* PI Section */}
        {pi && (
          <section className="mb-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-2 w-6 h-6 text-blue-600" />
              Principal Investigator
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-blue-50 flex flex-col md:flex-row"
            >
              <div className="md:w-1/3 aspect-square md:aspect-auto">
                <img
                  src={pi.image}
                  alt={pi.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{pi.name}</h3>
                <p className="text-blue-600 font-bold mb-6">{pi.role}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {pi.description}
                </p>
                <div className="flex items-center space-x-6">
                  <a href={`mailto:${pi.email}`} className="flex items-center text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">
                    <Mail className="mr-2 w-5 h-5" /> {pi.email}
                  </a>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Students Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Researchers & Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-bold mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                    {member.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Github className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Members;
