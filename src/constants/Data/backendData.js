export const welcomeVideos=[
    { 
        courseId: 'welcome-004',
        lessonId: 'welcome-004-001',
        title: "Welcome To Our Course",
         url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { 
        courseId: 'welcome-004',
        lessonId: 'welcome-004-002',
        title: "Introduction to backend development ", 
        url: "https://www.youtube.com/embed/WN5onNWfNc8?si=G1pUXMcG6Gfe3Iz9" },
    {
        courseId: 'welcome-004',
        lessonId: 'welcome-004-003',
         title: "Backend Roadmap",
         url: "https://www.youtube.com/embed/CVgzp2vfePs?si=h3bcfpIvuEFbLgzn"},
  ]
  export const htmlVideos = [
    { 
        courseId: 'node-001',
        lessonId: 'node-001-001',
        title: "what is nodejs",
         url: "https://www.youtube.com/embed/TlB_eWDSMt4?si=bUJ_uyDMeTT4vZb2" },
    {
        courseId: 'node-001',
        lessonId: 'node-001-002',
         title: "NodeJs basics for beginers", 
        url: "https://www.youtube.com/embed/f2EqECiTBL8?si=f-K59bUjjaXGAB2T"},
  ];

  export const cssVideos = [
    { 
        courseId: 'nodejs-001',
        lessonId: 'nodejs-001-001',
        title: " Understanding Node.js Event Loop", 
        url: "https://www.youtube.com/embed/P9csgxBgaZ8?si=7lOzgbySrubWtiW6"},
    {
        courseId: 'nodejs-001',
        lessonId: 'nodejs-001-002',
         title: " Node.js Modules and NPM", 
        url: "https://www.youtube.com/embed/9Amxzvq5LY8?si=_rU5jDR4mUaBvl7Y" },
    {
        courseId: 'nodejs-001',
        lessonId: 'nodejs-001-003',
         title: "Creating a Simple HTTP Server in Node.js", 
        url: "https://www.youtube.com/embed/Oe421EPjeBE?si=yowKt41SC9RyPax2"  },
    { 
        courseId: 'nodejs-001',
        lessonId: 'nodejs-001-004',
        title: " Node.js with File System",
         url: "https://www.youtube.com/embed/U57kU311-nE?si=UK_7Btxow4EzqIxv"  },
  ];

  export const jsVideos = [
    {
        courseId: 'express-001',
        lessonId: 'node-001-001',
         title: "Introduction to Express",
         url: "https://www.youtube.com/embed/L72fhGm1tfE?si=4q07kT3l-GGG2W6h" },
    { 
        courseId: 'express-001',
        lessonId: 'express-001-002',
        title: "Express for beginners", 
        url: "https://www.youtube.com/embed/DURM6yft8RU?si=UDyhMbS_BEmw80He" },
  ];
  export const routingVideo = [
    { 
        courseId: 'mongo-001',
        lessonId: 'mongo-001-001',
        title: " Introduction to MongoDB ",
         url: "https://www.youtube.com/embed/-56x56UppqQ?si=J9M8NmRoFbfkqbZA"},
    { 
        courseId: 'mongo-001',
        lessonId: 'mongo-002-001',
        title: " Building a CRUD API with Node.js and MongoDB",
         url: "https://www.youtube.com/embed/fgTGADljAeg?si=2HTL9csGq-SxfEN6" },
    { 
        courseId: 'mongo-001',
        lessonId: 'mongo-003-001',
        title: " Using MySQL with Node.js", 
        url: "https://www.youtube.com/embed/EN6Dx22cPRI?si=9yBKAm8svkHjnu9b" },
  ];
  export const formvalidationVideos = [
    { 
        courseId: 'auth-001',
        lessonId: 'auth-001-001',
        title: "JWT Authentication in Node.js",
         url: "https://www.youtube.com/embed/favjC6EKFgw?si=VpMw7JuFOkjIiNyu" },
    {
        courseId: 'auth-001',
        lessonId: 'auth-001-002',
         title: " OAuth Authentication with Node.js",
         url: "https://www.youtube.com/embed/Qt3KJZ2kQk0?si=hIJmikBFwxdY7vKL" },
  ];
  export const reduxVideos = [
    {
        courseId: 'deploy-001',
        lessonId: 'deploy-001-001',
         title: "Deploying Node.js Apps to Heroku", 
        url: "https://www.youtube.com/embed/TkVwVHbzukw?si=v3b14pbzm9dqI_8k" },
    {
        courseId: 'deploy-001',
        lessonId: 'deploy-001-002',
         title: "Node.js Production Best Practices",
         url: "https://www.youtube.com/embed/fc6o1gwqZuA?si=AzaIXxtV7thYH92q"},
  ];
  export const getCurrentVideos = (currentCourse) => {
    switch (currentCourse) {
        case "welcome":
            return welcomeVideos;
          case "node":
            return htmlVideos;
          case "nodejs":
            return cssVideos;
          case "express":
            return jsVideos;
          case "mongo":
            return routingVideo;
          case "auth":
            return formvalidationVideos;
          case "deploy":
                return reduxVideos;
          default:
            return [];
    }
  };