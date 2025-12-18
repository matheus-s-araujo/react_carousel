import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  itemWidth: number;
  frameSize: number;
  step: number;
  animationDuration: number;
  images: string[];
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    animationDuration: 1000,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    this.setState(prev => ({ ...prev, [name]: value }));
  };

  render() {
    const { images, itemWidth, frameSize, step, animationDuration } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}

        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <Carousel
          images={images}
          itemWidth={itemWidth}
          frameSize={frameSize}
          step={step}
          animationDuration={animationDuration}
        />

        <div className="carousel-settings">
          <div className="carousel-settings__field">
            <label
              htmlFor="itemWidth"
              className="carousel-settings__field-name"
            >
              Tamanho da Imagem
            </label>
            <input
              className="carousel-settings__input"
              name="itemWidth"
              type="number"
              value={itemWidth}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="carousel-settings__field">
            <label
              htmlFor="frameSize"
              className="carousel-settings__field-name"
            >
              Tamanho do carrossel
            </label>
            <input
              className="carousel-settings__input"
              name="frameSize"
              type="number"
              value={frameSize}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="carousel-settings__field">
            <label htmlFor="step" className="carousel-settings__field-name">
              Quantas imagens passar
            </label>
            <input
              className="carousel-settings__input"
              name="step"
              type="number"
              value={step}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="carousel-settings__field">
            <label
              htmlFor="animationDuration"
              className="carousel-settings__field-name"
            >
              Duração da animação
            </label>
            <input
              className="carousel-settings__input"
              name="animationDuration"
              type="number"
              value={animationDuration}
              onChange={this.handleChange}
            ></input>
          </div>

          <input type="submit" name="" id="" />
        </div>
      </div>
    );
  }
}

export default App;
