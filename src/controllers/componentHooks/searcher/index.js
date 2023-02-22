import { useState, useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";
import useControllers from "../../index";

const useSearcher = () => {
  const { useActions } = useApi();
  const { dispatch, useBrandsActions } = useActions();
  const { useCategoriesActions } = useBrandsActions();
  const { actGetCategories, actSaveFilters, actGetEvents } =
    useCategoriesActions();

  const { useSelectors } = useModels();
  const { useSelector, useBrandsSelectors } = useSelectors();
  const { filtersSelector } = useBrandsSelectors();
  const {
    selectedFilters: { search: searchSelected },
  } = useSelector(filtersSelector);

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmSearch } = useDataLayers();

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(Boolean(input && input === searchSelected));
    const timeout = setTimeout(() => {
      if (input.length === 0) {
        setSuggestions([]);
        searchSelected && dispatch(actSaveFilters({ data: { search: "" } }));
        return;
      } else if (input.length < 3 || searchSelected) {
        return setSuggestions([]);
      }
      dispatch(actGetCategories({ data: { search: input } }, onSuccess));
      dispatch(actGetEvents({ data: { search: input } }, onSuccessEvents));
    }, 600);

    return () => clearTimeout(timeout);
  }, [input]);

  useEffect(() => {
    setInput(searchSelected);
    searchSelected && setIsSearching(true);
  }, [searchSelected]);

  const TextData = (data) => {
    const keys = Object.keys(data);
    const inputText = input.toLowerCase();

    return { keys, inputText };
  };

  const onSuccess = (data) => {
    const { keys, inputText } = TextData(data);

    const searchByCategory = () => {
      const keyObject = keys.find((category) => {
        const dataText = category.toLowerCase().includes(inputText);
        return dataText ? category : "";
      });
      return [keyObject];
    };

    const searchByBrand = () => {
      const options = [];
      keys.forEach((category) => {
        data[category].forEach(({ name }) =>
          name.toLowerCase().includes(inputText) ? options.push(name) : ``
        );
      });
      return options;
    };

    const suggestionsResult = [
      ...searchByCategory(),
      ...searchByBrand(),
    ].filter((item) => item !== undefined);
    setSuggestions((prev) => [...prev, ...suggestionsResult]);
  };

  const onSuccessEvents = ({ Eventos }) => {
    const object = {};
    Eventos?.map((el) => (object[el?.name] = [el]));
    const { keys, inputText } = TextData(object);

    const searchByEvent = () => {
      const keyObject = keys.find((category) => {
        const dataText = category.toLowerCase().includes(inputText);
        return dataText ? category : "";
      });
      return [keyObject];
    };

    const suggestionsResult = [...searchByEvent()].filter(
      (item) => item !== undefined
    );
    setSuggestions((prev) => [...prev, ...suggestionsResult]);
  };

  const handleSelectSuggestion = (suggestion) => {
    gtmSearch(suggestion);
    setSuggestions([]);
    dispatch(
      actSaveFilters({
        data: { brands: [], presentations: [], search: suggestion },
      })
    );
    setIsSearching(true);
  };

  const clearSearch = () => {
    setIsSearching(false);
    setInput("");
  };

  return {
    isSearching,
    suggestions,
    input,
    setInput,
    handleSelectSuggestion,
    clearSearch,
  };
};

export default useSearcher;
