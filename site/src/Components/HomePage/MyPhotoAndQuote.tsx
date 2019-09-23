import React from 'react';
import styled from 'styled-components';
import Me from '../../img/nicePicture.jpg';

const Container = styled.div`
    width: fit-content;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
`;

const ProfileImage = styled.img`
    border: white 0.25em solid;
    object-fit: cover;
    border-radius: 50%;
    width: 20em;
    height: 20em;
    margin: 1em auto;
    display: block;
    @media (max-width: 1025px) { 
        width: 70vw;
        height: 70vw;
    }
`;

const TextContainer = styled.div`
    width: 35em;
    margin: auto;
    @media (max-width: 1025px) { 
        width: 95%;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    color: white;
    margin: 0.1em;
    font-family: "Times New Roman", Times, serif;
`;
const QuoteAuthor = styled.h1`
    font-size: 2em;
    text-align: right;
    color: white;
    margin-top: -0.25em;
    font-family: "Times New Roman", Times, serif;
    font-weight: lighter;
`;

const Para = styled.p`
    width: 90%;
    margin: auto;
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

function MyPhotoAndQuote() {
    return (
        <Container>
            <ProfileImage src={Me} />
            <TextContainer>
                <Title>Who Am I</Title>
                {/* <QuoteAuthor>-Les Brown</QuoteAuthor> */}
                <Para>
                    I am a passionate programer, an active citizen, and a caring friend/family member.
                    Currently I am also a student at Carleton University, and working at an Ottawa based startup Explorator.
                    With my free time I mainly work on improving my skills as a programmer ethier creating projects,
                    or learning new languages, however you may also see me on a soccer field.

                </Para>
            </TextContainer>
        </Container>
    );
}
export default MyPhotoAndQuote;
