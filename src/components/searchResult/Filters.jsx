import React, { useState } from "react";
import Image from "next/image";
import filterIcon from "../../../public/images/filter.svg";
import arrow from "../../../public/images/arrowDwon.png";
import arrowtop from "../../../public/images/arrowtop.png";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import CustomDropdown from "../home/tabs/CustomDropdown";
import Sort from "../usedcar/Sort";
import Model from "../usedcar/filter/Model";
import NewCar from "./Filter/NewCar";
import BodyTypeFilter from "./Filter/BodyTypeFilter";
import BudgetBoxFilter from "./Filter/BudgetBoxFilter";
import GearBoxFilter from "./Filter/GearBoxFilter";
import FuelFilter from "./Filter/FuelFilter";
import Make from "./Filter/Make";
import ModelFilter from "./Filter/ModelFilter";

const BudgetMinimum = [
  "$5000",
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
const BudgetMaximum = [
  "$80000",
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
  const [showBudgetBoxDropdown, setBudgetBoxDropdown] = useState(false);

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
      case "BudgetBox":
        setBudgetBoxDropdown(!showBudgetBoxDropdown);
        break;

      default:
        break;
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between w-full items-center mt-[40px]">
        <div className="flex flex-row w-[1133px] h-[42px] justify-around text-[16px]">
          {/* New/use */}
          <button
            className="flex items-center w-[70px] h-[42px] space-x-2 px-4 py-2 bg-[#0866FC] text-white rounded-[24px]"
            onClick={handleModalOpen}
          >
            <Image src={filterIcon} />
            <span>3</span>
          </button>
          <NewCar />

          <button className="w-[102px]  border-[#D3D3D6] border-[2px] rounded-[24px] z-10">
            Location
          </button>
          <Make />

          <ModelFilter />

          <BodyTypeFilter />

          <BudgetBoxFilter />

          <GearBoxFilter />

          <FuelFilter />
        </div>

        <div>
          <p className="text-[20px] font-medium text-[#0866FC] underline ml-[34px]">
            Clear all
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center mt-[45px]">
        <Sort />
      </div>
      <Model isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Filters;
