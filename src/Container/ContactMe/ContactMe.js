import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ScrollService from "../../utils/scroll";
import Animations from "../../utils/Animations";
import "./ContactMe.css";
import validator from "validator"; 
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import load1 from '../../assets/ContactMe/load2.gif';
export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [bool, setBool] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };


  const form = useRef();

  const checkValid = () => {
    if (firstName.length === 0 || lastName.length === 0 || message.length === 0 || subject.length === 0) {
      toast.error('Please Fill In All Fields');
      return false;
    } else if (!validator.isEmail(email)) {
      toast.error('Please provide a valid email');
      return false
    }
    return true;
  }
  
  const sendEmail = (e) => {
    e.preventDefault();
    let valid = checkValid()
    if (!valid) {
      setBool(false);
    } else {
      setBool(true);
      toast.info('Message Sending');
      console.log(process.env.PUBLIC_ID)
      const response = emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_ID)
      toast.promise(response,{
        pending : 'Message Sending',
        success : 'Message Delivered',
        error : 'Failure To Send'
      });
      setTimeout(() => {
        props.setModal(false)   
      },2000)
  
    }
  }

  return (
    <div className="popup">
        <div
        class="console-form"
        id="console-form">
        <div class="cf-row" id="taskbar">
            <p id="title">contact_me.sh</p>
            <ul id="buttons" class="buttons">
            <li id="red" class="button" onClick={() => props.setModal(false)}></li>
            <li id="yellow" class="button"></li>
            <li id="green" class="button"></li>
            </ul>
        </div>
        <div id="console" class="cf-row">
            <div class="cf-container">
            <form onSubmit={sendEmail} ref={form}>
                <div class="cf-line-row">
                <label for="firstName">first-name:</label>
                <input
                    name="firstName"
                    type="text"
                    onChange={handleFirstName}
                    value={firstName}
                    class="focus"
                    placeholder="Enter your first name"
                />
                </div>
                <div class="cf-line-row">
                <label for="lastName">last-name:</label>
                <input
                    name="lastName"
                    type="text"
                    onChange={handleLastName}
                    value={lastName}
                    placeholder="Enter your last name"
                />
                </div>
                <div class="cf-line-row">
                <label for="email">email:</label>
                <input
                    name="email"
                    type="text"
                    onChange={handleEmail}
                    placeholder="Enter an email"
                    value={email}
                />
                </div>
                <div class="cf-line-row">
                <label for="">subject:</label>
                <input
                    name="subject"
                    type="text"
                    placeholder="Enter an subject"
                    onChange={handleSubject}
                    value={subject}
                />
                </div>
                <div class="cf-line-row" id="message-row">
                <label for="">message:</label>
                <textarea
                    name="message"
                    rows="2"
                    cols="auto"
                    onChange={handleMessage}
                    placeholder="Enter a message"
                    value={message}
                ></textarea>
                </div>
                <div class="cf-line-row" id="submit-row">
                <div class="label" id="submit-label">
                    submit
                </div>
                <button type='submit' id="cf-submit-button" class="cf-button">
                    [Submit]
                    {bool ? (<b className="load">
                      <img src={load1} alt='image not responding'></img>
                    </b>) : ('')}
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
        <ToastContainer 
        theme="dark"
        autoClose={1000}/>
    </div>
  );
}
