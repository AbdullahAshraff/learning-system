import image1 from '../assets/coding.png'

const coursesList = [
  //frontend*
  //[0]
  {
    id: 'welcome-001',
    title: 'Frontend Introduction',
    description:"A warm welcome to the world of frontend development. Learn the basics of creating the user interface of web applications and explore why frontend development is a crucial skill.",
    image:image1,
    lessons: [
      {
        lessonId: 'welcome-001-001',
        title: 'Welcome To Our Course',
        url: 'https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM',
      },
      {
        lessonId: 'welcome-001-002',
        title: 'What is Frontend',
        url: 'https://www.youtube.com/embed/9He4UBLyk8Y?si=2ixsOPmlwxFhBnO5',
      },
      {
        lessonId: 'welcome-001-003',
        title: 'Frontend Roadmap',
        url: 'https://www.youtube.com/embed/GxmfcnU3feo?si=iazQYBX3AwE_qr8K',
      },
      {
        lessonId: 'welcome-001-004',
        title: 'Why Choose FrontEnd',
        url: 'https://www.youtube.com/embed/NOfUCMzBNVg?si=yiEHMQLi2cQG-ckx',
      },
    ],
  },
  //[1]
  {
    id: 'html-001',
    title: 'HTML Course',
    description:"Understand the building blocks of the web: HTML. Learn how to structure content with HTML elements and attributes, and build the foundation for every website.",
    image:image1,
    lessons: [
      {
        lessonId: 'html-001-001',
        title: 'Basics of HTML',
        url: 'https://www.youtube.com/embed/hT3j87FMR6M',
      },
      {
        lessonId: 'html-001-002',
        title: 'What is HTML?',
        url: 'https://www.youtube.com/embed/UB1O30fR-EE',
      },
      {
        lessonId: 'html-001-003',
        title: 'HTML Elements and Attributes',
        url: 'https://www.youtube.com/embed/lcZorMlEnhU?si=KWGs-98sT4z4tBH8',
      },
      {
        lessonId: 'html-001-004',
        title: 'HTML Forms and Inputs',
        url: 'https://www.youtube.com/embed/frAGrGN00OA?si=7ceSzSkzK-ZYUkqg',
      },
    ],
  },
  //[2]
  {
    id: 'css-001',
    title: 'CSS Course',
    description:"Master the art of styling websites. Learn CSS fundamentals, including selectors, box model, flexbox, and grid, and make your websites visually stunning and responsive.",
    image:image1,
    lessons: [
      {
        lessonId: 'css-001-001',
        title: 'CSS Basics',
        url: 'https://www.youtube.com/embed/1PnVor36_40',
      },
      {
        lessonId: 'css-001-002',
        title: 'Selectors and Specificity',
        url: 'https://www.youtube.com/embed/yfoY53QXEnI',
      },
      {
        lessonId: 'css-001-003',
        title: 'Flex Box in CSS',
        url: 'https://www.youtube.com/embed/JJSoEo8JSnc',
      },
      {
        lessonId: 'css-001-004',
        title: 'Box Model',
        url: 'https://www.youtube.com/embed/nSst4-WbEZk?si=VN33bQp3Wejqm9EQ',
      },
      {
        lessonId: 'css-001-005',
        title: 'Grid Layout',
        url: 'https://www.youtube.com/embed/0xMQfnTU6oo?si=Spi0tktdyz9xo5fb',
      },
    ],
  },
  //[3]
  {
    id: 'js-001',
    title: 'JS Course',
    description:"Dive into JavaScript, the programming language of the web. Learn how to add interactivity to websites, manipulate the DOM, and create dynamic user experiences.",
    image:image1,
    lessons: [
      {
        lessonId: 'js-001-001',
        title: 'JavaScript Basics',
        url: 'https://www.youtube.com/embed/2Ji-clqUYnA',
      },
      {
        lessonId: 'js-001-002',
        title: 'Variables and Data Types',
        url: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      },
      {
        lessonId: 'js-001-003',
        title: 'Functions in JavaScript',
        url: 'https://www.youtube.com/embed/PkZNo7MFNFg',
      },
      {
        lessonId: 'js-001-004',
        title: 'DOM Manipulation',
        url: 'https://www.youtube.com/embed/Qqx_wzMmFeA',
      },
      {
        lessonId: 'hooks-001-001',
        title: 'Introduction to hooks',
        url: 'https://www.youtube.com/embed/cF2lQ_gZeA8?si=aepuj4MsnIpBueFK',
      },
      {
        lessonId: 'hooks-001-002',
        title: 'useState hooks',
        url: 'https://www.youtube.com/embed/lAW1Jmmr9hc?si=eQoIZ00rwVOds3F_',
      },
      {
        lessonId: 'hooks-001-003',
        title: 'useEffect hooks',
        url: 'https://www.youtube.com/embed/-4XpG5_Lj_o?si=7pbJRroMQ9phxtWT',
      },
      {
        lessonId: 'hooks-001-004',
        title: 'useMemo hooks',
        url: 'https://www.youtube.com/embed/vpE9I_eqHdM?si=yO3pBksWX4BMx7Kp',
      },
      {
        lessonId: 'hooks-001-005',
        title: 'useContext',
        url: 'https://www.youtube.com/embed/5LrDIWkK_Bc?si=E7M_6gv6Hlw96vZ6',
      },
      {
        lessonId: 'hooks-001-006',
        title: 'useReducer',
        url: 'https://www.youtube.com/embed/kK_Wqx3RnHk?si=Cv1mOWtaOXyiuib7',
      },
      {
        lessonId: 'hooks-001-007',
        title: 'Revsion on all hooks',
        url: 'https://www.youtube.com/embed/LlvBzyy-558?si=FLZMmWBnfaA5wxp1',
      },
    ],
  },
  //backend
  //[4]
  {
    id: 'welcomeback-004',
    title: 'Backend Introduction',
    description:"Introduction to server-side programming and databases. Learn about backend architecture and how the backend supports frontend applications.",
    image:image1,
    lessons: [
      {
        lessonId: 'welcomeback-004-001',
        title: 'welcomeback To Our Course',
        url: 'https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM',
      },
      {
        lessonId: 'welcomeback-004-002',
        title: 'Introduction to backend development ',
        url: 'https://www.youtube.com/embed/WN5onNWfNc8?si=G1pUXMcG6Gfe3Iz9',
      },
      {
        lessonId: 'welcomeback-004-003',
        title: 'Backend Roadmap',
        url: 'https://www.youtube.com/embed/CVgzp2vfePs?si=h3bcfpIvuEFbLgzn',
      },
    ],
  },
  //[5]
  {
    id: 'node-001',
    title: 'Node Course',
    description:"Learn the basics of Node.js, a powerful JavaScript runtime for building fast and scalable server-side applications.",
    image:image1,
    lessons: [
      {
        lessonId: 'node-001-001',
        title: 'what is nodejs',
        url: 'https://www.youtube.com/embed/TlB_eWDSMt4?si=bUJ_uyDMeTT4vZb2',
      },
      {
        lessonId: 'node-001-002',
        title: 'NodeJs basics for beginers',
        url: 'https://www.youtube.com/embed/f2EqECiTBL8?si=f-K59bUjjaXGAB2T',
      },
    ],
  },
  //[6]
  {
    id: 'nodejs-001',
    title: 'NodeJS Course',
    description:"Dive deeper into Node.js by exploring topics like file handling, event-driven architecture, and creating REST APIs.",
    image:image1,
    lessons: [
      {
        lessonId: 'nodejs-001-001',
        title: ' Understanding Node.js Event Loop',
        url: 'https://www.youtube.com/embed/P9csgxBgaZ8?si=7lOzgbySrubWtiW6',
      },
      {
        lessonId: 'nodejs-001-002',
        title: ' Node.js Modules and NPM',
        url: 'https://www.youtube.com/embed/9Amxzvq5LY8?si=_rU5jDR4mUaBvl7Y',
      },
      {
        lessonId: 'nodejs-001-003',
        title: 'Creating a Simple HTTP Server in Node.js',
        url: 'https://www.youtube.com/embed/Oe421EPjeBE?si=yowKt41SC9RyPax2',
      },
      {
        lessonId: 'nodejs-001-004',
        title: ' Node.js with File System',
        url: 'https://www.youtube.com/embed/U57kU311-nE?si=UK_7Btxow4EzqIxv',
      },
    ],
  },
  //[7]
  {
    id: 'express-001',
    title: 'Express Course',
    description:"Learn Express.js, the popular Node.js framework for building web servers. Understand how to set up routing, middleware, and handle requests and responses.",
    image:image1,
    lessons: [
      {
        lessonId: 'node-001-001',
        title: 'Introduction to Express',
        url: 'https://www.youtube.com/embed/L72fhGm1tfE?si=4q07kT3l-GGG2W6h',
      },
      {
        lessonId: 'express-001-002',
        title: 'Express for beginners',
        url: 'https://www.youtube.com/embed/DURM6yft8RU?si=UDyhMbS_BEmw80He',
      },
    ],
  },
  //[8]
  {
    id: 'mongo-001',
    title: 'Mongodb Course',
    description:"Get started with MongoDB, a NoSQL database. Learn how to store, query, and manage data using MongoDB with your backend applications.",
    image:image1,
    lessons: [
      {
        lessonId: 'mongo-001-001',
        title: ' Introduction to MongoDB ',
        url: 'https://www.youtube.com/embed/-56x56UppqQ?si=J9M8NmRoFbfkqbZA',
      },
      {
        lessonId: 'mongo-001-002',
        title: ' Building a CRUD API with Node.js and MongoDB',
        url: 'https://www.youtube.com/embed/fgTGADljAeg?si=2HTL9csGq-SxfEN6',
      },
      {
        lessonId: 'mongo-001-003',
        title: ' Using MySQL with Node.js',
        url: 'https://www.youtube.com/embed/EN6Dx22cPRI?si=9yBKAm8svkHjnu9b',
      },
    ],
  },
  //[9]
  {
    id: 'auth-001',
    title: 'Authntication Course',
    description:"Explore different authentication methods like JWT and OAuth. Learn how to secure your backend applications with proper authentication and authorization.",
    image:image1,
    lessons: [
      {
        lessonId: 'auth-001-001',
        title: 'JWT Authentication in Node.js',
        url: 'https://www.youtube.com/embed/favjC6EKFgw?si=VpMw7JuFOkjIiNyu',
      },
      {
        lessonId: 'auth-001-002',
        title: ' OAuth Authentication with Node.js',
        url: 'https://www.youtube.com/embed/Qt3KJZ2kQk0?si=hIJmikBFwxdY7vKL',
      },
    ],
  },
  //[10]
  {
    id: 'deploy-001',
    title: 'Deployment Course',
    description:"Learn how to deploy your Node.js backend applications to cloud platforms like Heroku and AWS. Understand the process of scaling and maintaining applications in production.",
    image:image1,
    lessons: [
      {
        lessonId: 'deploy-001-001',
        title: 'Deploying Node.js Apps to Heroku',
        url: 'https://www.youtube.com/embed/TkVwVHbzukw?si=v3b14pbzm9dqI_8k',
      },
      {
        lessonId: 'deploy-001-002',
        title: 'Node.js Production Best Practices',
        url: 'https://www.youtube.com/embed/fc6o1gwqZuA?si=AzaIXxtV7thYH92q',
      },
    ],
  },
  //mobile
  //[11]
  {
    id: 'welcomemobile-003',
    title: 'Mobile Introduction',
    description:"Introduction to mobile app development for Android and iOS. Learn the basics of building mobile applications and the key differences between platforms.",
    image:image1,
    lessons: [
      {
        lessonId: 'welcomemobile-003-001',
        title: 'Welcome To Our Course',
        url: 'https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM',
      },
      {
        lessonId: 'welcomemobile-003-002',
        title: 'Introduction to Mobile Application development ',
        url: 'https://www.youtube.com/embed/DsIviEKZad0?si=FIQggitsT7gCC_-S',
      },
      {
        lessonId: 'welcomemobile-003-003',
        title: 'Android or IOS',
        url: 'https://www.youtube.com/embed/BXA_7ztE5M4?si=FrhN84ZyBSCFnigT',
      },
    ],
  },
  //[12]
  {
    id: 'kotlin-001',
    title: 'Kotlin Course',
    description:"Learn Kotlin, the modern programming language for Android app development. Build your first Android app and understand key Kotlin syntax and features.",
    image:image1,
    lessons: [
      {
        lessonId: 'kotlin-001-001',
        title: 'Kotlin Programming - FreeCodeCamp',
        url: 'https://www.youtube.com/embed/F9UC9DY-vIU?si=tegVSczn8zd7LHBl',
      },
      {
        lessonId: 'kotlin-001-002',
        title: 'Android App Development in Kotlin - FreeCodeCamp',
        url: 'https://www.youtube.com/embed/fis26HvvDII?si=QbCYElYIEL7B5OXl',
      },
      {
        lessonId: 'kotlin-001-003',
        title: 'Android App Development in Kotlin - In Arabic',
        url: 'https://www.youtube.com/embed/6nrx0PXAuhQ?si=RBceDu8-SvcNPF4J',
      },
    ],
  },
  //[13]
  {
    id: 'swift-001',
    title: 'Swift Course',
    description:"Get started with Swift, the powerful programming language for iOS development. Learn the basics of building apps for iPhones and iPads.",
    image:image1,
    lessons: [
      {
        lessonId: 'swift-001-003',
        title: ' Swift Programming for Beginners',
        url: 'https://www.youtube.com/embed/FcsY1YPBwzQ?si=QTJQbJ5vg67An0tB',
      },
      {
        lessonId: 'swift-001-002',
        title: ' iOS Development Course for Beginners',
        url: 'https://www.youtube.com/embed/comQ1-x2a1Q?si=SWtvU0-QbAN04VY4',
      },
      {
        lessonId: 'swift-001-001',
        title: 'SwiftUI Basics for iOS Development',
        url: 'https://www.youtube.com/embed/UJPdhx5zTaw?si=QZBNbl79_2_CpOY6',
      },
      {
        lessonId: 'swift-001-004',
        title: ' iOS App Development for Beginners',
        url: 'https://www.youtube.com/embed/09TeUXjzpKs?si=shTP9GzAT_epV1aT',
      },
    ],
  },
  //[14]
  {
    id: 'firebase-001',
    title: 'Firebase Course',
    description:"Explore how to integrate Firebase into your mobile applications. Learn about authentication, real-time databases, and cloud functions to build powerful mobile backends.",
    image:image1,
    lessons: [
      {
        lessonId: 'firebase-001-001',
        title: 'Firebase For Andorid',
        url: 'https://www.youtube.com/embed/b1bGrWrx5Mo?si=pgN8Ao-plCmnIvkv',
      },
      {
        lessonId: 'firebase-001-002',
        title: 'Firebase For Ios',
        url: 'https://www.youtube.com/embed/1D-ZhTSpx1E?si=TWTqtsv3XX_D0gfJ',
      },
    ],
  },
  //[15]
  {
    id: 'test-001',
    title: 'Testing Course',
    description:"Understand the importance of testing in mobile app development. Learn how to write and execute unit and integration tests to ensure app reliability and quality.",
    image:image1,
    lessons: [
      {
        lessonId: 'test-001-002',
        title: ' Andorid Testing ',
        url: 'https://www.youtube.com/embed/nDCCwyS0_MQ?si=-DSKo43_i1nxUU1d',
      },
      {
        lessonId: 'test-001-001',
        title: ' iOS App Store Deployment',
        url: 'https://www.youtube.com/embed/fgTGADljAeg?si=2HTL9csGq-SxfEN6',
      },
    ],
  },
  //[16]
  {
    id: 'git-001',
    title: 'Git Course',
    description:"Master version control using Git for mobile app development. Learn how to manage your codebase, collaborate with others, and deploy updates seamlessly.",
    image:image1,
    lessons: [
      {
        lessonId: 'git-001-002',
        title: 'Git and GitHub for Beginners in Arabic',
        url: 'https://www.youtube.com/embed/Q6G-J54vgKc?si=1iQKyq_rOlU-LL4u',
      },
      {
        lessonId: 'git-001-001',
        title: 'Setting Up CI/CD for Mobile Apps',
        url: 'https://www.youtube.com/embed/NnkUGzaqqOc?si=E0s8fwoX-TBjI5RN',
      },
    ],
  },
  //java
  //[17]
  {
    id: 'welcomejava-005',
    title: 'Java Introduction',
    description:"A warm introduction to Java, one of the most widely used programming languages in the world. Get to know the Java ecosystem and why it's important.",
    image:image1,
    lessons: [
      {
        lessonId: 'welcomejava-005-001',
        title: 'welcomejava To Our Course',
        url: 'https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM',
      },
      {
        lessonId: 'welcomejava-005-002',
        title: 'What is java language',
        url: 'https://www.youtube.com/embed/mAtkPQO1FcA?si=_UfidYQfpFudo2x5',
      },
      {
        lessonId: 'welcomejava-005-003',
        title: 'Why choose java',
        url: 'https://www.youtube.com/embed/eJkwnS5ZkAI?si=tt_aDaSW3FOc8lZR',
      },
    ],
  },
  //[18]
  {
    id: 'java-001',
    title: 'Java Course',
    description:"Learn the basics of Java programming, including syntax, data types, control structures, and object-oriented programming.",
    image:image1,
    lessons: [
      {
        lessonId: 'java-001-001',
        title: 'Java Language for beginners',
        url: 'https://www.youtube.com/embed/eIrMbAQSU34?si=_fbNGRicsc0Epvry',
      },
      {
        lessonId: 'java-001-002',
        title: 'Java full tutorial',
        url: 'https://www.youtube.com/embed/grEKMHGYyns?si=TrCBXKxJVWJ-tc9P',
      },
    ],
  },
  //[19]
  {
    id: 'javaoop-001',
    title: 'OOP Course',
    description:"Master the principles of object-oriented programming (OOP) in Java. Learn about classes, objects, inheritance, polymorphism, and encapsulation.",
    image:image1,
    lessons: [
      {
        lessonId: 'javaoop-001-001',
        title: 'Why and What java',
        url: 'https://www.youtube.com/embed/pTB0EiLXUC8?si=mMEPmq1w10YusM_U',
      },
      {
        lessonId: 'javaoop-001-002',
        title: 'OOP in Java',
        url: 'https://www.youtube.com/embed/Af3s3KsxStY?si=dUtAs6SL9G5GkZhj',
      },
    ],
  },
  //[20]
  {
    id: 'javads-001',
    title: 'DataStructure Course',
    description:"Understand important data structures like arrays, linked lists, stacks, and queues. Learn how to implement algorithms like sorting and searching in Java.",
    image:image1,
    lessons: [
      {
        lessonId: 'javads-001-001',
        title: 'Datastructure What and How ?',
        url: 'https://www.youtube.com/embed/SFEROgwxicA?si=fOknxsY-UDBcNjQC',
      },
      {
        lessonId: 'javads-001-002',
        title: 'Importance of DSA',
        url: 'https://www.youtube.com/embed/lXZn3eDFDgE?si=hqCfNr7sY2S8rkjh',
      },
      {
        lessonId: 'javads-001-003',
        title: 'Datastructure using java',
        url: 'https://www.youtube.com/embed/8MmMm2-kJV8?si=MAMwecEqL6AmgwuO',
      },
    ],
  },
  //[21]
  {
    id: 'javaprj-001',
    title: 'Projects using java',
    description:"Apply your knowledge of Java by building practical projects. Learn how to structure a Java project, work with files, and build scalable applications.",
    image:image1,
    lessons: [
      {
        lessonId: 'javaprj-001-001',
        title: 'Top 10 projects using java',
        url: 'https://www.youtube.com/embed/5bXlinw_JlU?si=bRlBoOO7iXqorQzq',
      },
      {
        lessonId: 'javaprj-001-002',
        title: 'Snake game using java',
        url: 'https://www.youtube.com/embed/bI6e6qjJ8JQ?si=IyZmudMjEKBuVMQx',
      },
      {
        lessonId: 'javaprj-001-003',
        title: 'What is next..!',
        url: 'https://www.youtube.com/embed/I4ASZZxLvZc?si=68IwjKLAXiCBkFsY',
      },
    ],
  },
  //react*
  //[22]
  {
    id: 'welcomereact-002',
    title: 'React Introduction',
    description:"An overview of React, the popular JavaScript library for building dynamic web applications. Learn the importance of React in modern web development.",
    image:image1,
    lessons: [
      {
        lessonId: 'welcomereact-002-001',
        title: 'Welcome To Our Course',
        url: 'https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM',
      },
      {
        lessonId: 'welcomereact-002-002',
        title: 'What is Frontend',
        url: 'https://www.youtube.com/embed/9He4UBLyk8Y?si=2ixsOPmlwxFhBnO5',
      },
      {
        lessonId: 'welcomereact-002-003',
        title: 'Frontend Roadmap',
        url: 'https://www.youtube.com/embed/GxmfcnU3feo?si=iazQYBX3AwE_qr8K',
      },
      {
        lessonId: 'welcomereact-002-004',
        title: 'Why Choose FrontEnd',
        url: 'https://www.youtube.com/embed/NOfUCMzBNVg?si=yiEHMQLi2cQG-ckx',
      },
    ],
  },
  //[23]
  {
    id: 'es6-001',
    title: 'ES6 Course',
    description:"Learn the essential ES6+ features, such as arrow functions, destructuring, and modules, to write cleaner and more efficient JavaScript for your React applications.",
    image:image1,
    lessons: [
      {
        lessonId: 'es6-001-001',
        title: 'ES6 IN ONE HOUR',
        url: 'https://www.youtube.com/embed/NCwa_xi0Uuc?si=XYaPRpAVyjRGVT6g',
      },
    ],
  },
  //[24]
  {
    id: 'react-001',
    title: 'React Course',
    description:"Gain an understanding of the core concepts of React. Learn about components, JSX, state, and props, and how to build interactive user interfaces.",
    image:image1,
    lessons: [
      {
        lessonId: 'react-001-001',
        title: 'How rect app work',
        url: 'https://www.youtube.com/embed/mNdLo_UfwBE?si=XyJu8aZYBnSeVAb2',
      },
      {
        lessonId: 'react-001-002',
        title: 'Create react components',
        url: 'https://www.youtube.com/embed/d5ooYpXioqE?si=t62qRWWuY_cwvami',
      },
      {
        lessonId: 'react-001-003',
        title: 'Props',
        url: 'https://www.youtube.com/embed/SV0fSOIKAZQ?si=GYYBPvvw_8RFz-RC',
      },
      {
        lessonId: 'react-001-004',
        title: 'Functional Components',
        url: 'https://www.youtube.com/embed/NJ_qbsLf52w?si=198LXti0UHEsKJxz',
      },
      {
        lessonId: 'react-001-005',
        title: 'class Vs Functional Components',
        url: 'https://www.youtube.com/embed/yc6elaGOoGQ?si=ryJcNU7eM0bqgjMM',
      },
    ],
  },
  //[25]
  {
    id: 'hooks-001',
    title: 'Hooks Course',
    description:"Explore the power of React hooks like useState, useEffect, and useContext. Understand how hooks simplify state management and side-effects in functional components.",
    image:image1,
    lessons: [
      {
        lessonId: 'hooks-001-001',
        title: 'Introduction to hooks',
        url: 'https://www.youtube.com/embed/cF2lQ_gZeA8?si=aepuj4MsnIpBueFK',
      },
      {
        lessonId: 'hooks-001-002',
        title: 'useState hooks',
        url: 'https://www.youtube.com/embed/lAW1Jmmr9hc?si=eQoIZ00rwVOds3F_',
      },
      {
        lessonId: 'hooks-001-003',
        title: 'useEffect hooks',
        url: 'https://www.youtube.com/embed/-4XpG5_Lj_o?si=7pbJRroMQ9phxtWT',
      },
      {
        lessonId: 'hooks-001-004',
        title: 'useMemo hooks',
        url: 'https://www.youtube.com/embed/vpE9I_eqHdM?si=yO3pBksWX4BMx7Kp',
      },
      {
        lessonId: 'hooks-001-005',
        title: 'useContext',
        url: 'https://www.youtube.com/embed/5LrDIWkK_Bc?si=E7M_6gv6Hlw96vZ6',
      },
      {
        lessonId: 'hooks-001-006',
        title: 'useReducer',
        url: 'https://www.youtube.com/embed/kK_Wqx3RnHk?si=Cv1mOWtaOXyiuib7',
      },
      {
        lessonId: 'hooks-001-007',
        title: 'Revsion on all hooks',
        url: 'https://www.youtube.com/embed/LlvBzyy-558?si=FLZMmWBnfaA5wxp1',
      },
    ],
  },
  //[26]
  {
    id: 'routing-001',
    title: 'Routing Course',
    description:"Learn how to manage navigation in React apps with React Router. Build multi-page applications with client-side routing and dynamic URL parameters.",
    image:image1,
    lessons: [
      {
        lessonId: 'routing-001-001',
        title: 'Introduction to react routing',
        url: 'https://www.youtube.com/embed/UWYOC8g5N_0?si=aaP9v_vCqZVsCahT',
      },
      {
        lessonId: 'routing-001-002',
        title: 'Complete tutorial react router',
        url: 'https://www.youtube.com/embed/oTIJunBa6MA?si=IhyGWOkM92fHPIGg',
      },
      {
        lessonId: 'routing-001-003',
        title: 'React Router V6',
        url: 'https://www.youtube.com/embed/Ul3y1LXxzdU?si=Z0HZ4BIMVNspqL5C',
      },
    ],
  },
  //[27]
  {
    id: 'formvalidation-001',
    title: 'Formvalidation Course',
    description:"Master form handling and validation in React applications. Learn best practices for building user-friendly forms with real-time validation and error handling.",
    image:image1,
    lessons: [
      {
        lessonId: 'formvalidation-001-001',
        title: 'Form Validation in react',
        url: 'https://www.youtube.com/embed/tIdNeoHniEY?si=IZkpM-ubUsqPSfen',
      },
      {
        lessonId: 'formvalidation-001-002',
        title: 'React Form Handeling and Validate',
        url: 'https://www.youtube.com/embed/tIdNeoHniEY?si=IZkpM-ubUsqPSfen',
      },
      {
        lessonId: 'formvalidation-001-003',
        title: 'Create a complete form',
        url: 'https://www.youtube.com/embed/H63Pd_lXkeQ?si=Gk1eJHiq_jNIBO5E',
      },
    ],
  },
  //[28]
  {
    id: 'redux-001',
    title: 'Redux Course',
    description:"Explore Redux, the popular state management tool for React. Learn how to manage complex application state in a scalable and predictable way.",
    image:image1,
    lessons: [
      {
        lessonId: 'redux-001-001',
        title: 'What and Why Redux',
        url: 'https://www.youtube.com/embed/D2MqT4OEgoE?si=AcS6kn6X2jO83FE7',
      },
      {
        lessonId: 'redux-001-002',
        title: 'Redux for beginers',
        url: 'https://www.youtube.com/embed/poQXNp9ItL4?si=-_Aa9HLomuLR9wOR',
      },
      {
        lessonId: 'redux-001-003',
        title: 'Learn Redux with ToDoList project',
        url: 'https://www.youtube.com/embed/drPK9sznPDc?si=6xd4xd8n788GYfPl',
      },
      {
        lessonId: 'redux-001-004',
        title: 'React Redux in Arabic',
        url: 'https://www.youtube.com/embed/ouB52-5WGoQ?si=EFT2v3TAI2a4rqVj',
      },
    ],
  },
  //beginner
  //[29]
  {
    id: 'welcomebeginner-006',
    title: 'Introduction',
    description:"A welcoming guide to start your journey into programming. Learn the fundamentals of how software works and where to begin your learning process.",
    image:image1,
    lessons: [
      {
        lessonId: 'welcomebeginner-006-001',
        title: 'Welcome To Our Course',
        url: 'https://www.youtube.com/embed/cpP-fCo8Dn4?si=XQtO67eEEL0WG4cM',
      },
      {
        lessonId: 'welcomebeginner-006-002',
        title: 'What is programming ',
        url: 'https://www.youtube.com/embed/6YMec72CEiU?si=irpQgmgJZ-g9ZM4Z',
      },
      {
        lessonId: 'welcomebeginner-006-003',
        title: 'Introduction to Programming',
        url: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=D1JlgAfOLBWHNcXr',
      },
      {
        lessonId: 'welcomebeginner-006-004',
        title: 'CS50 course for beginners',
        url: 'https://www.youtube.com/embed/baLMODtYFog?si=8NFK9sHWStUBlfvC',
      },
    ],
  },
  //[30]
  {
    id: 'programming-001',
    title: 'Programming Course',
    description:"Learn the essential concepts of programming, including variables, loops, conditionals, and functions. Get hands-on experience with coding simple algorithms.",
    image:image1,
    lessons: [
      {
        lessonId: 'programming-001-001',
        title: 'Programming Languages Overview',
        url: 'https://www.youtube.com/embed/2lVDktWK-pc?si=Cq9U-mtEiPFR9655',
      },
      {
        lessonId: 'programming-001-002',
        title: 'History of programming languages',
        url: 'https://www.youtube.com/embed/YZV8Zv_YW7I?si=x_bPYmL0JTeFTj3T',
      },
    ],
  },
  //[31]
  {
    id: 'coding-001',
    title: 'Coding Course',
    description:"Develop good coding habits by learning best practices for writing clean and efficient code. This course will cover debugging techniques and code organization.",
    image:image1,
    lessons: [
      {
        lessonId: 'proglang-001-001',
        title: 'How I would learn to code',
        url: 'https://youtu.be/bWq2O5RaOJ4?si=W225B7_qPvPWYVEX',
      },
      {
        lessonId: 'coding-001-001',
        title: 'What is coding?',
        url: 'https://www.youtube.com/embed/N7ZmPYaXoic?si=2kT2h_xVoWIIApoV',
      },
      {
        lessonId: 'coding-001-002',
        title: 'Programming Vs Coding',
        url: 'https://www.youtube.com/embed/CIRGjwYgdT4?si=AUeAAjiM5GEhdB0A',
      },
    ],
  },
  //[33]
  {
    id: 'python-001',
    title: 'Python Course',
    description:"A comprehensive introduction to Python, one of the most beginner-friendly programming languages. Learn to write simple programs and understand core Python concepts.",
    image:image1,
    lessons: [
      {
        lessonId: 'proglang-001-002',
        title: 'Best programming language to learn',
        url: 'https://www.youtube.com/embed/kJOqIaGwQ7Y?si=vMla5epP5kAvogHb',
      },
      {
        lessonId: 'python-001-001',
        title: ' Why Python ',
        url: 'https://www.youtube.com/embed/Y8Tko2YC5hA?si=qOFyNdFqrU5UIeUM',
      },
      {
        lessonId: 'python-001-002',
        title: ' Python for beginners',
        url: 'https://www.youtube.com/embed/kqtD5dpn9C8?si=qRbacNs_SKiG97zL',
      },
      {
        lessonId: 'python-001-003',
        title: ' Python Projects for beginners',
        url: 'https://www.youtube.com/embed/4wGuB3oAKc4?si=kK5CokAWprSKzDed',
      },
    ],
  },
  //[34]
  {
    id: 'career-001',
    title: 'It tracks',
    description:"Learn about the career opportunities in the tech industry. Explore different roles, skills in demand, and how to build a successful career in software development.",
    image:image1,
    lessons: [
      {
        lessonId: 'career-001-001',
        title: 'Career Paths',
        url: 'https://www.youtube.com/embed/XmWkcePhf84?si=kgJ1r4LEv0wgnquR',
      },
      {
        lessonId: 'career-001-002',
        title: 'Career paths and How chooce it',
        url: 'https://www.youtube.com/embed/oGy_uK6FrgE?si=rwjT826GKebxHgGf',
      },
    ],
  },
  //[35]
  {
    id: 'problems-001',
    title: 'Problem Solving',
    description:"Develop problem-solving skills by tackling real-world coding challenges. Learn how to approach programming problems and write algorithms to solve them efficiently.",
    image:image1,
    lessons: [
      {
        lessonId: 'problems-001-001',
        title: 'Problem solving guide',
        url: 'https://youtu.be/haXXcI17WM4?si=GrTHDVoJK7T8OKRi',
      },
      {
        lessonId: 'problems-001-002',
        title: 'Problem solving for beginners',
        url: 'https://www.youtube.com/embed/Pt6aevav4Do?si=BF_kuo62O3gZq8ct',
      },
    ],
  },
];

export default coursesList;
