import PropTypes from "prop-types";
const Coursecart = ({creditHours, totalPrice, courseName}) => {
  return (
    <div>
      <div>
        <p>Credit Hour Remaining 7 hr</p>
      </div>
      <div>
        <h2>Course Name</h2>
        <div className="text-left">
            {
                courseName.map((name, idx) => <p key={idx}>{idx+1} {name}</p>)
            }
        </div>
      </div>
      <div>
        <p>Total Credit Hour : {creditHours}</p>
      </div>
      <div>
        <p>Total Price : {totalPrice} USD</p>
      </div>
    </div>
  );
};
Coursecart.propTypes = {
    creditHours : PropTypes.number,
    totalPrice : PropTypes.number,
    courseName : PropTypes.array
  };
export default Coursecart;
