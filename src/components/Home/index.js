import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import TypeWriterLetters from '../TypeWriterLetters';
import Logo from '../Logo';
import Loader from 'react-loaders';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [
    'a',
    'l',
    'l',
    'o',
    'h',
    ',',
    ' ',
    'a',
    'b',
    'd',
    'u',
    'l',
  ];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16 logo3d`}>J</span>
            <TypeWriterLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={16}
            />
            <br />
            <TypeWriterLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={22}
            />
          </h1>
          <h2>Software engineer / React Expert</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Home;
