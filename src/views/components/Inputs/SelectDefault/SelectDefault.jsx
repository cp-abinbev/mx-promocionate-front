// Package
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { map } from "lodash";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

// Styles
import { StyledDiv } from "./SelectDefault.styles";

// Hooks
import useViews from "../../../index";
import useControllers from "../../../../controllers";

const SelectDefault = (props) => {
  const { name, label, control, errors, options, disabled, gtm, maxWidth } =
    props;

  const { useComponents } = useViews();
  const { Typography } = useComponents();

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const {
    gtmClickCampaign,
    gtmClickPresentation,
    gtmSelectedDocument,
    gtmSelectBeesCode,
    gtmClickTypeSuggestion,
    gtmClickBrandSuggestion,
    gtmClickBrandCampaingSuggestion,
  } = useDataLayers();

  const Option = styled(MenuItem)({
    "&:hover": {
      background: "yellow",
    },
    "&.Mui-selected": {
      backgroundColor: "yellow",
    },
  });
  const SelectStyle = styled(Select)({
    fontFamily: "Work Sans",
    fontWeight: 600,
  });

  const handleClick = (optionName) => {
    if (name === "campaignType") {
      gtmClickCampaign({ campaign: optionName });
    } else if (name === "presentation") {
      gtmClickPresentation({ presentation: optionName });
    } else if (name === "typeDocument") {
      gtmSelectedDocument(optionName);
    } else if (name === "codeShop") {
      gtmSelectBeesCode(optionName);
    } else if (name === "optionsBrand") {
      gtmClickTypeSuggestion(optionName);
    } else if (name === "brand") {
      gtmClickBrandSuggestion(optionName);
    } else if (name === "typeBrand") {
      gtmClickBrandCampaingSuggestion(optionName);
    }
  };

  return (
    <StyledDiv disabled={disabled} className={`${maxWidth}`}>
      <Controller
        id={name}
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, name, value } }) => (
          <SelectStyle
            displayEmpty
            onChange={onChange}
            name={name}
            id={name}
            value={value}
            onFocus={() => gtm()}
          >
            <Option value="" disabled style={{ display: "none" }}>
              {label}
            </Option>
            {map(options, (option, key) => {
              return (
                <Option
                  key={key}
                  value={
                    name === "codeShop"
                      ? `${option.code} / ${option.shop_name}`
                      : option.name
                  }
                  onClick={() =>
                    handleClick(name === "codeShop" ? option.code : option.name)
                  }
                >
                  {name === "codeShop" ? (
                    <span className="truncate">
                      {option.code} / {option.shop_name}
                    </span>
                  ) : (
                    option.name
                  )}
                </Option>
              );
            })}
          </SelectStyle>
        )}
      />
      {errors[name]?.message && (
        <Typography variant="error">{errors[name]?.message}</Typography>
      )}
    </StyledDiv>
  );
};

SelectDefault.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  disabled: PropTypes.bool,
  setIsDisponibility: PropTypes.func,
  gtm: PropTypes.func,
};

SelectDefault.defaultProps = {
  name: "",
  label: "",
  control: {},
  errors: {},
  options: [],
  disabled: false,
  setIsDisponibility: () => {},
  gtm: () => {},
};

export default SelectDefault;
