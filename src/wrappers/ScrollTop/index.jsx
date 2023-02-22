//Packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

//Hook
import useHelpers from '../../helpers';

const ScrollTop = (props) => {
  const { children } = props;

  const { pathname } = useLocation();
  const { useQuickFunctions } = useHelpers();
  const { scrollTop } = useQuickFunctions();

  useEffect(() => {
    scrollTop({ x: 0, y: 0 });
  }, [pathname]);

  return <>{children}</>;
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

ScrollTop.defaultProps = {
  children: <></>,
};

export default ScrollTop;
