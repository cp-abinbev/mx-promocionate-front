// Packages
import React from "react";
import { promiseTrackerHoc } from "react-promise-tracker";
import PropTypes from "prop-types";

// Styles
import { StyledLoader } from "./SpinnerLoading.styles";

// Hooks
import useControllers from "../../../controllers";
import useViews from "../../index";

const SpinnerLoadingIndicator = (props) => {
  const { className, isFetching, promiseInProgress } = props;

  const { useComponents } = useViews();
  const { Loader } = useComponents();

  const { useComponentHooks } = useControllers();
  const { useSpinnerLoading } = useComponentHooks();

  useSpinnerLoading({ promiseInProgress });

  return (
    (isFetching || promiseInProgress) && (
      <StyledLoader className={className}>
        <Loader />
      </StyledLoader>
    )
  );
};

SpinnerLoadingIndicator.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  isFetching: PropTypes.bool,
  promiseInProgress: PropTypes.bool,
};

SpinnerLoadingIndicator.defaultProps = {
  className: "StyledLoader",
  type: "Circles",
  color: "#EC4C34",
  width: "100",
  height: "100",
  isFetching: false,
  promiseInProgress: false,
};

export default promiseTrackerHoc(SpinnerLoadingIndicator);
