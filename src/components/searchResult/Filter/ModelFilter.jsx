import React, { useState } from "react";
import Dropdown from "../Dropdown";

const ModelFilter = () => {
    const Make = [
        "double exhast engine",
        "Aston Martin",
        "Aston Martin",
        "Aston Martin",
        "Aston Martin",
        "Aston",
      ];
      const [toggle, setToggle] = useState(false);
  return (

    <div>
        
      <button className={`flex flex-row justify-around items-center w-[211px]   border-[2px] rounded-[24px] h-[42px] py-[10px] px-[16px]${
            toggle ? "border-blue-500" : ""
          }`}
          onClick={() => setToggle(true)}
          style={{ width: "auto", display: "flex" }}
      >
            <span className="text-[#141415] font-normal" style={{ flex: 1 }}>
              <Dropdown
                options={Make}
                initialValue="2 Series Gran Coupe"
                scroll={false}
                toggle={toggle}
              />
            </span>

          </button>
    </div>
  )
}

export default ModelFilter
