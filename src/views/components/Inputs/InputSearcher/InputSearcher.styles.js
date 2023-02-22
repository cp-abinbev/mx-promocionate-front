import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerSearch = styled.div`
  ${tw`flex ml-21`}
`;

export const StyledInputContainer = styled.div`
  ${tw`flex items-center justify-center h-12 rounded-lg bg-lightGray  mr-21 w-[-webkit-fill-available] justify-between`}
  input {
    ${tw`flex-grow outline-none cursor-pointer font-workSans ml-21 bg-lightGray`}
  }
  img {
    ${tw`cursor-pointer h-18 w-18 mr-15`}
  }
`;

export const StyledContainerOptions = styled.div`
  ${tw`absolute z-[99] left-[12px] right-[12px] bg-white max-h-[130px] overflow-y-auto top-[50px] cursor-pointer`}
  box-shadow: 0px 2px 8px -2px black;
`;
