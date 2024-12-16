import React from "react"
import Heading from "../../common/Heading"
import "./Winning.css"
import WinningCard from "./WinningCard"

const Winning = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Award Winning Top Commercial Building' />
          <WinningCard />
        </div>
      </section>
    </>
  )
}

export default Winning
