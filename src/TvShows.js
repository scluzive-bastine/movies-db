import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import banner from './images/witcher-1.jpg'
import banner2 from './images/007.png'
export const TvShows = () => {
  return (
    <>
      {/* Tv Shows */}
      <div className='container mv__section-header'>
        <h3 className='mt-5 mb-3 text-white'> Tv Shows</h3>
      </div>
      <Carousel
        plugins={[
          'infinite',
          // 'arrows',
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 6,
            },
          },
        ]}
      >
        <div className='mv__single-container'>
          <div className='mv__bg-cover'></div>
          <img src={banner} alt='title' />
          <h5>The Witcher</h5>
        </div>
        <div className='mv__single-container'>
          <div className='mv__bg-cover'></div>
          <img src={banner2} alt='title' />
          <h5>No Time To Die</h5>
        </div>
      </Carousel>
    </>
  )
}
