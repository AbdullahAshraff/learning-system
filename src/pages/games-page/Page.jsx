import { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { learn ,Flex_froggy,grid_garden,Javascript_30,code_cambat,checkio,css_diner,robocode,Euler,saga,codewars,py_challenges,codin_game} from "../../assets";

const Page = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
        title: 'Flexbox Froggy',
        src: 'https://flexboxfroggy.com/',
        img: Flex_froggy,
        description: 'A fun game to learn CSS Flexbox by helping froggies reach their lilypads.'
    },
    {
        title: 'Grid Garden',
        src: 'https://cssgridgarden.com/',
        img: grid_garden,
        description: 'A game to learn CSS Grid by watering your garden with grid properties.'
    },
    {
        title: 'JavaScript 30',
        src: 'https://javascript30.com/',
        img: Javascript_30,
        description: '30-day vanilla JS coding challenge to build 30 things in 30 days with 30 tutorials.'
    },
    {
        title: 'CodeCombat',
        src: 'https://codecombat.com/',
        img: code_cambat,
        description: 'Learn coding through a game where you control your character using code.'
    },
    {
        title: 'CheckiO',
        src: 'https://checkio.org/',
        img: checkio,
        description: 'A coding game that helps you improve your Python skills through fun challenges.'
    },
    {
        title: 'CSS Diner',
        src: 'https://flukeout.github.io/',
        img: css_diner,
        description: 'Learn CSS selectors by serving delicious dishes to hungry diners.'
    },
    {
        title: 'Robocode',
        src: 'https://robocode.sourceforge.io/',
        img: robocode,
        description: 'A game to teach programming where you program battling robots.'
    },
    {
        title: 'Project Euler',
        src: 'https://projecteuler.net/',
        img: Euler,
        description: 'A collection of challenging mathematical/computer programming problems.'
    },
    {
        title: 'Elevator Saga',
        src: 'https://play.elevatorsaga.com/',
        img: saga,
        description: 'Learn programming by optimizing the movement of elevators.'
    },
    {
        title: 'Codewars',
        src: 'https://www.codewars.com/',
        img: codewars,
        description: 'A platform for coding challenges to improve your Python skills.'
    },
    {
        title: 'Python Challenge',
        src: 'http://www.pythonchallenge.com/',
        img: py_challenges,
        description: 'A series of challenges that require Python skills to solve.'
    },
    {
        title: 'Codingame',
        src: 'https://www.codingame.com/start',
        img: codin_game,
        description: 'An interactive platform where you learn programming through games.'
    },
];


  const openGame = (game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* <NavBar /> */}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-[#0f0f0f] mb-6">Language Learning Games</h1>
        <h2 className="text-2xl font-semibold text-center text-[#0f0f0f] mb-4">Choose a Game:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <GameCard 
              key={index} 
              title={game.title} 
              img={game.img}
              description={game.description} 
              onClick={() => openGame(game)}
            />
          ))}
        </div>
      </div>
      {selectedGame && (
        <GameModal game={selectedGame} onClose={closeModal} />
      )}
      {/* <Footer /> */}
    </div>
  );
};

const GameCard = ({ title, img, description, onClick }) => (
  <div 
    className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
    onClick={onClick}
  >
    <img src={img} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-center text-[#0f0f0f] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm text-center mb-2">{description}</p>
      <button className="w-full bg-[#b89748] text-white py-2 rounded-lg hover:bg-[#998443] transition duration-300">
        Play Now
      </button>
    </div>
  </div>
);

const GameModal = ({ game, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl w-full"> {/* زاد حجم النافذة */}
      <div className="flex justify-between items-center p-4 bg-gray-200 border-b">
        <h3 className="text-lg font-semibold text-[#0f0f0f]">{game.title}</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
      </div>
      <div className="p-4">
        <iframe 
          src={game.src} 
          title={game.title} 
          className="w-full h-96 border rounded-lg shadow-md" // عرض الـ iframe 100%
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

export default Page;
