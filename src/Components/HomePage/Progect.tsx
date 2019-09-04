import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';

const Container = styled.div`
    border-radius: 1em;
    width: 35em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
    display: flex;
    position: relative;
`;

const Title = styled.h1`
    font-size: 2em;
    margin: 0.1em 0;
`;

const TextContainer = styled.div`
    width: 50%;
    padding: 0.5em;
    background-color: white;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
`;

const ProgectImage = styled.img`
    width: 50%;
    border: white solid thick;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
`;

const Para = styled.p`
    font-size: 1.25em;
    margin: 0.1em 0;
`;

type Props = {
    title: string,
    img: string,
    para: string,

}

function Progect(props: Props) {
    return (
        <Container>
            <ProgectImage src={props.img} />
            <TextContainer>
                <Title>{props.title}</Title>
                <Para>{props.para}</Para>
            </TextContainer >

        </Container >
    );
}
export default Progect;
