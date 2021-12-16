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
            width: 100%;
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
        align-items: center;
        justify-items: center; 
        width: 90%;
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
    display: grid;
    gap: 20px;



    input, textarea, .month-input {
      border-radius: 5px;
      padding: 5px;
      width: 90%;
      margin: auto;
      background-color: #cecece;
      color: black;
      border-style: solid;
      border-width: 1px;
      border-color: white;
      box-shadow:  20px 20px 60px #1b1b1b,
             -20px -20px 60px #252525;

      
      
      font-family: 'Archivo Black', sans-serif;

      :hover {
            transform: translateY(-3px) scale(1.03);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            
          }
    
          

      ::placeholder { /* Firefox, Chrome, Opera */
        color: white;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: white;
      }
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: white;
      }
    }

    .submit-button {
      width: 95%;
      border-style: solid;
      border-color: white;
      border-width: 1px;
      border-radius: 5px;
      background-color: transparent;
      padding: 5px 10px;
      color: white;
      box-shadow:  20px 20px 60px #1b1b1b,
             -20px -20px 60px #252525;


      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(251, 218, 79);
            color: rgb(32, 32, 32);
            border-color: rgb(32, 32, 32);
          }
      
    }
`

const InputContainer = styled.h1 `
    margin-top: 25px;
`


const Title = styled.h1 `
    max-width: 500px;
    min-width: 350px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 72px;
    color: white;
    mix-blend-mode: normal;
    text-shadow: 0px 20px 40px rgba(0,0,0,0.3);
`

const Caption = styled.p `
  font-size: 15px;
  font-style: normal;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const FormContainer = styled.div `
  width: 100%;
  color: white;
  padding: 20px;

  min-height: 550px;
  border-color: white;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  border-radius: 15px;

  background-color: transparent;

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
    margin: 2px;
    color: white;
    

      :hover {
            transform: translateY(-3px) scale(1.1);
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            background-color: rgb(255, 133, 112);box-shadow:  20px 20px 60px #401aba, -20px -20px 60px #5624fc;
          }
    
  }
`

