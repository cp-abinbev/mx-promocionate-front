// Package
import PropTypes from "prop-types";

// Styles
import {
  StyledDivContainer,
  StyledDivModal,
  StyledDivIcon,
  StyledImage,
  StyledLinkCopied,
} from "./ModalShare.styles";

// Assets
import iconShare from "../../../../assets/IconShare.svg";
import iconWhatsapp from "../../../../assets/IconWhatsapp.svg";
import iconClose from "../../../../assets/IconCloseWhite.svg";

// Hooks
import useViews from "../../../../views";

const Share = (props) => {
  const {
    active,
    onHideModal,
    title,
    text,
    socialMedia,
    shareText,
    onShareWhatsapp,
    onCopyLink,
    linkCopiedNotificationOpen,
  } = props;

  const { useComponents } = useViews();
  const { Title, Typography } = useComponents();

  return (
    <StyledDivContainer
      active={active}
      className="justify-end backdrop transitionCustom sm:justify-center"
    >
      <StyledLinkCopied active={linkCopiedNotificationOpen}>
        <Typography className="text-white font-workSans">
          Link copiado
        </Typography>
      </StyledLinkCopied>
      <StyledDivModal
        active={active}
        className="z-50 text-white w-full transitionCustom h-[290px] sm:h-[271px] sm:w-[360px] sm:rounded-[10px]"
      >
        <img
          src={iconClose}
          className="absolute right-[21px] top-[26px] cursor-pointer"
          alt="Cerrar"
          onClick={onHideModal}
        />
        <Title title={title} text={text} className="ml-21" />
        <div className="flex mt-6">
          <StyledDivIcon className="ml-[39px]">
            <StyledImage
              src={iconWhatsapp}
              alt="icon"
              onClick={onShareWhatsapp}
            />
            <Typography variant="p" className="mt-2 text-yellow">
              {socialMedia}
            </Typography>
          </StyledDivIcon>
          <StyledDivIcon className="ml-[59px]">
            <StyledImage src={iconShare} alt="icon" onClick={onCopyLink} />
            <Typography className="mt-2 text-yellow" variant="p">
              {shareText}
            </Typography>
          </StyledDivIcon>
        </div>
      </StyledDivModal>
    </StyledDivContainer>
  );
};

Share.propTypes = {
  active: PropTypes.bool,
  onHideModal: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  socialMedia: PropTypes.string,
  shareText: PropTypes.string,
  onShareWhatsapp: PropTypes.func,
  onCopyLink: PropTypes.func,
  linkCopiedNotificationOpen: PropTypes.bool,
};
Share.defaultProps = {
  active: false,
  onHideModal: () => {},
  title: "",
  text: "",
  socialMedia: "",
  shareText: "",
  onShareWhatsapp: () => {},
  onCopyLink: () => {},
  linkCopiedNotificationOpen: false,
};

export default Share;
