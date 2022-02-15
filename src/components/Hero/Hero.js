import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainText } from "../../globalStyles";
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted></HeroVideo>
      <Container>
        <MainText>Your data is secure with us</MainText>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
