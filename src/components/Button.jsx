import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loading');
  };

  return (
    <div className="flex justify-center items-center min-h-[20vh] space-x-2"> 
      <button
        data-aos="zoom-in-down"
        onClick={handleClick}
        className="w-4/5 sm:w-auto mx-auto bg-[#DEB041] cursor-pointer inline-flex items-center justify-center rounded-full px-8 py-4 text-base sm:text-lg font-mono font-semibold text-white hover:text-[#DEB041] border-2 border-[#DEB041] transition ease-in-out duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
      >
        Let&apos;s Start
      </button>
    </div>
  );
}

export default Button;
