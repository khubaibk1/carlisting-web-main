import React, { useState } from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image';
import { BsDot, BsSpeedometer2 } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer    absolute top-[42%]  -right-1   p-2 rounded-full`}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                <path d="M1 23L13 12L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer    z-50 absolute top-[40%]  p-2  `}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                <g filter="url(#filter0_b_1_4175)">
                    <path d="M13 23L1 12L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_b_1_4175" x="-30" y="-30" width="74" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_4175" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_4175" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
const UsedCar = () => {
    const data = [
        {
            id: 1,
            imgs: [
                {
                    img: "/images/usedcar1.jpeg",
                },
                {
                    img: "/images/usedcar1.jpeg",
                },
                {
                    img: "/images/usedcar1.jpeg",
                },
                {
                    img: "/images/usedcar1.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",

        },
        {
            id: 2,
            imgs: [
                {
                    img: "/images/usedcar2.jpeg",
                },
                {
                    img: "/images/usedcar2.jpeg",
                },
                {
                    img: "/images/usedcar2.jpeg",
                },
                {
                    img: "/images/usedcar2.jpeg",
                },
            ],

            title: "BMW 3 Series",
            mileage: "30,000 mi.",
            market: "$3,200 below market",
            location: "California, US.   28 miles away",
            deal: "AMAZING!",
            price: "$89,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 3,
            imgs: [
                {
                    img: "/images/usedcar3.jpeg",
                },
                {
                    img: "/images/usedcar3.jpeg",
                },
                {
                    img: "/images/usedcar3.jpeg",
                },
                {
                    img: "/images/usedcar3.jpeg",
                },
            ],
            title: "BMW",
            mileage: "12,000 mi.",
            market: "$4,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$80,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar4.jpeg",
                },
                {
                    img: "/images/usedcar4.jpeg",
                },
                {
                    img: "/images/usedcar4.jpeg",
                },
                {
                    img: "/images/usedcar4.jpeg",
                },
            ],
            title: "Mercedes Benz W140",
            mileage: "10,000 mi.",
            market: "$3,000 below market",
            location: "California, US.   28 miles away",
            deal: "AMAZING!",
            price: "$24,300",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 5,
            imgs: [
                {
                    img: "/images/usedcar5.jpeg",
                },
                {
                    img: "/images/usedcar5.jpeg",
                },
                {
                    img: "/images/usedcar5.jpeg",
                },
                {
                    img: "/images/img2.jpeg",
                },
            ],
            title: "Audi S5",
            mileage: "5,000 mi.",
            market: "$3,600 below market",
            location: "Seattle, US.   15 miles away",
            deal: "AMAZING!",
            price: "$34,600",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 6,
            imgs: [
                {
                    img: "/images/usedcar6.jpeg",
                },
                {
                    img: "/images/usedcar6.jpeg",
                },
                {
                    img: "/images/usedcar6.jpeg",
                },
                {
                    img: "/images/usedcar6.jpeg",
                },
            ],
            title: "Porsche 997 Turbo",
            mileage: "10,000 mi.",
            market: "$10,000 below market",
            location: "California, US.   28 miles away",
            deal: "AMAZING!",
            price: "$140,600",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 7,
            imgs: [
                {
                    img: "/images/usedcar7.jpeg",
                },
                {
                    img: "/images/usedcar7.jpeg",
                },
                {
                    img: "/images/usedcar7.jpeg",
                },
                {
                    img: "/images/usedcar7.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 8,
            imgs: [
                {
                    img: "/images/usedcar8.jpeg",
                },
                {
                    img: "/images/usedcar8.jpeg",
                },
                {
                    img: "/images/usedcar8.jpeg",
                },
                {
                    img: "/images/usedcar8.jpeg",
                },
            ],
            title: "Maserati GranTurismo",
            mileage: "10,000 mi.",
            market: "$14,300 below market",
            location: "Chicago, US.   21 miles away",
            deal: "AMAZING!",
            price: "$200,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 9,
            imgs: [
                {
                    img: "/images/usedcar9.jpeg",
                },
                {
                    img: "/images/usedcar9.jpeg",
                },
                {
                    img: "/images/usedcar9.jpeg",
                },
                {
                    img: "/images/usedcar9.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 10,
            imgs: [
                {
                    img: "/images/usedcar10.jpeg",
                },
                {
                    img: "/images/usedcar10.jpeg",
                },
                {
                    img: "/images/usedcar10.jpeg",
                },
                {
                    img: "/images/usedcar10.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar11.jpeg",
                },
                {
                    img: "/images/usedcar11.jpeg",
                },
                {
                    img: "/images/usedcar11.jpeg",
                },
                {
                    img: "/images/usedcar11.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar12.jpeg",
                },
                {
                    img: "/images/usedcar12.jpeg",
                },
                {
                    img: "/images/usedcar12.jpeg",
                },
                {
                    img: "/images/usedcar12.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar13.jpeg",
                },
                {
                    img: "/images/usedcar13.jpeg",
                },
                {
                    img: "/images/usedcar13.jpeg",
                },
                {
                    img: "/images/usedcar13.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar14.jpeg",
                },
                {
                    img: "/images/usedcar14.jpeg",
                },
                {
                    img: "/images/usedcar14.jpeg",
                },
                {
                    img: "/images/usedcar14.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar15.jpeg",
                },
                {
                    img: "/images/usedcar15.jpeg",
                },
                {
                    img: "/images/usedcar15.jpeg",
                },
                {
                    img: "/images/usedcar15.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 4,
            imgs: [
                {
                    img: "/images/usedcar16.jpeg",
                },
                {
                    img: "/images/usedcar16.jpeg",
                },
                {
                    img: "/images/usedcar16.jpeg",
                },
                {
                    img: "/images/usedcar16.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
    ];
    const [isClicked, setIsClicked] = useState(Array(data.length).fill(false));

    const handleButtonClick = (index) => {
        const updatedState = [...isClicked];
        updatedState[index] = !updatedState[index];
        setIsClicked(updatedState);
    };

    const settings = {
        dots: false,
        dotsClass: "slick-dots line-indicator",
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div>
            <Wrapper>
                <div className='flex flex-col justify-start items-start'>
                    <div className='flex gap-5 items-center underline'>
                        <a href="">
                            <p className='text-[#141415] font-[500] text-[16px]'>
                                Used Cars For Sale
                            </p>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                            <path d="M8.38433 5.5853C8.67856 5.78348 8.67856 6.21651 8.38433 6.4147L0.779331 11.5372C0.447218 11.7609 0 11.523 0 11.1225L0 0.877458C0 0.47703 0.447217 0.239056 0.77933 0.46276L8.38433 5.5853Z" fill="#141415" />
                        </svg>
                        <a href="">
                            <p className='text-[#141415] font-[500] text-[16px]'>
                                Schenectady,NY
                            </p>
                        </a>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-1 pt-5'>
                            <p className='text-[28px] font-[600] text-[#141415]'>
                                Used - Clear :
                            </p>
                            <p className='text-[28px] font-[400] text-[#141415]'>
                                2020 Mercedes-Benz S550 in Washington, DC.
                            </p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <button className='border rounded-full border-[#141415] py-2 px-3 text-[#141415]'>
                                Set Notification
                            </button>
                            <button className='border rounded-full border-[#141415] py-2 px-3 text-[#141415]'>
                                Save Search
                            </button>

                        </div>

                    </div>
                    <div className='mt-5 flex gap-[2px] items-center text-white'>
                        <button className='flex items-center gap-2 bg-[#0866FC] rounded-full px-[16px] py-[10px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.50016 4.16676C7.27915 4.16676 7.06719 4.25455 6.91091 4.41083C6.75463 4.56711 6.66683 4.77908 6.66683 5.00009C6.66683 5.2211 6.75463 5.43306 6.91091 5.58934C7.06719 5.74562 7.27915 5.83342 7.50016 5.83342C7.72118 5.83342 7.93314 5.74562 8.08942 5.58934C8.2457 5.43306 8.3335 5.2211 8.3335 5.00009C8.3335 4.77908 8.2457 4.56711 8.08942 4.41083C7.93314 4.25455 7.72118 4.16676 7.50016 4.16676ZM5.14183 4.16676C5.314 3.67881 5.63328 3.25628 6.05566 2.95741C6.47805 2.65854 6.98273 2.49805 7.50016 2.49805C8.01759 2.49805 8.52228 2.65854 8.94466 2.95741C9.36705 3.25628 9.68633 3.67881 9.8585 4.16676H15.8335C16.0545 4.16676 16.2665 4.25455 16.4228 4.41083C16.579 4.56711 16.6668 4.77908 16.6668 5.00009C16.6668 5.2211 16.579 5.43306 16.4228 5.58934C16.2665 5.74562 16.0545 5.83342 15.8335 5.83342H9.8585C9.68633 6.32137 9.36705 6.74389 8.94466 7.04276C8.52228 7.34163 8.01759 7.50213 7.50016 7.50213C6.98273 7.50213 6.47805 7.34163 6.05566 7.04276C5.63328 6.74389 5.314 6.32137 5.14183 5.83342H4.16683C3.94582 5.83342 3.73385 5.74562 3.57757 5.58934C3.42129 5.43306 3.3335 5.2211 3.3335 5.00009C3.3335 4.77908 3.42129 4.56711 3.57757 4.41083C3.73385 4.25455 3.94582 4.16676 4.16683 4.16676H5.14183ZM12.5002 9.16676C12.2791 9.16676 12.0672 9.25455 11.9109 9.41083C11.7546 9.56711 11.6668 9.77908 11.6668 10.0001C11.6668 10.2211 11.7546 10.4331 11.9109 10.5893C12.0672 10.7456 12.2791 10.8334 12.5002 10.8334C12.7212 10.8334 12.9331 10.7456 13.0894 10.5893C13.2457 10.4331 13.3335 10.2211 13.3335 10.0001C13.3335 9.77908 13.2457 9.56711 13.0894 9.41083C12.9331 9.25455 12.7212 9.16676 12.5002 9.16676ZM10.1418 9.16676C10.314 8.67881 10.6333 8.25628 11.0557 7.95741C11.478 7.65854 11.9827 7.49805 12.5002 7.49805C13.0176 7.49805 13.5223 7.65854 13.9447 7.95741C14.367 8.25628 14.6863 8.67881 14.8585 9.16676H15.8335C16.0545 9.16676 16.2665 9.25455 16.4228 9.41083C16.579 9.56711 16.6668 9.77908 16.6668 10.0001C16.6668 10.2211 16.579 10.4331 16.4228 10.5893C16.2665 10.7456 16.0545 10.8334 15.8335 10.8334H14.8585C14.6863 11.3214 14.367 11.7439 13.9447 12.0428C13.5223 12.3416 13.0176 12.5021 12.5002 12.5021C11.9827 12.5021 11.478 12.3416 11.0557 12.0428C10.6333 11.7439 10.314 11.3214 10.1418 10.8334H4.16683C3.94582 10.8334 3.73385 10.7456 3.57757 10.5893C3.42129 10.4331 3.3335 10.2211 3.3335 10.0001C3.3335 9.77908 3.42129 9.56711 3.57757 9.41083C3.73385 9.25455 3.94582 9.16676 4.16683 9.16676H10.1418ZM7.50016 14.1668C7.27915 14.1668 7.06719 14.2546 6.91091 14.4108C6.75463 14.5671 6.66683 14.7791 6.66683 15.0001C6.66683 15.2211 6.75463 15.4331 6.91091 15.5893C7.06719 15.7456 7.27915 15.8334 7.50016 15.8334C7.72118 15.8334 7.93314 15.7456 8.08942 15.5893C8.2457 15.4331 8.3335 15.2211 8.3335 15.0001C8.3335 14.7791 8.2457 14.5671 8.08942 14.4108C7.93314 14.2546 7.72118 14.1668 7.50016 14.1668ZM5.14183 14.1668C5.314 13.6788 5.63328 13.2563 6.05566 12.9574C6.47805 12.6585 6.98273 12.498 7.50016 12.498C8.01759 12.498 8.52228 12.6585 8.94466 12.9574C9.36705 13.2563 9.68633 13.6788 9.8585 14.1668H15.8335C16.0545 14.1668 16.2665 14.2546 16.4228 14.4108C16.579 14.5671 16.6668 14.7791 16.6668 15.0001C16.6668 15.2211 16.579 15.4331 16.4228 15.5893C16.2665 15.7456 16.0545 15.8334 15.8335 15.8334H9.8585C9.68633 16.3214 9.36705 16.7439 8.94466 17.0428C8.52228 17.3416 8.01759 17.5021 7.50016 17.5021C6.98273 17.5021 6.47805 17.3416 6.05566 17.0428C5.63328 16.7439 5.314 16.3214 5.14183 15.8334H4.16683C3.94582 15.8334 3.73385 15.7456 3.57757 15.5893C3.42129 15.4331 3.3335 15.2211 3.3335 15.0001C3.3335 14.7791 3.42129 14.5671 3.57757 14.4108C3.73385 14.2546 3.94582 14.1668 4.16683 14.1668H5.14183Z" fill="white" />
                            </svg>
                            3
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#0866FC] rounded-full px-[20px] py-[10px]'>
                            All Used
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#D3D3D6] rounded-full px-[20px] py-[10px]'>
                            Location
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#0866FC] rounded-full px-[20px] py-[10px]'>
                            BMW
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#0866FC] rounded-full px-3 py-[10px] w-[220px]'>
                            2 Series Gran Coupe
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#D3D3D6] rounded-full px-[20px] py-[10px]'>
                            Body Type
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#D3D3D6] rounded-full px-[20px] py-[10px]'>
                            Budget
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#D3D3D6] rounded-full px-[20px] py-[10px]'>
                            Gearbox
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='flex items-center text-black gap-2 border-2 border-[#D3D3D6] rounded-full px-[20px] py-[10px]'>
                            Fuel
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>
                        <button className='text-[#0866FC] font-[500] text-[20px] underline pl-1'>
                            Clear all

                        </button>

                    </div>
                    <div className='pt-16 flex items-center gap-4'>
                        <p>
                            Sorted by
                        </p>
                        <button className='flex items-center text-black text-[14px] font-[400] gap-2 border border-[#D3D3D6] rounded-full px-[20px] py-[10px]'>
                            Price: Low to High
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
                                <path d="M6.88886 7.51891C6.68873 7.7665 6.31127 7.7665 6.11114 7.51891L1.09602 1.31431C0.831734 0.987339 1.06445 0.5 1.48488 0.5L11.5151 0.5C11.9355 0.5 12.1683 0.987339 11.904 1.31431L6.88886 7.51891Z" fill="#141415" />
                            </svg>
                        </button>

                    </div>
                    <div className='flex justify-center items-center relative'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10'>

                            {
                                data.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col justify-center items-center py-5"
                                    >
                                        <div className="bg-white flex flex-col w-[290px]  ">
                                            <div>
                                                <Slider {...settings} >
                                                    {
                                                        item.imgs.map((items, index) => (
                                                            <Image
                                                                src={items.img}
                                                                alt=""
                                                                width={800}
                                                                height={800}
                                                                className="w-[300px] h-[190px] object-cover relative"
                                                            />


                                                        ))
                                                    }
                                                </Slider>
                                            </div>
                                            <button
                                                className={`bg-white w-[30px] h-[30px] shadow-sm rounded-full absolute ml-[15.5rem] mt-[1rem] flex items-center justify-center`}
                                                onClick={() => handleButtonClick(i)}
                                            >
                                                {isClicked[i] ? <AiFillHeart size={20} color="red" /> : <AiOutlineHeart size={20} />}
                                            </button>
                                            <div className="flex  items-start pl-3 py-5">
                                                <div className="flex flex-col ">
                                                    <h1 className={` font-[500] text-[16px] `}>
                                                        {item.title}
                                                    </h1>
                                                    <div className='flex items-center flex-row gap-10 '>
                                                        <div className='flex items-center '>
                                                            <p className="text-[14px] font-[600]">{item.price}</p>
                                                            <BsDot size={10} />
                                                            <p className='text-[8px] font-[500] text-[#505057]'>
                                                                {item.market}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className='uppercase text-[#09A122] font-[600] text-[10px]'>
                                                                {item.deal}
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <div className='flex justify-between'>
                                                        <div className='flex flex-col '>
                                                            <p
                                                                className={`text-[8px] text-[#737074] flex items-center gap-1 mt-1`}
                                                            >
                                                                <BsSpeedometer2 size={14} />
                                                                {item.mileage}
                                                            </p>
                                                            <p className='text-[8px] font-[400] flex items-center gap-1 mt-2 text-[#505057]'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <g clip-path="url(#clip0_1_4191)">
                                                                        <path d="M5.9998 12C5.9998 12 1.7998 6.522 1.7998 4.2C1.7998 3.64845 1.90844 3.1023 2.11951 2.59273C2.33058 2.08316 2.63995 1.62016 3.02996 1.23015C3.41996 0.840145 3.88297 0.530776 4.39253 0.319706C4.9021 0.108636 5.44825 0 5.9998 0C6.55136 0 7.09751 0.108636 7.60707 0.319706C8.11664 0.530776 8.57965 0.840145 8.96965 1.23015C9.35966 1.62016 9.66903 2.08316 9.8801 2.59273C10.0912 3.1023 10.1998 3.64845 10.1998 4.2C10.1998 6.522 5.9998 12 5.9998 12ZM5.9998 5.4C6.31806 5.4 6.62329 5.27357 6.84833 5.04853C7.07338 4.82348 7.1998 4.51826 7.1998 4.2C7.1998 3.88174 7.07338 3.57652 6.84833 3.35147C6.62329 3.12643 6.31806 3 5.9998 3C5.68154 3 5.37632 3.12643 5.15128 3.35147C4.92623 3.57652 4.7998 3.88174 4.7998 4.2C4.7998 4.51826 4.92623 4.82348 5.15128 5.04853C5.37632 5.27357 5.68154 5.4 5.9998 5.4Z" fill="#505057" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_4191">
                                                                            <rect width="12" height="12" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                {item.location}
                                                            </p>
                                                            <p className="text-[10px] pt-2 text-[#0866FC] font-[600] underline flex items-center gap-1">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="13"
                                                                    height="12"
                                                                    viewBox="0 0 13 12"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M1.89347 4.57061C3.0873 7.16957 5.20847 9.22917 7.84147 10.3459L7.84947 10.3493L8.3588 10.5759C8.6734 10.7162 9.0267 10.744 9.35934 10.6545C9.69199 10.565 9.9837 10.3638 10.1855 10.0846L11.0348 8.90928C11.0598 8.87466 11.0705 8.83179 11.0648 8.7895C11.0591 8.7472 11.0374 8.7087 11.0041 8.68194L9.52147 7.48528C9.50397 7.47116 9.4838 7.46074 9.46216 7.45462C9.44053 7.44851 9.41789 7.44683 9.39559 7.4497C9.37329 7.45256 9.35181 7.45991 9.33242 7.47129C9.31304 7.48268 9.29616 7.49787 9.2828 7.51594L8.70547 8.29461C8.63745 8.38648 8.54001 8.45226 8.42938 8.48101C8.31875 8.50976 8.2016 8.49974 8.09747 8.45261C6.12484 7.55898 4.54443 5.97857 3.6508 4.00594C3.60367 3.90181 3.59365 3.78466 3.62239 3.67403C3.65114 3.5634 3.71693 3.46596 3.8088 3.39794L4.5868 2.81994C4.60488 2.80658 4.62007 2.7897 4.63145 2.77032C4.64283 2.75093 4.65018 2.72945 4.65305 2.70715C4.65591 2.68486 4.65423 2.66221 4.64812 2.64058C4.64201 2.61895 4.63158 2.59877 4.61747 2.58128L3.42147 1.09861C3.3947 1.06536 3.35621 1.04365 3.31391 1.03794C3.27162 1.03224 3.22875 1.04298 3.19413 1.06794L2.01213 1.92128C1.73106 2.12401 1.52887 2.41782 1.43991 2.75277C1.35094 3.08771 1.38071 3.44312 1.52413 3.75861L1.89347 4.56994V4.57061ZM7.4468 11.2646C4.5862 10.0499 2.28187 7.81146 0.984799 4.98728L0.983465 4.98594L0.614132 4.17261C0.375079 3.6469 0.325405 3.05464 0.473549 2.49646C0.621693 1.93827 0.958519 1.44859 1.4268 1.11061L2.6088 0.257276C2.85088 0.0825565 3.15074 0.00729287 3.44664 0.0469779C3.74254 0.0866629 4.01197 0.238277 4.19947 0.47061L5.39613 1.95394C5.49489 2.07632 5.56788 2.21741 5.61073 2.36872C5.65357 2.52002 5.66539 2.67843 5.64546 2.83442C5.62553 2.99041 5.57428 3.14076 5.49477 3.27644C5.41526 3.41211 5.30915 3.53032 5.1828 3.62394L4.73613 3.95461C5.49132 5.41884 6.68391 6.61142 8.14813 7.36661L8.47947 6.91994C8.57309 6.79369 8.69126 6.68766 8.82688 6.60822C8.9625 6.52877 9.11277 6.47755 9.26868 6.45763C9.42459 6.4377 9.58292 6.44949 9.73416 6.49227C9.8854 6.53506 10.0264 6.60796 10.1488 6.70661L11.6321 7.90328C11.8647 8.09079 12.0164 8.36035 12.0561 8.65641C12.0958 8.95247 12.0204 9.25247 11.8455 9.49461L10.9961 10.6706C10.6599 11.1359 10.1739 11.4713 9.61954 11.6205C9.06523 11.7697 8.47646 11.7236 7.95213 11.4899L7.4468 11.2646Z"
                                                                        fill="#505057"
                                                                    />
                                                                </svg>
                                                                {item.tele}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col ml-[10rem] absolute w-[120px] gap-1  text-center font-[500]">
                                                            <p
                                                                style={{ background: `${item.color1}` }}
                                                                className="rounded-full py-[2px] text-[12px]"
                                                            >
                                                                {item.cond}
                                                            </p>
                                                            <p
                                                                style={{ background: `${item.color2}` }}
                                                                className="rounded-full py-[2px] text-[12px]"
                                                            >
                                                                {item.cond1}
                                                            </p>
                                                            <p
                                                                style={{ background: `${item.color3}` }}
                                                                className="rounded-full py-[2px] text-[12px]"
                                                            >
                                                                {item.own}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }

                        </div>

                    </div>
                </div>
            </Wrapper>

        </div>
    )
}

export default UsedCar