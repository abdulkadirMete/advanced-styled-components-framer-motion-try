import React, { useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import { useInView } from "react-hook-inview";
import { useAnimation } from "framer-motion";

import {
  ContentButton,
  ContentContainer,
  ContentHeading,
  ContentImage,
  ContentInfo,
  ContentText,
  ContentTopLine,
} from "./ContentStyles";

export const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) => {
  // info animation
  // const initial = { opacity: 0, y: 30 };
  // const animation = useAnimation();

  // const [ref, inView] = useInView({ threshold: 0.2 });

  // useEffect(() => {
  //   if (inView) {
  //     console.log("inview");
  //     animation.start({
  //       opacity: 1,
  //       y: 0,
  //     });
  //   }
  // }, [inView, animation]);

  // img animation
  const imgVariant = {
    onHover: {
      rotate: 10,
      transition: { duration: 1, type: "tween", ease: "easeOut" },
    },
    initial: {
      rotate: 0,
    },
  };

  return (
    <Section inverse={inverse}>
      <Container>
        <ContentContainer>
          <ContentImage
            variants={imgVariant}
            initial="initial"
            whileHover="onHover"
            src={img}
          ></ContentImage>
          <ContentInfo>
            <ContentTopLine>{topLine.text}</ContentTopLine>
            <ContentHeading inverse={inverse}>{headline}</ContentHeading>
            <ContentText inverse={inverse}>{description}</ContentText>
            <ContentButton>View Projects</ContentButton>
          </ContentInfo>
        </ContentContainer>
      </Container>
    </Section>
  );
};
