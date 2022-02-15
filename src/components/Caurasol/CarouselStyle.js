import styled from "styled-components";
import Slider from "react-slick";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const CarouselHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:968px){
      flex-direction: column;
      align-items: center;
      row-gap: 1rem;
      text-align: center;
  }
`;

export const CarouselHeading = styled.h1`
  font-size: clamp(3rem, 7vh, 4rem);
  letter-spacing: 4px;
`;

export const CarouselButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  column-gap: 2rem;
  font-style: bold;

  svg {
    font-size: 3rem;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const CarouselItemsWrapper = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const CarouselItem = styled.div`
  height: 430px;
  display: flex !important;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 0 6px #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const ItemImage = styled.img`
  height: 300px;
  object-fit: cover;
  width: 100%;
`;

export const ItemSpan = styled.span`
  font-weight: bold;
  letter-spacing: 2px;
`;

export const ItemText = styled.p`
  color: grey;
`;

export const ItemButton = styled.button`
  background-color: #1d609c;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  box-shadow: 3px 3px 0 #ccc;

  font-weight: 600;
  border: none;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-top: auto;
  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
