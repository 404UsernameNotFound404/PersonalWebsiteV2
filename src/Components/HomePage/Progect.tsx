import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';

const Container = styled.div`
    border-radius: 1em;
    width: 35em;
    /* box-shadow: 0.25em 0.25em 0.125em grey; */
    height: 20em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
    display: flex;
    position: relative;
`;

const Title = styled.h1`
    font-size: 2em;
    margin: 0.1em 0;
    color: white;
`;

const TextContainer = styled.div`
    width: 60%;
    height: 94%;
    padding: 2% 2%;
    /* background-color: rgba(255,255,255,0.1); */
    background-color: rgba(0,0,0,0.25);
    border-width: 0;
    border: white solid 0.1rem;
    border-left-width: 0;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
`;

const ProgectImage = styled.img`
    width: 40%;
    min-height: 100%;
    object-fit: cover;
    border: white solid 0.1rem;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
`;

const Para = styled.p`
    font-size: 1.25em;
    margin: 0.1em 0;
    color: white;
`;

const LanguagesUsedContainer = styled.div`
    position: absolute;
    bottom: 0em;
    left: 0.5em;
    width: 37.5%;
    display: flex;
    flex-wrap: wrap;
`;

type LanguageTagStyle = {
    backgroundColor: string
}

const LanguageTag = styled.div<LanguageTagStyle>`
    /* width: 22.5%; */
    padding: 0.1em 0.25em;
    margin: 0.5em 0;
    margin-right: 2.5%;
    background-color: ${p => p.backgroundColor};
    color: white;
    text-align: center;
    border-radius: .25em;
`;

type Props = {
    title: string,
    img: string,
    para: string,
    languages: { text: string, backgroundColor: string }[],
}

function Progect(props: Props) {
    return (
        <Container>
            <LanguagesUsedContainer>
                {props.languages.map((ele) => <LanguageTag backgroundColor={ele.backgroundColor}>{ele.text}</LanguageTag>)}
            </LanguagesUsedContainer>
            <ProgectImage src={props.img} />
            <TextContainer>
                <Title>{props.title}</Title>
                <Para>{props.para}</Para>
            </TextContainer >

        </Container >
    );
}
export default Progect;
