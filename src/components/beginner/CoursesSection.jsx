const Courses = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f0f]">
      {/* Animated Background Stripes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#998443] to-[#DEB041] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-stripes opacity-40"></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

      {/* Animated Circles for Visual Appeal */}
      <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-gradient-to-br from-[#DEB041] to-[#998443] rounded-full opacity-50 blur-3xl transform -translate-x-20 translate-y-10 animate-spin-slow hover:scale-110 transition-transform duration-500"></div>
      <div className="absolute top-10 right-0 w-[22rem] h-[22rem] bg-gradient-to-br from-[#998443] to-[#DEB041] rounded-full opacity-70 blur-2xl transform translate-x-12 -translate-y-12 animate-bounce-slow hover:scale-125 transition-transform duration-500"></div>

      {/* Floating Particles for Interaction */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-4 h-4 bg-[#998443] rounded-full absolute left-1/4 top-1/3 animate-float" data-speed="4"></div>
        <div className="w-5 h-5 bg-[#DEB041] rounded-full absolute left-1/2 top-1/2 animate-float-slow" data-speed="2"></div>
        <div className="w-3 h-3 bg-[#998443] rounded-full absolute right-1/3 top-2/3 animate-float-fast" data-speed="6"></div>
      </div>

      {/* Main Text Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen z-10">
        <div className="relative bg-opacity-70 p-8 rounded-lg text-center z-10">
          <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#b4b1b1] tracking-tighter animate-text transition-transform duration-500 hover:scale-105">
            Start Your Journey Today
          </h2>
          <p className="mt-6 text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Ready to shape your future? Our beginner courses are the perfect launchpad to turn your passion into skill. Whether you dream of becoming a developer, designer, or innovator—start here, and the possibilities are endless.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8 relative">
          <button className="relative overflow-hidden bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] text-white px-10 py-5 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl">
            Let's Begin Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-16 h-16 text-[#DEB041] animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className="absolute w-3 h-3 bg-[#bba852] rounded-full animate-ping" style={{ transform: 'translate(-50%, -50%)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
