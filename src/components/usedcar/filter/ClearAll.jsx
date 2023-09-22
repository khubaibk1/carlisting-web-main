import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const data = [
    {
        id: 1,
        name: "New & Used",
    },
    {
        id: 2,
        name: "New",
    },
    {
        id: 3,
        name: "Used",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ClearAll = () => {
    const [rotation, setRotation] = useState(0);

    const rotateSVG = () => {
        setRotation(rotation + 90);
    };
    const [selected, setSelected] = useState(data[0]);
    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                <div className="flex items-center justify-center gap-6 md:gap-8 ">
                    <div className="flex items-center gap-3 ">
                        <Listbox value={selected} onChange={setSelected} >
                            {({ open }) => (
                                <>

                                    <div className="relative ">
                                        <Listbox.Button className="border w-[412px] h-[60px] ">
                                            <span className="flex items-center  ">

                                                <span className="ml-3 block truncate">
                                                    {selected.name}
                                                </span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center ">
                                                <svg className={`transform rotate-${rotation} cursor-pointer transition-transform duration-500 ease-in-out`}
                                                    onClick={rotateSVG} xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path d="M6.38886 7.51891C6.18873 7.7665 5.81127 7.7665 5.61114 7.51891L0.596021 1.31431C0.331734 0.987339 0.564452 0.5 0.984878 0.5L11.0151 0.5C11.4355 0.5 11.6683 0.987339 11.404 1.31431L6.38886 7.51891Z" fill="#505057" />

                                                </svg>
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >

                                            <Listbox.Options className="absolute pb-7 pt-2 px-2 z-10 mt-1 w-[412px]  bg-white border  text-base shadow-lg   focus:outline-none sm:text-sm">


                                                {data.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active
                                                                    ? " rounded-md  "
                                                                    : "",
                                                                "relative cursor-default select-none "
                                                            )
                                                        }
                                                        value={person}
                                                    >

                                                        {({ selected, active }) => (
                                                            <>

                                                                <div className="flex items-center ml-5 cursor-pointer w-full">
                                                                    <div>
                                                                        <input type="checkbox" className="w-[20px] h-[20px] " checked={selected}
                                                                            onChange={() => setSelected(person)} />
                                                                    </div>
                                                                    <span
                                                                        className={classNames(
                                                                            selected
                                                                                ? "font-[400]"
                                                                                : "font-normal",
                                                                            " block truncate text-[16px] px-5 py-2 text-left"
                                                                        )}
                                                                    >
                                                                        {person.name}
                                                                    </span>

                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                                <button className="text-[#09A122] border-2 font-[500] border-[#09A122] rounded-md w-[87px] py-[8px]">Done</button>
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClearAll;
