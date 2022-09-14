import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/eduvicoursesdetails">EduviCoursesDetails</Link>
        </li>
        <li>
          <Link to="/eduvicoursespricing">EduviCoursesPricing</Link>
        </li>
        <li>
          <Link to="/singlementordetails">Singlementordetails</Link>
        </li>
        <li>
          <Link to="/eduvishop">EduviShop</Link>
        </li>
        <li>
          <Link to="/eduvijoinasteacher">EduviJoinAsTeacher</Link>
        </li>
        <li>
          <Link to="/eduvicourses">EduviCourses</Link>
        </li>
        <li>
          <Link to="/allmentors">Allmentors</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;