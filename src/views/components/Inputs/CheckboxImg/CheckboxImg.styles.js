import styled from "styled-components";
import tw from "twin.macro";

export const StyledDiv = styled.div`
  ${tw`my-3`}
`;

export const StyledLabel = styled.label.attrs({
  className: "w-[85px] h-[125px]",
})`
  ${tw`relative block text-base cursor-pointer select-none font-workSans mb-7 `}
  font-size: 22px;

  background: #d9d9d9;
  border-radius: 10px;

  input:checked ~ span {
    ${tw`bg-yellow`}
  }
  input:checked ~ span:after {
    ${tw`block`}
  }
  span:after {
    ${tw`w-2 border left-2`}
    top: 0.125rem;
    height: 15px;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const StyeldInput = styled.input`
  ${tw`absolute w-0 h-0 opacity-0 cursor-pointer`}
`;

export const StyeldCheckMark = styled.span.attrs({
  className: "-right-[10px] -top-[10px]",
})`
  ${tw`absolute w-6 h-6 bg-white border rounded-md`}
  &:after {
    ${tw`absolute hidden`}
    content: "";
  }
`;

export const StyledImg = styled.img`
  ${tw`w-[-webkit-fill-available]`}
  height: inherit;
  border-radius: 10px;
  object-fit: cover;
`;
