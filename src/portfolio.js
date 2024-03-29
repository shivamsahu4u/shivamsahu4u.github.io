/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shivam's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shivam Sahu Portfolio",
    type: "website",
    url: "https://shivamsahu4u.github.io/",
  },
};

//Home Page
const greeting = {
  
  title: "</ Changing the world one commit at a Time >",
  logo_name: "Shivam  Sahu",
  nickname: "shivam",
  subTitle:
    "Hi, I'm Shivam Sahu. Software Engineer at DXC Technology",
  resumeLink:
    "https://www.overleaf.com/read/fjtwshwdddwh",
  portfolio_repository: "https://github.com/shivamsahu4u/shivamsahu4u.github.io",
  githubProfile: "https://github.com/shivamsahu4u",
};

const socialMediaLinks = [
  

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivamsahu4u/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/shivamsahu4u",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  
  {
    name: "CodePen",
    link: "https://codepen.io/shivamsahu4u",
    fontAwesomeIcon: "fa-codepen", // Reference https://fontawesome.com/icons/envelope?s=solid
    backgroundColor: "#183153", // Reference https://simpleicons.org/?q=codepen
  }, 

  {
    name: "Gmail",
    link: "mailto:shivamsahu4u@gmail.com",
    fontAwesomeIcon: "fa-monero", // Reference https://fontawesome.com/icons/envelope?s=solid
    backgroundColor: "#EA4335", // Reference https://simpleicons.org/?q=gmail
  }, 
  
   
  {
    name: "Instagram",
    link: "https://www.instagram.com/shivamsahu4u/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Revise, update, refactor and debug code",
        "⚡ Creating application on .NET framework using C#",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular-icon",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Oracle DB",
          fontAwesomeClassname: "fontisto:oracle",
          style: {
            color: "#663399",
          },
        },
        
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/shivamsahu4u",
    },
    {
      siteName: "Leetcode",
        iconifyClassname: "cib:leetcode",
      style: {
        color: "#5B4638",
      },
        profileLink: "https://leetcode.com/shivamsahu4u/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/shivamsahu4u",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shivamsahu4u",
    },
    {
      siteName: "PrepBytes",
        iconifyClassname: "bi:code-slash",
      style: {
        color: "#20BEFF",
      },
        profileLink: "https://mycode.prepbytes.com/profile/shivamsahu4u",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bansal Institute of Research & Technology, Bhopal",
      subtitle: "B.E. with Honors in Computer Science [ 8.12/10 (CGPA)]",
      logo_path: "bansal-logo.png",
      alt_name: "BIRT Bhopal",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied core subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Received Award of Punctuality by Bansal Group of Institutions",
        "⚡ Participated in University Taekwondo Nodal competition 🥋 in Jan 2019 & achieved Semifinalist rank.",
      ],
          website_link: "https://bansalinstitutes.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
        "I'm trained on .NET full stack development and certified on Azure fundamentals. I've worked with various development as well as support projects with Hewlett Packard Enterprise (HPE). I love connecting with people working on different platform, working on different technology stack.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Professional Software Engineer",
          company: "DXC Technology",
          company_url: "https://dxc.technology/",
          logo_path: "dxc_logo_2021.png",
          duration: "Nov 2021 - PRESENT",
          location: "Remote",
          description:
                  "Working with Flex team and implemented functionality enhancements in project. Also Working on developing and deploying automation scripts on Development servers. I've specialization in C#, .NET, IIS, SQL Server, Oracle DB, JavaScript & Azure fundamentals",
          color: "#0879bf",
        },
        {
            title: "Associate Professional Software Engineer",
            company: "DXC Technology",
            company_url: "https://www.linkedin.com/company/dxctechnology/",
            logo_path: "dxc_logo.png",
          duration: "June 2020 - Nov 2021",
          location: "Remote",
          description:
                "Worked on logging, prioritizing and resolving production incidents reported by users and track them against various SLAs. The projects involve resolving recurring incidents permanently, performing break fixes and implementing preventive action items. Worked on various tools like Tidal Automation, HPSM, ServiceNow, Toad for Oracle, WinSCP & puTTY.",
          color: "#9b1578",
        },
      
      ],
    },
    {
      title: "Certification",
      experiences: [
        {
          title: "Microsoft Certified: Azure Fundamentals",
          company: "Microsoft",
          company_url: "https://www.credly.com/badges/562ba500-c5f3-4e8d-9aeb-3b8f9c769234",
          logo_path: "az900.png",
          duration: "June 2022",
          location: "",
          description:
            "Demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.  ",
              color: "#181717",
              gallery: "Show Credential",
              gallery_url: "https://www.credly.com/badges/562ba500-c5f3-4e8d-9aeb-3b8f9c769234",
              color: "#ee3c26",
        },
        /*{
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
       /*
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
       */ {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "",
          description:
            "I am actively contributing to projects. I have contributed to Hacktoberfest2018 and HacktoberFest 2019 sponsered by Digital Ocean and twilio. These contributions include bug fixes, feature requests and formulating proper documentation for project.  ",
              color: "#181717",
              gallery: "Gallery",
              gallery_url: "http://tiny.cc/shivam-gallery/",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. and My best experience is to create an N-Tier architecture based .NET project using Angular as front end and C# at backend.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
/*  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
*/};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_shivam.png",
    description:
      "I am available on the following social media. You can message me, I will reply within 24 hours. I can help you with DS, Algorithms, C#, .NET, IIS, Javascript, MS SQL Server, Oracle DB, Azure fundamentals, Cloud and Development.",
    },

  blogSection: {
  /*  title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://shivamsahu4u.github.io",
    avatar_image_path: "blogs_image.svg",
 */ },
  addressSection: {
    title: "Get in Touch",
    subtitle:
      "For any information regarding my work, kindly contact me though the following phone number or email address.",
    avatar_image_path: "address_image.svg",
    link: "mailto:shivamsahu4u@gmail.com",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 741505****",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
