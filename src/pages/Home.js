import React from "react";
import { Carousel, Caurasol } from "../components/Caurasol/Carousel";
import { Content } from "../components/Content/Content";
import { Features } from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};
