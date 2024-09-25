import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectCarousel.css';
import { MdNextPlan } from "react-icons/md";
import { useEffect, useRef } from 'react';

const ProjectCarousel = (props) => {
    const swiperRef = useRef(null); // Create a ref for Swiper

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0); // Reset to the first slide
        }
    }, [props.hashed]); // Listen for hash changes

    return (
        <div id={props.hashed} className='flex flex-col lg:flex-row justify-center gap-[5%] items-center -mt-12 mb-20'>
            <div className='projectImageChange'>
                <Swiper
                className='relative mt-24'
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper; // Store the swiper instance
                    }}
                >
                    <SwiperSlide>
                        <img src={props.image1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='self-center'>
                        <img src={props.image2} alt="" />
                    </SwiperSlide>
                    <div className="slider-controler">
                        <button className="swiper-button-prev slider-arrow text-main"><MdNextPlan /></button>
                        <button className="swiper-button-next slider-arrow text-main"><MdNextPlan /></button>
                        {/* <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline">left</ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline">right</ion-icon>
                        </div> */}
                        <div className="swiper-pagination left-1/2 bottom-1/2 w-fit bg-[rgb(50,50,50,0.2)] flex gap-5 px-2 rounded-xl text-black py-2"></div>
                    </div>
                </Swiper>
            </div>
            <div className=' ml-5 text-center lg:text-start'>
                <h1 className='font-bold mb-5 text-4xl' dangerouslySetInnerHTML={{ __html: props.title }} />
                <h1 className='text-main font-abel mb-5 max-w-[500px] lg:text-2xl'>{props.subtitle}</h1>
                <ul className='font-abel list-disc lg:text-clampP ml-5 text-start'>
                    {props.list.map((element, index) => (
                        <li key={index}>
                            {/* Render the content for each slide */}
                            {element}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCarousel;
