import { IconSchoolBell } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";

const FixedButtons = () => {
  return (
    <div>
      <div className="fixedbuttons">
        <button
          className="
            bg-stone-400 border-2 border-blue-200 rounded-lg
            hover:bg-slate-700/30
            p-2 sm:p-2.5 md:p-3
          "
          style={{
            position: "fixed",
            top: "60%",
            right: "0px",
            color: "black",
            zIndex: 1000,
          }}
        >
          <IconSchoolBell
            stroke={2}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px]"
          />
        </button>

        <button
          className="
            bg-emerald-800 border-2 border-blue-200 rounded-lg
            hover:bg-emerald-950
            p-2 sm:p-2.5 md:p-3
          "
          style={{
            position: "fixed",
            top: "68%",
            right: "0px",
            color: "white",
            zIndex: 1000,
          }}
        >
          <IconSend
            stroke={2}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px]"
          />
        </button>
      </div>
    </div>
  );
};

export default FixedButtons;
