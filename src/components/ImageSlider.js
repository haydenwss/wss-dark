import React, {useState, useRef, useEffect} from 'react'
import './ImageSlider.css';
import sliderdata from '../data/sliderdata';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ImageSlider = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const [current, setCurrent] = useState(0)
    const length = sliderdata.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 4000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length]) 

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
        };

    const prevSilde = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current -1);
        console.log(current)
    }
    
     return (
        <SliderContainer data-aos="fade-down">
            <div className='hero--section'>
                <div className='hero--wrapper'>
                    {sliderdata.map((slide, index) => {
                        return (
                            <div className='hero--slide' key={index}>
                                {index === current && (
                                    <div className='hero--slider'>
                                    <img className='hero--image' src={slide.image} alt={slide.alt} />
                                    <Logo>
                                        <img data-aos-delay="2000" src='images/white-transparent.png' alt={slide.alt} />
                                    </Logo>
                                 
                                        <div className='hero--overlay'>
                                            <div className='hero--content'> 
                                                <Title>{slide.title}</Title>                       
                                            </div>
                                        </div>
                                </div>
                                )}
                            </div>
                        )
                    })}
                    <HeroButtons>
                        <button  onClick={prevSilde}><i className="fas fa-arrow-circle-left fa-3x"></i></button>
                        <button   onClick={nextSlide}><i className="fas fa-arrow-circle-right fa-3x"></i></button>
                    </HeroButtons>
                </div>
            </div>
        </SliderContainer>
    )
}

export default ImageSlider

const HeroButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
    color: white;

    button {
    border-style: none;  
    background-color: transparent;
    color: rgb(251, 218, 79);

    :hover {
            transform: translateY(-3px) scale(1.2);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
    :active {
        color: white;
        }
    }
`

const Logo = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    z-index: 1;
    color: white;

    img {
        margin: 20px;
        width: 200px;
        z-index: 1;

        @media only screen and (max-width: 1200px) {
            display: none;
        }
    }
`

const Title = styled.div`
    font-size: 40px;
    font-weight: 200;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.637);
    margin-bottom: 0.8rem;

@media only screen and (max-width: 1200px) {
  
      font-size: 20px;
    
  }

`

const SliderContainer = styled.div`
    padding-top: 200px;

    @media only screen and (max-width: 1200px) {
      padding-top: 100px;
    }
`