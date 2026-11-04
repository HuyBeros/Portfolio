import React, { createContext, useState, useContext } from 'react';

type Language = 'en' | 'vi';

export interface Translations {
  menu: {
    home: string;
    about: string;
    skills: string;
    services: string;
    portfolio: string;
    achievements: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    subGreeting: string;
    viewProjects: string;
    contactMe: string;
    typedStrings: string[];
  };
  about: {
    title: string;
    subtitle: string;
    fullName: string;
    intro: string;
    description: string;
    birthday: string;
    age: string;
    city: string;
    interests: string;
    study: string;
    degree: string;
    gpa: string;
    mail: string;
    phone: string;
    github: string;
    foreignLanguage: string;
    downloadCV: string;
    sendMessage: string;
    labels: {
      birthday: string;
      age: string;
      city: string;
      study: string;
      degree: string;
      gpa: string;
      mail: string;
      phone: string;
      github: string;
      foreignLanguage: string;
      interests: string;
      address: string;
      email: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
    description: string;
    javaTitle: string;
    javaDesc: string;
    quarkusSpringTitle: string;
    quarkusSpringDesc: string;
    databaseTitle: string;
    databaseDesc: string;
    frontendTitle: string;
    frontendDesc: string;
    devopsTitle: string;
    devopsDesc: string;
    categories: {
      languages: string;
      frameworks: string;
      databases: string;
      tools: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    backendTitle: string;
    backendDesc: string;
    authTitle: string;
    authDesc: string;
    databaseTitle: string;
    databaseDesc: string;
    paymentTitle: string;
    paymentDesc: string;
    devopsTitle: string;
    devopsDesc: string;
    frontendTitle: string;
    frontendDesc: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    all: string;
    fullstack: string;
    backend: string;
    project1Tab: string;
    project2Tab: string;
    project1Title: string;
    project1Category: string;
    project1Role: string;
    project1Timeline: string;
    project1Desc: string;
    project1Feat1: string;
    project1Feat2: string;
    project1Feat3: string;
    project1Feat4: string;
    project2Title: string;
    project2Category: string;
    project2Role: string;
    project2Timeline: string;
    project2Desc: string;
    project2Feat1: string;
    project2Feat2: string;
    project2Feat3: string;
    project2Feat4: string;
    githubRepo: string;
    githubBackend: string;
    githubFrontend: string;
    liveDemo: string;
    keyHighlights: string;
    techStackLabel: string;
  };
  achievements: {
    title: string;
    subtitle: string;
    gpaNumber: string;
    gpaLabel: string;
    gpaDesc: string;
    scholarshipNumber: string;
    scholarshipLabel: string;
    scholarshipDesc: string;
    projectsNumber: string;
    projectsLabel: string;
    projectsDesc: string;
    dedicationNumber: string;
    dedicationLabel: string;
    dedicationDesc: string;
    card1Title: string;
    card1Subtitle: string;
    card1Desc: string;
    card2Title: string;
    card2Subtitle: string;
    card2Desc: string;
    card3Title: string;
    card3Subtitle: string;
    card3Desc: string;
    card4Title: string;
    card4Subtitle: string;
    card4Desc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    address: string;
    email: string;
    phone: string;
    github: string;
    yourName: string;
    yourEmail: string;
    yourSubject: string;
    yourMessage: string;
    sendMessage: string;
    directMail: string;
    copyright: string;
    successMessage: string;
    fillRequired: string;
    labels: {
      address: string;
      email: string;
      phone: string;
      github: string;
    };
  };
}

const calculateAge = (birthdayString: string): string => {
  const [day, month, year] = birthdayString.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
    age--;
  }

  return age.toString();
};

const translations: Record<Language, Translations> = {
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Competencies',
      portfolio: 'Projects',
      achievements: 'Achievements',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm a",
      role: 'Backend Developer Intern',
      subGreeting:
        'Final-year Software Engineering student at Hanoi University of Industry (HaUI), dedicated to building scalable backend systems with Java 21, Quarkus, Spring Boot, and PostgreSQL.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      typedStrings: [
        'HaUI Software Engineering Student',
        'Java Developer',
        'Full-Stack Developer',
      ],
    },
    about: {
      title: 'About Me',
      subtitle: 'Introduction and background',
      fullName: 'Nguyen Quang Huy',
      intro: "I'm Nguyen Quang Huy — Backend Developer Intern",
      description:
        'Final-year Software Engineering student at Hanoi University of Industry (HaUI) with strong passion for backend architecture and building reliable, scalable web applications. Experienced in developing secure RESTful APIs with Java 21, Quarkus, Spring Boot, Hibernate ORM/Panache, and PostgreSQL. Proficient in database modeling, stateless JWT authentication, role-based access control, and integrating payment systems like VNPay. A self-driven learner and proactive team player seeking an environment to sharpen my skills, contribute to real-world projects, and grow as a software engineer.',
      birthday: '18/10/2005',
      age: calculateAge('18/10/2005'),
      city: 'Nam Tu Liem, Ha Noi, Vietnam',
      study: 'Hanoi University of Industry (HaUI)',
      degree: 'Software Engineering',
      gpa: '3.45',
      mail: 'nquanghuycv@gmail.com',
      phone: '0819012251',
      github: 'github.com/HuyBeros',
      foreignLanguage: 'English (Able to read technical documentation)',
      interests: 'Reading, Cooking, Traveling, Technology, Football',
      downloadCV: 'Download CV (PDF)',
      sendMessage: 'Send Message',
      labels: {
        birthday: 'Birthday',
        age: 'Age',
        city: 'Location',
        study: 'University',
        degree: 'Major',
        gpa: 'Cumulative GPA',
        mail: 'Email',
        phone: 'Phone',
        github: 'GitHub',
        foreignLanguage: 'Foreign Language',
        interests: 'Interests',
        address: 'Address',
        email: 'Email',
      },
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies & tools I work with',
      description:
        'Solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms, modern enterprise Java frameworks (Quarkus, Spring Boot), relational database design & optimization (PostgreSQL, MySQL), containerization with Docker, and responsive React frontend development.',
      javaTitle: 'Java (Java 21, OOP, Collections, Concurrency, Stream API)',
      javaDesc: 'Proficient in modern Java features, clean architecture, and design patterns',
      quarkusSpringTitle: 'Quarkus & Spring Boot (REST APIs, Security, JWT, Panache/JPA)',
      quarkusSpringDesc: 'Building lightweight, high-performance microservices and RESTful backends',
      databaseTitle: 'Databases (PostgreSQL, MySQL, Neon Cloud, Schema Design)',
      databaseDesc: 'Relational data modeling, indexing, transaction management, and query optimization',
      frontendTitle: 'React & Frontend (JavaScript/TypeScript, Vite, Chart.js)',
      frontendDesc: 'Developing interactive customer portals and responsive administrative dashboards',
      devopsTitle: 'DevOps & Tools (Git/GitHub, Docker, Render, Maven)',
      devopsDesc: 'Containerization, automated build lifecycles, and cloud hosting workflows',
      categories: {
        languages: 'Programming Languages',
        frameworks: 'Frameworks & Libraries',
        databases: 'Databases & Storage',
        tools: 'Tools & Deployment',
      },
    },
    services: {
      title: 'Core Competencies',
      subtitle: 'Key technical domains & engineering capabilities',
      backendTitle: 'Backend & RESTful API Architecture',
      backendDesc:
        'Designing and implementing robust, clean RESTful APIs using Java 21, Quarkus, and Spring Boot following layered architecture (Controller/Resource, Service, Repository), DTO validation, and centralized exception handling.',
      authTitle: 'Authentication & Security',
      authDesc:
        'Implementing stateless authentication using JSON Web Tokens (JWT), BCrypt password hashing, and granular Role-Based Access Control (RBAC) to protect administrative and customer resources.',
      databaseTitle: 'Database Design & ORM Optimization',
      databaseDesc:
        'Designing relational schemas, establishing foreign key constraints, and managing persistence using Hibernate ORM with Panache and Spring Data JPA on PostgreSQL and MySQL.',
      paymentTitle: 'Payment Gateway Integration',
      paymentDesc:
        'Integrating VNPay Sandbox and Cash-on-Delivery (COD) payment workflows: generating secure transaction URLs, calculating cryptographic checksums, and verifying callback signatures with HMAC-SHA512.',
      devopsTitle: 'Containerization & Cloud Deployment',
      devopsDesc:
        'Writing optimized Dockerfiles for Java multi-stage builds, managing multi-container stacks, and deploying backend applications and managed PostgreSQL databases to Render and Neon Cloud.',
      frontendTitle: 'Frontend Integration & Analytics',
      frontendDesc:
        'Developing responsive client interfaces and interactive admin dashboards using React, Vite, and Chart.js for real-time revenue analytics, order tracking, and product management.',
    },
    portfolio: {
      title: 'Featured Projects',
      subtitle: 'Full-stack & backend systems built with production-grade architectures',
      all: 'All Projects',
      fullstack: 'Full-Stack',
      backend: 'Backend',
      project1Tab: 'PhoneZone — E-Commerce',
      project2Tab: 'FBookShop — Microservices',
      project1Title: 'PhoneZone — E-Commerce & Repair Service Platform',
      project1Category: 'Full-Stack Web Application',
      project1Role: 'Fullstack Developer (Backend Focused)',
      project1Timeline: '04/2026 - 11/2026',
      project1Desc:
        'A comprehensive e-commerce platform specializing in mobile phones, tablets, and accessories, featuring online ordering, a customer loyalty reward points system, and device repair appointment booking.',
      project1Feat1:
        'Built user registration and authentication with stateless JWT, plus Customer and Admin Role-Based Access Control (RBAC).',
      project1Feat2:
        'Integrated VNPay Sandbox & COD: generated payment URLs, signed and verified callback signatures using HMAC-SHA512, and updated order statuses.',
      project1Feat3:
        'Developed customer interface (product catalog, device comparison, repair booking) and administrative dashboard with revenue charts via Chart.js.',
      project1Feat4:
        'Containerized with Docker, deployed PostgreSQL on Neon Cloud, and hosted on Render with modern CI/CD practices.',
      project2Title: 'FBookShop — Microservices Bookstore Platform',
      project2Category: 'Microservices Architecture & Spring Boot',
      project2Role: 'Backend Developer (Payment, Bank & Catalog Services)',
      project2Timeline: '2025',
      project2Desc:
        'A distributed microservices-based bookstore management platform built with Java 21 and Spring Boot 3, featuring Maven multi-module architecture, centralized routing via API Gateway, and MySQL persistence.',
      project2Feat1:
        'Payment Service (Port 8085): Managed checkout workflow, transaction lifecycle tracking, and secure inter-service communication with Order and Bank services.',
      project2Feat2:
        'Bank Service (Port 8087): Simulated banking subsystem with account balance verification, payment processing, and promotion/discount deductions.',
      project2Feat3:
        'Catalog Service (Port 8082): Handled book inventory, categories, author filtering, pricing, and query optimization with Spring Data JPA & MySQL.',
      project2Feat4:
        'Maven Multi-Module & API Gateway (Port 8089): Engineered decoupled services with isolated domain databases and centralized API Gateway for scalable routing.',
      githubRepo: 'GitHub Repository',
      githubBackend: 'GitHub Backend',
      githubFrontend: 'GitHub Frontend',
      liveDemo: 'Live Demo',
      keyHighlights: 'Key Technical Highlights',
      techStackLabel: 'Tech Stack',
    },
    achievements: {
      title: 'Achievements & Academic Standing',
      subtitle: 'Academic excellence and university milestones',
      gpaNumber: '3.45',
      gpaLabel: 'Cumulative GPA',
      gpaDesc: 'Ranked Very Good (Giỏi) in Software Engineering at HaUI (Scale 4.0)',
      scholarshipNumber: '01',
      scholarshipLabel: 'Academic Scholarship',
      scholarshipDesc: 'Academic Excellence Scholarship awarded in Semester 6',
      projectsNumber: '02+',
      projectsLabel: 'Core Systems',
      projectsDesc: 'PhoneZone (Quarkus) & FBookShop (Spring Boot Microservices)',
      dedicationNumber: '100%',
      dedicationLabel: 'Dedication & Proactivity',
      dedicationDesc: 'Passionate about clean code, robust architecture, and rapid learning',
      card1Title: 'Hanoi University of Industry (HaUI)',
      card1Subtitle: 'Bachelor of Software Engineering (2023 - Present)',
      card1Desc:
        'GPA: 3.45. Solid foundation in Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Systems, Computer Networks, and Software Testing.',
      card2Title: 'Study Encouragement Scholarship of Excellence',
      card2Subtitle: 'Very Good Student Title (Academic Year 2025 - 2026)',
      card2Desc:
        'Awarded the Study Encouragement Scholarship of Excellence and the title of Very Good Student for the academic year 2025 - 2026 at Hanoi University of Industry (HaUI).',
      card3Title: 'Continuous Self-Learning & Engineering Agility',
      card3Subtitle: 'Modern Enterprise Tech Stacks',
      card3Desc:
        'Proactively mastered Java 21, Quarkus 3, Spring Boot 3, Docker containerization, REST API security, and cloud deployment on Render and Neon.',
      card4Title: 'Scientific Research at HaUI',
      card4Subtitle: 'Mentored by Ph.D. Faculty — HaUI',
      card4Desc:
        'Participated in scientific research under the direct guidance of a Ph.D. faculty at Hanoi University of Industry (HaUI), developing independent research thinking, academic analysis, and in-depth system architecture exploration.',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Feel free to reach out for opportunities or collaboration',
      getInTouch: 'Get In Touch',
      address: 'Nam Tu Liem, Ha Noi, Vietnam',
      email: 'nquanghuycv@gmail.com',
      phone: '0819012251',
      github: 'https://github.com/HuyBeros',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourSubject: 'Subject',
      yourMessage: 'Your Message',
      sendMessage: 'Send Message',
      directMail: 'Open Email Client',
      copyright: '© 2026 Nguyen Quang Huy. All Rights Reserved.',
      successMessage: 'Thank you! Your message has been prepared.',
      fillRequired: 'Please fill in all required fields.',
      labels: {
        address: 'Address',
        email: 'Email',
        phone: 'Phone',
        github: 'GitHub',
      },
    },
  },
  vi: {
    menu: {
      home: 'Trang chủ',
      about: 'Về tôi',
      skills: 'Kỹ năng',
      services: 'Thế mạnh',
      portfolio: 'Dự án',
      achievements: 'Thành tích',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: 'Xin chào, tôi là',
      role: 'Backend Developer Intern',
      subGreeting:
        'Sinh viên năm cuối ngành Kỹ thuật phần mềm tại Đại học Công nghiệp Hà Nội (HaUI), định hướng phát triển hệ thống backend hiệu năng cao với Java 21, Quarkus, Spring Boot và PostgreSQL.',
      viewProjects: 'Xem Dự Án',
      contactMe: 'Liên Hệ Ngay',
      typedStrings: [
        'Sinh viên kỹ thuật phần mềm HaUI',
        'Lập trình viên Java',
        'lập trình viên fullstack',
      ],
    },
    about: {
      title: 'Về Tôi',
      subtitle: 'Thông tin giới thiệu bản thân',
      fullName: 'Nguyễn Quang Huy',
      intro: 'Tôi là Nguyễn Quang Huy — Backend Developer Intern',
      description:
        'Sinh viên năm cuối ngành Kỹ thuật phần mềm tại Đại học Công nghiệp Hà Nội (HaUI) với niềm đam mê xây dựng các hệ thống Backend vững chắc, bảo mật và có khả năng mở rộng. Tôi có thế mạnh về Java 21, Quarkus, Spring Boot, Hibernate ORM/Panache và PostgreSQL. Tôi đã có kinh nghiệm thực tế trong việc phát triển ứng dụng Fullstack hoàn chỉnh với xác thực JWT, phân quyền tài khoản (RBAC), và tích hợp cổng thanh toán VNPay. Với tinh thần tự học cao và khả năng làm việc nhóm hiệu quả, tôi tìm kiếm cơ hội Thực tập sinh Backend Developer để rèn luyện kỹ năng và đóng góp cho các dự án thực tế.',
      birthday: '18/10/2005',
      age: calculateAge('18/10/2005'),
      city: 'Nam Từ Liêm, Hà Nội, Việt Nam',
      study: 'Đại học Công nghiệp Hà Nội (HaUI)',
      degree: 'Kỹ thuật phần mềm',
      gpa: '3.45',
      mail: 'nquanghuycv@gmail.com',
      phone: '0819012251',
      github: 'github.com/HuyBeros',
      foreignLanguage: 'Tiếng Anh (Đọc hiểu tốt tài liệu kỹ thuật chuyên ngành)',
      interests: 'Đọc sách, Nấu ăn, Du lịch, Công nghệ, Bóng đá',
      downloadCV: 'Tải xuống CV (PDF)',
      sendMessage: 'Gửi tin nhắn',
      labels: {
        birthday: 'Ngày sinh',
        age: 'Tuổi',
        city: 'Địa chỉ',
        study: 'Trường ĐH',
        degree: 'Chuyên ngành',
        gpa: 'Điểm trung bình (GPA)',
        mail: 'Email',
        phone: 'Điện thoại',
        github: 'GitHub',
        foreignLanguage: 'Ngoại ngữ',
        interests: 'Sở thích',
        address: 'Địa chỉ',
        email: 'Email',
      },
    },
    skills: {
      title: 'Kỹ Năng Chuyên Môn',
      subtitle: 'Các công nghệ và công cụ sử dụng',
      description:
        'Nắm vững tư duy Lập trình hướng đối tượng (OOP), Cấu trúc dữ liệu & Giải thuật, kiến trúc backend hiện đại với Java (Quarkus, Spring Boot), thiết kế và tối ưu hóa cơ sở dữ liệu quan hệ (PostgreSQL, MySQL), đóng gói Docker và xây dựng giao diện React responsive.',
      javaTitle: 'Java (Java 21, Core OOP, Collections, Concurrency, Stream API)',
      javaDesc: 'Thành thạo các tính năng Java hiện đại, tư duy Clean Code và Design Patterns',
      quarkusSpringTitle: 'Quarkus & Spring Boot (REST APIs, Security, JWT, Panache/JPA)',
      quarkusSpringDesc: 'Xây dựng RESTful API và microservices nhẹ, tốc độ cao và bảo mật',
      databaseTitle: 'Cơ sở dữ liệu (PostgreSQL, MySQL, Neon Cloud, Thiết kế Schema)',
      databaseDesc: 'Mô hình hóa dữ liệu quan hệ, đánh index, tối ưu truy vấn và quản lý giao dịch',
      frontendTitle: 'React & Frontend (JavaScript/TypeScript, Vite, Chart.js)',
      frontendDesc: 'Xây dựng giao diện người dùng tương tác và dashboard quản trị trực quan',
      devopsTitle: 'Công cụ & Triển khai (Git/GitHub, Docker, Render, Maven)',
      devopsDesc: 'Đóng gói container với Docker, tự động hóa build với Maven và triển khai lên Render',
      categories: {
        languages: 'Ngôn ngữ lập trình',
        frameworks: 'Framework & Thư viện',
        databases: 'Cơ sở dữ liệu',
        tools: 'Công cụ & Triển khai',
      },
    },
    services: {
      title: 'Thế Mạnh Chuyên Môn',
      subtitle: 'Các lĩnh vực chuyên môn và năng lực kỹ thuật',
      backendTitle: 'Phát triển Backend & RESTful API',
      backendDesc:
        'Thiết kế và xây dựng RESTful API chuyên nghiệp với Java 21, Quarkus và Spring Boot theo kiến trúc phân tầng (Controller/Resource, Service, Repository), DTO validation và xử lý ngoại lệ tập trung.',
      authTitle: 'Xác thực & Bảo mật ứng dụng',
      authDesc:
        'Triển khai cơ chế xác thực phi trạng thái (stateless) bằng JSON Web Token (JWT), mã hóa mật khẩu với BCrypt và phân quyền vai trò (RBAC) chi tiết cho Khách hàng và Quản trị viên.',
      databaseTitle: 'Thiết kế CSDL & Tối ưu ORM',
      databaseDesc:
        'Thiết kế lược đồ CSDL quan hệ, quan hệ bảng, chỉ mục và tương tác dữ liệu hiệu quả với Hibernate ORM / Panache và Spring Data JPA trên PostgreSQL và MySQL.',
      paymentTitle: 'Tích hợp Cổng thanh toán',
      paymentDesc:
        'Tích hợp quy trình thanh toán VNPay Sandbox và COD: tạo URL thanh toán, tạo chữ ký số và kiểm tra tính toàn vẹn dữ liệu callback bằng thuật toán HMAC-SHA512.',
      devopsTitle: 'Đóng gói Docker & Triển khai Cloud',
      devopsDesc:
        'Viết Dockerfile tối ưu nhiều giai đoạn (multi-stage build), đóng gói và triển khai ứng dụng backend cùng cơ sở dữ liệu PostgreSQL lên nền tảng Render và Neon Cloud.',
      frontendTitle: 'Tích hợp Frontend & Trực quan dữ liệu',
      frontendDesc:
        'Xây dựng giao diện bán hàng và bảng quản trị (Admin Dashboard) với React, Vite và Chart.js phục vụ thống kê doanh thu, quản lý đơn hàng và lịch đặt sửa chữa.',
    },
    portfolio: {
      title: 'Dự Án Tiêu Biểu',
      subtitle: 'Hệ thống Fullstack & Backend hoàn thiện với kiến trúc chuẩn mực',
      all: 'Tất cả dự án',
      fullstack: 'Full-Stack',
      backend: 'Backend',
      project1Tab: 'PhoneZone — E-Commerce',
      project2Tab: 'FBookShop — Microservices',
      project1Title: 'PhoneZone — Nền tảng TMĐT & Đặt lịch sửa chữa thiết bị',
      project1Category: 'Ứng dụng Full-Stack',
      project1Role: 'Fullstack Developer (Trọng tâm Backend)',
      project1Timeline: '04/2026 - 11/2026',
      project1Desc:
        'Nền tảng thương mại điện tử kinh doanh điện thoại, máy tính bảng và phụ kiện, tích hợp đặt hàng trực tuyến, hệ thống tích điểm đổi thưởng và chức năng đặt lịch sửa chữa thiết bị thông minh.',
      project1Feat1:
        'Xây dựng chức năng đăng ký, đăng nhập với JWT cùng phân quyền vai trò (Customer/Admin) quản lý sản phẩm, đơn hàng và tài khoản.',
      project1Feat2:
        'Tích hợp thanh toán VNPay Sandbox và COD: tạo URL thanh toán, ký và xác thực chữ ký callback với HMAC-SHA512, cập nhật trạng thái đơn hàng tự động.',
      project1Feat3:
        'Phát triển giao diện React cho cả khách hàng lẫn admin dashboard, hỗ trợ so sánh sản phẩm, đặt lịch sửa chữa và biểu đồ doanh thu với Chart.js.',
      project1Feat4:
        'Đóng gói Docker, kết nối PostgreSQL trên Neon Cloud và triển khai hoàn chỉnh trên Render.',
      project2Title: 'FBookShop — Hệ thống Cửa hàng sách Kiến trúc Microservices',
      project2Category: 'Kiến trúc Microservices & Spring Boot',
      project2Role: 'Backend Developer (Phụ trách 3 Services: Payment, Bank, Catalog)',
      project2Timeline: '2025',
      project2Desc:
        'Hệ thống thương mại điện tử bán sách trực tuyến xây dựng theo kiến trúc Microservices phân tán với Spring Boot 3 và Java 21, thiết kế chuẩn Maven Multi-Module, định tuyến qua API Gateway và lưu trữ CSDL MySQL.',
      project2Feat1:
        'Payment Service (Port 8085): Xử lý quy trình thanh toán hóa đơn, kiểm soát trạng thái giao dịch và kết nối đồng bộ với dịch vụ Order & Bank.',
      project2Feat2:
        'Bank Service (Port 8087): Mô phỏng hệ thống ngân hàng liên kết, xác thực tài khoản thẻ, kiểm tra số dư và áp dụng chiết khấu thanh toán tự động.',
      project2Feat3:
        'Catalog Service (Port 8082): Quản lý danh mục sách, thể loại, thông tin tác giả, tối ưu truy vấn kho hàng và dữ liệu với Spring Data JPA & MySQL.',
      project2Feat4:
        'Kiến trúc Multi-Module & API Gateway (Port 8089): Thiết kế phân tách module độc lập bằng Maven, định tuyến tập trung qua API Gateway và cơ sở dữ liệu phân tán.',
      githubRepo: 'Mã nguồn GitHub',
      githubBackend: 'GitHub Backend',
      githubFrontend: 'GitHub Frontend',
      liveDemo: 'Trải nghiệm Live',
      keyHighlights: 'Điểm nổi bật về kỹ thuật',
      techStackLabel: 'Công nghệ',
    },
    achievements: {
      title: 'Thành Tích & Học Vấn',
      subtitle: 'Kết quả học tập xuất sắc và các cột mốc nổi bật',
      gpaNumber: '3.45',
      gpaLabel: 'GPA Tích Lũy',
      gpaDesc: 'Xếp loại Giỏi ngành Kỹ thuật phần mềm tại HaUI (Thang điểm 4.0)',
      scholarshipNumber: '01',
      scholarshipLabel: 'Học Bổng Khuyến Khích',
      scholarshipDesc: 'Học bổng khuyến khích học tập đạt được trong Kỳ 6',
      projectsNumber: '02+',
      projectsLabel: 'Dự Án Tiêu Biểu',
      projectsDesc: 'PhoneZone (Quarkus) & FBookShop (Spring Boot Microservices)',
      dedicationNumber: '100%',
      dedicationLabel: 'Nhiệt Huyết & Chủ Động',
      dedicationDesc: 'Đam mê Clean Code, kiến trúc chuẩn và khả năng tự nghiên cứu công nghệ mới',
      card1Title: 'Đại học Công nghiệp Hà Nội (HaUI)',
      card1Subtitle: 'Cử nhân Kỹ thuật phần mềm (2023 - Hiện tại)',
      card1Desc:
        'GPA: 3.45. Nắm vững kiến thức nền tảng: Lập trình hướng đối tượng (OOP), Cấu trúc dữ liệu & Giải thuật, Hệ quản trị CSDL, Mạng máy tính và Kiến trúc phần mềm.',
      card2Title: 'Học bổng Khuyến khích học tập loại Xuất sắc',
      card2Subtitle: 'Danh hiệu Sinh viên loại Giỏi năm học 2025 - 2026',
      card2Desc:
        'Học bổng khuyến khích học tập loại xuất sắc và đạt danh hiệu sinh viên loại giỏi năm học 2025 - 2026 tại Trường Đại học Công nghiệp Hà Nội (HaUI).',
      card3Title: 'Tinh thần Tự học & Tiếp cận Công nghệ mới',
      card3Subtitle: 'Hệ sinh thái Java & Cloud-Native hiện đại',
      card3Desc:
        'Chủ động nghiên cứu và áp dụng Java 21, Quarkus 3, Spring Boot 3, Docker containerization, RESTful API và triển khai ứng dụng lên Render & Neon Cloud.',
      card4Title: 'Nghiên Cứu Khoa Học tại HaUI',
      card4Subtitle: 'Trường Đại học Công nghiệp Hà Nội (HaUI)',
      card4Desc:
        'Tham gia nghiên cứu khoa học dưới sự hướng dẫn trực tiếp của Tiến sĩ tại trường Đại học Công nghiệp Hà Nội (HaUI), phát triển tư duy nghiên cứu độc lập, phân tích học thuật và tiếp cận kiến trúc hệ thống chuyên sâu.',
    },
    contact: {
      title: 'Liên Hệ Với Tôi',
      subtitle: 'Sẵn sàng trao đổi về cơ hội Thực tập sinh / Fresher Backend Developer',
      getInTouch: 'Thông Tin Liên Hệ',
      address: 'Nam Từ Liêm, Hà Nội, Việt Nam',
      email: 'nquanghuycv@gmail.com',
      phone: '0819012251',
      github: 'https://github.com/HuyBeros',
      yourName: 'Họ và tên của bạn',
      yourEmail: 'Email của bạn',
      yourSubject: 'Tiêu đề',
      yourMessage: 'Nội dung tin nhắn',
      sendMessage: 'Gửi Tin Nhắn',
      directMail: 'Gửi Email Trực Tiếp',
      copyright: '© 2026 Nguyễn Quang Huy. All Rights Reserved.',
      successMessage: 'Cảm ơn bạn! Thông tin đã sẵn sàng để gửi đi.',
      fillRequired: 'Vui lòng điền đầy đủ các thông tin bắt buộc.',
      labels: {
        address: 'Địa chỉ',
        email: 'Email',
        phone: 'Điện thoại',
        github: 'GitHub',
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
