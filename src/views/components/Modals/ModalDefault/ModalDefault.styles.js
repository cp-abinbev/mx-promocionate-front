import styled from "styled-components";
import tw from "twin.macro";

export const StyledDivContainer = styled.div`
  ${tw`fixed top-0 left-0 flex flex-col items-center w-full h-full opacity-0 pointer-events-none `}
  opacity: ${(props) => (props.active ? "1" : "")};
  pointer-events: ${(props) => (props.active ? "auto" : "")};
  z-index: 900;
`;

export const StyledDivModal = styled.div`
  ${tw`bg-white rounded-t-lg opacity-0 pointer-events-none `}
  opacity: ${(props) => (props.active ? "1" : "")};
  pointer-events: ${(props) => (props.active ? "auto" : "")};
`;
