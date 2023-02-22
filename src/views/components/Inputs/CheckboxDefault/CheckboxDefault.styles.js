import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw``}
`;

export const StyledLabel = styled.label`
  ${tw`flex relative cursor-pointer select-none font-workSans`}
  padding-left: 35px;
  margin-bottom: 2px;
  font-size: ${(props) => (props.ageGate ? "14px" : "16px")};
  input:checked ~ span {
    ${tw`bg-yellow`}
  }
  input:checked ~ span:after {
    ${tw`block`}
  }
  span:after {
    ${tw`border`}
    left: 9px;
    top: 2px;
    width: 8px;
    height: 15px;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const StyledInput = styled.input`
  ${tw`absolute opacity-0 cursor-pointer h-0 w-0`}
`;

export const StyledCheckMark = styled.span`
  ${tw`absolute top-0 left-0 border rounded-md`}
  height: 25px;
  width: 25px;
  &:after {
    ${tw`absolute hidden`}
    content: "";
  }
`;
