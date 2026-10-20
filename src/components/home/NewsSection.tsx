import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Calendar } from 'lucide-react';
import { NEWS_ARTICLES } from '../../data/news';

export const NewsSection: React.FC = () => {
  // Take top 3 articles explicitly required by user
  const featuredNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <section className="py-24 bg-neutral-50 text-nova-dark border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500">
              Nhịp đập thương hiệu
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
              Tin tức & Sự kiện
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-neutral-800 hover:text-black border-b border-black pb-1 self-start md:self-auto transition-colors"
          >
            <span>Tất cả bài viết</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {featuredNews.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-nova-dark leading-snug group-hover:text-nova-burgundy transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-nova-dark group-hover:text-nova-burgundy transition-colors pt-3 border-t border-neutral-100 w-full"
                >
                  <span>Đọc thêm</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

