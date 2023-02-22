import styled from "styled-components";
import tw from "twin.macro";

export const StyledPublicContent = styled.div`
  ${tw`flex flex-col items-center bg-white`}
`;

export const StyledInnerContent = styled.div`
  ${tw`w-full md:max-w-screen-md py-6`}
  min-height: calc(100vh - 4.5rem);
`;
export const StyledBgImg = styled.div`
  ${tw`w-full flex flex-col items-center justify-center `}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imgMobile && props.imgMobile});
  @media (min-width: 640px) {
    background-image: url(${(props) => props.imgTablet && props.imgTablet});
  }
  @media (min-width: 1024px) {
    background-image: url(${(props) => props.imgDesktop && props.imgDesktop});
  }
`;

export const StyledButtonBack = styled.button`
  ${tw`w-12 h-12 p-2 bg-black rounded-full flex items-center justify-center self-start mx-6 mt-[18px]`}
`;
