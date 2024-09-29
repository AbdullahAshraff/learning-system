// Frontend

export  const welcomeVideos=[
    {
        courseId: 'welcome-001',
        lessonId: 'welcome-001-001', 
        title: "Welcome To Our Course",
         url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { 
        courseId: 'welcome-001',
        lessonId: 'welcome-001-002', 
        title: "What is Frontend",
         url: "https://www.youtube.com/embed/9He4UBLyk8Y?si=2ixsOPmlwxFhBnO5" },
    { 
        courseId: 'welcome-001',
        lessonId: 'welcome-001-003', 
        title: "Frontend Roadmap",
         url: "https://www.youtube.com/embed/GxmfcnU3feo?si=iazQYBX3AwE_qr8K" },
    { 
        courseId: 'welcome-001',
        lessonId: 'welcome-001-004',
        title: "Why Choose FrontEnd",
        url: "https://www.youtube.com/embed/NOfUCMzBNVg?si=yiEHMQLi2cQG-ckx" },
  ]
  export const htmlVideos = [
    { 
        courseId: 'html-001',
        lessonId: 'html-001-001',
        title: "Basics of HTML", 
        url: "https://www.youtube.com/embed/hT3j87FMR6M" },
    { 
        courseId: 'html-001',
        lessonId: 'html-001-002',
        title: "What is HTML?",
         url: "https://www.youtube.com/embed/UB1O30fR-EE" },
    {   
        courseId: 'html-001',
        lessonId: 'html-001-003',
        title: "HTML Elements and Attributes",
         url: "https://www.youtube.com/embed/lcZorMlEnhU?si=KWGs-98sT4z4tBH8"},
    { 
        courseId: 'html-001',
        lessonId: 'html-001-004',
        title: "HTML Forms and Inputs",
        url: "https://www.youtube.com/embed/frAGrGN00OA?si=7ceSzSkzK-ZYUkqg" },
  ];

  export const cssVideos = [
    {
        
        courseId: 'css-001',
        lessonId: 'css-001-001',
         title: "CSS Basics",
          url: "https://www.youtube.com/embed/1PnVor36_40" },
    { 
        courseId: 'css-001',
        lessonId: 'css-001-002',
        title: "Selectors and Specificity",
         url: "https://www.youtube.com/embed/yfoY53QXEnI" },
    { 
        courseId: 'css-001',
        lessonId: 'css-001-003',
        title: "Flex Box in CSS",
         url: "https://www.youtube.com/embed/JJSoEo8JSnc" },
    { 
        courseId: 'css-001',
        lessonId: 'css-001-004',
        title: "Box Model",
         url: "https://www.youtube.com/embed/nSst4-WbEZk?si=VN33bQp3Wejqm9EQ"  },
    { 
        courseId: 'css-001',
        lessonId: 'css-001-005',
        title: "Grid Layout",
         url: "https://www.youtube.com/embed/0xMQfnTU6oo?si=Spi0tktdyz9xo5fb"  },
  ];

  export const jsVideos = [
    { 
        courseId: 'js-001',
        lessonId: 'js-001-001',
        title: "JavaScript Basics", 
        url: "https://www.youtube.com/embed/2Ji-clqUYnA" },
    { 
        courseId: 'js-001',
        lessonId: 'js-001-002',
        title: "Variables and Data Types",
         url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    { 
        courseId: 'js-001',
        lessonId: 'js-001-003',
        title: "Functions in JavaScript",
         url: "https://www.youtube.com/embed/PkZNo7MFNFg" },
    {
        courseId: 'js-001',
        lessonId: 'js-001-004',
        title: "DOM Manipulation",
        url: "https://www.youtube.com/embed/Qqx_wzMmFeA" },
  ];

  export const getCurrentVideos = (currentCourse) => {
    switch (currentCourse) {
      case "welcome":
        return welcomeVideos;
      case "html":
        return htmlVideos;
      case "css":
        return cssVideos;
      case "js":
        return jsVideos;
      default:
        console.error(`No videos found for course: ${currentCourse}`);
        return [];
    }
  };