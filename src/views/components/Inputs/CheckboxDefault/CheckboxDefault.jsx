// Package
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import Bike from "../../../../assets/bike.svg";

// Styles
import {
  StyledDiv,
  StyledLabel,
  StyledInput,
  StyledCheckMark,
} from "./CheckboxDefault.styles";

// Hooks
import useViews from "../../../index";

const CheckboxDefault = (props) => {
  const {
    name,
    refCheckbox,
    label,
    ageGate,
    control,
    errors,
    hasIcon,
    handleCheck,
  } = props;
  const { useComponents } = useViews();
  const { Typography } = useComponents();

  return (
    <StyledDiv>
      <Controller
        id={name}
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <StyledLabel ageGate={ageGate}>
            {label} {hasIcon && <img src={Bike} alt="bike" className="ml-2" />}
            <StyledInput
              type="checkbox"
              ref={refCheckbox}
              name={field.name}
              onChange={field.onChange}
              onClick={(e) => handleCheck(e)}
              value={field.value}
            />
            <StyledCheckMark />
          </StyledLabel>
        )}
      />
      {errors[name]?.message && (
        <Typography variant="error" className="mt-[8px]">
          {errors[name]?.message}
        </Typography>
      )}
    </StyledDiv>
  );
};

CheckboxDefault.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  hasIcon: PropTypes.bool,
  handleCheck: PropTypes.func,
  ageGate: PropTypes.bool,
};

CheckboxDefault.defaultProps = {
  name: "",
  label: <></> || "",
  control: {},
  errors: {},
  hasIcon: false,
  handleCheck: () => {},
  ageGate: false,
};

export default CheckboxDefault;
