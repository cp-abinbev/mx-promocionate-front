import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw`rounded-lg bg-[#F9F9F8] relative h-14 w-[87px] flex flex-col justify-center items-center cursor-pointer `}
`;

export const StyledInput = styled.input`
  ${tw` bg-[#F9F9F8] appearance-none h-full w-full rounded-lg cursor-pointer text-center outline-none`}
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  box-shadow: ${(props) =>
    props.findError !== undefined ? "inset 0 0 0 2px #FF3A44" : ""};
`;

export const StyledLabel = styled.label.attrs({
  className: "-translate-y-[0.1rem] z-10",
})`
  ${tw`mx-4 bg-[#F9F9F8] text-[12px] font-semibold mt-[8px] font-workSans leading-[16px]`};
`;
