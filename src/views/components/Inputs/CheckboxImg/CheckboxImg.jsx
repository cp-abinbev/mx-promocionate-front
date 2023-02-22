// Package
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

// Styles
import {
  StyledDiv,
  StyledLabel,
  StyeldInput,
  StyeldCheckMark,
  StyledImg,
} from "./CheckboxImg.styles";

// Components
import Typography from "../../Typography";
import useControllers from "../../../../controllers";

const CheckboxImg = (props) => {
  const { name, img, number, control, errors, value, namePost, checkImg } =
    props;

  const { useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmSelectPoster } = useDataLayers();

  return (
    <StyledDiv>
      <Controller
        id={name}
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, name } }) => (
          <StyledLabel>
            <StyledImg src={img} alt={name} />
            <StyeldInput
              type="radio"
              name={name}
              onChange={(value) => {
                gtmSelectPoster({
                  diseno: `diseno_${number}`,
                });
                onChange(value.target.value);
                checkImg();
              }}
              value={value}
              checked={value.length > 0}
            />
            <StyeldCheckMark />
          </StyledLabel>
        )}
      />
      {errors[name]?.message && (
        <Typography variant="error">{errors[name]?.message}</Typography>
      )}
      <p className="font-normal text-[12px] text-center font-workSans max-w-[85px] flex flex-wrap">
        {namePost}
      </p>
    </StyledDiv>
  );
};

CheckboxImg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.any,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  value: PropTypes.any,
  number: PropTypes.number,
  namePost: PropTypes.string,
  checkImg: PropTypes.func,
};

CheckboxImg.defaultProps = {
  name: "",
  img: null,
  control: {},
  errors: {},
  value: "",
  number: 0,
  namePost: "",
  checkImg: () => {},
};

export default CheckboxImg;
