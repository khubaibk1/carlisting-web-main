import React, { useState } from "react";
import Image from "next/image";
import filterIcon from "../../../public/images/filter.svg";
import arrow from "../../../public/images/arrowDwon.png";
import arrowtop from "../../../public/images/arrowtop.png";

const Filters = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (event) => {
    const checkboxId = event.target.id;
    setSelectedCheckbox(checkboxId);
  };

  const [showAllUsedDropdown, setShowAllUsedDropdown] = useState(false);
  const [showBmwDropdown, setShowBmwDropdown] = useState(false);
  const [showBodyTypeDropdown, setShowBodyTypeDropdown] = useState(false);

  const toggleDropdown = (dropdownName) => {
    switch (dropdownName) {
      case "AllUsed":
        setShowAllUsedDropdown(!showAllUsedDropdown);
        break;
      case "Bmw":
        setShowBmwDropdown(!showBmwDropdown);
        break;
      case "BodyType":
        setShowBodyTypeDropdown(!showBodyTypeDropdown);
        break;
      // Add more cases for other dropdowns as needed
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between w-full items-center mt-[40px]">
        <div className="flex flex-row w-[1133px] h-[42px] justify-around text-[16px]">
          <button className="flex items-center w-[70px] h-[42px] space-x-2 px-4 py-2 bg-[#0866FC] text-white rounded-[24px]">
            <Image src={filterIcon} />
            <span>3</span>
          </button>
          <div>
            <button
              className="flex flex-row justify-around items-center w-[137px] h-[42px] border-[#0866FC] border-[2px] rounded-[24px]  py-[10px] px-[16px]"
              onClick={() => toggleDropdown("AllUsed")}
            >
              <span className=" text-[#141415] font-normal">All Used</span>
              <Image src={arrow} />
            </button>

            {showAllUsedDropdown && (
              <div
                className="absolute mt-[3px] shadow-xl bg-[#f3f4f4]"
                style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
              >
                <Image src={arrowtop} className="shadow-xl ml-[30px] z-10" />
                <div className="w-[292px] h-[218px] bg-[#FFFFFF] p-[14px]  z-10">
                  <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                    New/Used
                  </p>
                  <div className="p-4">
                    <div className="flex flex-col h-[130px] justify-between">
                      <div className="flex items-center ">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="myCheckboxGroup"
                          className="form-checkbox h-5 w-5 text-indigo-600"
                          checked={selectedCheckbox === "checkbox1"}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox1" className="ml-2">
                          New Clear
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          name="myCheckboxGroup"
                          className="form-checkbox h-5 w-5 text-indigo-600"
                          checked={selectedCheckbox === "checkbox2"}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox2" className="ml-2">
                          Used Clear
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          name="myCheckboxGroup"
                          className="form-checkbox h-5 w-5 text-indigo-600"
                          checked={selectedCheckbox === "checkbox3"}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox3" className="ml-2">
                          All Used
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox4"
                          name="myCheckboxGroup"
                          className="form-checkbox h-5 w-5 text-indigo-600"
                          checked={selectedCheckbox === "checkbox4"}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox3" className="ml-2">
                          All New
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="w-[102px]  border-[#D3D3D6] border-[2px] rounded-[24px] ">
            Location
          </button>

          <div>
            <button
              className="flex flex-row justify-around items-center w-[99px] h-[42px]  border-[#0866FC] border-[2px] rounded-[24px] py-[10px] px-[16px]"
              onClick={() => toggleDropdown("Bmw")}
            >
              <span className="    text-[#141415] font-normal">BMW</span>
              <Image src={arrow} />
            </button>

            {showBmwDropdown && (
              <>
                <div
                  className="absolute mt-[3px] shadow-xl bg-[#95e5e5]"
                  style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
                >
                  <Image src={arrowtop} className="shadow-xl ml-[30px] z-10" />
                </div>
                <div className="w-[292px] absolute h-[218px] bg-[#FFFFFF] p-[14px]  z-10">
                  <button className="w-[292px] h-"></button>
                </div>
              </>
            )}
          </div>

          <button className="flex flex-row justify-around items-center w-[211px]  border-[#0866FC] border-[2px] rounded-[24px] py-[10px] px-[16px]">
            <span className="text-[#141415] font-normal">
              2 Series Gran Coupe
            </span>
            <Image src={arrow} />
          </button>

          <button className="flex flex-row justify-around items-center w-[138px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]">
            <span className=" text-[#141415] font-normal">Body Type</span>
            <Image src={arrow} />
          </button>
          <button className="flex flex-row justify-around items-center w-[115px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]">
            <span className=" text-[#141415] font-normal">Budget</span>
            <Image src={arrow} />
          </button>
          <button className="flex flex-row justify-around items-center w-[121px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]">
            <span className=" text-[#141415] font-normal">Gearbox</span>
            <Image src={arrow} />
          </button>
          <button className="flex flex-row justify-around items-center w-[89px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]">
            <span className=" text-[#141415] font-normal">Fuel</span>
            <Image src={arrow} />
          </button>
        </div>

        <div>
          <p className="text-[20px] font-medium text-[#0866FC] underline">
            Clear all
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center mt-[45px]">
        <p className="mr-[10px]">Sorted by</p>
        <button className="flex flex-row justify-around items-center w-[173px] h-[36px]  border-[#D3D3D6] border-[1px] rounded-[24px] py-[10px] px-[16px]">
          <span className="text-[#141415] font-normal text-[14px]">
            Prics: Low to High
          </span>
          <Image src={arrow} />
        </button>
      </div>
    </div>
  );
};

export default Filters;
