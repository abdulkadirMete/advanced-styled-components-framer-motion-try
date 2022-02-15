import styled from "styled-components";
import { Button } from "../../globalStyles";
import { motion } from "framer-motion"

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  padding-left: 2rem;
  column-gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

export const ContentImage = styled(motion.img)`
  max-width: 600px;

  @media screen and (max-width: 968px) {
    max-width: 400px;
  }
`;

export const ContentInfo = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const ContentTopLine = styled.span`
  color: grey;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const ContentHeading = styled.h1`
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  font-size: 3rem;
  font-weight: 600;
`;

export const ContentText = styled.p`
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "white")};
`;

export const ContentButton = styled(Button)`
  border: 2px solid ${({ inverse }) => (inverse ? "white" : "#0c4577")};
  margin-right: auto;
  font-weight: bold;
  color: ${(inverse) => (inverse ? "#0c4577" : "white")};
  text-transform: uppercase;
  background-color: ${(inverse) => (inverse ? "white" : "#0c4577")};
  letter-spacing: 2px;

  &:hover {
    color: ${({ inverse }) => (!inverse ? "white" : "black")};
    background-color: ${(inverse) => (!inverse ? "white" : "#0c4577")};
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;
