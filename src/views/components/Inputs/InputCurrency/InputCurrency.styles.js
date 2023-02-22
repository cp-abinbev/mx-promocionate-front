import styled from "styled-components";
import tw from "twin.macro";
import CurrencyInput from "react-currency-input-field";

export const StyledDiv = styled.div`
  ${tw`flex flex-col justify-center rounded-lg cursor-pointer border-[1px] border-[#b3b3b2] h-14 bg-gray`}
  ${(props) => props.disabled && tw`pointer-events-none opacity-60`};
`;

export const StyledInput = styled(CurrencyInput).attrs({
  className: "translate-y-[1.1rem]",
})`
  ${tw`ml-4 placeholder-black rounded-lg outline-none cursor-pointer bg-gray font-workSans `}
  ${(props) => props.disabled && tw`pointer-events-none`};
`;

export const StyledLabel = styled.label.attrs({
  className: "-translate-y-[0.9rem]",
})`
  ${tw`ml-4 text-xs font-semibold font-workSans leading-4`}
  ${(props) =>
    (props.focused || props.filled) && "transform: translate(0px, -1.4rem); "};
  transition-duration: 0.3s;
`;
