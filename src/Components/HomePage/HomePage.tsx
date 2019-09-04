import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import HomePageTitle from './HomePageTitleContainer';
import WhoAmI from './WhoAmI';
import Experince from './Experince';
import '../../app.css';
import MyProgects from './MyProgects';

const HomePageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function App() {
    const particlesOptions: any = {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 2,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
    }
    return (
        <HomePageContainer>
            <Particles className="particles" params={particlesOptions}></Particles>
            <HomePageTitle />
            <Experince />
            <WhoAmI />
            <MyProgects />
        </HomePageContainer>
    );
}
export default App;
