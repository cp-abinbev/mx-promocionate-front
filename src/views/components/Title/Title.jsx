//Package
import PropTypes from "prop-types";

// Components
import useComponents from "../";

const Title = (props) => {
  const { title, text, className, classNameContainer, classNameTitle } = props;

  const { Typography } = useComponents();

  return (
    <div className={`${classNameContainer}`}>
      <Typography
        className={`h-[2.9rem] sm:h-30 font-barlow mt-49 md:w-full ${classNameTitle}`}
        variant="h1"
      >
        {title}
      </Typography>
      <Typography className={`font-workSans ${className}`}>{text}</Typography>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameTitle: PropTypes.string,
};

Title.defaultProps = {
  title: "",
  text: "",
  className: "",
  classNameContainer: "",
  classNameTitle: "",
};

export default Title;
