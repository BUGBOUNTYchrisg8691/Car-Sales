import React from "react";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//function mapStateToProps(state) {
//return {
//feature: state.feature,
//};
//}

//export default connect(mapStateToProps, { removeFeature })(AdditionalFeature);
export default AdditionalFeature;
