import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{posts}</h3>
        <p> 2020-01-19</p>
        <hr/>
        </div> 
    </div>
  );
}

export default App;
