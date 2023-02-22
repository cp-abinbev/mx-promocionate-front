// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerCarousel = styled.div`
  ${tw`flex w-[100vw] overflow-x-scroll space-x-3 md:w-full md:ml-21`}
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1.5rem;
`;

export const StyledGradient = styled.div`
  ${tw`absolute hidden -right-8 h-85 w-100 md:block`}
  background: rgb(255,255,255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 45%
  );
`;
