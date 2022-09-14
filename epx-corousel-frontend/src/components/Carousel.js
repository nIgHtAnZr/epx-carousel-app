import React, { useState, useEffect } from "react";
import axios from "axios";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SlideTitle from "./SlideTitle";
import SlideSubTitle from "./SlideSubTitle";
import SlideImage from "./SlideImage";
import SlidesError from "../components/errorPages/SlidesError";

import "./styles.css";

const Carousel = ({ Slides, Infinite }) => {
    const [slidesData, setSlidestData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const route = `http://localhost:3600/api/carousel`;
                const slides = await axios.get(route, {
                    params: { slides: Slides },
                });
                setSlidestData(slides.data);
            } catch (error) {
                setSlidestData([]);
            }
        })();
    }, []);

    const [current, setCurrent] = useState(0);
    const totalSlideCount = slidesData.length;

    const prev = () => {
        setCurrent(current === 0 ? totalSlideCount - 1 : current - 1);
    };

    const next = () => {
        setCurrent(current === totalSlideCount - 1 ? 0 : current + 1);
    };

    const renderSlides = () => {
        return (
            <div className="slider-wrapper">
                {totalSlideCount > 1 && (
                    <>
                        {!Infinite ? (
                            <>
                                {current !== 0 && (
                                    <div className="nav left">
                                        <IoIosArrowBack onClick={prev} />
                                    </div>
                                )}
                                {current !== totalSlideCount - 1 && (
                                    <div className="nav right">
                                        <IoIosArrowForward onClick={next} />
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="nav left">
                                    <IoIosArrowBack onClick={prev} />
                                </div>
                                <div className="nav right">
                                    <IoIosArrowForward onClick={next} />
                                </div>
                            </>
                        )}
                    </>
                )}

                {slidesData.map((slide, index) => {
                    return (
                        <div
                            className={
                                index === current ? "slide active" : "slide"
                            }
                            key={index}
                        >
                            {index === current && (
                                <>
                                    <div className="slider-desc">
                                        <SlideTitle text={slide.title} />
                                        <SlideSubTitle text={slide.subTitle} />
                                    </div>
                                    <SlideImage url={slide.image} />
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return <>{slidesData.length ? renderSlides() : <SlidesError />}</>;
};

export default Carousel;
