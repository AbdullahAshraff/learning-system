import { useEffect } from 'react';
import './loading.css';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/start');
    }, 3100);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div id="loading" className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </>
  );
}
export default LoadingPage;
