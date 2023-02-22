// Hooks
import useViews from "../../";
import useControllers from "../../../controllers";
import { Helmet } from "react-helmet";
import iconLogin from "../../../assets/iconLogin.svg";
import { StyledImg } from "./Login.styles.js";

const LogIn = () => {
  const { useComponents, useLayouts } = useViews();
  const { Title, useInputs, Button, useModals } = useComponents();
  const { PublicContentLayout } = useLayouts();
  const { InputDefault, SelectDefault } = useInputs();
  const { ContactUs, AgeGate, Info } = useModals();

  const { useScreenHooks, useComponentHooks, useGeneralHooks } =
    useControllers();
  const { useDataLayers } = useGeneralHooks();
  const {
    gtmSelectDocument,
    gtmOpenPopUp,
    gtmClosePopUp,
    gtmTypeDocumentNumber,
  } = useDataLayers();
  const { useAuthControllers } = useScreenHooks();
  const { useLogin } = useAuthControllers();
  const {
    loginForm,
    errorModalOpen,
    toggleErrorModal,
    handleLogin,
    titleLogin,
    subtitleLogin,
    buttonLogin,
    ageGateRemember,
    selectDocument,
    documentSelected,
    showBeesCode,
    addValueSuggestionsCodes,
    codeBees,
    selectCodeBees,
    mobileBg,
    countryFlag,
    titlePopUp,
    paragraphPopUpOne,
    paragraphPopUpTwo,
    imgPopUpOne,
    imgPopUpTwo,
    openPopUp,
    setOpenPopUp,
    typeDocument,
    optsCodesShop,
    findCodesBees,
    document,
  } = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = loginForm;
  const { useFooter } = useComponentHooks();
  const { contactPhone, contactEmail } = useFooter();

  return (
    <>
      {!ageGateRemember?.remember && <AgeGate />}
      <Helmet>
        <link rel="canonical" href={`https://www.promocionate.com.mx/`} />
      </Helmet>
      <PublicContentLayout>
        <Title
          title={`${titleLogin[0]?.title}`}
          text={`${subtitleLogin[0]?.title}`}
          classNameTitle="!font-bold mb-[20px]"
          classNameContainer="px-6"
        />
        <form className="flex flex-col space-y-[19px] px-6">
          <SelectDefault
            name="typeDocument"
            control={control}
            errors={errors}
            label={selectDocument[0]?.title}
            options={ageGateRemember.documents}
            disabled={false}
            gtm={gtmSelectDocument}
          />
          {documentSelected?.length > 0 && (
            <>
              <div className="relative flex">
                <img
                  src={countryFlag?.img_flag}
                  alt="icon login"
                  className="mr-[10px] w-[40px] self-center justify-center h-[40px] rounded-full"
                />
                <div className="flex w-full">
                  <InputDefault
                    text={documentSelected}
                    type="number"
                    name="document"
                    control={control}
                    errors={errors}
                    classNameContainer="w-full"
                    gtm={gtmTypeDocumentNumber}
                  />
                  {typeDocument === codeBees && (
                    <img
                      src={iconLogin}
                      alt="login icon"
                      className="absolute right-[8px] top-[16px] cursor-pointer"
                      onClick={() => {
                        gtmOpenPopUp();
                        setOpenPopUp((prev) => !prev);
                      }}
                    />
                  )}
                  {openPopUp && (
                    <Info
                      title={titlePopUp}
                      setIsOpen={setOpenPopUp}
                      imgOne={imgPopUpOne}
                      gtm={gtmClosePopUp}
                      imgTwo={imgPopUpTwo}
                      paragrapOne={paragraphPopUpOne}
                      paragrapTwo={paragraphPopUpTwo}
                      className="absolute shadow-xl left-0 right-0 top-[65px] h-[300px] bg-[#F4F4F4] z-[99] rounded-[20px] flex
                  flex-col justify-center items-center"
                    />
                  )}
                </div>
              </div>

              {typeDocument !== codeBees &&
                addValueSuggestionsCodes?.length <= 0 && (
                  <div
                    className="flex flex-col items-center
                 justify-center pt-[20px] bottom-0 bg-white"
                  >
                    <Button
                      text={`Validar`}
                      type="submit"
                      disabled={
                        document?.length < 4 || document === undefined
                          ? true
                          : false
                      }
                      className="mb-2.5 w-full"
                      onPress={findCodesBees}
                    />
                  </div>
                )}

              {documentSelected !== codeBees &&
                addValueSuggestionsCodes?.length > 0 && (
                  <SelectDefault
                    name="codeShop"
                    control={control}
                    errors={errors}
                    label={selectCodeBees[0]?.title}
                    options={addValueSuggestionsCodes}
                    disabled={!showBeesCode}
                  />
                )}
            </>
          )}
        </form>
        <StyledImg
          bgImgMobile={mobileBg[0]?.url_img_mobile}
          bgImgTablet={mobileBg[0]?.url_img_tablet}
          bgImgDesktop={mobileBg[0]?.url_img_desktop}
        />
        {(optsCodesShop || typeDocument === codeBees) && (
          <div className="flex flex-col items-center shadow-button md:shadow-none justify-center pt-[20px] sticky bottom-0 bg-white">
            <Button
              text={`${buttonLogin[0]?.title}`}
              type="submit"
              disabled={!isValid}
              className="mb-2.5 w-[90%]"
              onPress={handleSubmit(handleLogin)}
            />
          </div>
        )}
        <ContactUs
          active={errorModalOpen}
          onHideModal={toggleErrorModal}
          title="Lo sentimos,"
          text={`Al parecer no estas activo en la base de datos, por favor comunícate con
          ${contactEmail?.data} o al ${contactPhone?.data} para más información.`}
        />
      </PublicContentLayout>
    </>
  );
};

export default LogIn;
