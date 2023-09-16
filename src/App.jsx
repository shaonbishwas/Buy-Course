import { useState } from "react";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Coursecart from "./Components/Coursescart/Coursecart";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [creditHours, setcreditHours] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [courseName, setCourseName] = useState([]);

  const toastForCredit = () => {
    toast.success("You don't have enough credit");
  };
  const toastForDupliName = () => {
    toast.success("You already added this course");
  };
  const cartAreaHandle = (course) => {
    if (creditHours + course.credit_hours > 20) {
      toastForCredit();
      return;
    }
    const isPresent = courseName.find((cName) => cName == course.course_name);
    if (isPresent) {
      toastForDupliName();
      return;
    }
    setcreditHours(creditHours + course.credit_hours);
    setTotalPrice(totalPrice + course.price);
    setCourseName([...courseName, course.course_name]);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
