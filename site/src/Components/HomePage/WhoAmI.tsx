import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';

const Container = styled.div`
    border: white solid thick;
    border-radius: 1em;
    width: 75em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
`;

const Title = styled.div`
    text-align:center;
    font-weight: lighter;
    font-size: 4em;
    margin-bottom: 2em;
    color: white;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: row;
`;

const TextContainer = styled.div`
    /* border: white 0.1em solid; */
    margin: 0 auto;
    margin-bottom: 1em;
    border-radius: 1em;
    padding: 0 1em;
    width: 85%;
`;

const TextTitle = styled.h1`
    color: white;
    font-size: 3em;
    margin: 0.5em 0;
    font-weight: lighter;
`;

const Para = styled.p`
    font-size: 1.5em;
    color: white;
`;

function App() {
    return (
        <Container>
            <TitleWithLines text={'About Me'} />
            <TextContainer>
                <TextTitle>Happiness And Kindness</TextTitle>
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
export default App;
