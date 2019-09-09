import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';

const TitleContainer = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 768px) {
        height: 30vh;
        width: 100%;
    }
`;

const TitleTextContainer = styled.div`
   margin: auto 0;
`;

const TitleContentContainer = styled.div`
    margin: auto;
    height: fit-content;
    z-index: 100;
    display: flex;
    justify-content: center;
`;

const TitleName = styled.h1`
    font-weight: lighter;
    font-size: 6em;
    margin: 0;
    margin-bottom: -0.1em;
    color: white;
    font-family: 'Scope One', serif;
    text-align: center;
    @media (max-width: 768px) { 
        font-size: 3em;
    }
`;

const TitleOfWebsite = styled.h1`
    font-weight: lighter;
    margin: 0;
    font-size: 3em;
    color: white;
    font-family: 'Scope One', serif;
    text-align: center;
    @media (max-width: 768px) { 
        font-size: 2em;
    }
`;

const TitleSepartor = styled.div`
    background-color: white;
    width: 100%;
    height: 0.1em;
    margin: 0.5em auto;
`;

function HomePageTitleContainer() {
    return (
        <TitleContainer id="particles-js">
            <TitleContentContainer>
                <TitleTextContainer>
                    <TitleName>Henry Morris</TitleName>
                    <TitleSepartor />
                    <TitleOfWebsite>Personal Website</TitleOfWebsite>
                </TitleTextContainer>
            </TitleContentContainer>
        </TitleContainer>
    );
}
export default HomePageTitleContainer;
