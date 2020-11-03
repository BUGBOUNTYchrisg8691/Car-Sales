export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const CHANGE_CAR = "CHANGE_CAR";

export const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const removeFeature = (feature) => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  };
};

export const changeCar = (id) => {
  return {
    type: CHANGE_CAR,
    payload: id,
  };
};
