// Package
import { map } from "lodash";

// Hooks
import useControllers from "../../../controllers";
import useViews from "../../index";

// Styles
import {
  StyledFooter,
  StyledTag,
  StyledList,
  StyledSocialMediaList,
} from "./Footer.styles";

// Assets
import legacy from "../../../assets/legacy.svg";

const Footer = () => {
  const { useComponents } = useViews();
  const { Typography } = useComponents();

  const { useComponentHooks } = useControllers();
  const { useFooter } = useComponentHooks();
  const { links, socialMedia, contactEmail, bgLogo, bgColor, colorText } =
    useFooter();

  const textColors = `#${colorText[0]?.data}`;

  return (
    <StyledFooter bgColor={bgColor[0]?.data}>
      <StyledTag>
        <Typography variant="h5" className={`font-roboto`}>
          {contactEmail?.title}{" "}
          <a href={`mailto:${contactEmail?.data}`}>
            <b className="underline">{contactEmail?.data}</b>
          </a>
        </Typography>
      </StyledTag>
      <div className="px-6 mt-4">
        <img src={bgLogo[0]?.data} alt="PROMOCIONATE" title="PROMOCIONATE" />
      </div>
      <StyledList>
        {map(links, (link) => {
          return (
            <li key={link.id}>
              <a
                style={{ color: textColors }}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Typography variant="h3" className="font-inter">
                  {link.title}
                </Typography>
              </a>
            </li>
          );
        })}
      </StyledList>
      {socialMedia.length > 0 && (
        <StyledSocialMediaList>
          {map(socialMedia, (link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="h-[50px] w-[50px]"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={link.data} alt={link.title} title={link.title} />
                </a>
              </li>
            );
          })}
        </StyledSocialMediaList>
      )}
      <StyledTag>
        <Typography variant="h4" className="font-inter">
          No comparta este contenido con menores de edad
        </Typography>
        <img
          src={legacy}
          className="mx-auto my-2"
          alt="El exceso de alcohol es perjudicial para la salud"
        />
        <Typography variant="h4" className="font-roboto">
          Anheuser-Busch InBev © 2021
        </Typography>
      </StyledTag>
    </StyledFooter>
  );
};

export default Footer;
