import React, { Component } from 'react';

class WhoAmIParts extends Component {
    state = {
        classNameAddOn: ' ',
    }

    onHover = () => {
        this.setState({
            classNameAddOn: ' who_am_I_parts_on_hover',
        });
    }
    onLeave = () => {
        this.setState({
            classNameAddOn: ' who_am_I_parts_on_leave',
        });
    }

    render() {
        return (
            <div className='parts_of_me_container'>
                <h1>{this.props.title}</h1>
                <div onMouseLeave={this.onLeave} onMouseEnter={this.onHover} className={'parts_of_me ' + this.props.className + this.state.classNameAddOn}>
                    <h4 className='test'>Expand</h4>
                </div>
            </div>
        );
    }
}

export default WhoAmIParts;