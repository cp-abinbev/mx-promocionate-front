// Package
import PropTypes from "prop-types";

// Styles
import {
  StyledImgCategory,
  StyleContainerImg,
} from "./ItemListCategory.styles";

const ItemListCategory = (props) => {
  const { image, name, onPress } = props;

  return (
    <StyleContainerImg>
      <StyledImgCategory
        src={image}
        alt={name}
        title={name}
        onClick={onPress}
      />
    </StyleContainerImg>
  );
};

ItemListCategory.propTypes = {
  image: PropTypes.any,
  onPress: PropTypes.func,
  name: PropTypes.string,
};

ItemListCategory.defaultProps = {
  image: null,
  onPress: () => {},
  name: "",
};

export default ItemListCategory;
