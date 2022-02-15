import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { Container, Section } from "../../globalStyles";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { data, sliderSettings } from "../../data/CarouselData";
import {
  CarouselButtonWrapper,
  CarouselContainer,
  CarouselHeader,
  CarouselHeading,
  CarouselItem,
  CarouselItemsWrapper,
  ItemButton,
  ItemImage,
  ItemSpan,
  ItemText,
} from "./CarouselStyle";

export const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section inverse={true}>
      <Container>
        <CarouselContainer>
          <CarouselHeader>
            <CarouselHeading>Find more about us</CarouselHeading>
            <CarouselButtonWrapper>

              <IconContext.Provider value={{ color: "#0c4577" }}>
                <BsArrowLeftCircleFill onClick={sliderRef?.slickPrev} />
                <BsArrowRightCircleFill onClick={sliderRef?.slickNext} />
              </IconContext.Provider>
            </CarouselButtonWrapper>
          </CarouselHeader>

          <CarouselItemsWrapper {...sliderSettings} ref={setSliderRef}>
            {data.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <ItemImage src={item.image}></ItemImage>
                  <ItemSpan>{item.title}</ItemSpan>
                  <ItemText>{item.description}</ItemText>
                  <ItemButton>Learn More</ItemButton>
                </CarouselItem>
              );
            })}
          </CarouselItemsWrapper>
        </CarouselContainer>
      </Container>
    </Section>
  );
};
