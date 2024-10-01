import React from 'react';
import { FaUsers, FaBullseye, FaHandsHelping } from 'react-icons/fa';
import { MdWhatshot } from 'react-icons/md';

const About = () => {
  return (
    <section className="bg-gray-50 py-20" id='about'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 text-[#0f0f0f]">About Us</h2>
        
        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" data-aos="fade-up">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-[#00BFA6] text-4xl" />
              <h3 className="text-xl font-semibold text-gray-800 ml-2">Our Mission</h3>
            </div>
            <p className="text-600 text-[#DEB041]">
              To empower individuals through quality education, providing skills and knowledge for a brighter future.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <MdWhatshot className="text-[#FFB84D] text-4xl" />
              <h3 className="text-xl font-semibold text-gray-800 ml-2">Our Vision</h3>
            </div>
            <p className="text-600 text-[#DEB041]">
              To be a global leader in online education, making learning accessible and engaging for everyone.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center mb-4">
              <FaHandsHelping className="text-[#FF6464] text-4xl" />
              <h3 className="text-xl font-semibold text-gray-800 ml-2">Our Values</h3>
            </div>
            <p className="text-600 text-[#DEB041]">
              Integrity, Innovation, and Inclusion are at the core of our philosophy, guiding our actions every day.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 text-[#0f0f0f]">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div data-aos="fade-right" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
              <img
                src="/team-member1.jpg" // Replace with your image path
                alt="Team Member 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-800 text-[#0f0f0f]">Mai Mahmoud</h3>
                <p className="text-600 text-[#DEB041]">CEO & Founder</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
              <img
                src="/team-member2.jpg" // Replace with your image path
                alt="Team Member 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-800 text-[#0f0f0f]">Heba Mohammed</h3>
                <p className="text-600 text-[#DEB041]">CTO</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div data-aos="fade-left" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
              <img
                src="/team-member3.jpg" // Replace with your image path
                alt="Team Member 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-800 text-[#0f0f0f]">Adel Ezzat</h3>
                <p className="text-600 text-[#DEB041]">Lead Educator</p>
              </div>
            </div>


            {/* Team Member 4 */}
            <div data-aos="fade-right" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 col-span-1">
              <img
                src="/team-member3.jpg" // Replace with your image path
                alt="Team Member 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-800 text-[#0f0f0f]">Arwa Zakria</h3>
                <p className="text-600 text-[#DEB041]">Lead Educator</p>
              </div>
            </div>

            {/* team image */}
            <div data-aos="fade-up" data-aos-duration="1000" className="  transition-transform transform hover:scale-105 duration-300">
              <img
                src="images/team.png" 
                className="w-full h-80 object-cover"
              />
            </div>


            {/* Team Member 5 */}
            <div data-aos="fade-left" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 col-start-3 col-end-4">
              <img
                src="/team-member3.jpg" // Replace with your image path
                alt="Team Member 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-800 text-[#0f0f0f]">Aduallah Ashraf</h3>
                <p className="text-600 text-[#DEB041]">Lead Educator</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
