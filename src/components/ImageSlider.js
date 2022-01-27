import React, {useState, useRef, useEffect} from 'react'
import './ImageSlider.css';
import sliderdata from '../data/sliderdata';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


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
            <InnerContainer>

            <div className='hero--section'>
                <div className='hero--wrapper'>
                    {sliderdata.map((slide, index) => {
                        return (
                            <div className='hero--slide' key={index}>
                                {index === current && (
                                    <div className='hero--slider'>
                                    <img className='hero--image' src={slide.image} alt={slide.alt} />
                                  
                                </div>
                                
                                )}
                                
                            </div>
                            
                        )
                    })}
                    
                    <HeroButtons>
                        <button  onClick={prevSilde}><i className="fas fa-long-arrow-alt-left fa-2x"></i></button>
                        <button   onClick={nextSlide}><i class="fas fa-long-arrow-alt-right fa-2x"></i></button>
                    </HeroButtons>
                </div>
            </div>
            
            <TextContnent>
                <h1>AREAS OF EXPERTISE</h1>
                <Pcontent>
                    <p>discovery</p>
                    <p>UX Planning</p>
                </Pcontent>
                <Pcontent>
                    <p>sitemapping</p>
                    <p>content Writing</p>
                </Pcontent>
                <Pcontent>
                    <p>web development</p>
                    <p>e-commerce</p>
                </Pcontent>
                <Pcontent>
                    <p>UI design</p>
                    <p>Webflow</p>
                </Pcontent>
                <Pcontent>
                    <p>database management</p>
                    <p>graphic design</p>
                </Pcontent>
                <Pcontent>
                    <p>graphic design</p>
                    <p>logo & brand creation</p>
                </Pcontent>
                
                <Link to='/contact'><button>get quote</button></Link>
            </TextContnent>
            </InnerContainer>
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
    color: white;

    :hover {
            transform: translateY(-3px) scale(1.2);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
          }
    :active {
        color: white;
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

const InnerContainer = styled.div`
    width: 100%;
    padding: 40px;
    background-color: rgb(122, 142, 142);
    border-style: solid;
    border-width: 1px;
    display: grid;
    grid-template-columns: repeat(2, 50% );
    align-items: center;
    justify-items: center; 

    @media only screen and (max-width: 1200px) {
        padding: 0px;
        display: block;
        padding-top: 20px;
    }
`

const TextContnent = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    align-items: center;
    justify-items: center; 
    color: white;

    h1 {
        font-family: "Roseritta";
    }

    button {
        margin: 10px;
        border-style: solid;
        border-color: white;
        border-width: 1px;
        background-color: transparent;
        color: white;
        padding: 5px 20px;
        text-transform: uppercase;
    }
`

const Pcontent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-items: center; 
    margin: 10px 0px;
    text-transform: uppercase;
    letter-spacing: 3px;

   p {
       margin: 0px 20px;

       @media only screen and (max-width: 1200px) {
        padding: 10px;
    }
   }

   @media only screen and (max-width: 1200px) {
        font-size: 12px;
        display: block;
        text-align: center;
    }
`

const SliderContainer = styled.div`
    padding: 200px;


    @media only screen and (max-width: 1200px) {
      padding: 100px 0px 0px 0px;    
      width: 100vw;
    }
`