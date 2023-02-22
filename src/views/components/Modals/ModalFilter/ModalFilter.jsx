// Packages
import { includes, filter, map } from "lodash";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useControllers from "../../../../controllers";

// Styled components
import {
  StyledDivContainer,
  StyledDivTitle,
  StyledDivModal,
  StyleInputCheckbox,
  StyleHrDark,
  StyleHrlight,
  Styledimg,
  StyleSpanQuantity,
} from "./ModalFilter.styles";

// Hooks
import useViews from "../../../../views";

// Assets
import iconClose from "../../../../assets/IconCloseBlack.svg";
import arrowUp from "../../../../assets/ArrowUp.svg";
import arrowDown from "../../../../assets/ArrowDown.svg";
import useModels from "../../../../models";

const Filter = (props) => {
  const { useScreenHooks } = useControllers();
  const { useBrandsControllers } = useScreenHooks();
  const { useFilters } = useBrandsControllers();

  const {
    active,
    onHideModal,
    brands,
    presentations,
    onApplyFilters,
    onResetFilters,
    handleFilterPresentations,
    showSearcher,
    resetAllSearchsAndFilters,
  } = props;

  const {
    imgMobile,
    imgTablet,
    imgDesktop,
    titleFilter,
    brandFilter,
    presentationFilter,
    buttonFilter,
    clearFilter,
  } = useFilters();

  const { useComponents } = useViews();
  const { Button, Typography, useInputs } = useComponents();
  const { InputSearcher } = useInputs();

  const { useSelectors } = useModels();
  const { useSelector, useBrandsSelectors, useHocsSelectors } = useSelectors();
  const { textScreenSelector } = useHocsSelectors();
  const { filtersSelector } = useBrandsSelectors();
  const filters = useSelector(filtersSelector);
  const inputData = useSelector(textScreenSelector);
  const inputSearchData = inputData?.filter(({ type }) => type === "marcas");
  const titleInput = inputSearchData?.filter(
    ({ key }) => key === "finderTitle"
  );
  const subtitleInput = inputSearchData?.filter(
    ({ key }) => key === "finderText"
  );
  const placeholderInput = inputSearchData?.filter(
    ({ key }) => key === "finderBox"
  );
  const { brands: filterBrands, presentations: filterPresentations } =
    filters.selectedFilters;

  const [openBrand, setOpenBrand] = useState(false);
  const [openSku, setOpenSku] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPresentations, setSelectedPresentations] = useState([]);

  const quit = (item) => {
    const x = presentations.filter(({ brand_id }) => brand_id === item.id);
    const a = selectedPresentations.reduce((a, v) => ({ ...a, [v]: v }), {});
    x.filter(({ id }) => a[id] && delete a[id]);
    setSelectedPresentations(Object.values(a));
  };

  const remove = () => {
    selectedBrands.length === 0 &&
      selectedPresentations.length > 0 &&
      setSelectedPresentations([]);
  };

  const handleSelectItem = ({ type, item, checked }) => {
    if (type === "brands") {
      let auxBrands;
      if (includes(selectedBrands, item.id)) {
        auxBrands = filter(selectedBrands, (b) => b !== item.id);
      } else {
        auxBrands = [...selectedBrands, item.id];
      }
      setSelectedBrands(auxBrands);
      !checked && quit(item);
    } else if (type === "presentations") {
      let auxPresentations;
      if (includes(selectedPresentations, item.id)) {
        auxPresentations = filter(selectedPresentations, (c) => c !== item.id);
      } else {
        auxPresentations = [...selectedPresentations, item.id];
      }
      setSelectedPresentations(auxPresentations);
    }
  };

  useEffect(() => {
    setSelectedBrands(filterBrands);
    setSelectedPresentations(filterPresentations);
  }, [filterBrands, filterPresentations]);

  useEffect(() => {
    setSelectedBrands([]);
    setSelectedPresentations([]);
    onResetFilters(false);
  }, []);

  return (
    <StyledDivContainer
      active={active}
      className="backdrop transitionCustom"
      onClick={onHideModal}
    >
      <div
        className="flex max-h-full overflow-y-scroll w-full md:w-[489px] bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <StyledDivModal
          imgMobile={imgMobile}
          imgTablet={imgTablet}
          imgDesktop={imgDesktop}
          active={active}
          className="relative z-50 w-full"
        >
          <Styledimg
            src={iconClose}
            alt="icon"
            onClick={onHideModal}
            className="absolute right-[13px] top-[20px]"
          />
          {showSearcher ? (
            <>
              <Typography variant="subtitle" className="mt-[55px] mx-[21px]">
                {titleInput[0]?.title}
              </Typography>
              <hr className="mx-[21px] mt-[16px] border-[1px]" />
              <InputSearcher
                className="mt-[29px]"
                closeModal={onHideModal}
                placeholder={placeholderInput[0]?.title}
                resetAllSearchsAndFilters={resetAllSearchsAndFilters}
              />
              <Typography className="mx-[1.3rem] mt-[25px] font-workSans !text-[14px]">
                {subtitleInput[0]?.title}
              </Typography>
            </>
          ) : (
            <>
              <StyledDivTitle className="mx-[21px] mt-[28px]">
                <Typography variant="subtitle">
                  {titleFilter[0]?.title}
                </Typography>
              </StyledDivTitle>
              <hr className="mx-[21px] mt-4 border-[1px]" />
              <StyledDivTitle className="mx-[21px] mt-[28px]">
                <Typography variant="filterTitle" className="font-semibold">
                  {brandFilter[0]?.title}
                </Typography>
                <div className="flex">
                  {selectedBrands.length > 0 && (
                    <StyleSpanQuantity className="mr-2 sm:mr-4">
                      {selectedBrands.length}
                    </StyleSpanQuantity>
                  )}

                  <Styledimg
                    src={openBrand ? arrowUp : arrowDown}
                    alt="icon"
                    onClick={() => setOpenBrand(!openBrand)}
                  />
                </div>
              </StyledDivTitle>
              <StyleHrDark />

              {map(brands, (brand) => (
                <div
                  key={(`${brand.name}`, `${brand.id}`)}
                  className={`${openBrand ? "flex flex-col" : "hidden"} `}
                >
                  <StyledDivTitle className="mx-[21px] mt-[13px]">
                    <Typography variant="p" className="w-[200px] md:w-full">
                      {brand.name}
                    </Typography>
                    <StyleInputCheckbox
                      type="checkbox"
                      onChange={({ target }) => {
                        if (target.checked) {
                          handleFilterPresentations({
                            value: brand.id,
                            checked: true,
                          });
                          remove(brand);
                        } else {
                          handleFilterPresentations({
                            value: brand.id,
                            checked: false,
                          });
                        }
                        handleSelectItem({
                          type: "brands",
                          item: brand,
                          checked: target.checked,
                        });
                      }}
                      value={brand.id}
                      checked={includes(selectedBrands, brand.id)}
                    />
                  </StyledDivTitle>
                  <StyleHrlight />
                </div>
              ))}

              <StyledDivTitle className="mx-[21px] mt-[13px]">
                <Typography variant="filterTitle" className="font-semibold">
                  {presentationFilter[0]?.title}
                </Typography>
                <div className="flex">
                  {selectedPresentations.length > 0 && (
                    <StyleSpanQuantity className="mr-2 sm:mr-4">
                      {selectedPresentations.length}
                    </StyleSpanQuantity>
                  )}
                  <Styledimg
                    src={openSku ? arrowUp : arrowDown}
                    alt="icon"
                    onClick={() => setOpenSku(!openSku)}
                  />
                </div>
              </StyledDivTitle>
              <StyleHrDark />

              {map(presentations, (presentation) => (
                <div
                  key={(`${presentation.name}`, `${presentation.id}`)}
                  className={`${openSku ? "flex flex-col" : "hidden"}`}
                >
                  <StyledDivTitle className="mx-[21px] mt-[13px]">
                    <Typography variant="p" className="w-[200px] md:w-full">
                      {presentation.name}
                    </Typography>
                    <StyleInputCheckbox
                      type="checkbox"
                      onChange={() => {
                        handleSelectItem({
                          type: "presentations",
                          item: presentation,
                        });
                      }}
                      value={presentation.id}
                      checked={includes(selectedPresentations, presentation.id)}
                    />
                  </StyledDivTitle>
                  <StyleHrlight />
                </div>
              ))}
              <div className="flex flex-col items-center justify-center">
                <Button
                  text={`${buttonFilter[0]?.title}`}
                  className="mt-[21px] sm:mt-[46px] w-[140px] sm:w-[319px]"
                  onPress={() => {
                    onApplyFilters({ selectedBrands, selectedPresentations });
                    setOpenBrand(false);
                    setOpenSku(false);
                  }}
                  disabled={
                    selectedBrands.length === 0 &&
                    selectedPresentations.length === 0
                  }
                />
                <button
                  className="underline mt-[18px] sm:mt-[31px] font-semibold font-workSans mb-[35px] sm:mb-[169px]"
                  onClick={() => {
                    setSelectedBrands([]);
                    setSelectedPresentations([]);
                    onResetFilters();
                    resetAllSearchsAndFilters();
                  }}
                >
                  {clearFilter[0]?.title}
                </button>
              </div>
            </>
          )}
        </StyledDivModal>
      </div>
    </StyledDivContainer>
  );
};

Filter.propTypes = {
  active: PropTypes.bool,
  showSearcher: PropTypes.bool,
  onHideModal: PropTypes.func,
  onApplyFilters: PropTypes.func,
  onResetFilters: PropTypes.func,
  brands: PropTypes.array,
  filterByBrand: PropTypes.func,
  resetAllSearchsAndFilters: PropTypes.func,
};
Filter.defaultProps = {
  active: false,
  showSearcher: false,
  onHideModal: () => {},
  onApplyFilters: () => {},
  onResetFilters: () => {},
  brands: [],
  filterByBrand: () => {},
  resetAllSearchsAndFilters: () => {},
};

export default Filter;
