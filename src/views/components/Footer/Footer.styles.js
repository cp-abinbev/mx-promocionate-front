// Packages
import styled from "styled-components";
import tw from "twin.macro";

export const StyledFooter = styled.footer`
  ${tw`w-full`}
  background-color: #${(props) => props.bgColor}
`;

export const StyledTag = styled.div`
  ${tw`w-full text-center py-3`}
  background: #CACACA;
`;

export const StyledList = styled.ul.attrs({
  className: "space-y-4",
})`
  ${tw`mt-8 text-white px-6 pb-6`}
`;

export const StyledSocialMediaList = styled.ul.attrs({
  className: "flex snap-x snap-mandatory space-x-5 justify-center items-center",
})`
  ${tw`text-white px-6 pb-6`}
`;
