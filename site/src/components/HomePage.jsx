import React, { Component } from 'react';
import '../css/HomePage.scss';

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div className='home_page'>
                <div className='home_page_title'>
                    <h1>Henry Morris</h1>
                    <div className='home_page_title_seperation'></div>
                    <h3>Personal Website</h3>
                </div>
            </div>
        );
    }
}

export default HomePage;