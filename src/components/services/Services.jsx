import React from "react"
import img from "../images/777_Tower.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Scales = () => {
  return (
    <>
      <section className='Scales mb'>
        <Back name='Scales' title='Scale - All Scales' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Scales
