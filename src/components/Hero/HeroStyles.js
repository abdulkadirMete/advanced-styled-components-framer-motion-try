import styled from "styled-components";
import { colors } from "../../data/Colors";
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  padding-top: clamp(70px, 25vh, 220px);
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  color: white;
  text-align: center;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  letter-spacing: 2px;
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content:center;
flex-flow: wrap;
column-gap: .5rem;
`


export const HeroButton = styled(Button)`
position: relative;
background-color: white;
color: black;

&::before{
    height:500%;
}

&:hover::before{
    height: 0%;
}

&:hover {
    background-color: transparent;
    color: white;
  }
`