import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { MdSchool, MdComputer, MdConnectWithoutContact } from 'react-icons/md';
import { FaBook, FaArrowRight, FaEnvelope, FaGamepad } from 'react-icons/fa';
import { increase,learn, nlogo } from '../../assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LearnerBarChart = () => {
  const data = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Number of Learners',
        data: [500, 800, 1200, 1500, 2000, 3000],
        backgroundColor: ['#f7e697', '#f5d440', '#0f0f0f', '#f7e697', '#f5d440', '#0f0f0f'],
        borderColor: ['#f7e697', '#f5d440', '#0f0f0f'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Increase in Programming Learners Over the Years',
      },
    },
  };

  return (
    <div>
    <header className="bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] shadow-md">
      {/* Hero Section */}
      <section id="hero" className="bg-white text-gray-800 h-[75vh] px-4 md:px-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8 md:py-16">
            {/* Left: Hero Text and CTA */}
            <div data-aos="fade-right" data-aos-duration="2000" className="space-y-6 mt-[30px] md:mt-[50px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#DEB041] leading-tight">
                Empower Your <br /> Learning Journey
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Join thousands of learners and unlock skills with our expert-curated courses, available anytime, anywhere.
              </p>
              <a href="#course" className="w-56 bg-[#DEB041] hover:bg-[#d6a92e] text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center">
                Explore Courses <FaArrowRight className="ml-2 text-lg" />
              </a>
            </div>

            {/* Right: Circular Hero Image with Floating Icons */}
            <div data-aos="fade-left" data-aos-duration="2000" className="relative flex justify-center items-center mt-8 md:mt-[50px]">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#0f0f0f] shadow-2xl shadow-[#DEB041] transition-transform transform hover:scale-105 duration-500 flex justify-center items-center bg-[#F2F2F2]">
                <img src={learn} alt="Interactive Learning" className="w-52 h-52 md:w-64 md:h-64 object-contain" />
                {floatingIcons.map((icon) => (
                  <div key={icon.id} className={icon.position}>
                    {icon.component}
                  </div>
                ))}
              </div>
            </div>
            </div>
            </section>
    </header>
    <div className="flex flex-col items-center justify-center mt-[5rem] mb-[8rem] px-4 md:px-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Chart Section */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="flex flex-col items-center justify-center w-full"
        >
          <Bar data={data} options={options} className="w-full h-full" />
        </div>

        {/* Text and Image Section */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="mt-0 font-bold text-lg md:text-xl text-center lg:text-left px-2"
          >
            The number of programming learners has surged dramatically in recent years, fueled by the demand for tech skills. Online courses and boot camps have made learning accessible, attracting diverse students globally.
          </p>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            src={increase}
            alt="Increase in learners"
            className="mt-10 w-[80%] md:w-3/5 mx-auto lg:ml-0"
          />
        </div>
      </div>
    </div>
</div>
  )
};
const floatingIcons = [
  {
    id: 'school',
    position: 'absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    component: <MdSchool className="text-[#DEB041] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
  {
    id: 'arrow',
    position: 'absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2',
    component: <FaArrowRight className="text-[#0f0f0f] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
  {
    id: 'computer',
    position: 'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
    component: <MdComputer className="text-[#DEB041] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
  {
    id: 'envelope',
    position: 'absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2',
    component: <FaEnvelope className="text-[#0f0f0f] text-3xl md:text-4xl bg-white p-1.5 rounded-full shadow-lg" />,
  },
];
export default LearnerBarChart;
