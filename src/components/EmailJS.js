import React, { useEffect } from "react";
import Card from '../components/Card'
import styled from "styled-components";
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';

function EmailJS() {

    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, []);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
          'service_7z9lfco',
          'template_5x0bycq', 
          e.target,
          'user_2K8EzR7KCI0ITth6MafqV'
          ) 
          .then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
            toast.error('Message error - please try again!');
          })
          toast.success('Message sent successfully!');
          e.target.reset()
      }
    
  return (
    <FormWrapper>
        <HeroWrapper>
            <Card />
          <TextWrapper>
            
                <FormContainer>
                <Title>Let's get in touch</Title>
                  <Caption>Get a free quote today!</Caption>
                      <form onSubmit={sendEmail} className="form" >
                      <InputContainer>
                        <input
                          className='form-input'
                          placeholder='name'
                          type="text" name="name" label="Name" variant="outlined" required
                          data-aos="fade-up" 
                          data-aos-delay="500"
                        />
                      </InputContainer>
                      <InputContainer>
                        <input
                          className='form-input'
                          type="text" name="email" label="Email" variant="outlined" required
                          placeholder='email'
                          data-aos="fade-up" 
                          data-aos-delay="700"
                        />
                      </InputContainer>

                      <InputContainer>
                        <input
                          className='form-input'
                          type="text" name="subject" label="Subject" variant="outlined" required
                          placeholder='subject'
                          data-aos="fade-up" 
                          data-aos-delay="700"
                        />
                      </InputContainer>
                  
                      <InputContainer>
                        <textarea
                          id="outlined-textarea"
                          rows='4'
                          placeholder='message'
                          className='form-input'
                          name="message" type="text" label="Message" variant="outlined" required
                          data-aos="fade-up" 
                          data-aos-delay="900"
                        ></textarea>
                      </InputContainer>
                      <InputContainer>
                        <button data-aos="fade-up" 
                          data-aos-delay="1000" type='submit' className='submit-button'> Send Message <i className="fas fa-check-circle"></i></button>
                      </InputContainer>
                    </form>
                </FormContainer>     
                 
          </TextWrapper>
        </HeroWrapper>
    </FormWrapper>
  );
}

export default EmailJS;

const FormWrapper = styled.div `
    max-width: 500px;
    height: 100vh;
    min-height: 700px;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
            display: inline-block;
            width: 100vw;
            height: auto;
            margin: 0 auto;
      }
`

const HeroWrapper = styled.div `
    display: grid;
    max-width: 1234px;
    grid-template-columns: 360px auto;
    gap: 100px;
    padding: 120px 20px 0px;
    justify-content: center;
    margin: 0 auto;
    
    

    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(1, auto);
        text-align: center;
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding: 0px;
      }

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
`

const TextWrapper = styled.div `
    position: relative;
    min-width: 400px;

    @media only screen and (max-width: 1200px) {
            height: 100vh;
        }
    

    input, textarea, .month-input {

      padding: 5px;
      width: 80%;
      background-color: white;
      color: black;
      border-style: solid;
      border-width: 1px;
      border-color: black;
      
      margin: 20px 0px;

      
      
      font-family: 'Archivo Black', sans-serif;

      :hover {
            transform: translateY(-3px) scale(1.03);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            
          }
    
          

      ::placeholder { /* Firefox, Chrome, Opera */
        color: black;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
      }
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: black;
      }
    }

    .submit-button {
      width: 83%;
      border-style: solid;
      border-color: black;
      border-width: 1px;
      background-color: white;
      padding: 5px 10px;
      color: black;
   


      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            color: rgb(32, 32, 32);
            border-color: rgb(32, 32, 32);
            box-shadow:  2px 2px 10px #1b1b1b;
          }
      
    }
`

const InputContainer = styled.h1 `
    margin: 0px;
`


const Title = styled.h1 `
    max-width: 500px;
    min-width: 350px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 72px;
    color: black;
    mix-blend-mode: normal;
    text-shadow: 0px 20px 40px rgba(0,0,0,0.3);
    font-family: "Roseritta";
    text-transform: lowercase;
`

const Caption = styled.p `
  font-size: 15px;
  text-transform: uppercase;
  color: black;
`

const FormContainer = styled.div `
  width: 100%;
  height: 100%;
  max-height: 800px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
    display: grid;
    grid-template-rows: repeat(4, auto);
    align-items: center;
    border-color: rgb(122, 142, 142);

  @media only screen and (max-width: 1200px) {
            display: inline-block;
            width: auto;
            height: auto;
            margin: 0 auto;
            padding: 0px;
            border-style: none;
            margin-top: 50px;
        }
  

  select {
    border-radius: 5px;
    background-color: transparent;
    padding: 5px;
    border-color: white;
    color: black;
    

      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(255, 133, 112);box-shadow:  20px 20px 60px #401aba, -20px -20px 60px #5624fc;
          }
    
  }
`

