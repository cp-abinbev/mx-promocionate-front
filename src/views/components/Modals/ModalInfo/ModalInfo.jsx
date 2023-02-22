import IconClose from "../../../../assets/IconCloseBlack.svg";

const ModalInfo = ({
  className,
  title,
  paragrapOne,
  paragrapTwo,
  imgOne,
  imgTwo,
  setIsOpen,
  gtm,
}) => {
  return (
    <div className={className}>
      <button
        className="absolute top-[20px] right-[19px] cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          gtm();
          setIsOpen(false);
        }}
      >
        <img src={IconClose} alt="close" />
      </button>
      <h4 className="mb-[15px] mt-[20px] px-[65px] leading-[15px] text-center font-workSans font-semibold text-[14px]">
        {title[0]?.data}
      </h4>
      <div className="flex items-center justify-center px-2 gap-[10px] md:gap-[20px]">
        <div className="flex flex-col items-center justify-center">
          <img
            src={imgOne[0]?.data}
            alt="first arg"
            className="w-[123px] h-[164px] mb-[5px]"
          />
          <div className="flex">
            <a href={paragrapOne[0]?.url} target="_blank">
              <p className="text-[11px] text-start font-workSans w-[130px] ml-[3px]">
                {paragrapOne[0]?.data}
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={imgTwo[0]?.data}
            alt="second arg"
            className="w-[123px] h-[164px] mb-[5px]"
          />
          <div className="flex">
            <a href={paragrapTwo[0]?.url} target="_blank">
              <p className="text-[11px] text-start font-workSans w-[130px] ml-[3px]">
                {paragrapTwo[0]?.data}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
