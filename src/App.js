/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';






function App() {
  const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test.html">About</Link></li>
            </ul>
            <hr/>
        </div>
    );
  };
  let [글제목,글제목변경] = useState(['역삼 맛집 추천', '고기 맛집 어디','강남 놀러 가자']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';
  
  function 제목변경(){
    var newArray = [...글제목];     //deep copy
    newArray[0] = '강남 맛집 추천';
    글제목변경(newArray);
  }

  function 순서변경(){
    var a = [...글제목].sort();     //위치변경ㅇㅇ
    글제목변경( a ); 
  }



  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목변경 }>제목변경 버튼</button>
      <button onClick={ 순서변경 }>순서변경 버튼</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={()=> { 따봉변경(따봉+1) } }> ♥ </span> {따봉} </h3>
        <p> 2020-01-19</p>
        <hr/>
        </div>
        <div className='list'>
        <h3>{글제목[1]}</h3>
        <p> 2020-01-19</p>
        <a href='public/index'>ㅇㅇㅇ</a>
        <hr/>
        </div> 
        <div className='list'>
        <h3>{글제목[2]}</h3>
        <p> 2020-01-19</p>
        <hr/>
        </div>  
        <Modal/>
    </div>
  );
}
   

function Modal(){
  return (
    <div className='modal'>
      <h2>제목</h2>
          <p>제목</p>
          <p>상세내용</p>
    </div>
  )
}

export default App;
