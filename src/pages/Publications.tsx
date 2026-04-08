import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, Search, Filter } from 'lucide-react';
import { PUBLICATIONS } from '../constants';
import { cn } from '../lib/utils';

const Publications = () => {
  const [filter, setFilter] = useState<'All' | 'Journal' | 'Conference'>('All');
  const [search, setSearch] = useState('');

  const filteredPubs = PUBLICATIONS.filter(pub => {
    const matchesFilter = filter === 'All' || pub.type === filter;
    const matchesSearch = pub.title.toLowerCase().includes(search.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              A comprehensive list of our research contributions to journals and international conferences.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search papers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full sm:w-64"
              />
            </div>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              {(['All', 'Journal', 'Conference'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={cn(
                    "px-4 py-1.5 rounded-lg text-xs font-bold transition-all",
                    filter === t ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredPubs.length > 0 ? (
            filteredPubs.map((pub, i) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                        pub.type === 'Journal' ? "bg-green-50 text-green-700" : "bg-purple-50 text-purple-700"
                      )}>
                        {pub.type}
                      </span>
                      <span className="text-xs font-bold text-gray-400">{pub.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1 font-medium">{pub.authors}</p>
                    <p className="text-sm text-gray-500 italic">{pub.venue}</p>
                  </div>
                  <a
                    href={pub.link || "#"}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-24 text-center">
              <p className="text-gray-500">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
