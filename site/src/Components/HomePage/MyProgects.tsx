import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';
import Progect from './Progect';
import WebsiteImage from '../../img/websiteImage.jpg';
import gameScreenCap from '../../img/gameCapture.jpg';
import TheGymLogPhoto from '../../img/TheGymLog.png';

const Container = styled.div`
    border: white solid thick;
    border-radius: 1em;
    width: 75em;
    height: 45em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
    @media (max-width: 1025px) { 
        width: 95%;
        height: auto;
        border: none;
    }
`;

const ProgectContainer = styled.div`
    height: 75%;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: row;
    @media (max-width: 1025px) { 
        display: block;
        padding-bottom: 2em;
    }
`;

function MyProgects() {
    const Progects: { textColor: string, url: string, title: string, img: string, para: string, languages: { text: string, backgroundColor: string }[] }[] = [
        {
            textColor: 'black', url: '', title: "Personal Website", img: WebsiteImage, para: 'This website I built myself. I used react, typescript, and styled-components. For the background I implemented particle.js, but all other styling was me. It is responsive to be able to be viewed on most screens.', languages: [{ text: "react", backgroundColor: "blue" }, { text: "Typescript", backgroundColor: "#00779d" }, { text: "Syled-Components", backgroundColor: "#ff4566" }]
        },
        { textColor: 'white', url: 'https://a1igator.github.io/LTAMH', title: "LTAMH", img: gameScreenCap, para: 'This is a hackathon project. I built this project along with 4 other people. I was responsible for the random map generation, the 2d mini game when you hit an enemy, and the 3d section once you complete the maze(or press “u”).', languages: [{ text: "JS", backgroundColor: "orange" }, { text: "Three.JS", backgroundColor: "#ff4566" }] },
        {
            textColor: 'black', url: 'http://www.henry-morris.ca/TheGymLog', title: "The Gym Log", img: TheGymLogPhoto, para: 'This is a way to log what exercises you do at the gym. The Frontend is made with react. The backend is made with express a node framework, and is connected to a mongodb database. (only avaible in desktop mode)', languages: [{ text: "react", backgroundColor: "blue" }, { text: "Typescript", backgroundColor: "#00779d" }, { text: "Syled-Components", backgroundColor: "#ff4566" }, { text: "node", backgroundColor: 'orange' }]
        }
    ]

    return (
        <Container>
            <TitleWithLines text={'A Few Of My Progects'} />
            <ProgectContainer>
                {Progects.map(ele => <Progect textColor={ele.textColor} url={ele.url} title={ele.title} languages={ele.languages} img={ele.img} para={ele.para} />)}
                {/* <Progect title={'Personal Website'} img={WebsiteImage} para={'asd'} /> */}
            </ProgectContainer>
        </Container>
    );
}
export default MyProgects;
