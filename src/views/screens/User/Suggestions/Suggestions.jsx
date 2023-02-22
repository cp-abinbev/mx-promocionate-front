import useViews from "../../..";
import useControllers from "../../../../controllers";

const Suggestions = () => {
  const { useComponents, useLayouts } = useViews();
  const { Title, useInputs, Button, useModals } = useComponents();
  const { SelectDefault, TextArea } = useInputs();
  const { PublicContentLayout } = useLayouts();
  const { Suggestions } = useModals();

  const { useScreenHooks } = useControllers();
  const { useAuthControllers } = useScreenHooks();
  const { useSuggestion } = useAuthControllers();
  const {
    suggestionsForm,
    handleSendSuggestion,
    suggestionValue,
    showModal,
    setShowModal,
    goHome,
    brands,
    optionsBrand,
    selectTitleType,
    buttonModal,
    buttonSend,
    modalText,
    modalTitle,
    placeHolderSuggestion,
    labelSuggestion,
    selectTitleBrands,
    subtitle,
    title,
    optBrandValueForm,
  } = useSuggestion();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = suggestionsForm;

  return (
    <PublicContentLayout showBack showIconProfile>
      <form className="flex flex-col md:items-center md:justify-center">
        <Title
          title={title[0]?.title}
          text={subtitle[0]?.title}
          classNameTitle="mt-0 md:mb-[20px]"
          classNameContainer="px-6 md:w-full"
        />
        <div className="px-6 md:w-full md:space-y-[40px]">
          <SelectDefault
            name="optionsBrand"
            label={selectTitleType[0]?.title}
            control={control}
            options={optionsBrand}
            errors={errors}
          />
          {optBrandValueForm && (
            <SelectDefault
              name="brand"
              label={selectTitleBrands[0]?.title}
              control={control}
              options={[...brands, { name: "Otro" }]}
              errors={errors}
            />
          )}
          {optBrandValueForm && (
            <>
              <p className="font-workSans text-[14px] font-normal mt-[1.5rem] md:!mb-[-30px]">
                {labelSuggestion[0]?.title}
              </p>
              <TextArea
                name="suggestion"
                className="w-full border-[1px] border-[#bfbfbf] h-[80px] p-2 outline-none
                font-workSans placeholder:text-[12px]"
                text={placeHolderSuggestion[0]?.title}
                control={control}
                errors={errors}
              />
            </>
          )}
        </div>
        {suggestionValue && (
          <div
            className="flex flex-col items-center justify-center mt-[20px]
            sticky bottom-[10px] shadow-button md:shadow-none bg-white w-full"
          >
            <Button
              text={buttonSend[0]?.title}
              control={control}
              errors={errors}
              disabled={!isValid}
              onPress={handleSubmit(handleSendSuggestion)}
              className="w-[90%] mt-[20px] md:w-[60%]"
            />
          </div>
        )}
      </form>
      {showModal && (
        <Suggestions
          closeModal={setShowModal}
          goHome={goHome}
          text={modalText[0]?.title}
          title={modalTitle[0]?.title}
          button={buttonModal[0]?.title}
        />
      )}
    </PublicContentLayout>
  );
};
export default Suggestions;
