import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';
import Progect from './Progect';
import WebsiteImage from '../../img/websiteScreenCap.png';

const Container = styled.div`
    border: white solid thick;
    border-radius: 1em;
    width: 75em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
`;

const ProgectContainer = styled.div`
    display: flex;
    flex-wrap: row;
`;

function MyProgects() {
    return (
        <Container>
            <TitleWithLines text={'My Projects'} />
            <ProgectContainer>
                <Progect title={'Personal Website'} img={WebsiteImage} para={'This website I built myself. I used react, typescript, and styled-components. All the styling is pure CSS.'} />
                <Progect title={'Personal Website'} img={WebsiteImage} para={'asd'} />
            </ProgectContainer>
        </Container>
    );
}
export default MyProgects;
