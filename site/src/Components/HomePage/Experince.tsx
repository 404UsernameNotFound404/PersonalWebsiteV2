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
    @media (max-width: 1025px) { 
        width: 95%;
        border: none;
    }
`;

function Experince() {
    const ExperinceBlocksData: { whenIWorkedThere: string, title: string, subTitle: string, subTitleColor: string, image: string, url: string, para: string }[] = [
        { whenIWorkedThere: 'July 2019 - August 2019', title: 'Kinaxis', subTitle: 'Front End Summer Intership', subTitleColor: '#dc1d2d', image: KinaxisImage, url: 'https://www.kinaxis.com/en', para: 'My role at kinaxis was to develop Internal Tools. We started the year converting their career page to use an API to allow HR to put up /take downjobs more easily. Then I was asked to make a microsoft teams bot to help alert developers of the status of builds.' },
        { whenIWorkedThere: 'April 2019 - Current', title: 'Explorator', subTitle: 'Junior Web Devolper', subTitleColor: "yellow", image: ExploratorImage, url: "https://explorator.ca", para: "My role in the company has only been frontend so far. The projects I have been involved in are the <a href = 'https://explorator.ca/' target='_blank'>companies website</a>, <a href = 'https://boxia.ca/?language=en' target='_blank'>Boxia</a>, and <a href = 'http://franlin.io/' target='_blank'>Franline</a>(only mobile available). I was responsible for half of the frontend work in each of those projects." }
        
    ]
    return (
        <Container>
            <TitleWithLines text={'My Experince'} />
            {ExperinceBlocksData.map((ele) => <ExperinceBlock whenIWorkedThere={ele.whenIWorkedThere} title={ele.title} subTitle={ele.subTitle} subTitleColor={ele.subTitleColor} image={ele.image} url={ele.url} para={ele.para} />)}
        </Container>
    );
}
export default Experince;
