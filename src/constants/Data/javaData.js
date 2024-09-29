export const welcomeVideos=[
    {
        courseId: 'welcome-005',
        lessonId: 'welcome-005-001',
         title: "Welcome To Our Course", 
        url: "https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM" },
    {
        courseId: 'welcome-005',
        lessonId: 'welcome-005-002',
         title: "What is java language",
         url: "https://www.youtube.com/embed/mAtkPQO1FcA?si=_UfidYQfpFudo2x5" },
    {
        courseId: 'welcome-005',
        lessonId: 'welcome-005-003',
         title: "Why choose java",
         url: "https://www.youtube.com/embed/eJkwnS5ZkAI?si=tt_aDaSW3FOc8lZR" },
  ]
  export const htmlVideos = [
    { 
        courseId: 'java-001',
        lessonId: 'java-001-001',
        title: "Java Language for beginners",
         url: "https://www.youtube.com/embed/eIrMbAQSU34?si=_fbNGRicsc0Epvry" },
    {
        courseId: 'java-001',
        lessonId: 'java-001-002',
         title: "Java full tutorial", 
        url: "https://www.youtube.com/embed/grEKMHGYyns?si=TrCBXKxJVWJ-tc9P"  },
  ];

  export const cssVideos = [
    {
        courseId: 'javaoop-001',
        lessonId: 'javaoop-001-001',
         title: "Why and What java", 
        url: "https://www.youtube.com/embed/pTB0EiLXUC8?si=mMEPmq1w10YusM_U" },
    {
        courseId: 'javaoop-001',
        lessonId: 'javaoop-001-002',
         title: "OOP in Java",
         url:"https://www.youtube.com/embed/Af3s3KsxStY?si=dUtAs6SL9G5GkZhj" },
  ];

  export const jsVideos = [
    {
        courseId: 'javads-001',
        lessonId: 'javads-001-001', 
        title: "Datastructure What and How ?",
         url: "https://www.youtube.com/embed/SFEROgwxicA?si=fOknxsY-UDBcNjQC"},
    {
        courseId: 'javads-001',
        lessonId: 'javads-001-002',
         title: "Importance of DSA", 
        url: "https://www.youtube.com/embed/lXZn3eDFDgE?si=hqCfNr7sY2S8rkjh"},
    {
        courseId: 'javads-001',
        lessonId: 'javads-001-003',
         title: "Datastructure using java", 
        url: "https://www.youtube.com/embed/8MmMm2-kJV8?si=MAMwecEqL6AmgwuO" },
  ];
  export const routingVideo = [
    { 
        courseId: 'javaprj-001',
        lessonId: 'javaprj-001-001',
        title: "Top 10 projects using java", 
        url: "https://www.youtube.com/embed/5bXlinw_JlU?si=bRlBoOO7iXqorQzq" },
    { 
        courseId: 'javaprj-001',
        lessonId: 'javaprj-001-002',
        title: "Snake game using java", 
        url: "https://www.youtube.com/embed/bI6e6qjJ8JQ?si=IyZmudMjEKBuVMQx"},   
    { 
        courseId: 'javaprj-001',
        lessonId: 'javaprj-001-003',
        title: "What is next..!", 
        url: "https://www.youtube.com/embed/I4ASZZxLvZc?si=68IwjKLAXiCBkFsY"},
  ];

  export const getCurrentVideos = (currentCourse) => {
    switch (currentCourse) {
        case "welcome":
            return welcomeVideos;
          case "java":
            return htmlVideos;
          case "javaoop":
            return cssVideos;
          case "javads":
            return jsVideos;
        case "javaprj":
            return routingVideo;
          default:
            return [];
    }
  };