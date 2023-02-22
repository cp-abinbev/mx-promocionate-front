import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles.js";

const Button = (props) => {
  const { text, disabled, onPress, className, fullWidth, type } = props;

  return (
    <StyledButton
      className={className}
      type={type}
      disabled={disabled}
      onClick={onPress}
      fullWidth={fullWidth}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  text: "",
  disabled: false,
  fullWidth: false,
  type: "button",
  onPress: () => {},
};

export default Button;
