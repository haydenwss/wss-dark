import React from 'react'
import styled from 'styled-components'

const Card = () => {

   

    return (
        <Wrapper>
            <ImageWrapper>
                <h1>Contact</h1>
              <img data-aos-delay="400" data-aos="fade-down" src='https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt='' />
            </ImageWrapper>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div `
    min-width: 400px;
    min-height: 550px;
    max-height: 800px;
    color: white;
    display: relative;
    padding: 8px 10px;

    h1 {
        font-size: 40px;
        font-family: "Roseritta";
    }
    
    background-color: rgb(122, 142, 142);
    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(1, auto);
        text-align: center;
        align-items: center;
        justify-items: center; 
        width: 90%;
        height: auto;
        margin: 0 auto;
        padding: 10px;
        margin-top: 50px;
    }

`

const ImageWrapper = styled.div `
    width: 100%;
    height: auto;
    padding:  0px;
    text-align: center;

    img {
        min-width: 100%; /* or any custom size */
        height: 100%; 
        object-fit: cover;
        
    }
`