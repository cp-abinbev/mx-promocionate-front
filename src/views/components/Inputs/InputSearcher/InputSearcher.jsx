// Package
import PropTypes from "prop-types";
import { map } from "lodash";

//Styles
import {
  StyledContainerSearch,
  StyledContainerOptions,
  StyledInputContainer,
} from "./InputSearcher.styles";

// Assets
import Lupe from "../../../../assets/Lupe.png";
import iconClose from "../../../../assets/IconCloseBlack.svg";

// Hooks
import useViews from "../../../index";
import useControllers from "../../../../controllers";

const InputSearcher = (props) => {
  const {
    className,
    placeholder,
    closeModal,
    resetAllSearchsAndFilters,
    classNameInputContainer,
    classNameOptions,
  } = props;

  const { useComponents } = useViews();
  const { Typography } = useComponents();

  const { useComponentHooks } = useControllers();
  const { useSearcher } = useComponentHooks();
  const {
    isSearching,
    suggestions,
    input,
    setInput,
    handleSelectSuggestion,
    clearSearch,
  } = useSearcher();

  const search = () => {
    if (input.length > 2) {
      handleSelectSuggestion(input);
      closeModal();
    }
  };

  const reset = () => {
    clearSearch();
    resetAllSearchsAndFilters();
  };

  return (
    <StyledContainerSearch className={className}>
      <StyledInputContainer className={`relative ${classNameInputContainer}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            isSearching ? reset() : search();
          }}
          className="contents"
        >
          <input
            name="search"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            className="w-[150px] sm:w-full"
          />
          <button type="submit">
            <img
              src={isSearching ? iconClose : Lupe}
              alt="Buscar"
              title="Buscar"
            />
          </button>
        </form>
        {suggestions.length > 0 && (
          <StyledContainerOptions className={`${classNameOptions}`}>
            {map(suggestions, (option, i) => (
              <Typography
                key={i}
                className="py-2 pl-4 bg-white hover:bg-yellow"
                onClick={() => {
                  handleSelectSuggestion(option);
                  closeModal();
                }}
              >
                {option}
              </Typography>
            ))}
          </StyledContainerOptions>
        )}
      </StyledInputContainer>
    </StyledContainerSearch>
  );
};

InputSearcher.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onOpenFilters: PropTypes.func,
  totalFilters: PropTypes.number,
  closeModal: PropTypes.func,
  resetAllSearchsAndFilters: PropTypes.func,
  classNameInputContainer: PropTypes.string,
  classNameOptions: PropTypes.string,
};

InputSearcher.defaultProps = {
  name: "",
  placeholder: "Buscar",
  onOpenFilters: () => {},
  totalFilters: 0,
  closeModal: () => {},
  resetAllSearchsAndFilters: () => {},
  classNameInputContainer: "",
  classNameOptions: "",
};

export default InputSearcher;
