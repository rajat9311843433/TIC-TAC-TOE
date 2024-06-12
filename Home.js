import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
  const history = useHistory();

  const handlePassAndPlay = () => {
    history.push('/?mode=pass-and-play');
  };

  const handleVsComputer = () => {
    history.push('/?mode=vs-computer');
  };

  return (
    <div className="home">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={handlePassAndPlay}>Pass and Play</button>
      <button onClick={handleVsComputer}>VS Computer</button>
    </div>
  );
}

export default Home;
