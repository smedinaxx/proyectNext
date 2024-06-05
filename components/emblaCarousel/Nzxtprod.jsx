import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../emblaCarousel/EmblaCarouselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const SLIDES = [
    {
      url: "/nzxtprod/gabin.jpg",
    },
    {
      url: "/nzxtprod/gabin1.jpg",
    },
    {
      url: "/nzxtprod/gabin2.jpg",
    },
    {
      url: "/nzxtprod/gabin3.jpg",
    },
  ];

  return (
    
    <section className="embla pt-2 pb-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className="embla__slide__img">
                  <Image
                    width={400}
                    height={400}
                    src={slide.url}
                    alt={"imagen de venta"}
                  />
                  <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;