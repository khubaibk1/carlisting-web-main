import React, { useState } from "react";
import Image from "next/image";
import filterIcon from "../../../public/images/filter.svg";
import arrow from "../../../public/images/arrowDwon.png";
import arrowtop from "../../../public/images/arrowtop.png";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
const BMWList = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
];
const GranCoupe = [
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
  "Aston Martin",
];
const FuelDropdown = ["Diesel", "Hybrid", "Electric", "Petrol"];

const AllUsed = ["New Clear", "Used Clear", "All Used", "All New"];

const BodyType = [
  "Convertible",
  "Couple",
  "Estate",
  "Hatchback",
  "Roadster",
  "Saloon",
];

const GearBox = ["Atomatic", "Manual"];

const Filters = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (event) => {
    const checkboxId = event.target.id;
    setSelectedCheckbox(checkboxId);
  };
  const [selecteedCheckbox, setSeleectedCheckbox] = useState(null);

  const handleCheeckboxChange = (value) => {
    setSeleectedCheckbox(value);
  };

  const [showAllUsedDropdown, setShowAllUsedDropdown] = useState(false);
  const [showBmwDropdown, setShowBmwDropdown] = useState(false);
  const [showBodyTypeDropdown, setShowBodyTypeDropdown] = useState(false);
  const [showGearBoxDropdown, setGearBoxDropdown] = useState(false);
  const [showFuelDropdown, setFuelDropdown] = useState(false);

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
      case "GearBox":
        setGearBoxDropdown(!showGearBoxDropdown);
        break;
      case "Fuel":
        setFuelDropdown(!showFuelDropdown);
        break;

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
                      {AllUsed.map((item, index) => (
                        <div key={index}>
                          <CheckBox
                            BoxName={"Fuel"}
                            Value={item}
                            selected={selecteedCheckbox === item}
                            onChange={handleCheeckboxChange}
                          />
                        </div>
                      ))}
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
              <span className="    text-[#141415] font-normal">
                <Dropdown options={BMWList} initialValue="BMW" scroll={true} />
              </span>
            </button>

            {showBmwDropdown && (
              <>
                {/* <div
                  className="absolute mt-[3px] shadow-xl bg-[#95e5e5]"
                  style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
                >
                  <Image src={arrowtop} className="shadow-xl ml-[30px] z-10" />
                </div>
                <div className="w-[292px] absolute h-[218px] bg-[#FFFFFF] p-[14px]  z-10">
                  <button className="w-[292px] h-"></button>
                  
                </div> */}
              </>
            )}
          </div>

          <button className="flex flex-row justify-around items-center w-[211px]  border-[#0866FC] border-[2px] rounded-[24px] py-[10px] px-[16px]">
            <span className="text-[#141415] font-normal">
              <Dropdown
                options={GranCoupe}
                initialValue="2 Series Gran Coupe"
                scroll={false}
              />
            </span>
          </button>
          <div>
            <button
              className="flex flex-row justify-around items-center w-[138px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]"
              onClick={() => toggleDropdown("BodyType")}
            >
              <span className=" text-[#141415] font-normal">Body Type</span>
              <Image src={arrow} />
            </button>
            {showBodyTypeDropdown && (
              <div
                className="absolute mt-[3px] shadow-xl bg-[#f3f4f4]"
                style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
              >
                <Image src={arrowtop} className="shadow-xl ml-[30px] z-10" />
                <div className="w-[292px] h-[294px] bg-[#FFFFFF] p-[14px]  z-10">
                  <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                    Body Type
                  </p>
                  <div className="p-4">
                    <div className="flex flex-col h-[200px] justify-between">
                      {BodyType.map((item, index) => (
                        <div key={index}>
                          <CheckBox
                            BoxName={"Fuel"}
                            Value={item}
                            selected={selecteedCheckbox === item}
                            onChange={handleCheeckboxChange}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="flex flex-row justify-around items-center w-[115px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]">
            <span className=" text-[#141415] font-normal">Budget</span>
            <Image src={arrow} />
          </button>
          <div>
            <button
              className="flex flex-row justify-around items-center w-[121px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]"
              onClick={() => toggleDropdown("GearBox")}
            >
              <span className=" text-[#141415] font-normal">Gearbox</span>
              <Image src={arrow} />
            </button>
            {showGearBoxDropdown && (
              <div
                className="absolute mt-[3px] shadow-xl bg-[#f3f4f4]"
                style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
              >
                <Image src={arrowtop} className="shadow-xl ml-[30px] z-10" />
                <div className="w-[292px] h-[156px] bg-[#FFFFFF] p-[14px]  z-10">
                  <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                    Gearbox
                  </p>
                  <div className="p-4">
                    <div className="flex flex-col h-[60px] justify-between">
                      {GearBox.map((item, index) => (
                        <div key={index}>
                          <CheckBox
                            BoxName={"Fuel"}
                            Value={item}
                            selected={selecteedCheckbox === item}
                            onChange={handleCheeckboxChange}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              className="flex flex-row justify-around items-center w-[89px] h-[42px] border-[#D3D3D6] border-[2px] rounded-[24px]  py-[10px] px-[16px]"
              onClick={() => toggleDropdown("Fuel")}
            >
              <span className=" text-[#141415] font-normal">Fuel</span>
              <Image src={arrow} />
            </button>
            {showFuelDropdown && (
              <div
                className="absolute mt-[3px] shadow-xl bg-[#f3f4f4]"
                style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
              >
                <Image src={arrowtop} className="shadow-xl ml-[30px] z-10" />
                <div className="w-[292px] h-[218px] bg-[#FFFFFF] p-[14px]  z-10">
                  <p className="text-[24px] w-[150px] text-center font-small mt-[4px]">
                    Fuel
                  </p>
                  <div className="p-4">
                    <div className="flex flex-col h-[130px] justify-between">
                      {FuelDropdown.map((item, index) => (
                        <div key={index}>
                          <CheckBox
                            BoxName={"Fuel"}
                            Value={item}
                            selected={selecteedCheckbox === item}
                            onChange={handleCheeckboxChange}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
