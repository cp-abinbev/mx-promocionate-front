// Package
import { map } from "lodash";
import PropTypes from "prop-types";

// Styles
import { StyledContainerCarousel } from "./ListCategory.styles";

// Views
import useViews from "../..";

const ListCategory = (props) => {
  const { images, title, goToBrand, titlePopUp } = props;
  const { useComponents } = useViews();
  const { ItemListCategory, Typography, usePopUps } = useComponents();
  const { Info } = usePopUps();

  return (
    <div className="mb-4">
      <div className="mb-5 md:relative">
        <div className="flex items-center">
          <Typography className="mb-4 ml-21 mr-[10px]" variant={"subtitle"}>
            {title}
          </Typography>
          {images[0]?.categorie_description && (
            <Info text={images[0]?.categorie_description} />
          )}
          {titlePopUp && titlePopUp[0]?.title && (
            <Info text={titlePopUp[0]?.title} />
          )}
        </div>
        <StyledContainerCarousel>
          {map(images, (item) => (
            <div
              className="flex flex-col first:ml-21 md:first:ml-0"
              key={item.id}
            >
              <ItemListCategory
                image={item.url_img}
                name={item.name}
                onPress={() => goToBrand({ brand: item })}
              />
              <p className="text-[12px] text-center font-workSans font-normal mb-[20px] max-w-[85px]">
                {item.name}
              </p>
            </div>
          ))}
        </StyledContainerCarousel>
      </div>
    </div>
  );
};

ListCategory.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  goToBrand: PropTypes.func.isRequired,
};

ListCategory.defaultProps = {
  title: "",
  images: [],
  goToBrand: () => {},
};

export default ListCategory;
