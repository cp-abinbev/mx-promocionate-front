import styled from "styled-components";
import tw from "twin.macro";

export const StyledButton = styled.button`
  ${tw`font-semibold bg-black rounded-full text-yellow font-workSans`}
  opacity: ${(props) => (props.disabled ? ".4" : "1")};
  ${(props) => props.fullWidth && tw`w-full`}
  height: 2.625rem;
  color: #ffff00;
`;
