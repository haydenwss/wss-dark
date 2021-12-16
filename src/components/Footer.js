import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGroup>
                <Link to='/'>
                    <img src='/images/white-transparent.png' alt='Footer logo' />
                </Link>
            </FooterGroup>
            <FooterGroup>
                <p>Victoria, British Columbia <i className="fas fa-map-marker-alt"></i></p>
                <p>250-532-3569 <i className="fas fa-phone"></i></p>
                <a href = "mailto: websuitestudio@gmail.com">email <i className="fas fa-envelope"></i></a>
            </FooterGroup>
            <FooterGroup>
                <Link to='/'><p>Home</p></Link>
                <Link to='/process'><p>Process</p></Link>
                <Link to='/contact'><p>Contact</p></Link>
            </FooterGroup>
        
            <CopyContainer>
                <p>Copyright <i className="far fa-copyright"></i> 2021 Web Suite Studio. All Rights Reserved.</p>
            </CopyContainer>
            
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    background-color: rgb(32, 32, 32);
    color: rgb(251, 218, 79);
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
      display: inline-block;
      width: 100vw;
      height: auto;
      padding-top: 200px;
  }

`


const CopyContainer = styled.div`
     @media only screen and (max-width: 1200px) {
            text-align: center;
        }
`

const FooterGroup = styled.div`
    margin: 0 auto;
    max-width: 700px;
    padding: 20px;
    text-align: center;

    img {
        height: 100px;

        @media only screen and (max-width: 1200px) {
            width: 80%;
            height: auto;
        }
    }
    
    p {
        color: white;
        font-size: 15px;
        line-height: 1.5;
        
    }
`