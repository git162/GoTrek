import React from 'react'
import Card from './Card'

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

const Container = () => {
  return (
    <div className='bg-slate-200 w-screen h-screen flex flex-wrap pl-[9vw] pt-28 overflow-x-hidden'>
      {data.map((items,index)=>(
        <Card key={index} {...items}/>
      ))}
      
    </div>
  )
}


export default Container
