import styled from "styled-components";
import tw from "twin.macro";

export const StyledPrivateContent = styled.div`
  ${tw`flex flex-col items-center bg-white`}
  overflow-x:${(props) => !props.button && "hidden"}
`;

export const StyledButtonBack = styled.button`
  ${tw`w-12 h-12 p-2 bg-black rounded-full grid place-items-center`}
`;

export const StyledInnerContent = styled.div`
  ${tw`py-6 md:max-w-screen-md md:px-0 min-w-[330px] xs:min-w-[360px] sm:min-w-[390px]`}
  min-height: calc(100vh - 4.5rem);
`;

export const StyledContainerButtons = styled.div`
  ${tw`flex items-center justify-between px-6 xs:px-0`}
`;

export const StyledBgImg = styled.div`
  ${tw`w-full flex flex-col items-center justify-center`}
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
