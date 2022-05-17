import styled from 'styled-components'
import imagefond from '../assets/images/imageFond.png'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_halur36', 'template_d3rmd5d', form.current, '1LnRxb_AWw7VeK05s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (

    <Wrapper>
      <img className="backgroundimage" src={imagefond} />
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <h1>CONTACTEZ-NOUS </h1>
          <div className="contain1">
            <input
              className="input1"
              type="text"
              name="entre_nom"
              placeholder="Nom"
            />
            <input
              className="input2"
              type="text"
              name="entre_prenom"
              placeholder="Prenom"
            />
          </div>
          <div className="contain2">
            <input
              className="input1"
              type="text"
              name="entre_email"
              placeholder="E-mail"
            />
            <input
              className="input2"
              type="text"
              name="entre_tel"
              placeholder="Téléphone"
            />
          </div>
          <input
            className="message"
            type="text"
            name="entre_msg"
            placeholder="Message"
          />
          <div className="containerBTN">
            <button type="submit" className="btnForm">
              Envoyez
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .backgroundimage {
    height: 100vh;
    opacity: 0.75;

  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4%;
    height: 500px;
    width: auto;

    h1 {
      color: #f6ebd8;
      margin-bottom: 40px;
    }

    .contain1,
    .contain2 {
      .input1 {
        margin-right: 14px;
      }

      .input1,
      .input2 {
        height: 40px;
        width: 275px;
        margin-bottom: 18px;
        background-color: black;
        border: 1px solid #f6ebd8;
        color: #f6ebd8;
      }
    }

    .message {
      height: 120px;
      width: 564px;
      background-color: black;
      border: 1px solid #f6ebd8;
      color: #f6ebd8;
    }

    .btnForm {
      height: 30px;
      width: 95px;
      margin-top: 20px;
      align-items: flex-end;
      background-color: black;
      border: 1px solid #f6ebd8;
      border-radius: 15px;
      color: #f6ebd8;
    }
  }
`

export default Contact
