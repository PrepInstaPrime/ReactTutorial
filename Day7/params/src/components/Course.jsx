import React, { useState, useEffect } from "react";
import { use } from "react";
import { useParams, useSearchParams } from "react-router-dom";
export default function Course() {
  let { course } = useParams();
  let [courseDetails, setCourseDetails] = useState([]);
  // query param
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(course);
  let courses = {
    frontend: [
      { title: "React", duration: "2 months", Price: 10 },
      { title: "Angular", duration: "1.5 months", Price: 80 },
      { title: "Vue", duration: "1 month", Price: 60 },
      { title: "Svelte", duration: "1 month", Price: 70 },
    ],
    backend: [
      { title: "Node", duration: "3 months", Price: 12 },
      { title: "Django", duration: "2.5 months", Price: 90 },
      { title: "Flask", duration: "2 months", Price: 80 },
      { title: "Express", duration: "2 months", Price: 70 },
    ],
  };
  let handleFilterChange = (e) => {
    let value = e.target.value;
    if (value) {
      setSearchParams({ price: value });
    } else {
      setSearchParams({});
    }
  };
  // filter courses based on price

  useEffect(() => {
    setCourseDetails(courses[course] || []);
  }, [course]);
  useEffect(() => {
    if (searchParams.get("price")) {
      let [min, max] = searchParams.get("price").split("-").map(Number);
      setCourseDetails((prevDetails) =>
        prevDetails.filter(
          (course) => course.Price >= min && course.Price <= max
        )
      );
    }
    console.log(courseDetails);
  }, [searchParams]);
  return (
    <div>
      <h1>Course Page</h1>
      {/* price filter */}
      <select name="" id="" onChange={handleFilterChange}>
        <option value="">Select Price Range</option>
        <option value="0-50">0 - 50</option>
        <option value="51-100">51 - 100</option>
        <option value="101-150">101 - 150</option>
      </select>
      {courseDetails ? (
        <ul>
          {courseDetails.map((val, index) => (
            <li key={index}>
              {val.title} - {val.duration}
            </li>
          ))}
        </ul>
      ) : (
        <p>No course found</p>
      )}
    </div>
  );
}
