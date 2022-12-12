import React, { useEffect } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/scroll";
import Animations from "../../utils/Animations";
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id){
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANCE = {
    description : "Hello my name is Robin, I am an enthusiastic, self motivated and eager to learn, as well as evolve my current skill set in order to successfully complete any task given to me. I graduated from Dublin City University in 2020. I have a BSci in Computer Applications and Software Engineering. I am very much interested in all areas of my qualification and have a fine aptitude of experiences. I would consider myself to be a Full stack developer working primarily with my more favorable technologies ( Javascript, Typescript, React )",
    highlights: {
      heading: "Here are a Few Highlights",
      bullets: [
        "Full Stack Developer",
        "Interactive Front End Applications",
        "Building REST API",
        "Managing database",
        "React & React Native",
      ],
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANCE.highlights.bullets.map((value, i) => {
    return (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    )});
  };
  return (
    <div className="fade-in about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANCE.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANCE.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <a href="CV+Robin+O'Shea.pdf">
                <button className="btn highlighted-btn">CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
