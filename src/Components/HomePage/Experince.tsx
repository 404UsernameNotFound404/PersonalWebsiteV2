import React from 'react';
import styled from 'styled-components';
import MeImage from '../../img/nicePicture.jpg';
import TitleWithLines from './ComponentLibrayer/Title';
import ExperinceBlock from './ExperinceBlock';
import KinaxisImage from '../../img/kinaxis.jpg';
import ExploratorImage from '../../img/explorator.png';

const Container = styled.div`
    border: white solid thick;
    border-radius: 1em;
    /* background-color: white; */
    width: 75em;
    margin: auto;
    z-index: 10;
    margin-bottom: 4em;
`;

function Experince() {
    const ExperinceBlocksData: { title: string, subTitle: string, subTitleColor: string, image: string, url: string, para: string }[] = [
        { title: 'Kinaxis', subTitle: 'Front End Intership Summer 2019', subTitleColor: '#dc1d2d', image: KinaxisImage, url: 'https://www.kinaxis.com/en', para: 'My role at kinaxis was to develop Internal Tools. We started the year converting there career page to use an API to allow HR to put up /take down instead of the current situation having to ask marketing to put up the job which could take days to happen.' },
        { title: 'Explorator', subTitle: 'Junior Web Devolper', subTitleColor: "yellow", image: ExploratorImage, url: "https://explorator.ca", para: "My role in the company has only been frontend so far. The projects I have been involved in are the <a href = 'https://explorator.ca/' target='_blank'>companies website</a>, <a href = 'https://boxia.ca/?language=en' target='_blank'>Boxia</a>, and <a href = 'https://www.google.ca' target='_blank'>Franline</a>. I was responsible for half of the frontend work in each of those progects." }
    ]
    return (
        <Container>
            <TitleWithLines text={'My Experince'} />
            {ExperinceBlocksData.map((ele) => <ExperinceBlock title={ele.title} subTitle={ele.subTitle} subTitleColor={ele.subTitleColor} image={ele.image} url={ele.url} para={ele.para} />)}
        </Container>
    );
}
export default Experince;
