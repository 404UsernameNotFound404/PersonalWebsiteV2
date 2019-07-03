import React, { Component } from 'react';
import WhoAmIParts from './WhoAmIParts';
import '../css/WhoAmI.scss';

class WhoAmI extends Component {
    state = {}
    render() {
        return (
            <div className='who_am_I_page'>
                <h1>A Little About Me</h1>
                <div className='three_parts_of_me'>
                    <WhoAmIParts title='Atheltics' className='atheltics' />
                    <WhoAmIParts title='Active Citizenship' className='active_citizen' />
                    <WhoAmIParts title='Programming' className='coding' />
                </div>
            </div>
        );
    }
}

export default WhoAmI;