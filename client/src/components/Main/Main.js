import React,{useRef} from 'react';

//Components
import {Header} from './start/Header';
import {LandCarousel} from './start/LandCarousel'
import {FeaturedProducts} from './mid/FeaturedProducts';
import {BannerProduct} from './mid/BannerProduct';

export const Main = () =>{
    const FeatureProductRef = useRef();
    const scrollTo = (loc)=>{
        if(loc === "Products"){
            FeatureProductRef?.current?.executeScroll();
        }
    }
    return(
    <React.Fragment>
        <Header scrollTo = {scrollTo}/>
        <LandCarousel/>
        <FeaturedProducts ref = {FeatureProductRef}/>
        <BannerProduct/>
    </React.Fragment>)
}