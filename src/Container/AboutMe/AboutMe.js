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
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aliquid accusamus veniam harum iste dolor, repellat eos inventore sapiente explicabo nesciunt, aspernatur dolores nobis! Nostrum explicabo autem vitae hic consequuntur. Non molestiae earum nostrum voluptatibus nam illo, qui laborum. Esse nam quia eligendi! Consequatur laborum est magni velit distinctio fugit? Et fugit consequatur suscipit consectetur? Cupiditate quod consectetur inventore asperiores? Accusamus vel quia ipsam cum qui eaque, officia enim iusto necessitatibus a, est earum, ad repellendus atque molestias tempora voluptate! Harum unde magnam quisquam excepturi dolorem quaerat quibusdam,",

    highlights: {
      heading: "Here are a Few Highlights",
      bullets: [
        "fsdada",
        "fasfasfasf",
        "fafsadasdaga",
        "dagasdasadg",
        "gasfasfasgad",
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
