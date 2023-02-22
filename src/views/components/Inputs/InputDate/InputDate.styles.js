import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw`flex flex-col justify-center rounded-lg cursor-pointer border-[1px] border-[#b3b3b2] h-14 bg-gray`}
  ${(props) => props.disabled && tw`pointer-events-none opacity-60`};
`;

export const StyledInput = styled.input.attrs({
  className: "translate-y-[1.1rem]",
})`
  ${tw`ml-4 placeholder-black rounded-lg outline-none cursor-pointer bg-gray font-workSans `}
  ${(props) => props.disabled && tw`pointer-events-none`};
`;

export const StyledLabel = styled.label`
  ${tw`ml-4 text-xs font-semibold font-workSans leading-4`}
`;
