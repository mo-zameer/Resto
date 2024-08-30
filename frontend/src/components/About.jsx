import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import Menu from './Menu.jsx'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT RESTO</h1>
              <p>Where Flavor Meets Comfort</p>
            </div>
            <p className="mid">
            At Resto, we believe that dining is more than just sustenance; it's an experience. Our culinary team is passionate about creating dishes that tantalize your taste buds and leave you craving more. We blend traditional recipes with modern techniques to deliver unforgettable flavors in every bite.<br/><br/>
            Our restaurant offers a warm and inviting ambiance where you can relax and savor our delectable cuisine. Whether you're enjoying a romantic dinner, a gathering with friends, or a family celebration, Resto is the perfect place to create lasting memories.<br/><br/>
            We're committed to using the freshest, highest-quality ingredients to ensure that every dish is a masterpiece. Our menu features a diverse selection of options to cater to all tastes and preferences.<br/><br/>
            Join us at Resto and discover the true essence of dining.
            </p>
            <a href="#menu">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </a>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
    </section>
  );
};

export default About;