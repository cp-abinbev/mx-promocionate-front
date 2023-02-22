// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledTypography = styled.p`
  // Variant
  ${(props) => {
    switch (props.variant) {
      case "2xl":
        return tw`text-4xl `;
      case "h1":
        return tw`text-3xl font-semibold leading-[1.8rem]`;
      case "titleAgegate":
        return tw`text-[20px] font-barlow font-semibold leading-[24px]`;
      case "subtitleAgegate":
        return tw`text-[14px] font-workSans font-normal leading-[22px]`;
      case "h2":
        return tw`text-lg `;
      case "h3":
        return tw`text-sm `;
      case "h4":
        return tw`text-xs `;
      case "h5":
        return tw`text-xs `;
      case "subtitle":
        return tw`text-xl font-semibold font-barlow`;
      case "ageGate":
        return tw`text-[15px] leading-[20px] font-workSans font-semibold`;
      case "p":
        return tw`text-base font-normal leading-22`;
      case "filterTitle":
        return tw`text-base font-semibold leading-22 font-workSans`;
      case "white":
        return tw`text-base font-bold text-black bg-white w-[25px] h-[25px] rounded-full flex items-center justify-center `;
      case "error":
        return tw`text-xs text-red-600`;
      default:
        return tw`text-base `;
    }
  }}
`;
