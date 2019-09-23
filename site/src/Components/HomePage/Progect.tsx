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
    height: ${p => p.switch ? '27.5em' : '15em'};
    margin: auto;
    z-index: 10;
    background-image: url(${p => p.backgroundImage});
    background-size: auto 100%;
    background-position: 45%;
    @media (max-width: 1025px) { 
        margin-top: 0;
        margin-bottom: 2em;
    }
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
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
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
    min-width: 12.5%;
    padding: 0.1em 0.25em;
    margin: 0.5em 0;
    margin-right: 2.5%;
    background-color: ${p => p.backgroundColor};
    color: white;
    text-align: center;
    border-radius: .25em;
`;

type BlackOverlayStyle = {
    switch: boolean,
}

const BlackOverlay = styled.div<BlackOverlayStyle>`
    transition: all 2s;
    background-color: ${p => p.switch ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.4)'};
    border-radius: ${p => p.switch ? '0%' : '50%'};
    width: 100%;
    height: 100%;
`;

const Para = styled.p`
    font-size: 1.15em;
    margin: 0.1em 0;
    color: white;
    width: 90%;
    margin: auto;
    text-align: center;
`;

type ClickToExpandStyle = {
    switched: boolean
}

const ClickToExpand = styled.p<ClickToExpandStyle>`
    font-size: 1.15em;
    margin: 0.1em 0;
    transition: all 2s;
    color: ${p => p.switched ? 'transparent' : 'white'};
    width: 90%;
    margin: auto;
    text-align: center;
    cursor: pointer;
`;

const LanguagesUsedContainer = styled.div`
    padding-top: 1em;
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ParaAndLanguagesFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ParaAndLanguagesFadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

type RevealParaAndLanguagesStyle = {
    startAnimation: boolean
}

const RevealParaAndLanguages = styled.div<RevealParaAndLanguagesStyle>`
     animation: ${p => p.startAnimation ? ParaAndLanguagesFadeIn : ParaAndLanguagesFadeOut} ${p => p.startAnimation ? '2s' : '0.5s'} forwards;
`;



type Props = {
    title: string,
    img: string,
    para: string,
    languages: { text: string, backgroundColor: string }[],
    url: string,
    textColor: string,
}

function Progect(props: Props) {
    const [shouldSwitch, setShouldSwitch] = useState(false);
    const [renderPara, setRenderPara] = useState(false);

    const onSwitch = () => {
        console.log('on switch');
        shouldSwitch ? setShouldSwitch(false) : setShouldSwitch(true);
        setRenderPara(true);
    }

    const animationEnd = () => {
        console.log('animation end');
        if (!shouldSwitch) {
            setRenderPara(false);
        }
    }

    const RenderPara = () => {
        if (renderPara) {
            return (
                <RevealParaAndLanguages startAnimation={shouldSwitch} onAnimationEnd={animationEnd}>
                    <Para>{props.para}</Para>
                    <LanguagesUsedContainer>
                        {
                            props.languages.map(ele => {
                                return (<LanguageTag backgroundColor={ele.backgroundColor}>{ele.text}</LanguageTag>);
                            })
                        }
                    </LanguagesUsedContainer>
                </RevealParaAndLanguages>
            )
        } else {
            return (
                <ClickToExpand switched={shouldSwitch}>Click To Expand</ClickToExpand>
            );
        }
    }

    const goToLink = () => {
        window.location.href = props.url;
    }

    return (
        <Container backgroundImage={props.img} onClick={onSwitch} switch={shouldSwitch}>
            <BlackOverlay switch={shouldSwitch}>
                <Title onClick={goToLink} switch={shouldSwitch}>{props.title}</Title>
                {RenderPara()}
            </BlackOverlay>
        </Container >
    );
}
export default Progect;
