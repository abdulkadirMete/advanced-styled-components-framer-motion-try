import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  color: white;
  column-gap: 2rem;
  padding-bottom: 70px;

  @media screen and (max-width: 968px) {
      grid-template-columns: repeat(3,1fr);
      row-gap: 3rem;
  }

`;

export const StyledHr = styled.hr`
  height: .5px;
  background-color: #22264d;
  width: 80%;
  border: none;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
     width: 100%;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

// Logo

export const FooterLogoGroup = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const FooterBrandText = styled.span`
  color: white;
  font-size: 2em;
`;

export const FooterBrandLogo = styled.img`
  width: 36px;
`;

//Social logo

export const FooterAddress = styled.span``;

export const FooterSocialIcon = styled.a`
  color: #fff;
  font-size: 24px;
`;

//Links
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const LinkHeader = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2em;
  font-weight: bold;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;
