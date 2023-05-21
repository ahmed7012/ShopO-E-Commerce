import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function mySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

return <>
      <div className='sliding-st w-50 m-auto my-5 '  >
        
        <Slider {...settings}>
          <div>
            <img className='rounded-3 w-100' style={{'height': '350px'}} src={require('../../img/attractive-young-woman-portrait-indoor.jpg')} alt='product' />
          </div>
          <div>
            <img className='rounded-3 w-100' style={{'height': '350px'}} src={require('../../img/beautiful-woman-making-scale-with-her-arms-wide-open-isolated-white-wall.jpg')} alt='product' />
          </div>
          <div>
            <img className='rounded-3 w-100' style={{'height': '350px'}} src={require('../../img/cute-young-cozy-woman-indoor-portrait.jpg')} alt='product' />
          </div>
          <div>
            <img className='rounded-3 w-100' style={{'height': '350px'}} src={require('../../img/portrait-woman-standing-against-grey-wall-with-her-arms-crossed-looking-camera.jpg')} alt='product' />
          </div>
          <div>
            <img className='rounded-3 w-100' style={{'height': '350px'}} src={require('../../img/woman-with-crossed-arms-looking-camera.jpg')} alt='product' />
          </div>
          <div>
            <img className='rounded-3 w-100' style={{'height': '350px'}} src={require('../../img/portrait-young-woman-standing-against-grey-wall.jpg')} alt='product' />
          </div>
        </Slider>
      </div>



</>
}
