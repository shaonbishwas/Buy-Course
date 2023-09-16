import { useState } from "react";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Coursecart from "./Components/Coursescart/Coursecart";

function App() {
  const [creditHours, setcreditHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [courseName, setCourseName] = useState([]);

  const cartAreaHandle = (course) => {
    if (creditHours + course.credit_hours > 20) {
      return;
    }
    setcreditHours(creditHours + course.credit_hours);
    setTotalPrice(totalPrice + course.price);
    setCourseName([...courseName, course.course_name]);
  };

  return (
    <>
      <h1 className="mb-10">Course Registration</h1>
      <div className="flex">
        <Courses cartAreaHandle={cartAreaHandle}></Courses>
        <Coursecart
          creditHours={creditHours}
          totalPrice={totalPrice}
          courseName={courseName}
        ></Coursecart>
      </div>
    </>
  );
}

export default App;
