import React from "react";

import { connect } from "react-redux";

import { addFeature, removeFeature } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  const handleRemoveFeature = (feat) => {
    props.removeFeature(feat);
  };

  const handleAddFeature = (feat) => {
    props.addFeature(feat);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
          car={props.car}
          handleRemoveFeature={handleRemoveFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          handleAddFeature={handleAddFeature}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    features: state.features,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
