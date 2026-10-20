import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, ArrowRight, X, Clock, User, Share2 } from 'lucide-react';
import { NEWS_ARTICLES } from '../data/news';
import { NewsArticle } from '../types';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    document.title = 'Tin Tức & Sự Kiện Độc Quyền | NOVA MOTORS';
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Tất cả', 'Sản phẩm mới', 'Công nghệ', 'Sự kiện', 'Bền vững', 'Trải nghiệm'];

  const filteredNews = selectedCategory === 'Tất cả'
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.filter(a => a.category === selectedCategory);

  const featured = NEWS_ARTICLES[0];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Tin tức & Sự kiện</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-neutral-200">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
          Thông cáo báo chí & Sự kiện
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
          Tin Tức & Nhịp Đập Thương Hiệu
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-3xl mt-3 leading-relaxed">
          Cập nhật những chuyển động mới nhất về công nghệ ô tô, sự kiện trải nghiệm khách hàng và chiến lược phát triển bền vững của NOVA MOTORS tại Việt Nam.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        {/* Featured Story */}
        {selectedCategory === 'Tất cả' && featured && (
          <div
            onClick={() => setReadingArticle(featured)}
            className="mb-16 bg-neutral-900 text-white border border-neutral-800 cursor-pointer group grid grid-cols-1 lg:grid-cols-12 overflow-hidden hover:border-neutral-600 transition-all shadow-xl"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-neutral-950">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-nova-burgundy text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1">
                Tiêu điểm
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-neutral-400 text-xs font-mono mb-4">
                  <span>{featured.category}</span>
                  <span>&bull;</span>
                  <span>{featured.date}</span>
                  <span>&bull;</span>
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-light leading-snug group-hover:text-nova-silver transition-colors mb-4">
                  {featured.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-300 group-hover:text-white">
                <span>Đọc bài viết chi tiết</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        )}

        {/* Filter categories tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-neutral-200">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono whitespace-nowrap transition-colors ${
                selectedCategory === c
                  ? 'bg-nova-dark text-white font-medium'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <article
              key={article.id}
              onClick={() => setReadingArticle(article)}
              className="bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col justify-between cursor-pointer group hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-neutral-400 text-[11px] font-mono mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-black group-hover:text-nova-burgundy transition-colors mb-3 leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-nova-dark group-hover:text-nova-burgundy">
                  <span>Xem đầy đủ</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setReadingArticle(null)}
              className="sticky top-4 right-4 ml-auto p-2 bg-nova-dark text-white hover:bg-neutral-800 transition-colors z-20 flex items-center justify-center float-right"
              aria-label="Đóng bài viết"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-12">
              <span className="text-[10px] font-mono uppercase tracking-widest text-nova-burgundy font-semibold">
                {readingArticle.category}
              </span>

              <h2 className="text-2xl sm:text-4xl font-display font-light text-black mt-2 mb-4 leading-tight">
                {readingArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono pb-6 border-b border-neutral-200 mb-8">
                <span>{readingArticle.date}</span>
                <span>&bull;</span>
                <span>{readingArticle.author}</span>
                <span>&bull;</span>
                <span>{readingArticle.readTime}</span>
              </div>

              <div className="aspect-[16/9] overflow-hidden bg-neutral-900 mb-8">
                <img src={readingArticle.coverImage} alt={readingArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-5 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
                {readingArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 bg-nova-dark text-white text-xs uppercase tracking-widest"
                >
                  Đóng bài viết
                </button>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <Share2 className="w-4 h-4" />
                  <span>Chia sẻ bài viết</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

