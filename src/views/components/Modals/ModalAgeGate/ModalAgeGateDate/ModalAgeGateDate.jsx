import useComponents from "../../../../components";
import useControllers from "../../../../../controllers";

const AgeGateDate = () => {
  const { Typography, Button, useInputs } = useComponents();
  const { InputAgeGate, CheckboxDefault } = useInputs();
  const { useComponentHooks } = useControllers();
  const { useAgeGateDate } = useComponentHooks();
  const {
    ageGateForm,
    handleSubmitDate,
    handleCheck,
    ERROR_DATE_AGE_GATE,
    titleAgeGate,
    birthdayAgeGate,
    checkboxAgeGate,
    labelAgeGate,
    buttonAgeGate,
    closeModal,
    checkboxRef,
  } = useAgeGateDate();
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = ageGateForm;

  const lengthErrors = Object.keys(errors).length;

  return (
    <div
      className={`${
        closeModal ? "hidden" : "fixed"
      } top-0 bottom-0 left-0 right-0 bg-modalBg grid place-items-center z-[999]
      w-full h-full`}
    >
      <div className="bg-white w-[317px] h-[405px] px-4 rounded-[10px]">
        <Typography
          variant="titleAgegate"
          className=" mx-auto mt-[43px] mb-[39px] text-[30px] text-center"
        >
          {titleAgeGate[0]?.title}
        </Typography>
        <div className="flex flex-col">
          <Typography variant="subtitleAgegate" className="mb-[15px]">
            {birthdayAgeGate[0]?.title}
          </Typography>
          <div className="flex justify-between gap-x-5 mb-[10px]">
            <InputAgeGate
              name="day"
              id="dd"
              label="Dia"
              maxLength={2}
              control={control}
              type="number"
              error={errors}
            />
            <InputAgeGate
              name="month"
              id="mm"
              label="Mes"
              maxLength={2}
              control={control}
              type="number"
              error={errors}
            />
            <InputAgeGate
              name="year"
              id="aaaa"
              label="Año"
              maxLength={4}
              control={control}
              type="number"
              error={errors}
            />
          </div>
          {lengthErrors > 0 && (
            <div>
              <Typography
                variant="error_agegate"
                className="text-[#FF6F71] h-4"
              >
                {ERROR_DATE_AGE_GATE}
              </Typography>
            </div>
          )}
        </div>

        <div className="flex flex-col w-full justify-start gap-x-2.5 mt-3.5 mb-[34px]">
          <CheckboxDefault
            control={control}
            refCheckbox={checkboxRef}
            label={`${checkboxAgeGate[0]?.title}`}
            name="remember"
            ageGate={true}
            handleCheck={handleCheck}
          />
          <Typography
            variant="subtitleAgegate"
            className="pl-[40px] !text-[12px] !leading-[15px]"
          >
            {labelAgeGate[0]?.title}
          </Typography>
        </div>

        <Button
          onPress={handleSubmit(handleSubmitDate)}
          text={`${buttonAgeGate[0]?.title}`}
          disabled={!isValid}
          fullWidth
          className="font-workSans font-bold text-lg mb-[59px]"
        />
      </div>
    </div>
  );
};

export default AgeGateDate;
