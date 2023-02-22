import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw`flex flex-col justify-center mt-6 rounded-lg bg-gray`}
  ${(props) => props.disabled && tw`pointer-events-none opacity-60`};
`;
