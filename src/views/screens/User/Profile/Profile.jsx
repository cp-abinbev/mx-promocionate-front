// Package
import { map, filter } from "lodash";

// Hooks
import useViews from "../../../";
import useControllers from "../../../../controllers";

const Profile = () => {
  const { useComponents, useLayouts } = useViews();
  const { Title, useInputs, Button, Typography } = useComponents();
  const { PublicContentLayout } = useLayouts();
  const { InputDefault, CheckboxDefault } = useInputs();

  const { useScreenHooks, useComponentHooks } = useControllers();
  const { useFooter } = useComponentHooks();
  const { useAuthControllers } = useScreenHooks();
  const { useProfile } = useAuthControllers();
  const { links } = useFooter();
  const {
    profileForm,
    fromLogin,
    handleUpdateProfile,
    handleLogout,
    closeSessionProfile,
    buttonProfile,
    phoneBoxProfile,
    addressBoxProfile,
    cityBoxProfile,
    businessNameBoxProfile,
    nameBoxProfile,
    subtitleProfile,
    titleProfile,
    imgMobile,
    imgTablet,
    imgDesktop,
  } = useProfile();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = profileForm;

  const linksResult = map(links, ({ data, key }) => {
    return key.includes("tyc")
      ? { key: "Términos y Condiciones", data }
      : key.includes("privacidad") && { key: "Políticas de Privacidad", data };
  });

  const selectionLinks = filter(linksResult, (item) => item);

  const textTermsAndConditions = (
    <Typography variant="h3">
      Acepto{" "}
      <strong className="border-b-2 border-b-[#808080]">
        <a href={selectionLinks[1].data} target="_blank">
          {selectionLinks[1].key}
        </a>
      </strong>{" "}
      <br className="md:hidden" />y{" "}
      <strong className="border-b-2 border-b-[#808080]">
        <a href={selectionLinks[0].data} target="_blank">
          {selectionLinks[0].key}
        </a>
      </strong>{" "}
      de esta dinámica
    </Typography>
  );

  return (
    <PublicContentLayout
      imgMobile={imgMobile}
      imgTablet={imgTablet}
      imgDesktop={imgDesktop}
      showButtonExit={!fromLogin}
      showBack
      showIconProfile
    >
      <Title
        title={`${titleProfile[0]?.title}`}
        text={`${subtitleProfile[0]?.title}`}
        classNameContainer="px-6"
        classNameTitle="mt-0"
      />
      <form
        className="flex flex-col space-y-7 mt-[27px] px-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputDefault
          name="name"
          text={`${nameBoxProfile[0]?.title}`}
          control={control}
          errors={errors}
        />
        <div>
          <InputDefault
            name="storeName"
            text={`${businessNameBoxProfile[0]?.title}`}
            control={control}
            errors={errors}
            maxLength={31}
          />
          <p className="font-workSans mt-[8px] text-[12px] leading-[16px] mx-[1rem] text-[#1e1e1eb3] font-normal">
            Recuerda que puedes modificar el nombre
          </p>
        </div>
        <InputDefault
          name="city"
          text={`${cityBoxProfile[0]?.title}`}
          control={control}
          errors={errors}
          maxLength={26}
        />
        <InputDefault
          name="address"
          text={`${addressBoxProfile[0]?.title}`}
          control={control}
          errors={errors}
          maxLength={36}
        />
        <InputDefault
          name="phone"
          text={`${phoneBoxProfile[0]?.title}`}
          control={control}
          errors={errors}
        />
        {fromLogin && (
          <div className="pb-4">
            <CheckboxDefault
              name="terms"
              control={control}
              label={textTermsAndConditions}
              errors={errors}
            />
          </div>
        )}
      </form>
      <div
        className="flex flex-col items-center justify-center shadow-button md:shadow-none
        mt-[20px] sticky top-0 bottom-0 bg-white"
      >
        <Button
          text={`${buttonProfile[0]?.title}`}
          control={control}
          errors={errors}
          disabled={!isValid || !isDirty}
          onPress={handleSubmit(handleUpdateProfile)}
          className="!text-white w-[90%] mt-[20px]"
        />
        <button
          className="font-semibold underline pb-[0.5rem] font-workSans mt-[1.938rem] decoration-[#ABABAB]"
          onClick={handleLogout}
        >
          {closeSessionProfile[0]?.title}
        </button>
      </div>
    </PublicContentLayout>
  );
};

export default Profile;
