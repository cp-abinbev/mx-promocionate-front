// Package
import PropTypes from "prop-types";
import { StyledDivContainer, StyledDivModal } from "./ModalDefault.styles";

// Hooks
import useViews from "../../../../views";

const ContactUs = (props) => {
  const { active, onHideModal, title, text } = props;

  const { useComponents } = useViews();
  const { Title, Button } = useComponents();

  return (
    <StyledDivContainer
      active={active}
      className="justify-end backdrop transitionCustom sm:justify-center"
    >
      <StyledDivModal
        active={active}
        className="z-50 w-full transitionCustom h-[330px]  sm:h-[340px] sm:w-[360px] sm:rounded-[10px]"
      >
        <Title
          title={title}
          text={text}
          classNameContainer="ml-21 mr-21 md:space-y-[8px]"
        />
        <div className="w-[-webkit-fill-available] grid place-items-center">
          <Button
            className="w-[318px] mt-[44px] sm:mt-[54px] mr-[19px] ml-[19px] "
            text="Aceptar"
            onPress={onHideModal}
          />
        </div>
      </StyledDivModal>
    </StyledDivContainer>
  );
};

ContactUs.propTypes = {
  active: PropTypes.bool,
  onHideModal: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
};
ContactUs.defaultProps = {
  active: false,
  onHideModal: () => {},
  title: "",
  text: "",
};

export default ContactUs;
