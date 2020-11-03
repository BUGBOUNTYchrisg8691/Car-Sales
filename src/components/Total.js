import React from "react";
import { connect, useSelector } from "react-redux";

const Total = (props) => {
  const car = useSelector((state) => state.car);
  const addPrice = useSelector((state) => state.additionalPrice);
  return (
    <div className="content">
      {/*}<h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>*/}
      <h4>Total Amount: ${car.price + addPrice}</h4>
    </div>
  );
};

//function mapStateToProps(state) {
//return {
//car: state.car,
//additionalPrice: state.additionalPrice,
//};
//}

//export default connect(mapStateToProps)(Total);
export default Total;
