import styled from "styled-components";
import tw from "twin.macro";

export const StyledDivContainer = styled.div`
  ${tw`fixed top-0 left-0 flex flex-col items-center w-full h-full opacity-0 pointer-events-none `}
  opacity: ${(props) => (props.active ? "1" : "")};
  pointer-events: ${(props) => (props.active ? "auto" : "")};
  z-index: 900;
`;

export const StyledDivModal = styled.div`
  ${tw`relative bg-black rounded-t-lg opacity-0 pointer-events-none `}
  opacity: ${(props) => (props.active ? "1" : "")};
  pointer-events: ${(props) => (props.active ? "auto" : "")};
`;

export const StyledDivIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 12.5px;
`;

export const StyledLinkCopied = styled.div`
  ${tw`flex items-center justify-center opacity-0 `}
  opacity: ${(props) => (props.active ? "1" : "")};
  background-color: white;
  border-radius: 5px;
  width: 145px;
  height: 40px;
  transition: all 0.5s;
`;
