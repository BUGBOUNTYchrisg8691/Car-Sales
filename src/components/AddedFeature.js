import React from "react";

const AddedFeature = (props) => {
  const handleRemoveFeature = () => {
    props.addFeature(props.feature.id);
  };
  return (
    <li>
      {}
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.handleRemoveFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
