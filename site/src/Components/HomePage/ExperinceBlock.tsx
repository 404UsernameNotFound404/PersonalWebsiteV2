import React from 'react';
import styled from 'styled-components';

type SubTitleProps = {
    color: string,
}

const Container = styled.div`
    padding-bottom: 4em;
    width: fit-content;
    margin: auto;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) { 
        display: block;
    }
`;

const CircleImage = styled.img`
    border-radius: 50%;
    margin: auto;
    margin-right: 2em;
    width: 15em;
    height: 15em;
    @media (max-width: 768px) { 
        margin: auto;
        display: block;
        margin-bottom: 1em;
    }
`;

const TextContainer = styled.div<SubTitleProps>`
    border: solid thick;
    border-color: ${p => p.color};
    border-radius: 2em;
    /* background-color: white; */
    padding: 1em;
    width: 35em;
    height: 14em;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) { 
        width: 90%;
        padding: 2.5%;
        margin: auto;
        height: auto;
    }
`;

const Title = styled.a`
    font-size: 2.25em;
    /* color: #040025; */
    color: white;
    margin: 0 0.5rem;
    margin-top: 2em;
    margin-bottom: 0.1em;
    text-decoration: none;

`;

const SubTitle = styled.h3<SubTitleProps>`
    font-size: 1em;
    color: ${p => p.color};
    margin: 0.1rem 0.5rem;
    font-weight: 600;
    font-family: "Times New Roman", Times, serif;
`;

const Para = styled.p`
    font-size: 1.25em;
    /* color: #040025; */
    color: white;
    a {
        color: #2196f3;
    }
`;

type Props = {
    title: string,
    subTitle: string,
    url: string,
    para: string,
    image: string,
    subTitleColor: string,
    whenIWorkedThere: string,
}

function ExperinceBlock(props: Props) {
    return (
        <Container>
            <CircleImage src={props.image} />
            <TextContainer color={props.subTitleColor}>
                <div>
                    <Title href='https://www.kinaxis.com/en'>{props.title}</Title>
                    <SubTitle color={props.subTitleColor}>{props.subTitle}</SubTitle>
                    <SubTitle color={props.subTitleColor}>{props.whenIWorkedThere}</SubTitle>
                    <Para dangerouslySetInnerHTML={{ __html: props.para }} />
                </div>
            </TextContainer>
        </Container>
    );
}
export default ExperinceBlock;
