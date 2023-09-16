import PropTypes from "prop-types";

const Course = ({ course, cartAreaHandle }) => {
  const { course_name, about_course, price, credit_hours } = course;
  return (
    <div>
      <h2>{course_name}</h2>
      <p>{about_course}</p>
      <div className="flex justify-center">
        <p>
          <span></span>
          <span>Price :</span>
          <span>{price}</span>
        </p>
        <p>
          <span></span>
          <span>Credit :</span>
          <span>{credit_hours}</span>hr
        </p>
      </div>
      <button onClick={()=>cartAreaHandle(course)}>Select</button>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
  cartAreaHandle: PropTypes.func
};
export default Course;
