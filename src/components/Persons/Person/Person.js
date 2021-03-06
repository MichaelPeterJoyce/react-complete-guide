import React from "react";
import PropTypes from "prop-types"
import classes from "./Person.css";

const person = props => {
  return <div className={classes.Person}>
      <p onClick={props.click}>
        Name: {props.name} and I am {props.age} year old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>;
};
person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default person;
