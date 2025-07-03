// Bismillahirrahmanirahim

"use client"

import Carousel from 'react-bootstrap/Carousel';

import { Image } from 'react-bootstrap';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src='https://cdn.webtekno.com/media/cache/content_detail_v2/article/23831/turkiye-deki-yazilim-sektorunu-buyutmek-icin-devletten-onemli-adim-1483725143.jpg'/>
        <Carousel.Caption>
          <h3>Yekazad Software Center</h3>
          <p>Everything about Software</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='https://www.braintechnosys.com/blog/wp-content/uploads/2020/02/Here-are-top-reasons-Of-Android-App-Development-To-Different-Industries.jpg' />
        <Carousel.Caption>
          <h3>Android Apps</h3>
          <p>Build your own Android App</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image  src='https://www.apple.com/newsroom/images/2024/06/ios-18-makes-iphone-more-personal-capable-and-intelligent-than-ever/article/Apple-WWDC24-iOS-18-iPhone-15-Pro-3-up-240610_big.jpg.medium.jpg'/>
        <Carousel.Caption>
          <h3>Ios Apps</h3>
          <p>Build your own Android App</p>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image  src='https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg'/>
        <Carousel.Caption>
          <h3>Machine Learning</h3>
          <p>
        Make easy your job with Machine Learning
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;