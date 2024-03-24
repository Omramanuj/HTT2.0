import React from "react";
import { Carousel } from 'flowbite-react';
// reactstrap components
import {
  Container,
  Row,
  Col,
  // Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// // core components

// const items = [
//   {
//     src: "/assets/img/bg1.avif",
//     altText: "Nature, United States",
//     caption: "Personalised Nutrition Plan"
//   },
//   {
//     src: "/assets/img/bg3.jpg",
//     altText: "Somewhere Beyond, United States",
//     caption: "Increased Energy Levels"
//   },
//   {
//     src: "/assets/img/bg4.jpg",
//     altText: "Yellowstone National Park, United States",
//     caption: "Benefits Of Balanced Diet"
//   }
// ];

export default function CarouselSection() {
  // const [activeIndex, setActiveIndex] = React.useState(0);
  // const [animating, setAnimating] = React.useState(false);
  // const onExiting = () => {
  //   setAnimating(true);
  // };
  // const onExited = () => {
  //   setAnimating(false);
  // };
  // const next = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };
  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };
  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="whyUs font-bold text-lg mb-[5rem]">
            <h4>Why Choose Us?</h4>
          </div>
          <div className="flex justify-center font-semibold font-mont text-green-700">
            A joyful investment in your body,
            mind and spirit
          </div>

          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <div className="h-56 sm:h-64 xl:h-[70vh] 2xl:h-96">
                <Carousel slideInterval={1500}>
                  <img src="/assets/img/bg1.avif" alt="..." />
                  <img src="/assets/img/bg3.jpg" alt="..." />
                  <img src="/assets/img/bg4.jpg" alt="..." />
                  <img src="/assets/img/bg3.jpg" alt="..." />
                  <img src="/assets/img/bg3.jpg" alt="..." />
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}



// import React from 'react'

// export default function CarouselSection() {
//   return (
    
//   )
// }


{/* <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}

              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img className="w-full" src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block text-lg">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel> */}