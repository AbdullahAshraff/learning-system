import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { increase } from '../assets';
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
  );
};

export default LearnerBarChart;
