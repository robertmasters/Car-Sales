import React from 'react';
import {deleteFeature} from '../actions/actions'
import {connect} from 'react-redux'

const AddedFeature = props => {
  const {feature, deleteFeature} = props

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> deleteFeature(feature)} >X</button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state){
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps,{deleteFeature})(AddedFeature);
