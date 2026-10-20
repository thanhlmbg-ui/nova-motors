import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Upload } from 'lucide-react';
import { JOB_OPENINGS } from '../data/careers';
import { JobOpening } from '../types';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');

  useEffect(() => {
    document.title = 'Cơ Hội Nghề Nghiệp | NOVA MOTORS Vietnam';
    window.scrollTo(0, 0);
  }, []);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !candidatePhone) {
      alert('Vui lòng điền đầy đủ thông tin cá nhân.');
      return;
    }

    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setCandidateName('');
      setCandidateEmail('');
      setCandidatePhone('');
    }, 3000);
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-nova-dark">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-black transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-medium">Tuyển dụng</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-neutral-200">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-500 block mb-2">
          Gia nhập đội ngũ kiến tạo
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-light text-nova-dark tracking-tight">
          Cơ Hội Nghề Nghiệp Tại NOVA MOTORS
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-3xl mt-3 leading-relaxed">
          Chúng tôi tìm kiếm những cá nhân tài năng, đam mê sự hoàn mỹ và khao khát đồng hành cùng thương hiệu ô tô hạng sang tiên phong tại Việt Nam.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 space-y-16">
        {/* Culture & Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
            <h4 className="font-display font-medium text-black">Môi Trường Chuẩn 5 Sao</h4>
            <p className="text-xs text-neutral-500 font-light">
              Làm việc tại các tòa nhà Flagship Lounge đẳng cấp quốc tế với trang thiết bị tối tân.
            </p>
          </div>
          <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
            <h4 className="font-display font-medium text-black">Đào Tạo Quốc Tế</h4>
            <p className="text-xs text-neutral-500 font-light">
              Cơ hội tu nghiệp tại các trung tâm thiết kế và xưởng kỹ thuật ô tô công nghệ cao.
            </p>
          </div>
          <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
            <h4 className="font-display font-medium text-black">Đặc Quyền Sở Hữu Xe</h4>
            <p className="text-xs text-neutral-500 font-light">
              Chính sách ưu đãi đặc biệt cho nhân sự khi sở hữu các dòng xe NOVA X5, S7 và E9.
            </p>
          </div>
          <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-2">
            <h4 className="font-display font-medium text-black">Bảo Hiểm VIP Toàn Diện</h4>
            <p className="text-xs text-neutral-500 font-light">
              Gói bảo hiểm sức khỏe quốc tế cao cấp dành cho nhân viên và người thân trong gia đình.
            </p>
          </div>
        </div>

        {/* Job Openings List */}
        <div>
          <h2 className="text-2xl font-display font-light text-black mb-6">
            Các Vị Trí Đang Tuyển Dụng ({JOB_OPENINGS.length})
          </h2>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-8 bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500">
                    <span className="bg-white border px-2.5 py-0.5 text-black font-medium">{job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-nova-burgundy" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Hạn nộp: {job.deadline}</span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-black">
                    {job.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-light max-w-3xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-6 py-3 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>Xem & Ứng tuyển</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-300 relative shadow-2xl p-8 sm:p-10">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            {appliedSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-display font-light text-black">
                  Hồ Sơ Đã Được Gửi Thành Công!
                </h3>
                <p className="text-xs text-neutral-600 font-light max-w-md mx-auto">
                  Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại NOVA MOTORS. Bộ phận Nhân sự sẽ liên hệ phỏng vấn trong vòng 5 ngày làm việc nếu hồ sơ phù hợp.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Ứng tuyển vị trí
                </span>
                <h3 className="text-2xl font-display font-medium text-black mt-1 mb-2">
                  {selectedJob.title}
                </h3>
                <p className="text-xs text-neutral-500 font-mono mb-6 pb-4 border-b border-neutral-200">
                  {selectedJob.department} &bull; {selectedJob.location}
                </p>

                <div className="mb-6 space-y-2 text-xs">
                  <h4 className="font-semibold text-black uppercase font-mono tracking-wider">
                    Yêu cầu ứng viên:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600 font-light">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4 pt-4 border-t border-neutral-200 text-xs">
                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full border border-neutral-300 p-2.5 focus:outline-none focus:border-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        required
                        placeholder="email@example.com"
                        className="w-full border border-neutral-300 p-2.5 focus:outline-none focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block mb-1">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        value={candidatePhone}
                        onChange={(e) => setCandidatePhone(e.target.value)}
                        required
                        placeholder="0912 345 678"
                        className="w-full border border-neutral-300 p-2.5 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="p-4 border border-dashed border-neutral-300 text-center text-xs text-neutral-500 cursor-pointer hover:bg-neutral-50 transition-colors">
                    <Upload className="w-5 h-5 mx-auto mb-1 text-neutral-400" />
                    <span>Tải lên CV (Định dạng PDF, tối đa 5MB)</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-nova-dark text-white text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Nộp hồ sơ ứng tuyển
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

