import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw`flex flex-col justify-center w-full rounded-lg cursor-pointer h-14 bg-gray font-workSans`}
`;

export const StyledInput = styled.input.attrs({
  className: "translate-y-[1.1rem]",
})`
  ${tw`mx-4 placeholder-black bg-transparent outline-none cursor-pointer font-workSans `}
  ${(props) => props.disabled && tw`pointer-events-none`};
`;

export const StyledLabel = styled.label.attrs({
  className: "-translate-y-[0.9rem]",
})`
  ${tw`mx-4 text-xs font-semibold font-workSans leading-4`}
  ${(props) =>
    (props.focused || props.filled) && "transform: translate(0px, -1.4rem); "};
  transition-duration: 0.3s;
`;
