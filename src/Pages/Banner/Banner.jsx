import React from "react";
import images from "../../assets/images/banner/1.jpg";
import images2 from "../../assets/images/banner/2.jpg";
import images3 from "../../assets/images/banner/3.jpg";
import images4 from "../../assets/images/banner/4.jpg";
// import images5 from "../../assets/images/banner/5.jpg";
// import images6 from "../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={images} className="w-full object-cover object-top" />
        <div className="absolute flex items-center h-full gap-5  left-0   bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-6 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-active btn-primary">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={images2} className="w-full object-cover object-top " />
        <div className="absolute flex items-center h-full gap-5  left-0   bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-6 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-active btn-primary">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={images3} className="w-full object-cover object-top " />
        <div className="absolute flex items-center h-full gap-5  left-0   bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-6 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-active btn-primary">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={images4} className="w-full object-cover object-top " />
        <div className="absolute flex items-center h-full gap-5  left-0   bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-6 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="btn btn-active btn-primary">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
