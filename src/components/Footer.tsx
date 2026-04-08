import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { LAB_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">{LAB_INFO.name}</h3>
            <p className="text-sm leading-relaxed opacity-80">
              {LAB_INFO.fullName}<br />
              {LAB_INFO.university}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{LAB_INFO.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`mailto:${LAB_INFO.email}`} className="hover:text-white transition-colors">{LAB_INFO.email}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{LAB_INFO.phone}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.hanyang.ac.kr" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1"><span>Hanyang University</span> <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-white">Department of Biomedical Engineering</a></li>
              <li><a href="#" className="hover:text-white">Admissions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} {LAB_INFO.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
