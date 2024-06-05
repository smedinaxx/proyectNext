import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButton'
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
      url: "/razerprod/razerkey1.jpg",
    },
    {
      url: "/razerprod/razerkey2.jpg",
    },
    {
      url: "/razerprod/razerkey.jpg",
    },
    {
      url: "/razerprod/razerkey3.jpg",
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