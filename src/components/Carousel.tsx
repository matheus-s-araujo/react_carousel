import React, { useEffect } from 'react';
import { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
  images: string[];
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  itemWidth,
  frameSize,
  step,
  animationDuration,
}) => {
  const [position, setPosition] = useState(0);
  const gap: number = 10;
  const gapSpaces: number = gap * frameSize - gap;
  const containerWidth: number = frameSize * itemWidth + gapSpaces;
  const totalWidth: number = images.length * itemWidth;
  const frameWidth: number = frameSize * itemWidth;
  const minTranslate: number = -(totalWidth - frameWidth + gapSpaces + gap);
  const currentTranslate: number = -(itemWidth + gap) * step * position;

  useEffect(() => {
    setPosition(0);
  }, [step, frameSize]);

  return (
    <div className="carousel">
      <button
        className={
          position > 0
            ? 'carousel-container__button-prev'
            : 'carousel-container__button-prev disabled'
        }
        type="button"
        onClick={() => {
          if (position > 0) {
            setPosition(position - 1);
          }
        }}
      >
        &lt;
      </button>
      <div
        className="carousel-container"
        style={{ width: `${containerWidth}px` }}
      >
        <ul
          className="carousel-container__list"
          style={{
            transform: `translateX(${Math.max(currentTranslate, minTranslate)}px)`,
            transition: `transform ${animationDuration}ms`,
            gap: `${gap}px`,
          }}
        >
          {images.map((url, index) => (
            <li key={index}>
              <img width={itemWidth} src={url} alt={`${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <button
        className={
          currentTranslate > minTranslate
            ? 'carousel-container__button-next'
            : 'carousel-container__button-next disabled'
        }
        data-cy="next"
        type="button"
        onClick={() => {
          if (currentTranslate > minTranslate) {
            setPosition(position + 1);
          }
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
