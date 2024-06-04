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
      url: "/asusprod/roglap.jpg",
      name: "ASUS G614JI-AS94 ROG Strix G16 (2023)",
      description: "Gaming Laptop, 16â€ 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray",
      price: "39,999",
    },
    {
      url: "/asusprod/roglap1.jpg",
      name: "ASUS G614JI-AS94 ROG Strix G16 (2023)",
      description: "Gaming Laptop, 16â€ 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray",
      price: "39,999",
    },
    {
      url: "/asusprod/roglap2.jpg",
      name: "ASUS G614JI-AS94 ROG Strix G16 (2023)",
      description: "Gaming Laptop, 16â€ 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray",
      price: "39,999",
    },
    {
      url: "/asusprod/roglap3.jpg",
      name: "ASUS G614JI-AS94 ROG Strix G16 (2023)",
      description: "Gaming Laptop, 16â€ 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray",
      price: "39,999",
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