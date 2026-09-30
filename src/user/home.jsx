import { Link } from "react-router-dom";
import { Homeskeleton } from "../skeleton";

import { useEffect, useState } from "react";


import "./Home.css"


function Home() {

const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    }, 1000);

    return()=>setTimeout(timer);
   }, []);

   if(loading){
    return <Homeskeleton />
   }


  return (
    <>
   
      <section className="home-hero">

        <div className="hero-content">
          <p className="hero-small-title">
            AUTHENTIC ETHIOPIAN FLAVORS
          </p>

          <h1>
            Taste the Soul of <span>Addis</span>,
            <br />
            Shared Together
          </h1>

          <p className="hero-description">
           Enjoy delicious Ethiopian food, fresh injera, 
           and traditional meals served in beautiful,
           addis eats restruant.
          </p>

          <Link to="/menu" className="hero-button">
            Explore Full Menu →
          </Link>

          <div className="hero-features">
            <div>
              <span>◉</span>
              <div>
                <strong>100% Delicious Meal</strong>
                <small>Authentic Ethiopian cuisine</small>
              </div>
            </div>
          </div>
        </div>


        <div className="hero-image-container">
          <img
            src="/images/heroIMG.jpg"
            alt="Addis Eats Restaurant"
          />

          <div className="hero-image-label">
            {/* <span>✓</span> */}
            <div>
              <strong>100% Delicious and Hot</strong>
              <small>Authentic Addis Eats Restruant</small>
            </div>
          </div>
        </div>

      </section>

   
      <section className="delivery-banner">

        <div>
          <p className="delivery-label">
            FRESH & DELIVERED WITH CARE
          </p>

          <h2>
            Craving hot & soft injera right
            <br />
            now?
          </h2>

          <p>
            Hot and sealed containers maintain perfect serving
            temperatures throughout Addis.
          </p>
        </div>

        <Link to="/menu" className="delivery-button">
          Order for Immediate Delivery
        </Link>

      </section>


      
      <section className="home-space"></section>


      
    </>
  );
}



export default Home;