import frontendImage from './../assets/frontend.jpg'; // Update with the correct image path
import reactImage from './../assets/React.jpeg';       // Update with the correct image path
import mobileImage from './../assets/Mobile.png';     // Update with the correct image path
import javaImage from './../assets/Java.jpeg';          // Update with the correct image path
import backendImage from './../assets/Backend.png';  
export const tracksList = [
  {
    //front
    id: 'frontend-001',
    title: 'Frontend Track',
    courseIds: ['welcome-001', 'html-001', 'css-001', 'js-001'],
    image: frontendImage,
    description: 'Master the essentials of web development by learning how to create visually appealing and interactive user interfaces using HTML, CSS, and JavaScript.',
  },
  {
    //react
    id: 'react-001',
    title: 'React Track',
    courseIds: [
      'welcomereact-002',
      'es6-001',
      'react-001',
      'hooks-001',
      'routing-001',
      'formvalidation-001',
      'redux-001',
    ],
    image: reactImage,
    description: 'Dive deep into the world of modern web development with React. Learn how to build scalable, high-performance web applications using hooks, routing, form validation, and state management with Redux.',
  },
  {
    //mobile
    id: 'mobile-001',
    title: 'Mobile-App Track',
    courseIds: [
      'welcomemobile-003',
      'kotlin-001',
      'swift-001',
      'firebase-001',
      'test-001',
      'git-001',
    ],
    image: mobileImage,
    description: 'Build native and cross-platform mobile applications for Android and iOS. Learn key mobile technologies like Kotlin, Swift, Firebase integration, and best practices for mobile development.',
  },
  {
    //beginner
    id: 'beginner-001',
    title: 'Beginner Track',
    courseIds: [
      'welcomebeginner-006',
      'programming-001',
      'coding-001',
      'python-001',
      'career-001',
      'problems-001',
    ],
    image: backendImage,
    description: 'Start your programming journey here! Learn foundational programming concepts, explore different languages, and get hands-on experience solving real-world problems.',
  },
  {
    //java
    id: 'java-001',
    title: 'Java Track',
    courseIds: [
      'welcomejava-005',
      'java-001',
      'javaoop-001',
      'javads-001',
      'javaprj-001',
    ],
    image: javaImage,
    description: 'Gain expertise in Java, one of the most versatile programming languages. Master object-oriented programming, data structures, algorithms, and build practical Java projects.',
  },
  {
    //back
    id: 'backend-001',
    title: 'Backend Track',
    courseIds: [
      'welcomeback-004',
      'node-001',
      'nodejs-001',
      'express-001',
      'mongo-001',
      'auth-005',
      'deploy-001',
    ],
    image: backendImage,
    description: 'The Backend Track is designed to equip you with the skills needed to develop robust, efficient, and scalable server-side applications. In this track, you will dive into backend programming languages and frameworks, learning how to manage databases, handle server logic, and ensure seamless communication between the frontend and backend systems.',
  },
];
export default tracksList;
