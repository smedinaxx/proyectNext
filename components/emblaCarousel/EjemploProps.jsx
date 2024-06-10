import React from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const EjemploEmbla = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla pt-2 pb-2">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className="embla__slide__img">
                  <Image
                    width={400}
                    height={400}
                    src={slide.url}
                    alt={slide.alt || 'Imagen de producto'}
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

export default EjemploEmbla;
