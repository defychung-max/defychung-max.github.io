import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { LAB_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-12">
              Have questions about our research or interested in joining the lab? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Our Location</h3>
                  <p className="text-gray-600 mt-1">{LAB_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <a href={`mailto:${LAB_INFO.email}`} className="text-blue-600 hover:underline mt-1 block">{LAB_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600 mt-1">{LAB_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Lab Hours</h3>
                  <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video rounded-3xl bg-gray-100 border border-gray-200 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col">
                <MapPin className="w-12 h-12 mb-2 opacity-20" />
                <span className="text-sm font-medium">Interactive Map Coming Soon</span>
              </div>
              <img 
                src="https://picsum.photos/seed/hanyang-map/800/450?grayscale" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-blue-50"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all">
                  <option>Research Inquiry</option>
                  <option>Admission / Joining the Lab</option>
                  <option>Collaboration</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
