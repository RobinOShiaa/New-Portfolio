import React, {useState} from 'react';
import Typical from 'react-typical';
import ContactMe from '../../ContactMe/ContactMe';
import "./Profile.css";
export default function Profile({ setModal, modal }) {
    console.log(modal);
  return (
    <div className='profile-container'>
        {modal && (
            <div>
                <div className='overlay'>
                    <ContactMe setModal={setModal}/>
                </div>
            </div>


        )}
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='www.facebook.com/robby.oshea.3/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://github.com/RobinOShiaa'>
                            <i className="fa fa-github"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/robin-o-shea-035b2a223'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/robin-o-shea-035b2a223'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    Hello I'm <span className='highlighted-text'>Robin</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>

                    <h1>
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Driven Dev 😊",
                            1100,
                            "Front End Dev 👌",
                            1100,
                            "Back End Dev 🌐",
                            1100,
                            "Javascript Dev 💻",
                            1100,
                            "Typescript Dev 🔥",
                            1100,
                            "React Dev 🔴",
                            1100,
                            "Python Dev 😏",
                            1100,
                        ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>Talent for creating Front & Back End applications</span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn btn-modal' onClick={() => setModal(true)}>
                    Contact Me
                </button>
                <a href="CV+Robin+O'Shea.pdf">
                    <button className='btn highlighted-btn'>CV</button>
                </a>
            </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'></div>
        </div>
    </div>
</div>

  );
}
