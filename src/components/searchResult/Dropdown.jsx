import React,{useState,useEffect,useRef} from 'react'
import Image from 'next/image';
import arrow from "../../../public/images/arrowDwon.png"
import arrowtop from "../../../public/images/arrowtop.png"

const Dropdown = ({ options, initialValue,scroll}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedOption, setSelectedOption] = useState(initialValue);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // const handleOptionSelect = (option) => {
    //     setSelectedOption(option);
    //     setIsOpen(false);
    // };

  return (
    <div>
      <div ref={dropdownRef} className="relative">
            <div
                className={` rounded-md flex items-center  gap-[2px] h-[50px] cursor-pointer`}
                onClick={toggleDropdown}
            >   
            
            
                <span>{initialValue}</span>
                <Image src={arrow} />
                
            </div>
            {isOpen && (
                <>
                <div className='absolute mt-2 z-50 shadow-xl'>
                    <Image src={arrowtop}  className="shadow-xl transform translate-y-[5px] bg-[#f3f4f4] ml-[30px]    " 
                    style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}/>
                    
                <div className={` w-[9rem] h-[300px] absolute ${scroll?'overflow-y-scroll':''}  bg-white z-50 `}>
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`px-2 py-2 cursor-pointer hover:bg-[#672797] hover:text-[#fff]`}
                            // onClick={() => {
                            //     handleOptionSelect(option);
                            // }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
                </div>
                
                </>
            )}
        </div>

    </div>
  )
}

export default Dropdown
