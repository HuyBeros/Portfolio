/** @format */

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import {
  JavaIcon,
  SqlIcon,
  JsIcon,
  PythonIcon,
  CsharpIcon,
  QuarkusIcon,
  SpringBootIcon,
  RestApiIcon,
  SecurityIcon,
  JwtIcon,
  HibernateIcon,
  ReactIcon,
  PostgresIcon,
  MysqlIcon,
  NeonIcon,
  GitIcon,
  GitHubIcon,
  DockerIcon,
  MavenIcon,
  ViteIcon,
  RenderIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubSocialIcon,
} from './techIcons';
import { ProjectSlider } from './ProjectSlider';

function App() {
  const { language, t } = useLanguage();

  // Re-trigger typing animation dynamically based on selected language
  useEffect(() => {
    const viStrings = [
      'Sinh viên kỹ thuật phần mềm HaUI',
      'Lập trình viên Java',
      'lập trình viên fullstack',
    ];
    const enStrings = [
      'HaUI Software Engineering Student',
      'Java Developer',
      'Full-Stack Developer',
    ];
    const strings = language === 'vi' ? viStrings : enStrings;

    const timer = setTimeout(() => {
      const win = window as any;
      if (typeof win.arlo_tm_animate_text === 'function') {
        win.arlo_tm_animate_text(strings);
      } else if (win.jQuery) {
        const $span = win.jQuery('.arlo_tm_animation_text_word');
        if ($span.length) {
          win.jQuery('.typed-cursor').remove();
          $span.empty();
          $span.typed({
            strings: strings,
            loop: true,
            startDelay: 300,
            backDelay: 2000,
            typeSpeed: 40,
            backSpeed: 30,
          });
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [language]);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError(t('contact.fillRequired'));
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      // Gửi email tự động qua FormSubmit.co (chạy ngầm AJAX, không mở tab mới)
      const response = await fetch('https://formsubmit.co/ajax/nquanghuycv@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject.trim() || `Liên hệ từ ${formData.name} qua Portfolio`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (data.success === 'true' || data.success === true) {
        setFormSubmitted(true);
        setFormSuccessMessage(t('contact.successMessage'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.includes('Activation')) {
        setFormSubmitted(true);
        setFormSuccessMessage(
          language === 'vi'
            ? 'Đã gửi email kích hoạt lần đầu! Bạn chỉ cần vào Gmail nquanghuycv@gmail.com bấm nút "Activate Form" để hoàn tất.'
            : 'First-time activation sent! Please open nquanghuycv@gmail.com and click "Activate Form".'
        );
      } else {
        throw new Error(data.message || 'Lỗi gửi tin nhắn');
      }
    } catch (err: any) {
      console.error('Submit error:', err);
      setFormError(
        language === 'vi'
          ? 'Không thể gửi trực tiếp từ mạng của bạn lúc này. Vui lòng bấm nút "Mở Gmail để gửi" bên dưới để gửi nhanh qua Gmail.'
          : 'Unable to send directly. Please click the "Compose in Gmail" button below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="arlo_tm_wrapper_all">
      {/* Language Selector - Top Right Corner */}
      <LanguageSelector />

      {/* <!-- MOBILE MENU --> */}
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 800, fontSize: '20px', fontFamily: '"Montserrat", sans-serif', letterSpacing: '0.5px' }}>
              Huy<span style={{ color: '#E3872D' }}>Beros</span>
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_mobile_menu_wrap">
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li>
                <a href="#home">{t('menu.home')}</a>
              </li>
              <li>
                <a href="#about">{t('menu.about')}</a>
              </li>
              <li>
                <a href="#skills">{t('menu.skills')}</a>
              </li>
              <li>
                <a href="#services">{t('menu.services')}</a>
              </li>
              <li>
                <a href="#portfolio">{t('menu.portfolio')}</a>
              </li>
              <li>
                <a href="#achievements">{t('menu.achievements')}</a>
              </li>
              <li>
                <a href="#contact">{t('menu.contact')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <div className="arlo_tm_leftpart_wrap">
          <div className="leftpart_inner">
            <div className="logo_wrap" style={{ padding: '34px 20px 24px', textAlign: 'center' }}>
              <a href="#home" style={{ textDecoration: 'none', color: '#ffffff', fontWeight: 800, fontSize: '23px', letterSpacing: '0.5px', fontFamily: '"Montserrat", sans-serif' }}>
                Huy<span style={{ color: '#E3872D' }}>Beros</span>
              </a>
              <p style={{ color: '#94a3b8', fontSize: '12px', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '1.2px', fontWeight: 600 }}>
                Java Developer
              </p>
            </div>
            <div className="menu_list_wrap">
              <ul className="anchor_nav">
                <li>
                  <a href="#home">{t('menu.home')}</a>
                </li>
                <li>
                  <a href="#about">{t('menu.about')}</a>
                </li>
                <li>
                  <a href="#skills">{t('menu.skills')}</a>
                </li>
                <li>
                  <a href="#services">{t('menu.services')}</a>
                </li>
                <li>
                  <a href="#portfolio">{t('menu.portfolio')}</a>
                </li>
                <li>
                  <a href="#achievements">{t('menu.achievements')}</a>
                </li>
                <li>
                  <a href="#contact">{t('menu.contact')}</a>
                </li>
              </ul>
            </div>
            <div className="leftpart_bottom">
              <div className="social_wrap">
                <ul style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 0, padding: 0 }}>
                  <li>
                    <a
                      href="https://www.facebook.com/nquanghuy05"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook: nquanghuy05"
                      style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/huyberos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram: @huyberos"
                      style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/huyberos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn: huyberos"
                      style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/HuyBeros"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub: HuyBeros"
                      style={{ color: '#ffffff', display: 'flex', alignItems: 'center' }}
                    >
                      <GitHubSocialIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <a className="arlo_tm_resize" href="#">
              <i className="xcon-angle-left"></i>
            </a>
          </div>
        </div>
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <div className="arlo_tm_rightpart">
          <div className="rightpart_inner">
            {/* <!-- 1. HERO SECTION --> */}
            <div className="arlo_tm_section" id="home">
              <div className="arlo_tm_hero_header_wrap">
                <div className="arlo_tm_universal_box_wrap">
                  <div className="bg_wrap">
                    <div
                      className="overlay_image hero jarallax"
                      data-speed="0.1"
                    ></div>
                    <div className="overlay_color hero"></div>
                  </div>
                  <div className="content hero">
                    <div className="inner_content">
                      <div className="image_wrap">
                        <img
                          src="img/hero/img.jpg"
                          alt="Nguyen Quang Huy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '100%' }}
                        />
                      </div>
                      <div className="name_holder">
                        <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
                          NGUYỄN <span style={{ color: '#E3872D' }}>QUANG HUY</span>
                        </h3>
                      </div>
                      <div className="text_typing">
                        <p>
                          {t('hero.greeting')}{' '}
                          <span className="arlo_tm_animation_text_word"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="arlo_tm_arrow_wrap bounce anchor">
                    <a href="#about">
                      <i className="xcon-angle-double-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /HERO SECTION --> */}

            {/* <!-- 2. ABOUT SECTION --> */}
            <div className="arlo_tm_section relative" id="about">
              <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                  <div className="arlo_tm_title_holder">
                    <h3>{t('about.title')}</h3>
                    <span>{t('about.subtitle')}</span>
                  </div>
                  <div className="arlo_tm_about_wrap">
                    <div className="author_wrap">
                      <div className="leftbox">
                        <div
                          className="about_image_wrap parallax"
                          data-relative-input="true"
                        >
                          <div className="image layer" data-depth="0.1">
                            <img src="img/about/550x640.jpg" alt="Nguyen Quang Huy" />
                            <div
                              className="inner"
                              data-img-url="img/about/1.jpg"
                              style={{ backgroundImage: 'url(img/about/1.jpg)' }}
                            ></div>
                          </div>
                          <div className="border layer" data-depth="0.2">
                            <img src="img/about/550x640.jpg" alt="border" />
                            <div className="inner"></div>
                          </div>
                        </div>
                      </div>
                      <div className="rightbox">
                        <div className="arlo_tm_mini_title_holder">
                          <h4>{t('about.intro')}</h4>
                        </div>
                        <div className="definition">
                          <p>{t('about.description')}</p>
                        </div>
                        <div className="about_short_contact_wrap">
                          <ul>
                            <li>
                              <span>
                                <label>{t('about.labels.study')}:</label>{' '}
                                {t('about.study')}
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.degree')}:</label>{' '}
                                {t('about.degree')}
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.gpa')}:</label>{' '}
                                <strong style={{ color: '#E3872D' }}>{t('about.gpa')}</strong>
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.city')}:</label>{' '}
                                {t('about.city')}
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.birthday')}:</label>{' '}
                                {t('about.birthday')} ({t('about.age')} {t('about.labels.age').toLowerCase()})
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.mail')}:</label>{' '}
                                <a href="mailto:nquanghuycv@gmail.com">
                                  {t('about.mail')}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.phone')}:</label>{' '}
                                <a href="tel:0819012251">{t('about.phone')}</a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.github')}:</label>{' '}
                                <a
                                  href="https://github.com/HuyBeros"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t('about.github')}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.foreignLanguage')}:</label>{' '}
                                {t('about.foreignLanguage')}
                              </span>
                            </li>
                            <li>
                              <span>
                                <label>{t('about.labels.interests')}:</label>{' '}
                                {t('about.interests')}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="buttons_wrap">
                          <ul>
                            <li>
                              <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="CV_Nguyen_Quang_Huy_Backend_Intern.pdf"
                              >
                                <span>{t('about.downloadCV')}</span>
                              </a>
                            </li>
                            <li className="anchor">
                              <a href="#contact">
                                <span>{t('about.sendMessage')}</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /ABOUT SECTION --> */}

            {/* <!-- 3. SKILLS SECTION (2 Ô 1 DÒNG VỚI ICON & LOGO TRỰC QUAN) --> */}
            <div className="arlo_tm_section" id="skills">
              <div className="arlo_tm_skills_wrap" style={{ padding: '90px 0' }}>
                <div className="container">
                  <div className="arlo_tm_title_holder">
                    <h3>{t('skills.title')}</h3>
                    <span>{t('skills.subtitle')}</span>
                  </div>

                  <p style={{ maxWidth: '850px', fontSize: '15px', color: '#666666', lineHeight: '1.7', marginBottom: '25px' }}>
                    {t('skills.description')}
                  </p>

                  {/* 2x2 GRID: 2 Ô 1 DÒNG */}
                  <div className="skills_grid_2x2">
                    {/* BOX 1: NGÔN NGỮ LẬP TRÌNH */}
                    <div className="skill_category_card">
                      <div className="skill_category_header">
                        <div className="skill_category_icon">
                          <i className="xcon-laptop" style={{ fontSize: '18px' }}></i>
                        </div>
                        <h4>{t('skills.categories.languages')}</h4>
                      </div>
                      <div className="tech_items_container">
                        <div className="tech_item_badge">
                          <JavaIcon />
                          <span>Java (Java 21)</span>
                        </div>
                        <div className="tech_item_badge">
                          <SqlIcon />
                          <span>SQL</span>
                        </div>
                        <div className="tech_item_badge">
                          <JsIcon />
                          <span>JavaScript</span>
                        </div>
                        <div className="tech_item_badge">
                          <PythonIcon />
                          <span>Python</span>
                        </div>
                        <div className="tech_item_badge">
                          <CsharpIcon />
                          <span>C#</span>
                        </div>
                      </div>
                    </div>

                    {/* BOX 2: FRAMEWORK & THƯ VIỆN */}
                    <div className="skill_category_card">
                      <div className="skill_category_header">
                        <div className="skill_category_icon">
                          <i className="xcon-cog" style={{ fontSize: '18px' }}></i>
                        </div>
                        <h4>{t('skills.categories.frameworks')}</h4>
                      </div>
                      <div className="tech_items_container">
                        <div className="tech_item_badge">
                          <QuarkusIcon />
                          <span>Quarkus</span>
                        </div>
                        <div className="tech_item_badge">
                          <SpringBootIcon />
                          <span>Spring Boot</span>
                        </div>
                        <div className="tech_item_badge">
                          <RestApiIcon />
                          <span>RESTful API</span>
                        </div>
                        <div className="tech_item_badge">
                          <SecurityIcon />
                          <span>Spring Security</span>
                        </div>
                        <div className="tech_item_badge">
                          <JwtIcon />
                          <span>JWT Auth</span>
                        </div>
                        <div className="tech_item_badge">
                          <HibernateIcon />
                          <span>Hibernate / Panache</span>
                        </div>
                        <div className="tech_item_badge">
                          <SpringBootIcon />
                          <span>Spring Data JPA</span>
                        </div>
                        <div className="tech_item_badge">
                          <ReactIcon />
                          <span>React</span>
                        </div>
                      </div>
                    </div>

                    {/* BOX 3: CƠ SỞ DỮ LIỆU */}
                    <div className="skill_category_card">
                      <div className="skill_category_header">
                        <div className="skill_category_icon">
                          <i className="xcon-folder-open-empty" style={{ fontSize: '18px' }}></i>
                        </div>
                        <h4>{t('skills.categories.databases')}</h4>
                      </div>
                      <div className="tech_items_container">
                        <div className="tech_item_badge">
                          <PostgresIcon />
                          <span>PostgreSQL</span>
                        </div>
                        <div className="tech_item_badge">
                          <MysqlIcon />
                          <span>MySQL</span>
                        </div>
                        <div className="tech_item_badge">
                          <NeonIcon />
                          <span>Neon Cloud</span>
                        </div>
                      </div>
                    </div>

                    {/* BOX 4: CÔNG CỤ & TRIỂN KHAI */}
                    <div className="skill_category_card">
                      <div className="skill_category_header">
                        <div className="skill_category_icon">
                          <i className="xcon-upload" style={{ fontSize: '18px' }}></i>
                        </div>
                        <h4>{t('skills.categories.tools')}</h4>
                      </div>
                      <div className="tech_items_container">
                        <div className="tech_item_badge">
                          <GitIcon />
                          <span>Git</span>
                        </div>
                        <div className="tech_item_badge">
                          <GitHubIcon />
                          <span>GitHub</span>
                        </div>
                        <div className="tech_item_badge">
                          <DockerIcon />
                          <span>Docker</span>
                        </div>
                        <div className="tech_item_badge">
                          <MavenIcon />
                          <span>Maven</span>
                        </div>
                        <div className="tech_item_badge">
                          <ViteIcon />
                          <span>Vite</span>
                        </div>
                        <div className="tech_item_badge">
                          <RenderIcon />
                          <span>Render</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /SKILLS SECTION --> */}

            {/* <!-- 4. CORE COMPETENCIES SECTION (CSS GRID 3 CỘT RESPONSIVE CHUẨN) --> */}
            <div className="arlo_tm_section" id="services">
              <div className="arlo_tm_services_wrap" style={{ padding: '90px 0' }}>
                <div className="container">
                  <div className="arlo_tm_title_holder">
                    <h3>{t('services.title')}</h3>
                    <span>{t('services.subtitle')}</span>
                  </div>

                  <ul className="competencies_grid">
                    {/* Item 1 */}
                    <li>
                      <div className="competency_item">
                        <div className="competency_icon">
                          <i className="xcon-laptop" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3 className="competency_title">{t('services.backendTitle')}</h3>
                        <p className="competency_desc">{t('services.backendDesc')}</p>
                      </div>
                    </li>

                    {/* Item 2 */}
                    <li>
                      <div className="competency_item">
                        <div className="competency_icon">
                          <i className="xcon-lock" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3 className="competency_title">{t('services.authTitle')}</h3>
                        <p className="competency_desc">{t('services.authDesc')}</p>
                      </div>
                    </li>

                    {/* Item 3 */}
                    <li>
                      <div className="competency_item">
                        <div className="competency_icon">
                          <i className="xcon-cog" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3 className="competency_title">{t('services.databaseTitle')}</h3>
                        <p className="competency_desc">{t('services.databaseDesc')}</p>
                      </div>
                    </li>

                    {/* Item 4 */}
                    <li>
                      <div className="competency_item">
                        <div className="competency_icon">
                          <i className="xcon-cc-visa" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3 className="competency_title">{t('services.paymentTitle')}</h3>
                        <p className="competency_desc">{t('services.paymentDesc')}</p>
                      </div>
                    </li>

                    {/* Item 5 */}
                    <li>
                      <div className="competency_item">
                        <div className="competency_icon">
                          <i className="xcon-upload" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3 className="competency_title">{t('services.devopsTitle')}</h3>
                        <p className="competency_desc">{t('services.devopsDesc')}</p>
                      </div>
                    </li>

                    {/* Item 6 */}
                    <li>
                      <div className="competency_item">
                        <div className="competency_icon">
                          <i className="xcon-desktop" style={{ fontSize: '24px' }}></i>
                        </div>
                        <h3 className="competency_title">{t('services.frontendTitle')}</h3>
                        <p className="competency_desc">{t('services.frontendDesc')}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /CORE COMPETENCIES SECTION --> */}

            {/* <!-- 5. FEATURED PROJECTS SECTION (KHÔNG TRÀN LỀ, HIỂN THỊ CHUẨN) --> */}
            <div className="arlo_tm_section relative" id="portfolio">
              <div className="arlo_tm_portfolio_wrapper_all" style={{ padding: '90px 0' }}>
                <div className="container">
                  <div className="arlo_tm_title_holder" style={{ marginBottom: '40px' }}>
                    <h3>{t('portfolio.title')}</h3>
                    <span>{t('portfolio.subtitle')}</span>
                  </div>

                  {/* INTERACTIVE PROJECT SLIDER */}
                  <ProjectSlider />
                </div>
              </div>
            </div>
            {/* <!-- /FEATURED PROJECTS SECTION --> */}

            {/* <!-- 6. ACHIEVEMENTS & EDUCATION SECTION (KHÔNG LỖI SỐ, KHÔNG CHỒNG LÊN NHAU) --> */}
            <div className="arlo_tm_section" id="achievements">
              <div style={{ padding: '90px 0', background: '#fafafa', clear: 'both', width: '100%', float: 'left' }}>
                <div className="container">
                  <div className="arlo_tm_title_holder">
                    <h3>{t('achievements.title')}</h3>
                    <span>{t('achievements.subtitle')}</span>
                  </div>

                  {/* 4 STATS BOXES GRID */}
                  <div className="achievements_stats_grid">
                    <div className="achievement_stat_box">
                      <div className="achievement_stat_number">3.45</div>
                      <div className="achievement_stat_title">{t('achievements.gpaLabel')} (4.0)</div>
                      <p className="achievement_stat_desc">{t('achievements.gpaDesc')}</p>
                    </div>

                    <div className="achievement_stat_box">
                      <div className="achievement_stat_number">01</div>
                      <div className="achievement_stat_title">{t('achievements.scholarshipLabel')}</div>
                      <p className="achievement_stat_desc">{t('achievements.scholarshipDesc')}</p>
                    </div>

                    <div className="achievement_stat_box">
                      <div className="achievement_stat_number">01+</div>
                      <div className="achievement_stat_title">{t('achievements.projectsLabel')}</div>
                      <p className="achievement_stat_desc">{t('achievements.projectsDesc')}</p>
                    </div>

                    <div className="achievement_stat_box">
                      <div className="achievement_stat_number">100%</div>
                      <div className="achievement_stat_title">{t('achievements.dedicationLabel')}</div>
                      <p className="achievement_stat_desc">{t('achievements.dedicationDesc')}</p>
                    </div>
                  </div>

                  {/* 4 ACADEMIC & RESEARCH CARDS (2x2 GRID) */}
                  <div className="achievements_cards_grid">
                    <div className="achievement_card">
                      <h4>{t('achievements.card1Title')}</h4>
                      <span className="achievement_sub">{t('achievements.card1Subtitle')}</span>
                      <p>{t('achievements.card1Desc')}</p>
                    </div>

                    <div className="achievement_card">
                      <h4>{t('achievements.card2Title')}</h4>
                      <span className="achievement_sub">{t('achievements.card2Subtitle')}</span>
                      <p>{t('achievements.card2Desc')}</p>
                    </div>

                    <div className="achievement_card">
                      <h4>{t('achievements.card3Title')}</h4>
                      <span className="achievement_sub">{t('achievements.card3Subtitle')}</span>
                      <p>{t('achievements.card3Desc')}</p>
                    </div>

                    <div className="achievement_card">
                      <h4>{t('achievements.card4Title')}</h4>
                      <span className="achievement_sub">{t('achievements.card4Subtitle')}</span>
                      <p>{t('achievements.card4Desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /ACHIEVEMENTS & EDUCATION SECTION --> */}

            {/* <!-- 7. CONTACT & FOOTER SECTION --> */}
            <div className="arlo_tm_section" id="contact">
              <div style={{ padding: '90px 0 0 0', clear: 'both', width: '100%', float: 'left' }}>
                <div className="container">
                  <div className="arlo_tm_title_holder contact">
                    <h3>{t('contact.title')}</h3>
                    <span>{t('contact.subtitle')}</span>
                  </div>

                  <div className="contact_section_grid">
                    {/* LEFT COLUMN: CONTACT INFO */}
                    <div>
                      <div className="arlo_tm_mini_title_holder contact" style={{ marginBottom: '25px' }}>
                        <h4>{t('contact.getInTouch')}</h4>
                      </div>
                      <div className="short_info_wrap">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          <li style={{ marginBottom: '16px', fontSize: '15px' }}>
                            <p style={{ margin: 0 }}>
                              <strong style={{ color: '#111111', marginRight: '6px' }}>{t('contact.labels.address')}:</strong>
                              <span>{t('contact.address')}</span>
                            </p>
                          </li>
                          <li style={{ marginBottom: '16px', fontSize: '15px' }}>
                            <p style={{ margin: 0 }}>
                              <strong style={{ color: '#111111', marginRight: '6px' }}>{t('contact.labels.email')}:</strong>
                              <span>
                                <a href="mailto:nquanghuycv@gmail.com" style={{ color: '#E3872D', textDecoration: 'none' }}>
                                  {t('contact.email')}
                                </a>
                              </span>
                            </p>
                          </li>
                          <li style={{ marginBottom: '16px', fontSize: '15px' }}>
                            <p style={{ margin: 0 }}>
                              <strong style={{ color: '#111111', marginRight: '6px' }}>{t('contact.labels.phone')}:</strong>
                              <span>
                                <a href="tel:0819012251" style={{ color: '#E3872D', textDecoration: 'none' }}>
                                  {t('contact.phone')}
                                </a>
                              </span>
                            </p>
                          </li>
                          <li style={{ marginBottom: '16px', fontSize: '15px' }}>
                            <p style={{ margin: 0 }}>
                              <strong style={{ color: '#111111', marginRight: '6px' }}>{t('contact.labels.github')}:</strong>
                              <span>
                                <a
                                  href="https://github.com/HuyBeros"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: '#E3872D', textDecoration: 'none' }}
                                >
                                  github.com/HuyBeros
                                </a>
                              </span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: CONTACT FORM */}
                    <div>
                      <form onSubmit={handleFormSubmit} className="contact_form">
                        {formSubmitted && (
                          <div
                            style={{
                              background: '#e8f5e9',
                              color: '#2e7d32',
                              padding: '12px 16px',
                              borderRadius: '6px',
                              marginBottom: '16px',
                              fontSize: '14px',
                              fontWeight: 600,
                              lineHeight: 1.5,
                            }}
                          >
                            ✔ {formSuccessMessage || t('contact.successMessage')}
                          </div>
                        )}

                        {formError && (
                          <div
                            style={{
                              background: '#ffebee',
                              color: '#c62828',
                              padding: '12px 16px',
                              borderRadius: '6px',
                              marginBottom: '16px',
                              fontSize: '14px',
                              fontWeight: 600,
                            }}
                          >
                            {formError}
                          </div>
                        )}

                        <div className="wrap" style={{ marginBottom: '15px' }}>
                          <input
                            id="name"
                            type="text"
                            placeholder={t('contact.yourName')}
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            style={{ width: '100%', padding: '12px 15px', borderRadius: '6px', border: '1px solid #ddd' }}
                          />
                        </div>
                        <div className="wrap" style={{ marginBottom: '15px' }}>
                          <input
                            id="email"
                            type="email"
                            placeholder={t('contact.yourEmail')}
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            style={{ width: '100%', padding: '12px 15px', borderRadius: '6px', border: '1px solid #ddd' }}
                          />
                        </div>
                        <div className="wrap" style={{ marginBottom: '15px' }}>
                          <input
                            id="subject"
                            type="text"
                            placeholder={t('contact.yourSubject')}
                            value={formData.subject}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '12px 15px', borderRadius: '6px', border: '1px solid #ddd' }}
                          />
                        </div>
                        <div className="wrap" style={{ marginBottom: '15px' }}>
                          <textarea
                            id="message"
                            placeholder={t('contact.yourMessage')}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            style={{ width: '100%', padding: '12px 15px', borderRadius: '6px', border: '1px solid #ddd' }}
                          ></textarea>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                              background: isSubmitting ? '#94a3b8' : '#E3872D',
                              color: '#ffffff',
                              border: 'none',
                              padding: '12px 32px',
                              borderRadius: '30px',
                              fontSize: '14px',
                              fontWeight: 600,
                              cursor: isSubmitting ? 'not-allowed' : 'pointer',
                              transition: 'all 0.25s ease',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              boxShadow: '0 4px 14px rgba(227, 135, 45, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) e.currentTarget.style.background = '#111111';
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) e.currentTarget.style.background = '#E3872D';
                            }}
                          >
                            <span>{isSubmitting ? (language === 'vi' ? 'Đang gửi...' : 'Sending...') : t('contact.sendMessage')}</span>
                          </button>

                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=nquanghuycv@gmail.com&su=${encodeURIComponent(formData.subject.trim() || `Portfolio Contact từ ${formData.name || 'Khách'}`)}&body=${encodeURIComponent(`Xin chào Nguyễn Quang Huy,\n\nTôi gửi lời nhắn từ website portfolio:\nHọ và tên: ${formData.name}\nEmail: ${formData.email}\n\nNội dung liên hệ:\n${formData.message}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              background: '#f8fafc',
                              border: '1px solid #cbd5e1',
                              color: '#334155',
                              padding: '11px 22px',
                              borderRadius: '30px',
                              fontSize: '13.5px',
                              fontWeight: 600,
                              textDecoration: 'none',
                              transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#E3872D';
                              e.currentTarget.style.color = '#E3872D';
                              e.currentTarget.style.background = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = '#cbd5e1';
                              e.currentTarget.style.color = '#334155';
                              e.currentTarget.style.background = '#f8fafc';
                            }}
                          >
                            <span>{language === 'vi' ? 'Mở Gmail để gửi' : 'Compose in Gmail'}</span>
                            <span>↗</span>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className="arlo_tm_footer_wrap"
                  style={{
                    background: '#041230',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '32px 0',
                    width: '100%',
                    clear: 'both',
                    float: 'left',
                    textAlign: 'center',
                  }}
                >
                  <div className="container">
                    <p style={{ color: '#94a3b8', margin: 0, fontSize: '13.5px', letterSpacing: '0.3px' }}>
                      {t('contact.copyright')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /CONTACT & FOOTER SECTION --> */}
          </div>
        </div>
        {/* <!-- /RIGHTPART --> */}

        <a className="arlo_tm_totop" href="#"></a>
      </div>
    </div>
  );
}

export default App;
