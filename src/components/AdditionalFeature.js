import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AdditionalFeature = props => {

  const addFeature = e => {
    e.preventDefault();
    props.addItem(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect( null, { addItem })(AdditionalFeature);
