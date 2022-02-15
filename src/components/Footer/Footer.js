import React from "react";
import {Row, Section } from "../../globalStyles";
import {
  FooterAddress,
  FooterBrand,
  FooterBrandText,
  FooterLinks,
  FooterBrandLogo,
  FooterLogoGroup,
  FooterWrapper,
  StyledLink,
  LinkHeader,
  FooterSocialIcon,
  StyledHr,
} from "./FooterStyle";
import { footerSocialData, footerData } from "../../data/FooterData";

export const Footer = () => {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterBrand>
          <FooterLogoGroup>
            <FooterBrandLogo src="./assets/logo.png"></FooterBrandLogo>
            <FooterBrandText>Delta</FooterBrandText>
          </FooterLogoGroup>
            <FooterAddress>69 Street, Delta Building, US Road, Los Angeles 123</FooterAddress>
          <Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
        </FooterBrand>
        {footerData.map((item,index) => {
          return (
            <FooterLinks key={index}>
              <LinkHeader>{item.title}</LinkHeader>
              {item.links.map((link,index) => {
                return <StyledLink key={index}>{link}</StyledLink>;
              })}
            </FooterLinks>
          );
        })}
      </FooterWrapper>
      <StyledHr/>


    </Section>
  );
};
