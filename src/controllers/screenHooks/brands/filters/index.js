import { useState, useEffect } from "react";
// Packages
import find from "lodash/find";
import map from "lodash/map";

// Hooks
import useApi from "../../../../api";
import useModels from "../../../../models";
import useControllers from "../../../index";

const useFilters = () => {
  const { useActions } = useApi();
  const { dispatch, useBrandsActions } = useActions();
  const { useCategoriesActions } = useBrandsActions();
  const { actGetFilters, actResetFilters, actSaveFilters } =
    useCategoriesActions();

  const { useSelectors } = useModels();
  const { useSelector, useBrandsSelectors, useHocsSelectors } = useSelectors();
  const { filtersSelector } = useBrandsSelectors();
  const filters = useSelector(filtersSelector);
  const { brand: brands, sku: presentations } = filters.all;
  const {
    brands: selectedBrands,
    presentations: selectedPresentations,
    search,
  } = filters.selectedFilters;

  const { textScreenSelector, bgScreenSelector } = useHocsSelectors();

  const bgImages = useSelector(bgScreenSelector);
  const filterImg = bgImages?.filter(({ type }) => type === "filtro");
  const imgMobile = filterImg[0]?.url_img_mobile;
  const imgTablet = filterImg[0]?.url_img_tablet;
  const imgDesktop = filterImg[0]?.url_img_desktop;

  const textData = useSelector(textScreenSelector);
  const filterText = textData?.filter(({ type }) => type === "filtro");
  const titleFilter = filterText?.filter(({ key }) => key === "title");
  const brandFilter = filterText?.filter(({ key }) => key === "brand");
  const presentationFilter = filterText?.filter(
    ({ key }) => key === "presentation"
  );
  const buttonFilter = filterText?.filter(({ key }) => key === "button");
  const clearFilter = filterText?.filter(({ key }) => key === "clear");

  const [filterPresentations, setFilterPresentations] = useState(presentations);
  const [showSearcher, setShowSearcher] = useState(false);

  const { useGeneralHooks } = useControllers();
  const { useToggleModal, useDataLayers } = useGeneralHooks();
  const [filterOpen, toggleFilters] = useToggleModal();
  const { gtmApplyFilters, gtmCleanFilters, gtmOpenFilters } = useDataLayers();

  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [filterOpen]);

  useEffect(() => {
    setFilterPresentations(filters.all.sku);
  }, [filters.all.sku]);

  useEffect(() => {
    if (search.length > 0) {
      setFilterPresentations(filters.all.sku);
    }
  }, [search]);

  const handleOpenFilters = (bool) => {
    gtmOpenFilters();
    if (brands.length === 0 && presentations.length === 0) {
      dispatch(actGetFilters());
    }
    setShowSearcher(bool);
    toggleFilters();
  };

  const handleApplyFilters = ({
    selectedBrands = [],
    selectedPresentations = [],
  }) => {
    dispatch(
      actSaveFilters({
        data: {
          brands: selectedBrands,
          presentations: selectedPresentations,
          search: "",
        },
      })
    );
    gtmApplyFilters({
      brands: map(
        selectedBrands,
        (sb) => find(brands, (b) => b.id === sb).name
      ),
      presentations: map(
        selectedPresentations,
        (sp) => find(presentations, (p) => p.id === sp).name
      ),
    });
    toggleFilters();
  };

  const handleResetFilters = (executeGtm = true) => {
    setFilterPresentations(filters.all.sku);
    dispatch(actResetFilters());
    executeGtm &&
      gtmCleanFilters({
        brands: map(
          selectedBrands,
          (sb) => find(brands, (b) => b.id === sb).name
        ),
        presentations: map(
          selectedPresentations,
          (sp) => find(presentations, (p) => p.id === sp).name
        ),
      });
  };

  const filterSkusById = (arr, id) =>
    arr?.filter(({ brand_id }) => brand_id === id);

  const handleFilterPresentations = ({ value, checked }) => {
    if (checked) {
      filters.all.sku.length === filterPresentations.length
        ? setFilterPresentations(filterSkusById(filterPresentations, value))
        : setFilterPresentations((prev) => [
            ...prev,
            ...filterSkusById(filters.all.sku, value),
          ]);
    } else {
      const filter = filterPresentations?.filter(
        ({ brand_id }) => brand_id !== value
      );
      filter.length === 0
        ? setFilterPresentations(filters.all.sku)
        : setFilterPresentations(filter);
    }
  };

  return {
    brands,
    totalFilters: selectedBrands.length + selectedPresentations.length,
    presentations: filterPresentations,
    filterOpen,
    toggleFilters,
    handleOpenFilters,
    handleApplyFilters,
    handleResetFilters,
    handleFilterPresentations,
    imgMobile,
    imgTablet,
    imgDesktop,
    titleFilter,
    brandFilter,
    presentationFilter,
    buttonFilter,
    clearFilter,
    showSearcher,
    search,
  };
};

export default useFilters;
