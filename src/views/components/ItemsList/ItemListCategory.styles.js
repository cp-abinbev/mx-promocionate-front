// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledImgCategory = styled.img`
  ${tw`w-full h-full rounded-10`}
`;

export const StyleContainerImg = styled.div.attrs({
  className: "snap-start mb-[5px]",
})`
  ${tw`flex-none cursor-pointer w-85 h-85`}
`;
