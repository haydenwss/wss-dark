import React from 'react'
import styled from 'styled-components'

const Card = () => {

   

    return (
        <Wrapper>
            <ImageWrapper>
                <h1>Contact</h1>
              <img data-aos-delay="400" data-aos="fade-down" src='images/email.svg' alt='' />
            </ImageWrapper>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div `
    width: 360px;
    min-height: 550px;
    border-radius: 15px;
    display: relative;
    padding: 20px;
    
    background-color: #fbda4f;
    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(1, auto);
        text-align: center;
        align-items: center;
        justify-items: center; 
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding: 0px;
    }

`

const ImageWrapper = styled.div `
    width: 100%;
    height: auto;
    padding: 140px 40px;

    img {
        width: 80%;
        height: auto;
        
    }
`