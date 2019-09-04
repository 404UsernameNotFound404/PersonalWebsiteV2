import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';

const TitleContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const TitleTextContainer = styled.div`
   margin: auto 0;
   margin-left: 4em;
`;

const TitleContentContainer = styled.div`
    margin: auto;
    height: fit-content;
    z-index: 100;
    display: flex;
`;

const TitleName = styled.h1`
    font-weight: lighter;
    font-size: 6em;
    margin: 0;
    margin-bottom: -0.1em;
    color: white;
    font-family: 'Scope One', serif;
`;

const TitleOfWebsite = styled.h1`
    font-weight: lighter;
    margin: 0;
    font-size: 3em;
    color: white;
    font-family: 'Scope One', serif;
`;

const TitleSepartor = styled.div`
    background-color: white;
    width: 100%;
    height: 0.1em;
    margin: 0.5em auto;
`;

const PhotoOfSelf = styled.img`
    border: white 0.25em solid;
    border-radius: 50%;
    width: 20em;
    height: 20em;
`;

function HomePageTitleContainer() {
    return (
        <TitleContainer id="particles-js">

            <TitleContentContainer>
                <PhotoOfSelf src={MeImage} />
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
