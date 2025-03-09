import { IconSchoolBell } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";

const FixedButtons = () => {
  return (
    <div>
      <div>
        <button
          className="bg-stone-400 border-2 border-blue-200 rounded-lg hover:bg-slate-700/30"
          style={{
            position: "fixed",
            top: "300px",
            right: "0px",
            padding: "10px 10px",
            color: "black",
            zIndex: 1000,
          }}
        >
          <IconSchoolBell stroke={2} width={30} height={30} />
        </button>

        <button
          className="bg-emerald-800 border-2 border-blue-200 rounded-lg hover:bg-emerald-950"
          style={{
            position: "fixed",
            top: "360px",
            right: "0",
            padding: "10px 10px",
            color: "white",
            zIndex: 1000,
          }}
        >
          <IconSend stroke={2} width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default FixedButtons;
