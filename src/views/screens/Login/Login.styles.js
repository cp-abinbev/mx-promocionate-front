import styled from "styled-components";

export const StyledImg = styled.div`
  margin: 21px auto 0px auto;
  width: 276px;
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("${(props) => props.bgImgMobile}");
  @media (min-width: 640px) {
    background-image: url("${(props) => props.bgImgTablet}");
  }
  @media (min-width: 1024px) {
    background-image: url("${(props) => props.bgImgDesktop}");
  }
`;
