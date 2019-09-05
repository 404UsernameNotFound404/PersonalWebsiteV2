import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';

type ContainerStyle = {
    switch: boolean,
    backgroundImage: string,
}

const Container = styled.div<ContainerStyle>`
    border: solid thick white;
    transition: all 1.5s;
    border-radius: ${p => p.switch ? '0%' : '50%'};
    width: 15em;
    height: ${p => p.switch ? '22.5em' : '15em'};
    margin: auto;
    z-index: 10;
    background-image: url(${p => p.backgroundImage});
    background-size: auto 100%;
    background-position: 45%;
`;

type TitleStyle = {
    switch: boolean,
}

const Title = styled.h1<TitleStyle>`
    transition: all 1.5s;
    font-size: 1.75em;
    color: white;
    /* text-align: center; */
    margin: auto !important;
    padding-top: ${p => p.switch ? '1em' : '2.25em'};
    height: fit-content;
    width: fit-content;
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

const BlackOverlay = styled.div`
    background-color: rgba(0,0,0,0.4);
    border-radius: inherit;
    width: 100%;
    height: 100%;
`;

const textFadeIn = keyframes`
  0% {
    color: rgba(0,0,0,0);
  }

  100% {
    color: rgba(255,255,255,1);
  }
`;

const Para = styled.p`
    font-size: 1.25em;
    margin: 0.1em 0;
    color: white;
    width: 90%;
    margin: auto;
    text-align: center;
    animation: ${textFadeIn} 2s forwards;
`;

const LanguagesUsedContainer = styled.div`
    padding-top: 1em;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

type Props = {
    title: string,
    img: string,
    para: string,
    languages: { text: string, backgroundColor: string }[],
}

function Progect(props: Props) {
    const [shouldSwitch, setShouldSwitch] = useState(false);

    const onSwitch = () => {
        console.log('on switch');
        shouldSwitch ? setShouldSwitch(false) : setShouldSwitch(true);
    }

    const RenderPara = () => {
        return (
            <>
                <Para>{props.para}</Para>
                <LanguagesUsedContainer>
                    {
                        props.languages.map(ele => {
                            return (<LanguageTag backgroundColor={ele.backgroundColor}>{ele.text}</LanguageTag>);
                        })
                    }
                </LanguagesUsedContainer>
            </>
        )
    }

    return (
        <Container backgroundImage={props.img} onClick={onSwitch} switch={shouldSwitch}>
            <BlackOverlay>
                <Title switch={shouldSwitch}>{props.title}</Title>
                {
                    shouldSwitch ? RenderPara() : ''
                }
            </BlackOverlay>
        </Container >
    );
}
export default Progect;
