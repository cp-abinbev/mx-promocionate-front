// Package
import PropTypes from "prop-types";

// Hooks
import useControllers from "../../../controllers";
import { useNavigate, useLocation } from "react-router-dom";
import useModels from "../../../models";

// Styles
import { StyledHeader, StyledIconProfile, StyledLogo } from "./Header.styles";

// Assets
import hamburguer from "../../../assets/iconHamburguer.svg";
import iconUser from "../../../assets/iconUser.svg";
import lupeWhite from "../../../assets/lupeArrowWhite.svg";
import iconUserWhite from "../../../assets/IconProfileWhite.svg";
import iconSuggestions from "../../../assets/iconSuggestions.svg";
import iconSuggestionsWhite from "../../../assets/iconSuggestionWhite.svg";

import useInputs from "../Inputs";

const Header = (props) => {
  const {
    showIconProfile,
    showLogo,
    openPopUp,
    iconFilter,
    iconSearch,
    resetAllSearchsAndFilters,
  } = props;

  const { useSelectors } = useModels();
  const { useHocsSelectors, useSelector } = useSelectors();
  const { textScreenSelector } = useHocsSelectors();

  const { InputSearcher } = useInputs();

  const textData = useSelector(textScreenSelector);
  const inputSearchData = textData?.filter(({ type }) => type === "marcas");
  const placeholderInput = inputSearchData?.filter(
    ({ key }) => key === "finderBox"
  );

  const path = useLocation();
  const perfil = path.pathname === "/perfil";
  const categories = path.pathname === "/marcas";
  const home = path.pathname === "/";
  const suggestion = path.pathname === "/sugerencias";
  const { useComponentHooks, useScreenHooks } = useControllers();
  const { useBrandsControllers } = useScreenHooks();
  const { useFilters } = useBrandsControllers();
  const { useHeader } = useComponentHooks();
  const { title, bgColor, profile, suggestions } = useHeader();
  const { totalFilters, search } = useFilters();
  const navigate = useNavigate();

  return (
    <StyledHeader bgColor={bgColor[0]?.data}>
      {showLogo && (
        <StyledLogo
          src={title}
          onClick={() => navigate("/marcas")}
          alt="Logo"
        />
      )}
      <div className="flex mr-5 gap-[14px]">
        {iconSearch.icon && search.length > 0 ? (
          <div className="bg-black h-[29px] w-[29px] flex items-center justify-center rounded-[5px] md:hidden">
            <StyledIconProfile
              src={lupeWhite}
              alt="Search icon"
              onClick={iconSearch.fun}
              className={`${
                categories ? "flex" : "hidden"
              } h-[1rem] md:h-[1.8rem] self-center`}
            />
          </div>
        ) : (
          <StyledIconProfile
            src={iconSearch.icon}
            alt="Search icon"
            onClick={iconSearch.fun}
            className={`${
              categories ? "flex md:hidden" : "hidden"
            } h-[1.6rem] md:h-[1.8rem] self-center md:!hidden`}
          />
        )}

        {iconSearch.icon && (
          <div className="hidden md:flex">
            <InputSearcher
              className="h-[40px]"
              placeholder={placeholderInput[0]?.title}
              classNameInputContainer="!h-[40px]"
              classNameOptions="!top-[40px]"
              resetAllSearchsAndFilters={resetAllSearchsAndFilters}
            />
          </div>
        )}

        {iconFilter.icon &&
          (totalFilters > 0 ? (
            <span
              className="bg-black w-[30px] h-[30px] rounded-[8px] text-white flex justify-center
              self-center items-center cursor-pointer"
              onClick={iconFilter.fun}
            >
              {totalFilters}
            </span>
          ) : (
            <StyledIconProfile
              src={iconFilter.icon}
              alt="profile icon"
              onClick={iconFilter.fun}
              className="h-[1.6rem] md:h-[1.4rem] flex self-center"
            />
          ))}
        {showIconProfile && (
          <StyledIconProfile
            src={hamburguer}
            alt="profile icon"
            onClick={openPopUp}
            className="h-[1.2rem] flex self-center md:hidden"
          />
        )}
        {!home && (
          <>
            <div
              onClick={() => navigate("/perfil")}
              className={`hidden md:flex items-center justify-center gap-[10px] self-center cursor-pointer ${
                perfil &&
                "bg-black text-white rounded-l-[15px] w-[100px] h-[41px]"
              }`}
            >
              <StyledIconProfile
                src={perfil ? iconUserWhite : iconUser}
                alt="profile icon"
                onClick={() => navigate("/perfil")}
                className="h-[1.2rem] hidden md:flex self-center"
              />
              <p className="hidden md:flex font-barlow text-[17px] font-semibold">
                {profile[0]?.title}
              </p>
            </div>
            <hr
              className={`hidden md:flex h-[24px] border-[1px] self-center border-solid ${
                (perfil || suggestion) && "md:hidden"
              }`}
            />
            <div
              onClick={() => navigate("/sugerencias")}
              className={`hidden md:flex items-center justify-center gap-[10px] self-center cursor-pointer ${
                suggestion &&
                "bg-black text-white rounded-r-[15px] w-[140px] h-[41px]"
              }`}
            >
              <StyledIconProfile
                src={suggestion ? iconSuggestionsWhite : iconSuggestions}
                alt="profile icon"
                className="h-[1.2rem] hidden md:flex self-center"
              />
              <p className="hidden md:flex font-barlow font-semibold text-[17px]">
                {suggestions[0]?.title}
              </p>
            </div>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  showIconProfile: PropTypes.bool,
  showLogo: PropTypes.bool,
  showButtonExit: PropTypes.bool,
  iconFilter: PropTypes.object,
  iconSearch: PropTypes.object,
  resetAllSearchsAndFilters: PropTypes.func,
};

Header.defaultProps = {
  showIconProfile: false,
  showLogo: true,
  showButtonExit: false,
  iconFilter: {},
  iconSearch: {},
  resetAllSearchsAndFilters: () => {},
};

export default Header;
