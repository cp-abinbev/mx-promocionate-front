import React, { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import useViews from "../../..";

// Styled components
import { StyledDiv, StyledLabel, StyledInput } from "./InputDefault.styles";

const blockedNumbers = ["e", "+", "-", "."];

const InputDefault = (props) => {
  const {
    name,
    type,
    text,
    control,
    maxLength,
    errors,
    disabled,
    className,
    classNameContainer,
    gtm,
  } = props;

  const { useComponents } = useViews();
  const { Typography } = useComponents();

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const inputRef = useRef();

  const withPattern = type === "number" ? { pattern: "d*" } : {};

  useEffect(() => {
    if (inputRef.current.value) {
      setFilled(inputRef.current.value !== "");
    }
  }, [inputRef.current]);

  const handleFilled = (e) => {
    const value = e.target.value;
    setFilled(value !== "");
  };

  const handleBlockIfNumber = (e) => {
    if (type === "number") {
      if (blockedNumbers.some((n) => n === `${e.key}`.toLocaleLowerCase())) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className={`relative ${classNameContainer}`}>
      <StyledDiv
        onClick={() => {
          setFocused(true);
          inputRef.current && inputRef.current.focus();
        }}
        onBlur={() => setFocused(false)}
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
              type={type}
              onChange={(e) => {
                gtm(e.target.value);
                onChange(e.target.value);
              }}
              value={value}
              autoComplete="off"
              onKeyPress={handleBlockIfNumber}
              onInput={handleFilled}
              maxLength={maxLength}
              ref={inputRef}
              disabled={disabled}
              {...withPattern}
            />
          )}
        />
        <StyledLabel focused={focused} filled={filled}>
          {text}
        </StyledLabel>
      </StyledDiv>
      <Typography variant="error" className="absolute">
        {errors[name]?.message}
      </Typography>
    </div>
  );
};

InputDefault.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  classNameContainer: PropTypes.string,
  className: PropTypes.string,
  gtm: PropTypes.func,
};

InputDefault.defaultProps = {
  name: "",
  type: "text",
  text: "",
  control: {},
  errors: {},
  disabled: false,
  classNameContainer: "",
  className: "",
  gtm: () => {},
};

export default InputDefault;
