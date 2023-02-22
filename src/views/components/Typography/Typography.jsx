// Packages
import PropTypes from "prop-types";

// Styles
import { StyledTypography } from "./Typography.styles";

const Typography = ({ children, variant, className, onClick, ...props }) => {
  return (
    <StyledTypography
      variant={variant}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "h1",
    "ageGate",
    "h2",
    "h3",
    "h4",
    "h5",
    "2xl",
    "subtitle",
    "p",
    "default",
    "error",
    "filterTitle",
    "titleAgegate",
    "subtitleAgegate",
    "white",
    "error_agegate",
  ]),
};

Typography.defaultProps = {
  className: "StyledTypography",
  variant: "p",
  children: null,
  onClick: () => {},
};

export default Typography;
