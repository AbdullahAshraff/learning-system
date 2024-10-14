import {
  FaChartLine,
  FaBookOpen,
  FaRegClock,
  FaUserGraduate,
} from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaChartLine size={40} />,
    title: 'Personalized Learning Paths',
    description:
      'Tailor your educational journey with personalized learning paths that align with your career goals and interests. Our platform assesses your skills and preferences to recommend a curated selection of courses, ensuring an engaging and efficient learning experience.',
  },
  {
    icon: <FaBookOpen size={40} />,
    title: 'On-Demand Course Library',
    description:
      'Access a vast library of on-demand courses at any time, from anywhere. Whether you’re looking to learn a new skill or deepen your knowledge, our extensive collection of video lectures, reading materials, and quizzes is available 24/7.',
  },
  {
    icon: <FaRegClock size={40} />,
    title: 'Flexible Learning Options',
    description:
      'Enjoy the flexibility of self-paced learning with options to fit your schedule. Choose from various formats such as video lectures, written materials, and interactive exercises to customize your learning experience.',
  },
  {
    icon: <FaUserGraduate size={40} />,
    title: 'Progress Tracking and Analytics',
    description:
      'Monitor your progress with comprehensive tracking tools and analytics. Stay motivated with detailed insights into your learning achievements, areas for improvement, and overall progress.',
  },
];

const Services = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#f5d678] to-[#DEB041] py-12 px-5 text-center text-white mb-64 mt-[15rem]"
      id="services"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h2 className="text-4xl font-bold mb-10 text-white">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-out-right"
            data-aos-duration="2000"
            className="cursor-pointer group relative bg-[#fff] rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-500 hover:shadow-2xl"
          >
            <div className="service-icon text-[#DEB041] mb-6 transition duration-500 group-hover:rotate-[360deg] group-hover:text-[#998443]">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-[#DEB041] mb-4 group-hover:text-[#998443] transition duration-500">
              {service.title}
            </h3>
            <p className="text-sm text-black group-hover:text-black-300 transition duration-500 ">
              {service.description}
            </p>
            {/* Decorative circle in the background */}
            <div className="absolute inset-0 z-[-1] rounded-full opacity-20 bg-gradient-to-tl from-[#DEB041] via-[#998443] to-[#0f0f0f] blur-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
