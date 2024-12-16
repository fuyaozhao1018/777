import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/777_Tower.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About us - Who we are' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Company Story' subtitle='Check our company story and recent working process.' />

            <p>Welcome to 777 Tower, an iconic building in the heart of Los Angeles. Covering 0.73 acres, 777
Tower's 52-story design combines modern aesthetics with outstanding functionality, with over 1
million square feet of rentable space. This finishing touch to the Los Angeles city skyline is the
perfect place to pursue your dreams of living and working in style. With 4-meter high ceilings
creating an open and airy environment, each floor is approximately 20,000 square feet in size,
and the flexible layout provides solutions for a variety of business needs. The attached parking
building ensures easy access for tenants and visitors.</p>


            <p>777 Tower is surrounded by a full range of amenities. A modern fitness center will keep you
active while you are busy, and a wide range of specialty dining options will ensure that you can
enjoy a good meal after work. Fashion brand stores and 330,000 square feet of commercial
facilities provide fashion and shopping enthusiasts with a wealth of choices to meet all your daily
needs. In addition, the surrounding transportation is convenient, with well-developed highways
and public transportation networks, making commuting and travel easier. Choose the 777 Tower
to enjoy the convenience of city life</p>


            <p>777 Tower offers a range of outstanding facilities to further enhance your living and working
experience. The spacious lobby, designed by César Pelli, combines exquisite marble,
professional reception services and 24/7 security to provide a high-end reception experience.
The multi-functional event area on the entire floor is suitable for business meetings and social
activities. The exquisite coffee culture space selects high-quality beans and professional
craftsmanship to let you enjoy the charm of coffee in your leisure time. In addition, the modern
business meeting rooms have a flexible layout and support from intelligent equipment, creating
an elegant business atmosphere suitable for various meeting needs. The luxury dining space
provides a bright environment that can accommodate up to 350 people, suitable for hosting
various parties and events</p>


            <p>777 Tower not only provides an ideal office environment, but also a variety of rental options to
meet the needs of different companies. There are currently 11 units of office space for rent on
the entire floor. For businesses requiring more than 10,000 square feet, there are 13 units
available; 14 units are available for rent for spaces between 5,000 and 10,000 square feet; 11
units are available for office units between 3,000 and 5,000 square feet; and 14 units are
available for flexible options between 1,000 and 3,000 square feet. Whether you are a large
enterprise or a start-up company, 777 Tower can provide you with the perfect office solution.
Choosing 777 Tower is not only choosing an office space, but also a community full of vitality
and opportunities. It brings together the convenience of modern life and the diversity of
business, allowing you to enjoy a high-quality living and working experience in the busy city.
Whether you are a company looking for an ideal office environment, or a professional eager to
socialize and collaborate in a comfortable space, 777 Tower can meet all your needs. Let the
brand new management team of 777 Tower work with you to create infinite possibilities for the
future! Feel free to contact us to arrange a visit and start your new chapter.</p>


            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p> */}
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          <div className='right row'>
            <img src='./a2.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
