import React from "react"
import Heading from "../../common/Heading"
import { numbers } from "../../data/Data"
import "./numbers.css"

const Numbers = () => {
  return (
    <>
      <section className='numbers padding'>
        <div className='container'>
          <Heading title='Over 120+ Happy Tenants Being With Us Still They Love Our Scales' subtitle='Our Statics' />

          <div className='content grid4 mtop'>
            {numbers.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Numbers