import PropTypes from "prop-types";
const Coursecart = ({ creditHours, totalPrice, courseName }) => {
  return (
    <div className="bg-white p-5 rounded-lg w-[312px] h-[390px] text-left">
      <div className="mb-4">
        <p className="text-[#2F80ED] font-semibold">
          Credit Hour Remaining {20 - creditHours} hr
        </p>
      </div>
      <hr />
      <div className="mt-2">
        <h2 className="mb-3 text-lg font-bold">Course Name</h2>
        <div className="text-left text-gray-500">
          {courseName.map((name, idx) => (
            <p key={idx}>
              {idx + 1} {name}
            </p>
          ))}
        </div>
      </div>
      <hr className="mt-4" />
      <div className="my-2">
        <p>Total Credit Hour : {creditHours}</p>
      </div>
      <hr />
      <div className="mt-2">
        <p>Total Price : {totalPrice} USD</p>
      </div>
    </div>
  );
};
Coursecart.propTypes = {
  creditHours: PropTypes.number,
  totalPrice: PropTypes.number,
  courseName: PropTypes.array,
};
export default Coursecart;
