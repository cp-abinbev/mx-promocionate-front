import { useState, useRef } from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

// Styles
import { StyledDiv, StyledInput, StyledLabel } from "./InputCurrency.styles";

// Hooks
import useViews from "../../../index";

import useControllers from "../../../../controllers";

const InputCurrency = (props) => {
  const {
    name,
    label,
    control,
    errors,
    prefix,
    disabled,
    className,
    currency,
  } = props;

  const { useComponents } = useViews();
  const { Typography } = useComponents();

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmPrice } = useDataLayers();

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const inputRef = useRef();

  const handleFilled = (e) => {
    const value = e.target.value;
    setFilled(value !== prefix);
  };

  return (
    <div className="relative">
      <StyledDiv
        onClick={() => {
          setFocused(true);
          inputRef.current && inputRef.current.focus();
        }}
        onBlur={(e) => {
          gtmPrice({ price: e.target.value });
          setFocused(false);
        }}
        disabled={disabled}
        className={className}
      >
        <Controller
          id={name}
          name={name}
          control={control}
          defaultValue=""
          render={({ field: { onChange, name, value } }) => (
            <StyledInput
              name={name}
              ref={inputRef}
              value={value}
              prefix={currency?.prefix}
              autoComplete="off"
              decimalsLimit={currency?.decimalsLimit}
              onInput={handleFilled}
              decimalSeparator={currency?.decimalSeparator}
              groupSeparator={currency?.groupSeparator}
              intlConfig={{ currency: currency?.currency }}
              onValueChange={onChange}
            />
          )}
        />
        <StyledLabel filled={filled} focused={focused}>
          {label}
        </StyledLabel>
      </StyledDiv>
      <Typography variant="error" className="absolute">
        {errors[name]?.message}
      </Typography>
    </div>
  );
};

InputCurrency.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  prefix: PropTypes.string,
  disabled: PropTypes.bool,
  currency: PropTypes.object,
};

InputCurrency.defaultProps = {
  name: "",
  label: "",
  control: {},
  errors: {},
  prefix: "",
  disabled: false,
  currency: {},
};

export default InputCurrency;
