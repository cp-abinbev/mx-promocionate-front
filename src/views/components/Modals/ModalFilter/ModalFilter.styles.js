import styled from "styled-components";
import tw from "twin.macro";

// Assets
import Marker from "../../../../assets/MarkerCheckbox.svg";

export const StyledDivContainer = styled.div`
  ${tw`fixed top-0 left-0 flex items-center justify-end w-full h-full opacity-0 pointer-events-none `}
  opacity: ${(props) => (props.active ? "1" : "")};
  pointer-events: ${(props) => (props.active ? "auto" : "")};
  z-index: 900;
`;

export const StyledDivModal = styled.div`
  ${tw`min-h-screen bg-white opacity-0 pointer-events-none `}
  opacity: ${(props) => (props.active ? "1" : "")};
  pointer-events: ${(props) => (props.active ? "auto" : "")};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imgMobile && props.imgMobile});
  @media (min-width: 640px) {
    background-image: url(${(props) => props.imgTablet && props.imgTablet});
  }
  @media (min-width: 1024px) {
    background-image: url(${(props) => props.imgDesktop && props.imgDesktop});
  }
`;

export const StyledDivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Styledimg = styled.img`
  ${tw`h-3.5 w-3.5 cursor-pointer mr-3`}
`;

export const StyleInputCheckbox = styled.input`
  ${tw`w-6 h-6 mr-[7px]`}
  border-radius: 8px;
  border: 1px solid black;
  &:checked {
    background-color: #ffff00;
    background-image: url(${Marker});
    background-repeat: no-repeat;
    background-position: center;
  }
  appearance: none;
`;

export const StyleHrDark = styled.hr`
  ${tw`mt-[9px] mx-[21px] border-[1px] border-[#979797]`}
`;

export const StyleHrlight = styled.hr`
  ${tw`mx-[21px] mt-[10px] border-[1px] border-[#9797974D]`}
`;

export const StyleSpanQuantity = styled.span`
  ${tw`w-[25px] h-[25px] bg-black text-yellow rounded-full flex justify-center`}
`;
