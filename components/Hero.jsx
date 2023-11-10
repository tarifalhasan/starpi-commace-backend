"use client";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Hero({ images }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="container  py-5 xl:py-10 space-y-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className=" h-[220px] lg:h-[630px]">
              <Image
                layout="fill"
                className=" w-full"
                src={`http://localhost:1337${image.attributes.Image.data.attributes.url}`}
                alt="slide"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="flex  space-y-5 xl:items-center justify-between flex-col xl:flex-row">
        <div>
          <h2 className=" text-5xl text-neutral-950 xl:text-7xl">
            Simply Unique/
          </h2>
          <h2 className="text-5xl text-neutral-950 xl:text-7xl">
            Simply Better.
          </h2>
        </div>
        <p className="text-sm max-w-[420px] xl:text-base text-neutral-500">
          <b className="text-neutral-950">3legant</b> is a gift & decorations
          store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
      {/* gallary */}
      <div className="grid gap-5 xl:grid-cols-2">
        <div className=" p-5 bg-slate-300 h-[377px] xl:h-[664px]">
          <div className=" space-y-3">
            <h2 className=" text-2xl xl:text-4xl  font-medium text-neutral-950">
              Living Room
            </h2>
            <button className=" transition-allduration-700 relative after:absolute after:bottom-[-5px] after:w-full after:h-[2px] after:bg-neutral-950 text-base  inline-flex items-center gap-1 font-medium text-neutral-950">
              Shop Now <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className=" grid grid-rows-2 gap-5">
          <div className=" bg-slate-300 p-5">
            <div className=" space-y-3">
              <h2 className=" text-2xl xl:text-4xl  font-medium text-neutral-950">
                Living Room
              </h2>
              <button className=" transition-allduration-700 relative after:absolute after:bottom-[-5px] after:w-full after:h-[2px] after:bg-neutral-950 text-base  inline-flex items-center gap-1 font-medium text-neutral-950">
                Shop Now <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className=" bg-slate-300 p-5">
            <div className=" space-y-3">
              <h2 className=" text-2xl xl:text-4xl  font-medium text-neutral-950">
                Living Room
              </h2>
              <button className=" transition-allduration-700 relative after:absolute after:bottom-[-5px] after:w-full after:h-[2px] after:bg-neutral-950 text-base  inline-flex items-center gap-1 font-medium text-neutral-950">
                Shop Now <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
