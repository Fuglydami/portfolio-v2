const data = {
  home: {
    title: "Hi, I'm Damilare",
    subtitle: "Software Developer",
    description:
      "A Global talent, Who takes pride in playing with different stacks and love to give breath to Ui/Ux designs.",
  },
  about: {
    description:
      "A self-motivated and enthusiatic Front-End Developer who is passionate about writing clean and structured code. I am also committed to both personal and professional growth learning from any situation in which i find myself. As long as i collaborate with people who build on my interest in the field of technology, I can overcome every hurdle Cheers, you now know about me",
  },
  services: {
    frontend: [
      {
        id: 1,
        desc: "Javascript/TypeScript/Reactjs/React-Native",
      },
      {
        id: 2,
        desc: "HTML5/CSS/Tailwind CSS/Styled-Components/Material UI",
      },
      {
        id: 3,
        desc: "Custom Landing pages/Web Applications/ Enterprise Applications.portfolios/E-commerce websites etc",
      },
      {
        id: 4,
        desc: "Designing beautiful mobile first website",
      },
    ],
    backend: [
      {
        id: 1,
        desc: "Exposure in Nodejs, ExpressJs and MongoDB",
      },
      {
        id: 2,
        desc: "Version control; Git, GitHub, BitBucket",
      },
      {
        id: 3,
        desc: "Deployment; Azure, Netlify, Vercel,Git page, Heroku ",
      },
      {
        id: 4,
        desc: "Writing high-quality code",
      },
    ],
  },
  experience: {
    Companies: [
      {
        id: 1,
        desc: `My role requires building stable and maintainable codebase using
        ReactJs and any required technologies.
        i collaborate with the Agile team to ensure products were efficient
        and technically sound, likewise Working directly with client stakeholders to develop technical
        solutions for business cases.`,
      },
      {
        id: 2,
        desc: "My role is to write and style the front-end components that meet the requirements of our mock-ups and fulfill our user stories. I also monitor and process pull requests for production deployments. Technologies used: ReactJs, JavaScript, ES6, TailwindCSS, CSS3, HTML5, Styled-Components",
      },
      {
        id: 3,
        desc: "Translated designs and wireframes into high-quality code and wrote application interface code via javaScript following React.js workflows.",
      },
    ],
  },

  projects: [
    {
      id: 1,
      img: "/assets/img/admin.png",
      demoLink: "https://subcentralportal.azurewebsites.net/",
      title: "Central Admin Dashboard",
      description:
        "An Admin Dashboard for the subsidiaries of Firstbank of Nigeria (Guinea, Gambia, Sierra-Loane, Dr Congo) to provide support for it mobile applications",
    },
    {
      id: 2,
      img: "/assets/img/firstbank-admin.png",
      demoLink: "https://yapp-admin-frontend-2.azurewebsites.net/",
      title: "Quick Response Code Retail Payment",
      description: `First QR is a simple, secured, convenient and innovative payment
        mode usable by scanning a QR (Quick Response) Code using a
        payment app on phones.
        It was implemented on the Applications Management Portal that
        houses all First Bank customer applications
        `,
    },
    {
      id: 3,
      img: "/assets/img/ecommerce.png",
      demoLink: "https://comfy-sloth-ecommerce-website.netlify.app/",
      title: "Comfy Sloth Ecommerce Website",
      description:
        "A React Ecommerce website with stripe payment and authentication/authorization features",
    },
    {
      id: 4,
      img: "/assets/img/chat.png",
      demoLink: "https://chat-dami.netlify.app/",
      title: "Chat Application",
      description:
        "A real time chat application with socket.io and react-hooks",
    },
  ],
  contact: {
    phone: "+234 70 312 03859",
    email: "damoye81@gmail.com",
    location: "Lagos, Nigeria",
  },
};

export const socialLinks = {
  github: "https://github.com/Fuglydami",
  twitter: "https://twitter.com/blackkolanut",
  linkedIn: "https://www.linkedin.com/in/DamilareOyedeji/",
};

export default data;
