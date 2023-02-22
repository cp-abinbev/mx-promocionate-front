import useComponents from "../../../../components";
import useControllers from "../../../../../controllers";

const AgeGateBool = () => {
  const { Typography, useInputs, Button } = useComponents();
  const { CheckboxDefault } = useInputs();
  const { useComponentHooks } = useControllers();
  const { useAgeGateBool, useAgeGateDate } = useComponentHooks();
  const {
    titleAgeGate,
    checkboxAgeGate,
    labelAgeGate,
    handleCheck,
    isOld,
    notOld,
    buttonAgeGate,
    buttonSelect,
    setButtonSelect,
    handleSubmit,
    checkboxRef,
    closeModal,
  } = useAgeGateBool();

  const { ageGateForm } = useAgeGateDate();
  const { control } = ageGateForm;

  return (
    <div
      className={`${
        closeModal ? "hidden" : "fixed"
      } top-0 bottom-0 left-0 right-0 bg-modalBg grid place-items-center z-[999]
      w-full h-full`}
    >
      <div className="bg-white w-[320px] h-[280px] px-4 rounded-[10px]">
        <Typography
          variant="titleAgegate"
          className=" mx-auto mt-[31px] mb-[17px] text-[30px] text-center"
        >
          {titleAgeGate[0]?.title}
        </Typography>
        <div className="flex w-full items-center justify-center gap-[10px] mb-[13px]">
          <button
            onClick={(e) => {
              setButtonSelect({ si: true });
              isOld(e);
            }}
            className={`${
              buttonSelect.si ? "bg-black text-white" : "bg-white"
            } w-[90px] h-[40px] rounded-[50px] border-[2px] border-solid border-black`}
          >
            SI
          </button>
          <button
            onClick={(e) => {
              setButtonSelect({ no: true });
              notOld(e);
            }}
            className={`${
              buttonSelect.no ? "bg-black text-white" : "bg-white"
            } w-[90px] h-[40px] rounded-[50px] border-[2px] border-solid border-black`}
          >
            NO
          </button>
        </div>

        <div className="flex flex-col w-full justify-start gap-x-2.5 mb-[21px]">
          <CheckboxDefault
            refCheckbox={checkboxRef}
            control={control}
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
          text={`${buttonAgeGate[0]?.title}`}
          fullWidth
          disabled={buttonSelect.no || buttonSelect.si ? false : true}
          className="font-workSans font-bold text-lg mb-[37px]"
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AgeGateBool;
