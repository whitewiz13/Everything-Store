import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {LandImage} from './helper-comp/LandImage';

const items = [
    {
        name: "The Everything Store",
        description: "A PDF Reader specially designed for musicians.",
        detail: "#64ACC8",
        background : 'url(https://wallpaperaccess.com/download/vector-967674)'
    },
    {
        name: "We got everything you need",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        detail: "#7D85B1",
        background : 'url(https://wallpaperaccess.com/download/vector-645620)'
    },
    {
        name: "Check out our new arrivals",
        description: "A exciting mobile game game made in the Unity Engine.",
        detail: "#CE7E78",
        background : 'url(https://wallpaperaccess.com/download/vector-1381231)'
    },
    {
        name: "Free Shipping",
        description: "A Generic carousel UI component for React using material ui.",
        detail: "#C9A27E",
        background : 'url(https://wallpaperaccess.com/download/vector-890276)'
    }
]
export const LandCarousel = () =>{
    return(
        <div>
    <CarouselProvider
    isIntrinsicHeight = {true}
    totalSlides={4}
    touchEnabled={false}
    dragEnabled={false}
    lockOnWindowScroll={false}
    infinite={true}
    isPlaying={true}>
    <Slider>
        {
            items.map((item, index) => {
                return  <Slide index={index}  key={index}><LandImage item={item}/></Slide>
            })
        }
        </Slider>
    </CarouselProvider>
    </div>
    )
}