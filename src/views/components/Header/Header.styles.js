// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeader = styled.header`
  ${tw`flex items-center justify-between w-full h-72`};
  background-color: #${(props) => props.bgColor && props.bgColor};
`;

export const StyledIconProfile = styled.img.attrs({
  className: "w-22",
})`
  ${tw`cursor-pointer`}
`;

export const StyledLogo = styled.img`
  ${tw`ml-4 `}
`;
