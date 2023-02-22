import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { StyledInput, StyledDiv, StyledLabel } from "./AgeGate.styles";
import useControllers from "../../../../controllers";

const InputAgeGate = ({ name, label, id, control, maxLength, type, error }) => {
  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmDayAgeGAte, gtmMonthAgeGAte, gtmYearAgeGAte } = useDataLayers();

  const blockedNumbers = ["e", "+", "-", "."];

  const findError = error[name]?.message;

  const handleBlockIfNumber = (e) => {
    name === "day" && gtmDayAgeGAte();
    name === "month" && gtmMonthAgeGAte();
    name === "year" && gtmYearAgeGAte();
    if (type === "number") {
      if (blockedNumbers.some((n) => n === `${e.key}`.toLocaleLowerCase())) {
        e.preventDefault();
      }
    }
  };

  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <Controller
        id={name}
        name={name}
        control={control}
        render={({ field: { onChange, name, value } }) => (
          <StyledInput
            placeholder={id}
            findError={findError}
            type={type}
            id={name}
            name={name}
            onKeyPress={handleBlockIfNumber}
            onInput={(e) => {
              if (e.target.value.length >= e.target.maxLength) {
                e.target.value = e.target.value.slice(0, e.target.maxLength);
                name === "day" && document.getElementById("month").focus();
                name === "month" && document.getElementById("year").focus();
              }
              return undefined;
            }}
            onChange={onChange}
            maxLength={maxLength}
            checked={value}
          />
        )}
      />
    </StyledDiv>
  );
};

InputAgeGate.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  maxLength: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.object,
};

InputAgeGate.defaultProps = {
  name: "",
  control: {},
  errors: {},
  maxLength: 0,
  type: "",
  id: "",
  error: {},
};
export default InputAgeGate;
