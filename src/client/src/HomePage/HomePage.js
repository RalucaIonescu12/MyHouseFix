import React from 'react';
import './HomePage.css'
import LoginWidget from '../Login/LoginWidget';

const HomePage = () => {
  return <div>
            <div className='page'>
              <div className='column1'>
                <img src="/homepage.svg"></img>
              </div>
              <div className='column2'><LoginWidget /></div>
            </div>
          </div>;
};

export default HomePage;
