import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: fit-content;
`;

const Title = styled.div`
    text-align:center;
    font-weight: lighter;
    font-size: 4em;
    margin: 0.5em 0.1em;
    color: white;
    font-family: 'Scope One', serif;
    @media (max-width: 1025px) { 
       font-size: 3em;
       width: auto;
    }
`;

const BlackLine = styled.div`
    background-color: white;
    width: 8em;
    height: 0.1em;
    margin: auto 0;
    @media (max-width: 1025px) { 
        width: 0;
    }
`;

type Props = {
    text: string
}

function TitleWithLines(props: Props) {
    return (
        <Container>
            <BlackLine />
            <Title>{props.text}</Title>
            <BlackLine />
        </Container>
    );
}
export default TitleWithLines;
