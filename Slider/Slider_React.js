import React, { Component } from 'react';
import './Slider_React.css';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images:[
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu0SLrINy9xeL74kqfGrCuYPK1eT1Tt8OkryViIqh93eYcCNFKA',
        'http://z500proekty.ru/thumbs/350x197s20/-FilesZ500-res-wizualizacje-Zx113-Zx113_view1_jpg.jpg',
        'http://akvilonpro.ua/assets/images/proektu/150-200m/162_gorlica/162_gorlica_fas1_1600.jpg',
        'https://www.mgprojekt.com.pl/upload/galleries/products/hornowek_images_wd1.jpg'
       ],
      
      currentImagesIndex: 0,
      canGoPrev: false,
      canGoNext: true

    };
  }
  _makeNextStep(currentIndex) {
    let newIndex = currentIndex;
    newIndex = newIndex + 1;
    if (newIndex === this.state.images.length - 1) {
      this.setState({ canGoNext: false })
      this.setState({ canGoPrev: true })
    }
    return newIndex;
  }
  _makePrevStep(currentIndex) {
    let newIndex = currentIndex;
    newIndex = newIndex - 1;
    if (newIndex === 0) {
      this.setState({ canGoPrev: false })
      this.setState({ canGoNext: true })
    }
    return newIndex;
  }
  nextSlideHandler(e) {
    let currentIndex = this.state.currentImagesIndex;
    let newIndex = currentIndex;

    if (e.currentTarget.dataset.direction === 'next') {
      newIndex = this._makeNextStep(currentIndex);
    } else {
      newIndex = this._makePrevStep(currentIndex);
    }
    this.setState({ currentImagesIndex: newIndex });
  }

  render() {
    return (
      <div className='Slider'>
        <div>
          <button disabled={!this.state.canGoPrev} data-direction='prev' onClick={this.nextSlideHandler.bind(this)} >PREV</button>
        </div>
        <div>
          <img alt='' src={this.state.images[this.state.currentImagesIndex]} />

        </div>
        <div>
          <button disabled={!this.state.canGoNext} data-direction='next' onClick={this.nextSlideHandler.bind(this)}>NEXT</button>
        </div>
      </div>
    );
  }
}

export default Slider;

