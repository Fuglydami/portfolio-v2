const data = {
  home: {
    title: "Hi, I'm Damilare",
    subtitle: 'Software Engineer',
    description: `A talented and performance-driven
      professional, with extensive
      education and experience in web and
      mobile development.`,
  },
  about: {
    description:
      'A self-motivated and enthusiatic Software Engineer who is passionate about writing clean and structured code. I am also committed to both personal and professional growth learning from any situation in which i find myself. As long as i collaborate with people who build on my interest in the field of technology, I can overcome every hurdle Cheers, you now know about me',
  },
  services: {
    frontend: [
      {
        id: 1,
        desc: 'Javascript/TypeScript/Reactjs/NextJs/React-Native',
      },
      {
        id: 2,
        desc: 'HTML5/CSS/Tailwind CSS/Styled-Components/Material UI',
      },
      {
        id: 3,
        desc: 'Designing beautiful mobile first website',
      },
      {
        id: 6,
        desc: 'Custom Landing pages/Web Applications/ Enterprise Applications/ portfolios/E-commerce websites etc',
      },
    ],
    backend: [
      {
        id: 1,
        desc: 'Exposure in Nodejs, ExpressJs and MongoDB',
      },
      {
        id: 2,
        desc: 'Version control; Git, GitHub, BitBucket',
      },
      {
        id: 3,
        desc: 'Deployment; Azure, Netlify, Vercel,Git page, Heroku, Spinakker ',
      },
      {
        id: 4,
        desc: 'Writing high-quality code',
      },
    ],
  },
  experience: {
    Companies: [
      {
        id: 1,
        desc: `Collaborating with product managers, OA team, UI/UX designers
        and backend Developers in developing and shipping various features
        on both we applications and mobile apps.`,
      },
      {
        id: 2,
        desc: `My role requires building stable and maintainable codebase using
        ReactJs and any required technologies.
        i collaborate with the Agile team to ensure products were efficient
        and technically sound, likewise Working directly with client stakeholders to develop technical
        solutions for business cases.`,
      },
      {
        id: 3,
        desc: 'My role is to write and style the front-end components that meet the requirements of our mock-ups and fulfill our user stories.  I also monitor and process pull requests for production deployments. Technologies used: ReactJs, JavaScript, ES6, TailwindCSS, CSS3, HTML5, Styled-Components',
      },
      {
        id: 4,
        desc: 'Translated designs and wireframes into high-quality code and wrote application interface code via javaScript following React.js workflows. Also, i wrote performance and efficient APIs.',
      },
    ],
  },

  projects: [
    {
      id: 1,
      img: '/assets/img/quickteller-paypoint.png',
      demoLink: 'https://paypoint.quickteller.com/',
      title: 'Quickteller Paypoint Agent Portal',
      description:
        'Quickteller Paypoint is a robust consumer services platform for convenient Airtime Recharge, Funds Transfer, Bill Payments, Cash Deposits, Cash Withdrawals and Insurance.',
    },
    {
      id: 2,
      img: '/assets/img/LODLC.png',
      demoLink: 'https://lodlc.lautech.edu.ng/portal/',
      title: 'Lautech Distance Learning Student Portal',
      description:
        'It is a comprehensive education management system that aimed to provide various features to enhances the student learning experience and streamline adminstrative processes',
    },
    {
      id: 3,
      img: '/assets/img/admin.png',
      demoLink: 'https://subcentralportal.azurewebsites.net/',
      title: 'Central Admin Dashboard',
      description:
        'An Admin Dashboard for the subsidiaries of Firstbank of Nigeria (Guinea, Gambia, Sierra-Loane, Dr Congo) to provide support for it mobile applications',
    },
    {
      id: 4,
      img: '/assets/img/firstbank-admin.png',
      demoLink: 'https://yapp-admin-frontend-2.azurewebsites.net/',
      title: 'Quick Response Code Retail Payment',
      description: `First QR is a simple, secured, convenient and innovative payment
        mode usable by scanning a QR (Quick Response) Code using a
        payment app on phones.
        It was implemented on the Applications Management Portal that
        houses all First Bank customer applications
        `,
    },
    {
      id: 5,
      img: '/assets/img/qpay.jpg',
      demoLink: 'https://qpay-dashboard.netlify.app/',
      title: 'Qpay - Online payment gateway',
      description:
        'QPay helps you settle payments on time and takes over your accounts receivable - for optimal cash and workflow.',
    },
    {
      id: 6,
      img: '/assets/img/ecommerce.png',
      demoLink: 'https://comfy-sloth-ecommerce-website.netlify.app/',
      title: 'Comfy Sloth Ecommerce Website',
      description:
        'A React Ecommerce website with stripe payment and authentication/authorization features',
    },
  ],
  contact: {
    phone: '+234 70 312 03859',
    email: 'damoye81@gmail.com',
    location: 'Lagos, Nigeria',
  },
};

export const socialLinks = {
  github: 'https://github.com/Fuglydami',
  twitter: 'https://twitter.com/blackkolanut',
  linkedIn: 'https://www.linkedin.com/in/DamilareOyedeji/',
};

export default data;
