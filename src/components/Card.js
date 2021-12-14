import React from 'react'
import styled from 'styled-components'

const Card = () => {

   

    return (
        <Wrapper>
            <ImageWrapper>
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