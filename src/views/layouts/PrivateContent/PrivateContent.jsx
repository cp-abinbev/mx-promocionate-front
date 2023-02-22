// Package
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Components
import useComponents from "../../components";

// Styles
import {
  StyledPrivateContent,
  StyledButtonBack,
  StyledInnerContent,
  StyledContainerButtons,
  StyledBgImg,
} from "./privateContent.styles";

// Assets
import IconArrowBack from "../../../assets/iconArrow.svg";

const PrivateContentLayout = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const {
    children,
    showBack,
    showImageBrand,
    isEvent,
    imgMobile,
    imgTablet,
    imgDesktop,
    Button,
    isPreview,
    iconFilter,
    iconSearch,
    gtmIcon,
    resetAllSearchsAndFilters,
  } = props;

  const navigate = useNavigate();

  const { Header, Footer, useModals } = useComponents();
  const { Profile } = useModals();

  return (
    <StyledPrivateContent button={Button}>
      <Header
        showIconProfile
        iconFilter={iconFilter}
        iconSearch={iconSearch}
        resetAllSearchsAndFilters={resetAllSearchsAndFilters}
        openPopUp={() => {
          gtmIcon();
          setShowPopUp(true);
        }}
      />
      <StyledBgImg
        imgMobile={imgMobile}
        imgTablet={imgTablet}
        imgDesktop={imgDesktop}
      >
        <StyledInnerContent>
          <StyledContainerButtons className={`${isPreview && "pl-6"}`}>
            {showBack && (
              <StyledButtonBack
                onClick={() => navigate(isEvent ? "/marcas" : -1)}
              >
                <img src={IconArrowBack} alt="Volver atrás" />
              </StyledButtonBack>
            )}
            {showImageBrand.url_img && (
              <img
                src={showImageBrand.url_img}
                alt="icon"
                className="w-20 h-20 rounded-lg"
              />
            )}
          </StyledContainerButtons>
          {children}
        </StyledInnerContent>
        {Button && <Button />}
      </StyledBgImg>
      {showPopUp && <Profile closeModal={setShowPopUp} />}
      <Footer />
    </StyledPrivateContent>
  );
};

PrivateContentLayout.propTypes = {
  children: PropTypes.any,
  showBack: PropTypes.bool,
  onBack: PropTypes.func,
  isEvent: PropTypes.bool,
  showImageBrand: PropTypes.object,
  imgMobile: PropTypes.string,
  imgTablet: PropTypes.string,
  imgDesktop: PropTypes.string,
  isPreview: PropTypes.bool,
  iconFilter: PropTypes.object,
  iconSearch: PropTypes.object,
  gtmIcon: PropTypes.func,
  resetAllSearchsAndFilters: PropTypes.func,
};
PrivateContentLayout.defaultProps = {
  children: <></>,
  showBack: false,
  showImageBrand: {},
  imgMobile: "",
  imgTablet: "",
  imgDesktop: "",
  isEvent: false,
  isPreview: false,
  iconFilter: {},
  iconSearch: {},
  gtmIcon: () => {},
  resetAllSearchsAndFilters: () => {},
};

export default PrivateContentLayout;
