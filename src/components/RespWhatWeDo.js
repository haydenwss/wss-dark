import React, {useEffect} from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const RespWhatWeDo = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
  
    return (
        <BoxContainer>

               <CellGroup data-aos="fade-in">            
                    <CellImage><img src='https://cdn-icons-png.flaticon.com/512/5968/5968704.png' alt='' /></CellImage>
                    <CellTitle>We use Figma for all UX and UI design development. You can use it to do all kinds of graphic design work from wireframing websites, designing mobile app interfaces, prototyping designs, crafting social media posts, and everything in between.</CellTitle>
                </CellGroup>
              
                <CellGroup data-aos="fade-in">
                    <CellImage><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Font_Awesome_5_brands_react.svg/1200px-Font_Awesome_5_brands_react.svg.png' alt='' /></CellImage>
                    <CellTitle> For building high-performing responsive websites and web applications, using libraries has become imperative. ReactJS is one such front-end web development tool for developers that is used by around 4.5 million websites worldwide.</CellTitle>
                </CellGroup>
            
                <CellGroup data-aos="fade-in">
                    <CellImage><img src='https://d3e54v103j8qbb.cloudfront.net/img/webflow-black.ef3f174957.svg' alt='' /></CellImage>
                    <CellTitle>It seems like website builders are about a dime a dozen these days. They're quick, but the vast bulk of them aren't great. Webflow is a rare exception to this rule. Built with a “code-first” philosophy, Webflow is an all-in-one web design tool that allows users to design, build, and launch responsive websites visually.</CellTitle>
                </CellGroup>
          
                <CellGroup data-aos="fade-in">
                    <CellImage><img src='https://cdn-icons-png.flaticon.com/512/41/41861.png' alt='' /></CellImage>
                    <CellTitle>There is no one magical step for SEO, it's about finding, and combining the best tools to use that suit your business the best. We use Google Search Console, YOAST, SEMRush, and all the best practices revolving around SEO markup, indexing rules, redirects, and more.  </CellTitle>
                </CellGroup>
      
        </BoxContainer>

    )
}

export default RespWhatWeDo

const BoxContainer = styled.div`
    display: none;

    @media only screen and (max-width: 1200px) {
      display: inline-block;
      width: 100vw;
      padding: 0;
  }

`
const CellGroup = styled.div`
    width: 300px;
    height: 400px;
    background-color: rgb(122, 142, 142);
    color: rgb(32, 32, 32);
    border-radius: 20px;
    text-align: center;
    padding: 80px 10px 0px 10px;

   @media only screen and (max-width: 1300px) {
      width: 250px;
      padding: 0px;
      margin: 0 auto;
      padding-top: 50px;
  }

   @media only screen and (max-width: 1200px) {
      width: 90%;
      margin-top: 40px;
  }

`
const CellImage = styled.div`
    width: 30%;
    height: auto;
    margin: 0 auto;

    img {
        width: 100%;
    }
`

const CellTitle = styled.div`
    font-size: 15px;
    padding: 30px;
    margin: 20px;
    letter-spacing: 1.2px;

    @media only screen and (max-width: 900px) {
      font-size: 12px;
      line-height: 18px;
  }
`