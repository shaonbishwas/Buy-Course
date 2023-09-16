import PropTypes from "prop-types";
import { FiBookOpen, FiDollarSign } from "react-icons/fi";
const Course = ({ course, cartAreaHandle }) => {
  const { course_name, about_course, price, credit_hours } = course;
  console.log(course.img);
  return (
    <div className="bg-white p-4 rounded-lg">
      <img src={course.image} alt="" />
      <h2 className="text-left text-[16px] font-bold py-2">{course_name}</h2>
      <p className="text-left text-sm pb-2 text-gray-500">{about_course}</p>
      <div className="flex pb-4 w-full">
        <p className="flex items-center justify-evenly w-1/2">
          <FiDollarSign></FiDollarSign>
          <span className="text-gray-500">Price : {price}</span>
        </p>
        <p className="flex items-center w-1/2 justify-evenly">
          <FiBookOpen></FiBookOpen>
          <span className="text-gray-500">Credit : {credit_hours}hr</span>
        </p>
      </div>
      <button
        className="text-white w-full bg-[#2F80ED]"
        onClick={() => cartAreaHandle(course)}
      >
        Select
      </button>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
  cartAreaHandle: PropTypes.func,
};
export default Course;
