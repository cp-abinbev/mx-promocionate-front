import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import Datepicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import "react-datepicker/dist/react-datepicker.css";

// Styles
import { StyledDiv, StyledLabel } from "./InputDate.styles";

// Hooks
import useViews from "../../../index";
import useControllers from "../../../../controllers";

const InputDate = (props) => {
  const {
    name,
    label,
    control,
    errors,
    disabled,
    dateFormat,
    placeHolderText,
    showTimeSelect,
    date,
    setDate,
    brandForm,
  } = props;

  const { useComponents } = useViews();
  const { Typography } = useComponents();

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmSelectDateVigency } = useDataLayers();

  registerLocale("es", es);

  return (
    <div className="relative">
      <StyledDiv disabled={disabled}>
        <StyledLabel>{label}</StyledLabel>
        <Controller
          id={name}
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Datepicker
              name={field.name}
              className="bg-gray ml-4 outline-none flex w-[80%]"
              placeholderText={placeHolderText}
              showTimeSelect={showTimeSelect}
              autoComplete="off"
              dateFormat={dateFormat}
              locale="es"
              timeCaption="hora"
              minDate={name === "until" ? date : new Date()}
              calendarClassName="flex"
              selected={field.value}
              onChange={(value) => {
                field.onChange(value);
                if (field.name === "since") {
                  gtmSelectDateVigency({
                    date: value,
                    component_name: "Input Initial Date",
                    element_text: "Fecha Inicial",
                  });
                  setDate(value);
                  brandForm.resetField("until");
                }
                if (field.name === "until") {
                  gtmSelectDateVigency({
                    date: value,
                    component_name: "Input Final Date",
                    element_text: "Fecha Final",
                  });
                }
              }}
            />
          )}
        />
      </StyledDiv>
      <Typography variant="error" className="absolute">
        {errors[name]?.message}
      </Typography>
    </div>
  );
};

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  disabled: PropTypes.bool,
  dateFormat: PropTypes.string,
  showTimeSelect: PropTypes.bool,
  placeHolderText: PropTypes.string.isRequired,
  date: PropTypes.any,
  setDate: PropTypes.func,
  brandForm: PropTypes.object,
};

InputDate.defaultProps = {
  name: "",
  label: "",
  control: {},
  errors: {},
  disabled: false,
  dateFormat: "",
  showTimeSelect: false,
  placeHolderText: "",
  date: "",
  setDate: () => {},
  brandForm: {},
};

export default InputDate;
