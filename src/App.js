import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changeCar } from "./actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="is-family-monospace has-text-weigth-bold is-capitalized">
        Please choose a car
      </h2>
      {Object.keys(state).map((key) => {
        const regex = new RegExp(/^[0-9]+$/);
        if (regex.test(key)) {
          return (
            <Link
              key={key}
              className="car-link button"
              onClick={() => dispatch(changeCar(state[key].id))}
              to={`/${state[key].id}`}
            >
              {state[key].name}
            </Link>
          );
        }
      })}
      <Switch>
        <Route path="/:carId">
          <div className="boxes">
            <div className="box">
              <Header />
              <AddedFeatures />
            </div>
            <div className="box">
              <AdditionalFeatures />
              <Total />
            </div>
          </div>
        </Route>
        <Route path="/">
          <div></div>
        </Route>
      </Switch>
    </>
  );
};

export default App;
