import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from './Navigation'
import { Movies } from './Movies'
import { TvShows } from './TvShows'

import banner from './images/witcher-1.jpg'
import banner2 from './images/007.png'
import { IoMdStar, IoMdPlay } from 'react-icons/io'
import { TiInfoLarge } from 'react-icons/ti'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className='mv__hero-image'></div>
        <img src={banner} alt='banner' className='heroBg' />
        <Navigation />

        <div className='container'>
          <div className='mv__title-header'>
            <h1>The Witcher</h1>
            <small>Season 1</small>
            <div className='rating'>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <div className='mv__genre-container'>
              <span>Action</span>
              <span>Drama</span>
              <span>Mystery</span>
            </div>
            <div className='btn-group'>
              <button className='btn btn-secondary btn-lg rounded-0'>
                <IoMdPlay />
              </button>
              <button className='btn btn-primary btn-lg rounded-0'>
                <TiInfoLarge />
              </button>
            </div>
          </div>
        </div>
        <div className='container-fluid' style={{ marginTop: '5rem' }}>
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
          <Movies />
          <TvShows />
        </div>
      </section>
    </>
  )
}

export default Home
