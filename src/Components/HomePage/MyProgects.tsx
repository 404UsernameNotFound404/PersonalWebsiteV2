import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';
import Progect from './Progect';
import WebsiteImage from '../../img/websiteImage.jpg';
import gameScreenCap from '../../img/gameCapture.jpg';

const Container = styled.div`
    border: white solid thick;
    border-radius: 1em;
    width: 75em;
    height: 40em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
`;

const ProgectContainer = styled.div`
    height: 75%;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: row;
`;

function MyProgects() {
    const Progects: { title: string, img: string, para: string, languages: { text: string, backgroundColor: string }[] }[] = [
        { title: "Personal Website", img: WebsiteImage, para: 'This website I built myself. I used react, typescript, and styled-components. All the styling is pure CSS.', languages: [{ text: "react", backgroundColor: "blue" }, { text: "Typescript", backgroundColor: "#00779d" }, { text: "Syled-Components", backgroundColor: "#ff4566" }] },
        { title: "Personal Website", img: gameScreenCap, para: 'This website I built myself. I used react, typescript, and styled-components. All the styling is pure CSS.', languages: [{ text: "react", backgroundColor: "blue" }, { text: "Typescript", backgroundColor: "#00779d" }, { text: "Syled-Components", backgroundColor: "#ff4566" }] },
        { title: "Personal Website", img: WebsiteImage, para: 'This website I built myself. I used react, typescript, and styled-components. All the styling is pure CSS.', languages: [{ text: "react", backgroundColor: "blue" }, { text: "Typescript", backgroundColor: "#00779d" }, { text: "Syled-Components", backgroundColor: "#ff4566" }] }
    ]

    return (
        <Container>
            <TitleWithLines text={'My Projects'} />
            <ProgectContainer>
                {Progects.map(ele => <Progect title={ele.title} languages={ele.languages} img={ele.img} para={ele.para} />)}
                {/* <Progect title={'Personal Website'} img={WebsiteImage} para={'asd'} /> */}
            </ProgectContainer>
        </Container>
    );
}
export default MyProgects;
