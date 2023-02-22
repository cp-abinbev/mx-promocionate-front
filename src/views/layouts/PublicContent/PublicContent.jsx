// Package
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import useComponents from "../../components";
import IconArrowBack from "../../../assets/iconArrow.svg";
import { useNavigate } from "react-router-dom";

// Styles
import {
  StyledPublicContent,
  StyledInnerContent,
  StyledBgImg,
  StyledButtonBack,
} from "./publicContent.styles";

const PublicContentLayout = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const {
    children,
    imgMobile,
    imgTablet,
    imgDesktop,
    showBack,
    showIconProfile,
  } = props;

  const { Header, Footer, useModals } = useComponents();
  const { Profile } = useModals();
  const navigate = useNavigate();

  return (
    <StyledPublicContent>
      <Header
        showIconProfile={showIconProfile}
        openPopUp={() => setShowPopUp(true)}
      />
      <StyledBgImg
        imgMobile={imgMobile}
        imgTablet={imgTablet}
        imgDesktop={imgDesktop}
      >
        <StyledInnerContent>
          {showBack && (
            <StyledButtonBack
              onClick={() => navigate(-1)}
              className="mb-[20px]"
            >
              <img src={IconArrowBack} alt="Volver atrás" />
            </StyledButtonBack>
          )}
          {children}
        </StyledInnerContent>
      </StyledBgImg>
      {showPopUp && <Profile closeModal={setShowPopUp} />}
      <Footer />
    </StyledPublicContent>
  );
};

PublicContentLayout.propTypes = {
  children: PropTypes.any,
  showButtonExit: PropTypes.bool,
  imgMobile: PropTypes.string,
  imgTablet: PropTypes.string,
  imgDesktop: PropTypes.string,
  showBack: PropTypes.bool,
  showIconProfile: PropTypes.bool,
};

PublicContentLayout.defaultProps = {
  children: <></>,
  showButtonExit: false,
  imgMobile: "",
  imgTablet: "",
  imgDesktop: "",
  showBack: false,
  showIconProfile: false,
};

export default PublicContentLayout;
