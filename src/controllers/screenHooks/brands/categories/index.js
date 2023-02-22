// Package
import map from "lodash/map";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Hooks
import useApi from "../../../../api";
import useControllers from "../../../index";
import useModels from "../../../../models";

const useCategories = () => {
  const navigate = useNavigate();

  const { useActions } = useApi();
  const { dispatch, useBrandsActions } = useActions();
  const { useCategoriesActions } = useBrandsActions();
  const { actGetCategories, actGetEvents } = useCategoriesActions();

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmGotoBrandDetail } = useDataLayers();

  const { useSelectors } = useModels();
  const {
    useSelector,
    useBrandsSelectors,
    useHocsSelectors,
    useAuthSelectors,
  } = useSelectors();
  const { authSelector } = useAuthSelectors();
  const { filtersSelector } = useBrandsSelectors();

  const { textScreenSelector, bgScreenSelector, uiConfigurationsSelector } =
    useHocsSelectors();

  const auth = useSelector(authSelector);

  const ui = useSelector(uiConfigurationsSelector);
  const eventsConfig = ui?.filter(({ type }) => type === "events");

  const bgImages = useSelector(bgScreenSelector);
  const categoriesImg = bgImages?.filter(({ type }) => type === "marcas");
  const imgMobile = categoriesImg[0]?.url_img_mobile;
  const imgTablet = categoriesImg[0]?.url_img_tablet;
  const imgDesktop = categoriesImg[0]?.url_img_desktop;

  const dataTexts = useSelector(textScreenSelector);
  const titlePopUpEvents = dataTexts?.filter(
    ({ key }) => key === "events-description"
  );
  const customData = dataTexts?.filter(({ type }) => type === "marcas");
  const titleCategories = customData?.filter(({ key }) => key === "title");
  const subtitleCategories = customData?.filter(
    ({ key }) => key === "sub-title"
  );
  const finderBoxCategories = customData?.filter(
    ({ key }) => key === "finderBox"
  );

  const {
    selectedFilters: { brands, presentations, search },
  } = useSelector(filtersSelector);

  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState({});

  useEffect(() => {
    dispatch(
      actGetCategories(
        {
          data: {
            brands: [],
            presentations: [],
            shop_id: auth?.id,
            search: "",
          },
        },
        handleGetCategoriesSuccess
      )
    );
    dispatch(
      actGetEvents({ data: { shop_id: auth?.id, search: "" } }, (data) =>
        setEvents(data)
      )
    );
  }, []);

  useEffect(() => {
    if (brands.length > 0 || presentations.length > 0) {
      dispatch(
        actGetCategories(
          {
            data: {
              brands,
              presentations,
              shop_id: auth?.id,
            },
          },
          handleGetCategoriesSuccess
        )
      );
      dispatch(
        actGetEvents({ data: { shop_id: auth?.id, brands } }, (data) =>
          setEvents(data)
        )
      );
    } else {
      dispatch(
        actGetCategories(
          {
            data: {
              brands,
              presentations,
              search,
              shop_id: auth?.id,
            },
          },
          handleGetCategoriesSuccess
        )
      );
      dispatch(
        actGetEvents({ data: { shop_id: auth?.id, search } }, (data) =>
          setEvents(data)
        )
      );
    }
  }, [brands, presentations]);

  useEffect(() => {
    if (search.length > 0) {
      dispatch(
        actGetCategories(
          {
            data: {
              search,
              shop_id: auth?.id,
            },
          },
          handleGetCategoriesSuccess
        )
      );

      dispatch(
        actGetEvents({ data: { shop_id: auth?.id, search } }, (data) =>
          setEvents(data)
        )
      );
    } else {
      dispatch(
        actGetCategories(
          {
            data: {
              brands,
              presentations,
              search,
              shop_id: auth?.id,
            },
          },
          handleGetCategoriesSuccess
        )
      );
      dispatch(
        actGetEvents({ data: { shop_id: auth?.id, search } }, (data) =>
          setEvents(data)
        )
      );
    }
  }, [search]);

  const resetAllSearchsAndFilters = () => {
    dispatch(
      actGetCategories(
        {
          data: {
            shop_id: auth?.id,
          },
        },
        handleGetCategoriesSuccess
      )
    );
    dispatch(
      actGetEvents({ data: { shop_id: auth?.id } }, (data) => setEvents(data))
    );
  };

  const handleGetCategoriesSuccess = (data) => {
    const categories = Object.keys(data);
    const result = map(categories, (c, i) => ({
      id: i,
      name: c,
      brands: map(data[c], (brand) => ({
        ...brand,
        category: c,
      })),
    }));
    setCategories(result);
  };

  const goToBrand = ({ brand }) => {
    gtmGotoBrandDetail(brand);
    navigate(`${brand.id}`);
  };

  const goToEvent = ({ brand }) => {
    navigate(`/eventos/${brand.id}`, { replace: true });
  };

  return {
    categories,
    events,
    goToBrand,
    goToEvent,
    titleCategories,
    subtitleCategories,
    finderBoxCategories,
    imgMobile,
    imgDesktop,
    imgTablet,
    eventsConfig,
    titlePopUpEvents,
    resetAllSearchsAndFilters,
  };
};

export default useCategories;
