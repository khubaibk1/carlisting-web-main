import Image from "next/image";
import statusImage from "../../../public/images/Status.png";
import { useState } from "react";
const Status = ({ Active }) => {
  const [close, setclose] = useState(false);
  const handleClose = () => {
    setclose(!close);
  };
  return (
    <>
      {Active && !close && (
        <div className="absolute w-[558px] h-[416px] bg-white transform translate-x-[-145px] translate-y-[257px] overflow-hidden shadow-md flex flex-col justify-center items-center">
          <div>
            <Image src={statusImage} width={204} height={200} />
          </div>

          <p className="w-[247px] text-center">
            You have successfully created an account.
          </p>

          <button
            className="w-[350px] h-[48px] text-white bg-[#09A122] text-[20px] p-[5px] mb-[5px] mt-[14px] rounded-xl"
            onClick={handleClose}
          >
            Back To Home
          </button>
        </div>
      )}
    </>
  );
};
export default Status;
