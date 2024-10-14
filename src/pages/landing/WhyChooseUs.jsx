import { FaUserGraduate, FaClock, FaDollarSign } from 'react-icons/fa';
import { FaRegFaceGrinBeam } from 'react-icons/fa6';

function WhyChooseUs() {
  return (
    <>
      <section className="mt-[12rem] mb-[10rem]">
        <h2 className="text-4xl font-bold text-center text-[#0f0f0f] mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
          {/* Reason 1 */}
          <div
            data-aos="zoom-in-up"
            className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]"
          >
            <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
              <div
                data-aos="fade-down-right"
                className="z-10 flex flex-col items-center gap-2 p-5 m-2"
              >
                <div className="flex items-center">
                  <FaUserGraduate className="text-4xl text-[#fff] mr-4" />
                  <div>
                    <span className="text-100 text-[#0f0f0f] text-xl font-bold">
                      Expert Instructors
                    </span>
                    <p className="text-black-50">
                      Learn from industry professionals with real-world
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 2 */}
          <div
            data-aos="zoom-in-down"
            className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]"
          >
            <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
              <div
                data-aos="fade-down-right"
                className="z-10 flex flex-col items-center gap-2 p-5 m-2"
              >
                <div className="flex items-center">
                  <FaClock className="text-4xl text-[#fff] mr-4" />
                  <div>
                    <span className="text-100 text-[#0f0f0f] text-xl font-bold">
                      Flexible Learning
                    </span>
                    <p className="text-black-50">
                      Learn at your own pace, anytime and anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 3 */}
          <div
            data-aos="zoom-in-up"
            className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]"
          >
            <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
              <div
                data-aos="fade-down-right"
                className="z-10 flex flex-col items-center gap-2 p-5 m-2"
              >
                <div className="flex items-center">
                  <FaDollarSign className="text-4xl text-[#fff] mr-4" />
                  <div>
                    <span className="text-100 text-[#0f0f0f] text-xl font-bold">
                      Affordable Pricing
                    </span>
                    <p className="text-black-50">
                      Quality education accessible to everyone with competitive
                      pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reason 4 */}
          <div
            data-aos="zoom-in-down"
            className="bg-[#fff] rounded-2xl shadow-sm shadow-[#DEB041]"
          >
            <div className="cursor-pointer group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#DEB041] after:rounded-full after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-[#DEB041] before:rounded-full before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-900 bg-[#fad987] rounded-2xl outline-[#fad987] outline-white-400 -outline-8">
              <div
                data-aos="fade-down-right"
                className="z-10 flex flex-col items-center gap-2 p-5 m-2"
              >
                <div className="flex items-center">
                  <FaRegFaceGrinBeam className="text-4xl text-[#fff] mr-4" />
                  <div>
                    <span className="text-100 text-[#0f0f0f] text-xl font-bold">
                      Supportive Community
                    </span>
                    <p className="text-black-50">
                      Join a vibrant community of learners and professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
