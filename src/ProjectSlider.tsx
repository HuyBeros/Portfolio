import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

export const ProjectSlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      tabTitle: t('portfolio.project1Tab'),
      title: t('portfolio.project1Title'),
      category: t('portfolio.project1Category'),
      role: t('portfolio.project1Role'),
      timeline: t('portfolio.project1Timeline'),
      desc: t('portfolio.project1Desc'),
      highlights: [
        t('portfolio.project1Feat1'),
        t('portfolio.project1Feat2'),
        t('portfolio.project1Feat3'),
        t('portfolio.project1Feat4'),
      ],
      techStack: [
        'Java 21',
        'Quarkus 3',
        'Hibernate / Panache',
        'PostgreSQL',
        'JWT Auth',
        'VNPay Sandbox',
        'React',
        'Vite',
        'Chart.js',
        'Docker',
        'Render',
      ],
      liveUrl: 'https://phonezone-app.onrender.com/',
      githubUrl: 'https://github.com/HuyBeros/PhoneZone',
      image: '', // Slot để thêm ảnh demo sau: ví dụ '/img/portfolio/phonezone.png'
      mockupUrl: 'https://phonezone-app.onrender.com/',
      mockupBadge: 'PhoneZone Storefront',
    },
    {
      id: 2,
      tabTitle: t('portfolio.project2Tab'),
      title: t('portfolio.project2Title'),
      category: t('portfolio.project2Category'),
      role: t('portfolio.project2Role'),
      timeline: t('portfolio.project2Timeline'),
      desc: t('portfolio.project2Desc'),
      highlights: [
        t('portfolio.project2Feat1'),
        t('portfolio.project2Feat2'),
        t('portfolio.project2Feat3'),
      ],
      techStack: [
        'Quarkus REST',
        'PostgreSQL',
        'React',
        'Vite',
        'Chart.js Analytics',
        'RBAC Security',
        'Docker',
        'Render',
      ],
      liveUrl: 'https://phonezone-app.onrender.com/',
      githubUrl: 'https://github.com/HuyBeros/PhoneZone',
      image: '',
      mockupUrl: 'https://phonezone-app.onrender.com/admin',
      mockupBadge: 'PhoneZone Admin Portal',
    },
    {
      id: 3,
      tabTitle: t('portfolio.project3Tab'),
      title: t('portfolio.project3Title'),
      category: t('portfolio.project3Category'),
      role: t('portfolio.project3Role'),
      timeline: t('portfolio.project3Timeline'),
      desc: t('portfolio.project3Desc'),
      highlights: [
        t('portfolio.project3Feat1'),
        t('portfolio.project3Feat2'),
        t('portfolio.project3Feat3'),
      ],
      techStack: [
        'Java 21',
        'Spring Boot 3',
        'Spring Security',
        'JWT Auth',
        'Spring Data JPA',
        'MySQL',
        'Docker',
        'Swagger / OpenAPI',
        'Maven',
      ],
      liveUrl: 'https://github.com/HuyBeros',
      githubUrl: 'https://github.com/HuyBeros',
      image: '',
      mockupUrl: 'https://api.huyberos.dev/swagger-ui',
      mockupBadge: 'Spring Boot REST API Service',
    },
  ];

  const totalSlides = projects.length;
  const activeProj = projects[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ width: '100%', clear: 'both', position: 'relative' }}>
      {/* 1. TOP TABS SWITCHER */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '32px',
        }}
      >
        {projects.map((proj, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={proj.id}
              onClick={() => setCurrentSlide(idx)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '30px',
                border: isActive ? '1px solid #E3872D' : '1px solid #e2e8f0',
                cursor: 'pointer',
                background: isActive ? '#E3872D' : '#ffffff',
                color: isActive ? '#ffffff' : '#475569',
                fontWeight: isActive ? 700 : 600,
                fontSize: '14px',
                boxShadow: isActive
                  ? '0 4px 16px rgba(227, 135, 45, 0.35)'
                  : '0 2px 6px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = '#E3872D';
                  e.currentTarget.style.color = '#E3872D';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#475569';
                }
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: isActive ? 'rgba(0,0,0,0.2)' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#64748b',
                  fontSize: '11px',
                  fontWeight: 800,
                }}
              >
                0{idx + 1}
              </span>
              <span>{proj.tabTitle}</span>
            </button>
          );
        })}
      </div>

      {/* 2. MAIN SLIDE CARD (NỀN TRẮNG CHUẨN ĐẸP) */}
      <div
        style={{
          position: 'relative',
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #ebebeb',
          boxShadow: '0 10px 35px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          padding: '28px 32px 34px',
          boxSizing: 'border-box',
          width: '100%',
        }}
      >
        {/* TOP BAR: BADGE & LIVE DEMO PILL */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#475569',
              padding: '5px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            0{currentSlide + 1} / 0{totalSlides}
          </div>

          <a
            href={activeProj.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#E3872D',
              color: '#ffffff',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 3px 10px rgba(227, 135, 45, 0.3)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff9d3b';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#E3872D';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#ffffff',
              }}
            ></span>
            <span>{t('portfolio.liveDemo')}</span>
          </a>
        </div>

        {/* DEMO PREVIEW WINDOW (CÓ CHỖ DỄ DÀNG ĐẶT ẢNH DEMO KHI CÓ) */}
        <div
          style={{
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            marginBottom: '26px',
          }}
        >
          {/* BROWSER TOP BAR */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              background: '#ffffff',
              borderBottom: '1px solid #e2e8f0',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
            </div>
            <div
              style={{
                flexGrow: 1,
                maxWidth: '480px',
                background: '#f1f5f9',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                padding: '4px 12px',
                fontSize: '12px',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: '#10b981' }}>🔒</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {activeProj.mockupUrl}
              </span>
            </div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#E3872D',
                background: 'rgba(227, 135, 45, 0.1)',
                padding: '3px 10px',
                borderRadius: '4px',
                marginLeft: 'auto',
              }}
            >
              {activeProj.mockupBadge}
            </span>
          </div>

          {/* NỘI DUNG ẢNH HOẶC KHUNG MÔ PHỎNG NỀN TRẮNG */}
          {activeProj.image ? (
            <div style={{ width: '100%', height: '340px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activeProj.image}
                alt={activeProj.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <div style={{ padding: '24px 20px', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Cổng thanh toán</div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>
                    VNPay Sandbox
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Mã hóa HMAC-SHA512</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Hạ tầng Backend</div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#E3872D', marginTop: '4px' }}>
                    Java 21 & Quarkus
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Deploy trên Render Cloud</div>
                </div>

                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Cơ sở dữ liệu</div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#2563eb', marginTop: '4px' }}>
                    PostgreSQL
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Lưu trữ Cloud trên Neon</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* NAVIGATION ARROW BUTTONS */}
        <button
          onClick={handlePrev}
          title="Previous Project"
          className="project_slider_arrow prev"
        >
          &#10094;
        </button>

        <button
          onClick={handleNext}
          title="Next Project"
          className="project_slider_arrow next"
        >
          &#10095;
        </button>

        {/* BOTTOM CONTENT AREA (NỀN TRẮNG CHỮ ĐẬM RÕ NÉT) */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                color: '#E3872D',
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                background: 'rgba(227, 135, 45, 0.1)',
                padding: '3px 10px',
                borderRadius: '4px',
              }}
            >
              {activeProj.category}
            </span>
            <span style={{ color: '#cbd5e1' }}>&bull;</span>
            <span style={{ color: '#64748b', fontSize: '13px' }}>
              <strong>Role:</strong> {activeProj.role} ({activeProj.timeline})
            </span>
          </div>

          <h3
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '24px',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '14px',
              lineHeight: 1.35,
            }}
          >
            {activeProj.title}
          </h3>

          <p
            style={{
              fontSize: '15px',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '18px',
            }}
          >
            {activeProj.desc}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
              {t('portfolio.keyHighlights')}:
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {activeProj.highlights.map((feat, i) => (
                <li
                  key={i}
                  style={{
                    position: 'relative',
                    paddingLeft: '22px',
                    fontSize: '14px',
                    color: '#334155',
                    lineHeight: '1.65',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: '#E3872D',
                      fontWeight: 800,
                      fontSize: '13px',
                    }}
                  >
                    ✔
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#64748b',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {t('portfolio.techStackLabel')}:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {activeProj.techStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#1e293b',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '6px 14px',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E3872D';
                    e.currentTarget.style.color = '#E3872D';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#1e293b';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons: 2 BUTTONS THEO YÊU CẦU (TRẢI NGHIỆM LIVE & GITHUB) */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              borderTop: '1px solid #f1f5f9',
              paddingTop: '20px',
            }}
          >
            <a
              href={activeProj.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#E3872D',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(227, 135, 45, 0.3)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff9d3b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E3872D';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{t('portfolio.liveDemo')}</span>
              <span>↗</span>
            </a>

            <a
              href={activeProj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#1e293b',
                border: '1px solid #1e293b',
                color: '#ffffff',
                padding: '10px 22px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0f172a';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1e293b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <i className="xcon-laptop"></i>
              <span>{t('portfolio.githubRepo')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM INDICATOR BAR */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '16px',
          padding: '0 8px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {projects.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '42px' : '12px',
                height: '5px',
                borderRadius: '3px',
                background: idx === currentSlide ? '#E3872D' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748b' }}>
          0{currentSlide + 1} / 0{totalSlides}
        </div>
      </div>
    </div>
  );
};
