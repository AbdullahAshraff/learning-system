export const welcomeVideos=[
    { 
        courseId: 'welcome-006',
        lessonId: 'welcome-006-001',
        title: "Welcome To Our Course", 
        url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    { 
        courseId: 'welcome-006',
        lessonId: 'welcome-006-002',
        title: "What is programming ",
         url: "https://www.youtube.com/embed/6YMec72CEiU?si=irpQgmgJZ-g9ZM4Z"},
    { 
        courseId: 'welcome-006',
        lessonId: 'welcome-006-003',
        title: "Introduction to Programming",
         url: "https://www.youtube.com/embed/zOjov-2OZ0E?si=D1JlgAfOLBWHNcXr" },
    { 
        courseId: 'welcome-006',
        lessonId: 'welcome-006-004',
        title: "CS50 course for beginners",
         url: "https://www.youtube.com/embed/baLMODtYFog?si=8NFK9sHWStUBlfvC"},
  ]
  export const htmlVideos = [
    { 
        courseId: 'programming-001',
        lessonId: 'programming-001-001',
        title: "Programming Languages Overview",
         url: "https://www.youtube.com/embed/2lVDktWK-pc?si=Cq9U-mtEiPFR9655" },
    { 
        courseId: 'programming-001',
        lessonId: 'programming-001-002',
        title: "History of programming languages",
         url: "https://www.youtube.com/embed/YZV8Zv_YW7I?si=x_bPYmL0JTeFTj3T"},
  ];

  export const cssVideos = [
    { 
        courseId: 'coding-001',
        lessonId: 'coding-001-001',
        title: "What is coding?", 
        url: "https://www.youtube.com/embed/N7ZmPYaXoic?si=2kT2h_xVoWIIApoV"},
    { 
        courseId: 'coding-001',
        lessonId: 'coding-001-002',
        title: "Programming Vs Coding", 
        url: "https://www.youtube.com/embed/CIRGjwYgdT4?si=AUeAAjiM5GEhdB0A" },
  ];

  export const jsVideos = [
    { 
        courseId: 'proglang-001',
        lessonId: 'proglang-001-001',
        title: "Which language I should learn first", 
        url: "https://www.youtube.com/embed/poJfwre2PIs?si=MrskbGDw8qrMugA4" },
    { 
        courseId: 'proglang-001',
        lessonId: 'proglang-001-002',
        title: "Best programming language to learn", 
        url: "https://www.youtube.com/embed/kJOqIaGwQ7Y?si=vMla5epP5kAvogHb"},
  ];
   
  export const routingVideo = [
    { 
        courseId: 'python-001',
        lessonId: 'python-001-001',
        title: " Why Python ", 
        url: "https://www.youtube.com/embed/Y8Tko2YC5hA?si=qOFyNdFqrU5UIeUM"},
    {
        courseId: 'python-001',
        lessonId: 'python-001-002',
         title: " Python for beginners", 
        url:"https://www.youtube.com/embed/kqtD5dpn9C8?si=qRbacNs_SKiG97zL"},
    {
        courseId: 'python-001',
        lessonId: 'python-001-003',
         title: " Python Projects for beginners",
         url: "https://www.youtube.com/embed/4wGuB3oAKc4?si=kK5CokAWprSKzDed" },
  ];
  export const formvalidationVideos = [
    {
        courseId: 'problems-001',
        lessonId: 'problems-001-001',
         title: "Problem solving guide",
          url: "https://www.youtube.com/embed/UFc-RPbq8kg?si=dOoxV4ceQJzwAw1s" },
    { 
        courseId: 'problems-001',
        lessonId: 'problems-001-002',
        title: "Problem solving for beginners",
         url: "https://www.youtube.com/embed/Pt6aevav4Do?si=BF_kuo62O3gZq8ct" },
  ];
  export const reduxVideos = [
    {
        courseId: 'career-001',
        lessonId: 'career-001-001',
         title: "Career Paths",
         url: "https://www.youtube.com/embed/XmWkcePhf84?si=kgJ1r4LEv0wgnquR" },
    { 
        courseId: 'career-001',
        lessonId: 'career-001-002',
        title: "Career paths and How chooce it",
         url: "https://www.youtube.com/embed/oGy_uK6FrgE?si=rwjT826GKebxHgGf"},
  ];
  export const getCurrentVideos = (currentCourse) => {
    switch (currentCourse) {
        case "welcome":
            return welcomeVideos;
          case "programming":
            return htmlVideos;
          case "coding":
            return cssVideos;
          case "proglang":
            return jsVideos;
          case "python":
            return routingVideo;
          case "problems":
            return formvalidationVideos;
          case "career":
                return reduxVideos;
          default:
            return [];
    }
  };