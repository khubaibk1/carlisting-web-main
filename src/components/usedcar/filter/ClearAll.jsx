import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const data = [
    {
        id: 1,
        name: "Close All",
    },
    {
        id: 2,
        name: "Clear",
    },
    {
        id: 3,
        name: "All",
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
                                            <span className={`pointer-events-none absolute inset-y-0 right-4 flex items-center ${open ? 'transform rotate-180' : ''} transition-transform duration-300`}>
                                                <svg  className={`transform  cursor-pointer transition-transform duration-500 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                                    <path d="M6.0056 9.93362C6.08688 9.85214 6.18344 9.78749 6.28974 9.74338C6.39604 9.69927 6.51001 9.67656 6.6251 9.67656C6.74019 9.67656 6.85415 9.69927 6.96046 9.74338C7.06676 9.78749 7.16332 9.85214 7.2446 9.93362L14.5001 17.1909L21.7556 9.93362C21.9199 9.76932 22.1427 9.67702 22.3751 9.67702C22.6075 9.67702 22.8303 9.76932 22.9946 9.93362C23.1589 10.0979 23.2512 10.3208 23.2512 10.5531C23.2512 10.7855 23.1589 11.0083 22.9946 11.1726L15.1196 19.0476C15.0383 19.1291 14.9418 19.1938 14.8355 19.2379C14.7292 19.282 14.6152 19.3047 14.5001 19.3047C14.385 19.3047 14.271 19.282 14.1647 19.2379C14.0584 19.1938 13.9619 19.1291 13.8806 19.0476L6.0056 11.1726C5.92411 11.0913 5.85946 10.9948 5.81535 10.8885C5.77124 10.7822 5.74854 10.6682 5.74854 10.5531C5.74854 10.438 5.77124 10.3241 5.81535 10.2178C5.85946 10.1115 5.92411 10.0149 6.0056 9.93362Z" fill="#141415" />
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
