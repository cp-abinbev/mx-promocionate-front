const useQuickFunctions = () => {
  const scrollTop = ({ x, y }) => {
    window.scrollTo(x, y);
  };

  const regexValidations = ({ regex }) => {
    const selectRegexValidations = {
      number: /^[0-9]+$/,
      text: /^[aA-zZ\s\u00C0-\u00FF]+$/,
    };

    return selectRegexValidations[regex];
  };

  return {
    scrollTop,
    regexValidations,
  };
};

export default useQuickFunctions;
