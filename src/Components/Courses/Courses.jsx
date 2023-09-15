import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({creditHourHandle}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("coursedata.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 w-4/5">
        {
            courses.map(course => <Course key={course.id} course={course} creditHourHandle={creditHourHandle}></Course>)
        }
    </div>
  );
};
Courses.propTypes = {
    creditHourHandle: PropTypes.func
  };
export default Courses;
