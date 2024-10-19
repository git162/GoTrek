import React from "react";
import Carousel from "react-multi-carousel";
import Card from '../Card';
import "react-multi-carousel/lib/styles.css";


const data = [
  {
    trip: "Explore Meghalaya",
    image:"https://images.unsplash.com/photo-1617433500931-63a10ff15952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    agency:"Aurora Travels"
  },
  {
    trip: "Explore Assam",
    image:"https://plus.unsplash.com/premium_photo-1661828159832-19d8340f8e09?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    agency:"The Exstacy"
  },
  {
    trip: "Sikkim",
    image:"https://plus.unsplash.com/premium_photo-1697730400710-9e565f54869e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    agency:"Jajabor"
  },
  {
    trip: "Dzuko Escape",
    image:"https://images.unsplash.com/photo-1568644559664-e4a5735c37ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    agency:"Lanes"
  },
  {
    trip: "Hills of Arunachal",
    image:"https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    agency:"Weekend Travels"
  },

]

// const CarouselCard = () => {
//   const imgLink = "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   return (
//     <div className={`bg-[url(${imgLink})] bg-cover bg-center h-64 w-full`}>
//       <img src={imgLink} alt="" />
      
      
//     </div>
//   )

// }

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} infinite={true}>
        {
          data.map((elem,index)=>{
            return(
              <div><Card key={index} {...elem}/></div>
            )
            
          })
        }
      </Carousel>
    </div>
  );
};

export default Slider;
