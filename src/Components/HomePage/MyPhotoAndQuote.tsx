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
    border-radius: 50%;
    width: 20em;
    height: 20em;
    margin: 1em auto;
    display: block;
`;

const TextContainer = styled.div`
    width: 35em;
`;

const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    color: white;
    margin: 0.1em;
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
                <Title>Happiness, and Kindness</Title>
                <Para>
                    The two words I live my life by. Firsy happyness, it's the reason I code becuase I love doing it,
                    and it makes me happy. That's also why you will see me on the soccer field, or simply making time
                    for family and friends. The Second word kindness is also very important. I had this very cheezy thing I
                    said as a kid which is "If everyone looks after everyone instead of only them selves you will have billons of
                    people watching out for you.", I don't remembe the exact quote, but I think the idea is still valid.
                </Para>
            </TextContainer>
        </Container>
    );
}
export default MyPhotoAndQuote;
