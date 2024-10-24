import frontendImage from './../assets/frontend.jpg'; // Update with the correct image path
import reactImage from './../assets/React.jpeg';       // Update with the correct image path
import mobileImage from './../assets/Mobile.png';     // Update with the correct image path
// import beginnerImage from './../assets/beginner.png'; // Update with the correct image path
import javaImage from './../assets/Java.jpeg';          // Update with the correct image path
import backendImage from './../assets/Backend.png';  
export const tracksList = [
  {
    //front
    id: '671a4d42a26a7bb2af76d821',
    title: 'Frontend Track',
    courseIds: ['welcome-001', 'html-001', 'css-001', 'js-001'],
    image: frontendImage,
    description: 'Master the essentials of web development by learning how to create visually appealing and interactive user interfaces using HTML, CSS, and JavaScript.',
  },
  {
    //react
    id: '671a4e2664e3da50e85fc3e5',
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
    id: '671a4e98e48df7a7ecaca3de',
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
    id: '671a4ef4df06cad45b4a4600',
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
    id: '671a4f3a560f0ca10064babd',
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
    id: '671a4f5edf06cad45b4a4615',
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
