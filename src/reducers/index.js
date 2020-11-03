import { ADD_FEATURE, REMOVE_FEATURE, CHANGE_CAR } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  1: {
    id: 1,
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  2: {
    id: 2,
    price: 19912,
    name: "2018 Chevy Camaro",
    image:
      "https://static.cargurus.com/images/forsale/2020/10/16/01/28/2017_chevrolet_camaro-pic-6200513649062256860-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalPrice: (state.additionalPrice += action.payload.price),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload.id
          ),
        },
        additionalPrice: (state.additionalPrice -= action.payload.price),
      };
    case CHANGE_CAR:
      //console.log(action.payload.car);
      return {
        ...state,
        car: state[action.payload],
      };
    default:
      return state;
  }
};
