import React from "react";
import { connect, useSelector } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";
import { addFeature } from "../actions";

const AdditionalFeatures = (props) => {
  const additionalFeatures = useSelector((state) => state.additionalFeatures);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {/*}{props.additionalFeatures.length ? (*/}
      {additionalFeatures.length ? (
        <ol type="1">
          {/*}{props.additionalFeatures.map((item) => (*/}
          {additionalFeatures.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
      {/*}removeFeature={props.addFeature}*/}
    </div>
  );
};

//function mapStateToProps(state) {
//return {
//additionalFeatures: state.additionalFeatures,
//};
//}

//export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
export default AdditionalFeatures;
