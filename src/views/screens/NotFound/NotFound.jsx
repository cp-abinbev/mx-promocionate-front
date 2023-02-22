// Package
import { useNavigate } from "react-router-dom";

//Hooks
import useViews from "../..";
import iconNotFoundYellow from "../../../assets/404-Yellow.svg";
import iconNotFoundBlack from "../../../assets/404.svg";

const NotFound = () => {
  const navigate = useNavigate();

  const { useComponents } = useViews();
  const { Button, Typography } = useComponents();
  const { useLayouts } = useViews();
  const { PublicContentLayout } = useLayouts();

  return (
    <PublicContentLayout>
      <div className="relative flex items-center justify-center mt-[6.5rem]">
        <img
          className="h-[130px] absolute"
          src={iconNotFoundBlack}
          alt="icon not found"
        />
        <img
          className="mx-auto h-[145px]"
          src={iconNotFoundYellow}
          alt="icon not found"
        />
      </div>
      <Typography
        variant="2xl"
        className="flex mt-8 mt-[100px] mx-auto text-center font-barlowCondensed leading-[43px] w-[328px]"
      >
        Oops, no pudimos encontrar la página
      </Typography>

      <form
        className="flex flex-col items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <Button
          text="Volver a inicio"
          className="mt-8 text-base w-[154px] leading-[1.125rem] mb-76 sm:mt-[169px] sm:mt-[10.563rem] sm:w-[450px]"
          onPress={() => navigate("/marcas", { replace: true })}
        />
      </form>
    </PublicContentLayout>
  );
};

export default NotFound;
