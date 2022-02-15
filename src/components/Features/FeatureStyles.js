import styled from "styled-components";

export const FeatureHeader = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-size: clamp(2.3rem, 8vw, 3rem);
  letter-spacing: 4px;
`;

export const FeatureMenu = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width:1000px) {
    grid-template-columns: repeat(2, 1fr);

  }
  @media screen and (max-width:568px) {
      grid-template-columns: 1fr
  }
`;

export const FeatureItem = styled.div`
  display: grid;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 0 32px 8px #d0d0d0;
`;

export const FeatureItemIcon = styled.div`
  padding: 2rem;
  border: 1px solid #222;
  border-radius: 50%;
  margin: auto;
`;

export const FeatureItemHeader = styled.h3`
  margin-top: 1rem;
  letter-spacing: 2px;
`;

export const FeatureItemDescription = styled.p`
  margin-top: 1rem;
  color: grey;

  @media screen and (max-width:768px) {
      display: none;
    }
`;
