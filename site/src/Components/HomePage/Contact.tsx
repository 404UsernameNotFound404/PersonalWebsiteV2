import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Scroll } from 'styled-icons/fa-solid/Scroll';
import MeImage from '../../img/nicePicture.jpg';
import Title from './ComponentLibrayer/Title';
import GithubLogo from '../../img/githubLogo.svg';
import LinkedInLogo from '../../img/linkedIn.svg';
import ResumeIcon from '../../img/ResumeIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    border: white solid thick;
    border-radius: 1em;
    width: 75em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
    @media (max-width: 768px) { 
        width: 95%;
        border: none;
    }
`;

const IconContainer = styled.div`
    width: 90%;
    margin: 2em auto;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) { 
        margin-bottom: 4em;
    }
`;
const Icon = styled.img`
    cursor: pointer;
    width: 4em;
    height: 4em;
    margin: 0 1em;
    filter: brightness(0.5);
    transition: all 0.5s;
    &:hover {
        filter: brightness(1);
        transform: translate(0, -5px);
    }
`;

const SrollIcon = styled(Scroll)`
    cursor: pointer;
    color: grey;
    width: 4em;
    height: 4em;
    margin: 0 1em;
    filter: brightness(1);
    transition: all 0.5s;
    &:hover {
        color: white;
        transform: translate(0, -5px);
    }
`;

const EmailContainer = styled.form`
    display: flex;
    margin: 2em auto;
    width: fit-content;
    @media (max-width: 768px) { 
        display: block;
    }
`;

const Email = styled.textarea`
    color: white;
    font-size: 2em;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    resize: none;
    background-color: transparent;
    border: none;
    width: 15em;
    height: 1.15em;
    overflow:hidden;
    &:focus {
        outline: none;
    }
    @media (max-width: 768px) { 
        width: 92vw;
        font-size: 1.3em;
    }
   
`;

const CopyButton = styled.div`
    cursor: pointer;
    border: white 0.1em solid;
    padding: 0.1em 1em;
    height: fit-content;
    margin: auto;
    margin-left: 0.5em;
    color: white;
    font-size: 1.5em;
    transition: all 0.5s;
    &:hover {
        background-color: rgba(255,255,255,0.1);
    }
    @media (max-width: 768px) { 
        width: 50%;
        text-align: center;
        margin: auto;
    }
`;

function Contact() {
    const [test, setTest] = useState();
    let textAreaRef = useRef(null);

    const IconClicked = (url: string) => {
        window.location.href = url;
    }

    const IconResumeClicked = () => {
        window.location.pathname = '/Resume.pdf';
    }

    const CopyEmail = async (e: any) => {
        console.log('clicked copy')
        //@ts-ignore
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    }

    const SelectTextArea = () => {
        //@ts-ignore
        textAreaRef.current.select();
    }


    return (
        <Container>
            <Title text='Contact Me'></Title>
            <IconContainer>
                <Icon onClick={() => { IconClicked('https://github.com/404UsernameNotFound404') }} src={GithubLogo} />
                <Icon onClick={() => { IconClicked('https://www.linkedin.com/in/henry-joseph-morris/') }} src={LinkedInLogo} />
                <SrollIcon onClick={IconResumeClicked} />
            </IconContainer>
            <EmailContainer id="test">
                <Email ref={textAreaRef} value='Henry.Joseph.Morris@gmail.com' readOnly={true} />
                <CopyButton onMouseEnter={SelectTextArea} id='copyButton' onClick={CopyEmail}>Copy Email</CopyButton>
            </EmailContainer>
        </Container>
    );
}
export default Contact;
