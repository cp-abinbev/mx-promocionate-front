const useBrandsInitialStates = () => {
  const initialStateImagePreview = {
    id: "",
    url_img: "",
  };

  const initialStateFilters = {
    all: {
      brand: [],
      sku: [],
    },
    selectedFilters: {
      search: "",
      brands: [],
      presentations: [],
    },
  };

  return {
    initialStateImagePreview,
    initialStateFilters,
  };
};

export default useBrandsInitialStates;
