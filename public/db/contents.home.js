export const homePageContent = {
  hero: {
    heading: (
      <>
        A Tutor Who Fits Your Child,{" "}
        <span className="text-primary">Not the Other Way Around</span> —
        Serving Mumbai, Navi Mumbai &amp; Thane
      </>
    ),
    description:
      "Tell us the board, class, and subject, and we'll shortlist tutors who've actually taught that syllabus before — for CBSE, ICSE, IB, IGCSE, SSC, competitive-exam prep, spoken English, and more.",
    action: {
      route: "/contact-us",
      label: "Get a Tutor Shortlist",
    },
  },

  services: {
    heading: "Tutors Matched to What Your Child Actually Needs",
    description:
      "Teachers Bureau shortlists tutors based on board, class, subject and learning style, so you spend less time searching and more time seeing progress.",
    serviceList: [
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            ></path>
          </svg>
        ),
        name: "Web development",
        description:
          "Our developers specialize in developing full-fledged full stack applications for your business with extensive understanding and industry experience",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 32 32"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 13 4 L 13 6 L 9 6 C 7.355469 6 6 7.355469 6 9 L 6 13 L 4 13 L 4 19 L 10 19 L 10 13 L 8 13 L 8 9 C 8 8.433594 8.433594 8 9 8 L 13 8 L 13 10 L 19 10 L 19 4 Z M 15 6 L 17 6 L 17 8 L 15 8 Z M 20 6 L 20 8 L 23 8 C 23.566406 8 24 8.433594 24 9 L 24 13 L 22 13 L 22 19 L 28 19 L 28 13 L 26 13 L 26 9 C 26 7.355469 24.644531 6 23 6 Z M 6 15 L 8 15 L 8 17 L 6 17 Z M 24 15 L 26 15 L 26 17 L 24 17 Z M 6 20 L 6 23 C 6 24.644531 7.355469 26 9 26 L 13 26 L 13 28 L 19 28 L 19 22 L 13 22 L 13 24 L 9 24 C 8.433594 24 8 23.566406 8 23 L 8 20 Z M 24 20 L 24 23 C 24 23.566406 23.566406 24 23 24 L 20 24 L 20 26 L 23 26 C 24.644531 26 26 24.644531 26 23 L 26 20 Z M 15 24 L 17 24 L 17 26 L 15 26 Z"></path>
          </svg>
        ),
        name: "App Development ",
        description:
          "Build dynamic and scalable apps that align with your business goals, using advanced design and frameworks to deliver seamless, high-performance experiences",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="448"
              height="416"
              x="32"
              y="48"
              fill="none"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="48"
              ry="48"
            ></rect>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="m96 112 80 64-80 64m96 0h64"
            ></path>
          </svg>
        ),
        name: "Custom Software Development",
        description:
          "Unlock your business potential with Custom Software Development. Tailored solutions, advanced tech, and automation to streamline operations and future-proof your success.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            ></path>
          </svg>
        ),
        name: "360 digital marketing",
        description:
          "Boost your online presence with 360° Digital Marketing. From SEO to social media, we deliver comprehensive strategies that drive traffic, engagement, and business growth.",
      },

      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        ),
        name: " E-Commerce development",
        description:
          "Transform your business with custom E-Commerce solutions. We create seamless, scalable online stores that enhance customer experience and drive sales, ensuring your growth in the digital marketplace.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
            ></path>
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
          </svg>
        ),
        name: "Branding",
        description:
          "Elevate your brand with strategic branding solutions. We craft unique identities that resonate with your audience, build trust, and create lasting impressions for business growth",
      },
    ],
  },

  // HOME: development service
  developmentServices: [
    {
      label: "Software Development",
      metaData: {
        title: "Software development services",
        description:
          "Transform your business with custom software solutions, built to scale, automate processes, and drive growth using the latest technologies and tailored functionality",
        navigation: {
          label: "Build Software",
          route: "#",
        },
        items: [
          [
            {
              label: "Custom Software Development",
              route: "#custom-software-development",
            },
            {
              label: "Cloud Software Solutions",
              route: "#cloud-software-solutions",
            },
            {
              label: "Full-stack Development",
              route: "#full-stack-development",
            },
            {
              label: "Enterprise Software Solutions",
              route: "#enterprise-software-solutions",
            },
            {
              label: "API Development & Integration",
              route: "#api-development-integration",
            },
          ],
          [
            {
              label: "Big Data Development",
              route: "#big-data-development",
            },
            {
              label: "Cross-platform Development",
              route: "#cross-platform-development",
            },
            {
              label: "Software as a Service (SaaS)",
              route: "#software-as-a-service-saas",
            },
            {
              label: "Software Integration Services",
              route: "#software-integration-services",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
    {
      label: "Application Development",
      metaData: {
        title: "Application Development Services",
        description:
          "Create impactful mobile and web applications with our Application Development services. We build scalable, user-friendly solutions tailored to your business needs for seamless user experiences.",
        navigation: {
          label: "Develop Applications",
          route: "#",
        },
        items: [
          [
            {
              label: "Custom Application Development",
              route: "#custom-application-development",
            },
            {
              label: "Web Application",
              route: "#web-application",
            },
            {
              label: "Sales Dashboard",
              route: "#sales-dashboard",
            },
            {
              label: "Admin Dashboard",
              route: "#admin-dashboard",
            },
            {
              label: "CMS Development",
              route: "#cms-development",
            },
          ],
          [
            {
              label: "LMS Development",
              route: "#lms-development",
            },
            {
              label: "Progressive Web App",
              route: "#progressive-web-app",
            },
            {
              label: "Application Maintenance",
              route: "#application-maintenance",
            },
            {
              label: "Web Analytics & Portals",
              route: "#web-analytics-portals",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
    {
      label: "Web Development",
      metaData: {
        title: "Web Development Services",
        description:
          "Transform your online presence with expert Web Development services. From responsive design to custom solutions and e-commerce integration, we build fast, secure, and scalable websites that drive business growth and engage your audience.",
        navigation: {
          label: "Develop Websites",
          route: "#",
        },
        items: [
          [
            {
              label: "Full-Stack Development",
              route: "#full-stack-development",
            },
            {
              label: "Responsive Web Design",
              route: "#responsive-web-design",
            },
            {
              label: "Mobile-Friendly Web Development",
              route: "#mobile-friendly-web-development",
            },
            {
              label: "Custom Web Solutions",
              route: "#custom-web-solutions",
            },
            {
              label: "WordPress Development",
              route: "#wordpress-development",
            },
          ],
          [
            {
              label: "Web Portal Development",
              route: "#web-portal-development",
            },
            {
              label: "Website Redesign",
              route: "#website-redesign",
            },
            {
              label: "API Development & Integration",
              route: "#api-development-integration",
            },
            {
              label: "Laravel Development",
              route: "#laravel-development",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
    {
      label: "Mobile App Development",
      metaData: {
        title: "Mobile App Development Services",
        description:
          "Unlock your business potential with our Mobile App Development services. We create custom, user-friendly apps for iOS and Android, designed to scale, enhance user engagement, and drive growth for your brand.",
        navigation: {
          label: "Develop Mobile Apps",
          route: "#",
        },
        items: [
          [
            {
              label: "Cross-Platform Compatibility",
              route: "#cross-platform-compatibility",
            },
            {
              label: "Native App Development",
              route: "#native-app-development",
            },
            {
              label: "Custom Mobile Solutions",
              route: "#custom-mobile-solutions",
            },
            {
              label: "User-Centric Design",
              route: "#user-centric-design",
            },
            {
              label: "App Prototyping",
              route: "#app-prototyping",
            },

            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
          [
            {
              label: "Real-Time Functionality",
              route: "#real-time-functionality",
            },
            {
              label: "App Maintenance & Updates",
              route: "#app-maintenance-updates",
            },
            {
              label: "Mobile App Integration",
              route: "#mobile-app-integration",
            },
            {
              label: "Cloud Integration",
              route: "#cloud-integration",
            },
            {
              label: "Analytics Integration",
              route: "#analytics-integration",
            },
            {
              label: "Location-Based Services",
              route: "#location-based-services",
            },
          ],
        ],
      },
    },
    {
      label: "Custom Software Development",
      metaData: {
        title: "Custom Software Development Services",
        description:
          "Unlock tailored solutions with our Custom Software Development services. We create scalable, efficient software that streamlines operations, enhances productivity, and drives business growth with advanced technology.",
        navigation: {
          label: "Develop Custom Software",
          route: "#",
        },
        items: [
          [
            {
              label: "SaaS Development",
              route: "#saas-development",
            },
            {
              label: "Cloud-Based Software Development",
              route: "#cloud-based-software-development",
            },
            {
              label: "Business Process Automation",
              route: "#business-process-automation",
            },
            {
              label: "Custom CRM Development",
              route: "#custom-crm-development",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
          [
            {
              label: "API Development & Integration",
              route: "#api-development-integration",
            },
            {
              label: "Custom Dashboard",
              route: "#custom-dashboard",
            },
            {
              label: "Advanced Analytics & Reporting",
              route: "#advanced-analytics-reporting",
            },
            {
              label: "Custom CMS",
              route: "#custom-cms",
            },
            {
              label: "Custom LMS",
              route: "#custom-lms",
            },
          ],
        ],
      },
    },
    {
      label: "E-Commerce Development",
      metaData: {
        title: "E-Commerce Development Services",
        description:
          "Boost your online business with our E-Commerce Development services. We create secure, scalable, and user-friendly e-commerce platforms with seamless payment integration, driving sales and enhancing customer experiences.",
        navigation: {
          label: "Develop E-Commerce Platforms",
          route: "#",
        },
        items: [
          [
            {
              label: "Custom E-Commerce Solutions",
              route: "#custom-ecommerce-solutions",
            },
            {
              label: "Online Store Development",
              route: "#online-store-development",
            },
            {
              label: "Shopify Development",
              route: "#shopify-development",
            },
            {
              label: "WooCommerce Development",
              route: "#woocommerce-development",
            },
            {
              label: "Inventory Management Systems",
              route: "#inventory-management-systems",
            },
          ],
          [
            {
              label: "B2B E-Commerce Solutions",
              route: "#b2b-ecommerce-solutions",
            },
            {
              label: "B2C E-Commerce Solutions",
              route: "#b2c-ecommerce-solutions",
            },
            {
              label: "Payment Gateway Integration",
              route: "#payment-gateway-integration",
            },
            {
              label: "Order Management System (OMS)",
              route: "#order-management-system",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
    {
      label: "Digital Marketing",
      metaData: {
        title: "360° Digital Marketing Services",
        description:
          "Maximize your online presence with our 360° Digital Marketing services. From SEO and social media management to PPC and content marketing, we offer comprehensive strategies that drive traffic, engage audiences, and grow your business.",
        navigation: {
          label: "Digital Marketing",
          route: "#",
        },
        items: [
          [
            {
              label: "Digital Marketing",
              route: "#digital-marketing",
            },
            {
              label: "SEO (Search Engine Optimization)",
              route: "#seo-search-engine-optimization",
            },
            {
              label: "Social Media Marketing (SMM)",
              route: "#social-media-marketing-smm",
            },
            {
              label: "Pay-Per-Click (PPC) Advertising",
              route: "#pay-per-click-ppc-advertising",
            },
            {
              label: "Content Marketing",
              route: "#content-marketing",
            },
          ],
          [
            {
              label: "Email Marketing",
              route: "#email-marketing",
            },
            {
              label: "Branding & Strategy",
              route: "#branding-strategy",
            },
            {
              label: "Local SEO",
              route: "#local-seo",
            },
            {
              label: "Google Ads",
              route: "#google-ads",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
    {
      label: "Branding Services",
      metaData: {
        title: "Branding Services",
        description:
          "Transform your business with our Branding services. We craft unique brand identities, create compelling logos, and develop cohesive strategies to elevate your brand’s visibility and connect with your audience.",
        navigation: {
          label: "Branding",
          route: "#",
        },
        items: [
          [
            {
              label: "Brand Development",
              route: "#brand-development",
            },
            {
              label: "Custom Brand Identity",
              route: "#custom-brand-identity",
            },
            {
              label: "Brand Strategy Development",
              route: "#brand-strategy-development",
            },
            {
              label: "Logo Design",
              route: "#logo-design",
            },
            {
              label: "Corporate Branding",
              route: "#corporate-branding",
            },
          ],
          [
            {
              label: "Brand Awareness Campaigns",
              route: "#brand-awareness-campaigns",
            },
            {
              label: "Personal Branding",
              route: "#personal-branding",
            },
            {
              label: "PR Services",
              route: "#pr-services",
            },
            {
              label: "Creatives",
              route: "#creatives",
            },
            {
              label: "Rebranding Services",
              route: "#rebranding-services",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
    {
      label: "UI/UX Design",
      metaData: {
        title: "UI/UX Development Services",
        description:
          "Enhance user satisfaction with our UI/UX Development services. We design intuitive, engaging interfaces and seamless user experiences that boost usability, conversion rates, and customer loyalty.",
        navigation: {
          label: "UI/UX Development",
          route: "#",
        },
        items: [
          [
            {
              label: "User-Centered Design",
              route: "#user-centered-design",
            },
            {
              label: "Wireframing & Prototyping",
              route: "#wireframing-prototyping",
            },
            {
              label: "Responsive Design",
              route: "#responsive-design",
            },
            {
              label: "UX Research",
              route: "#ux-research",
            },
            {
              label: "Interaction Design",
              route: "#interaction-design",
            },
          ],
          [
            {
              label: "Usability Testing",
              route: "#usability-testing",
            },
            {
              label: "Visual Design",
              route: "#visual-design",
            },
            {
              label: "Mobile App UI/UX",
              route: "#mobile-app-ui-ux",
            },
            {
              label: "Conversion Rate Optimization (CRO)",
              route: "#conversion-rate-optimization",
            },
            {
              label: "Hire Dedicated Team",
              route: "#hire-dedicated-team",
            },
          ],
        ],
      },
    },
  ],

  // HOME: Technology

  technologies: [
    {
      category: "Frontend",
      items: [
        { route: "#", name: "JavaScript", icon: "js-itsoftworld.png" },

        {
          route: "#",
          name: "ReactJS",
          icon: "react-js-itsoftworld.png",
        },
        { route: "#", name: "AngularJS", icon: "angular-js-itsoftworld.png" },
        { route: "#", name: "NextJS", icon: "next-js-itsoftworld.png" },
        { route: "#", name: "Vue.js", icon: "vue-js-itsoftworld.png" },
        { route: "#", name: "CSS3", icon: "css-itsoftworld.webp" },
        { route: "#", name: "HTML5", icon: "html-itsoftworld.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { route: "#", name: "Node.js", icon: "node-js-itsoftworld.png" },
        { route: "#", name: "PHP", icon: "php-itsoftworld.png" },
        { route: "#", name: "Python", icon: "python-itsoftworld.png" },
        { route: "#", name: "Express", icon: "express-js-itsoftworld.png" },
        { route: "#", name: "Nest.js", icon: "nest-js-itsoftworld.png" },
        { route: "#", name: "laravel", icon: "laravel-itsoftworld.png" },
      ],
    },
    {
      category: "Mobile",
      items: [
        { route: "#", name: "Swift", icon: "swift-itsoftworld.png" },
        { route: "#", name: "Flutter", icon: "flutter-itsoftworld.png" },
        {
          route: "#",
          name: "React Native",
          icon: "react-js-itsoftworld.png",
        },
        {
          route: "#",
          name: "kotlin",
          icon: "kotlin-itsoftworld.png",
        },
      ],
    },
    {
      category: "Database",
      items: [
        { route: "#", name: "SQL Server", icon: "sql-itsoftworld.png" },
        { route: "#", name: "MySQL", icon: "mysql-itsoftworld.png" },
        { route: "#", name: "PostgreSQL", icon: "postgre-itsoftworld.png" },
        { route: "#", name: "MongoDB", icon: "mongo-db-itsoftworld.png" },
        { route: "#", name: "Firebase", icon: "firebase-itsoftworld.png" },
      ],
    },
  ],

  whyChoose: {
    heading: "What Makes Us Different",
    description:
      "Most tutor directories hand you a long list and leave the matching to you. Teachers Bureau does the shortlisting first, so you only talk to tutors who are actually a fit for your child.",
    reasons: [
      {
        title: "Teachers Bureau",
        description:
          "We screen every tutor on our panel before recommending them — subject depth, teaching experience, and how clearly they explain a concept to a student who's stuck. You get a short, relevant list, not a directory to search through yourself.",
        items: [
          "Tutors screened before they're recommended",
          "Matched to your child's pace, not just the syllabus",
          "Home visits or online, your choice",
        ],
      },
      {
        title: "Subject-Ready Tutors",
        description:
          "Our panel covers CBSE, ICSE, IB, IGCSE and State Boards, plus focused coaching for JEE, NEET, CET and Olympiad prep. Every tutor is picked for depth in the subject they'll actually teach.",
        items: [
          "CBSE, ICSE, IB, IGCSE & State Boards",
          "JEE, NEET, CET & Olympiad coaching",
          "Verified subject expertise",
        ],
      },
      {
        title: "A Plan Built Around Your Child",
        description:
          "We ask what's actually going wrong — a weak chapter, exam nerves, a syllabus that moved too fast — before matching a tutor, so the plan targets the real problem instead of generic revision.",
        items: [
          "Built around specific weak areas",
          "Adjusted as the student progresses",
          "Exam-focused when the goal is exam-focused",
        ],
      },
    ],
  },

  recommendation: {
    heading: "Families Who Found Their Tutor Here",
    description:
      "A shortlist beats a search engine. Here's what parents and students said after Teachers Bureau matched them with a tutor.",
    features: ["Fast Matching", "Screened Tutors", "Ongoing Support"],
    reviews: [
      {
        review:
          "I sent one message and had two tutor options within a day. Both were clearly briefed on my son's syllabus already — no repeating myself.",
        name: "Student",
        designation: "Teachers Bureau",
        avatar: null,
      },
      {
        review:
          "My daughter's Maths tutor actually adjusted the pace after the first two sessions once he saw where she was stuck. That kind of attention is hard to find.",
        name: "Student",
        designation: "Teachers Bureau",
        avatar: null,
      },
      {
        review:
          "We needed someone urgently before board exams. Teachers Bureau found a tutor who'd handled the same board before, within our budget.",
        name: "Student",
        designation: "Teachers Bureau",
        avatar: null,
      },
      {
        review:
          "What stood out was that they checked back in after the first week to make sure the tutor was actually working out, not just left us to figure it out.",
        name: "Parent",
        designation: "Teachers Bureau",
        avatar: null,
      },
    ],
  },

  workplace: {
    heading: "How Teachers Bureau Matches You With a Tutor",
    description:
      "Tell us what's needed, get a short list of screened tutors nearby — no browsing profiles yourself.",
    body: (
      <>
        Matching is based on board, class, subject, and how your child learns
        best — not just a subject-line search.
        <br />
        <br />
        Every tutor on our panel is verified before we recommend them, for
        both home and online sessions, so the person showing up at your door
        or on the call is someone we've already vetted.
      </>
    ),
    heroImage:
      "/assets/home/Why Founders Choose Sgwebapp for Their Tech Needs.png",
    action: {
      label: "Get Matched With a Tutor",
      route: "/contact-us",
    },

    card: {
      title: "A Tutor Chosen for Your Child Specifically",
      description: (
        <>
          Tell us the class, board, subject, and what's not working right
          now. We match a tutor to that — not a generic profile — with
          flexible scheduling for both home visits and online sessions.
        </>
      ),
      action: {
        label: (
          <>
            <span className="text-white">
              Screened Tutors. Real Matching. Book a Free Trial Session.
            </span>{" "}
            Get Started.
          </>
        ),
        route: "/contact-us",
      },
    },
  },

  ctaOne: {
    heading: "Ready to Find a Tutor?",
    description:
      "Share your child's class, board, and subject — we'll come back with a shortlist, usually within a day.",
    action: {
      label: "Request a Tutor",
      route: "/contact-us",
    },
  },

  faqs: [
    {
      question: "What does Teachers Bureau actually do?",
      answer:
        "We screen home and online tutors, then match parents and students with the ones best suited to their board, class, and subject.",
    },
    {
      question: "Which boards do your tutors cover?",
      answer:
        "CBSE, ICSE, SSC, IB, IGCSE, State Boards, and competitive-exam preparation.",
    },
    {
      question: "Home tuition or online — can I choose?",
      answer:
        "Yes. Let us know your preference and we'll match a tutor available for that format.",
    },
    {
      question: "How fast will I get a tutor?",
      answer:
        "Most requests get a shortlist within a day, depending on subject and location.",
    },
    {
      question: "Is a trial session available?",
      answer:
        "Often yes, depending on the tutor and subject — ask us when we call you back.",
    },
    {
      question: "What if the tutor isn't a good fit?",
      answer:
        "Tell us and we'll re-match you with someone else — we'd rather fix it early than have you stick with a bad fit.",
    },
    {
      question: "Do you cover competitive exam coaching?",
      answer:
        "Yes, including JEE, NEET, and other entrance-exam preparation.",
    },
    {
      question: "How do I pay for sessions?",
      answer:
        "UPI, bank transfer, and other common online payment options are supported.",
    },
    {
      question: "How do I reach Teachers Bureau?",
      answer:
        "Phone, WhatsApp, email, or the enquiry form on this site — whichever is easiest for you.",
    },
  ],
};
