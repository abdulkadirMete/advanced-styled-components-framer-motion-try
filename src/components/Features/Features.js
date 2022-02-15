import React from "react";
import { Container, Section } from "../../globalStyles";
import { FeatureHeader, FeatureItem, FeatureItemDescription, FeatureItemHeader, FeatureItemIcon, FeatureMenu, StyledLi } from "./FeatureStyles";
import { featuresData } from "../../data/FeaturesData";

export const Features = () => {
  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <FeatureHeader>what we offer</FeatureHeader>
        <FeatureMenu>
          {featuresData.map((feature,index) => {
            return <FeatureItem key={index}>
                <FeatureItemIcon>{feature.icon}</FeatureItemIcon>
                <FeatureItemHeader>{feature.name}</FeatureItemHeader>
                <FeatureItemDescription>{feature.description}</FeatureItemDescription>
            </FeatureItem>;
          })}
        </FeatureMenu>
      </Container>
    </Section>
  );
};
