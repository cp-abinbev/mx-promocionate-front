import { useState } from "react";
import icon from "../../../../assets/iconInfoPopUp.svg";

const Info = ({ text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex gap-[10px] mb-[1rem] cursor-pointer"
      tabIndex={0}
      onBlur={() => setOpen(false)}
    >
      <img
        src={icon}
        alt="popup icon"
        className="w-[15px]"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="relative flex items-center">
          <div className="w-[20px] h-[20px] rotate-[135deg] skew-x-[10deg] skew-y-[10deg] bg-[#F0ECFC]" />
          <div
            className="ml-[-10px] mr-[10px] h-fit flex items-center justify-center z-[2]
            rounded-[5px] p-2 bg-[#F0ECFC] text-[12px] font-workSans font-normal"
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
