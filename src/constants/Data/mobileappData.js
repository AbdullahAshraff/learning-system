export const welcomeVideos=[
    { 
        courseId: 'welcome-003',
        lessonId: 'welcome-003-001',
        title: "Welcome To Our Course",
         url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    {
        courseId: 'welcome-003',
        lessonId: 'welcome-003-002',
         title: "Introduction to Mobile Application development ",
         url: "https://www.youtube.com/embed/DsIviEKZad0?si=FIQggitsT7gCC_-S" },
    {   
        courseId: 'welcome-003',
        lessonId: 'welcome-003-003',
        title: "Android or IOS", 
        url: "https://www.youtube.com/embed/BXA_7ztE5M4?si=FrhN84ZyBSCFnigT"},
  ]
  export const htmlVideos = [
    { 
        courseId: 'kotlin-001',
        lessonId: 'kotlin-001-001',
        title: "Kotlin Programming - FreeCodeCamp",
         url: "https://www.youtube.com/embed/F9UC9DY-vIU?si=tegVSczn8zd7LHBl" },
    { 
        courseId: 'kotlin-001',
        lessonId: 'kotlin-001-002',
        title: "Android App Development in Kotlin - FreeCodeCamp", 
        url: "https://www.youtube.com/embed/fis26HvvDII?si=QbCYElYIEL7B5OXl"},
    { 
        courseId: 'kotlin-001',
        lessonId: 'kotlin-001-003',
        title: "Android App Development in Kotlin - In Arabic", 
        url: "https://www.youtube.com/embed/6nrx0PXAuhQ?si=RBceDu8-SvcNPF4J"},
  ];

  export const cssVideos = [
    {
        courseId: 'swift-001',
        lessonId: 'swift-001-003',
         title: " Swift Programming for Beginners",
         url: "https://www.youtube.com/embed/FcsY1YPBwzQ?si=QTJQbJ5vg67An0tB"},
    {
        courseId: 'swift-001',
        lessonId: 'swift-001-002',
         title: " iOS Development Course for Beginners", 
        url: "https://www.youtube.com/embed/comQ1-x2a1Q?si=SWtvU0-QbAN04VY4" },
    {
        courseId: 'swift-001',
        lessonId: 'swift-001-001',
         title: "SwiftUI Basics for iOS Development", 
        url: "https://www.youtube.com/embed/UJPdhx5zTaw?si=QZBNbl79_2_CpOY6"  },
    { 
        courseId: 'swift-001',
        lessonId: 'swift-001-004',
        title: " iOS App Development for Beginners",
         url: "https://www.youtube.com/embed/09TeUXjzpKs?si=shTP9GzAT_epV1aT" },
  ];

  export const jsVideos = [
    {
        courseId: 'firebase-001',
        lessonId: 'firebase-001-001',
         title: "Firebase For Andorid",
         url: "https://www.youtube.com/embed/b1bGrWrx5Mo?si=pgN8Ao-plCmnIvkv"},
    {
        courseId: 'firebase-001',
        lessonId: 'firebase-001-002',
         title: "Firebase For Ios", 
        url: "https://www.youtube.com/embed/1D-ZhTSpx1E?si=TWTqtsv3XX_D0gfJ"},
  ];
  export const routingVideo = [
    { 
        courseId: 'test-001',
        lessonId: 'test-001-002',
        title: " Andorid Testing ",
         url: "https://www.youtube.com/embed/nDCCwyS0_MQ?si=-DSKo43_i1nxUU1d"},
    { 
        courseId: 'tsest-001',
        lessonId: 'test-001-001', 
        title: " iOS App Store Deployment",
         url: "https://www.youtube.com/embed/fgTGADljAeg?si=2HTL9csGq-SxfEN6" },
  ];
 export const formvalidationVideos = [
    { 
        courseId: 'git-001',
        lessonId: 'git-001-002',
        title: "Git and GitHub for Beginners in Arabic",
         url: "https://www.youtube.com/embed/Q6G-J54vgKc?si=1iQKyq_rOlU-LL4u"},
    { 
        courseId: 'git-001',
        lessonId: 'git-001-001',
        title: "Setting Up CI/CD for Mobile Apps",
         url: "https://www.youtube.com/embed/NnkUGzaqqOc?si=E0s8fwoX-TBjI5RN" },
  ];

export const getCurrentVideos = (currentCourse) => {
    switch (currentCourse) {
    case "welcome":
        return welcomeVideos;
      case "kotlin":
        return htmlVideos;
      case "swift":
        return cssVideos;
      case "firebase":
        return jsVideos;
      case "test":
        return routingVideo;
      case "git":
        return formvalidationVideos;
      default:
        return [];
    }
  };