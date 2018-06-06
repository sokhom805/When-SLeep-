
import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (



	<div className="wrap2">
		  <div className="form-row align-items-center">


		  <div className="col-auto">
		<form className="form-inline" onSubmit={props.getTrail}>

         <div className="form-group">
			<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"  id="inlineFormInput" name="city2" placeholder="City..." />

			<div className="form-group">
			
			

		

			<input type="text"   className="form-control" name="country" placeholder="State.." /> <br></br>
			<br></br><br></br>
			<button className="btn btn-success">Search</button>
      </div>


  </div>
		</form>

	</div>

	</div>
	</div>
);




export default Form; 