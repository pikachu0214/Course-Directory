import React from 'react';
import { Link } from "react-router-dom";


const About = (props) => (
  <div className="main-content home">
    <h2>{props.title}</h2>
    <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
    <hr />
    <Link to="about/us" >Information</Link>
  </div>
);

export default About;