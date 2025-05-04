import React from 'react';
import './RegisterPage.css'
import RegisterWidget from '../components/RegisterWidget';

const RegisterPage = () => {
    return <div>
        <div className='page'>
            <div className='column1'>
                <img src="/homepage.svg"></img>
            </div>
            <div className='column2'><RegisterWidget /></div>
        </div>
    </div>;
};

export default RegisterPage;
