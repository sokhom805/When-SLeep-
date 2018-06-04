
import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (



	<div className="wrap">
		  <div className="form-row align-items-center">


		  <div className="col-auto">
		<form className="form-inline" onSubmit={props.getTrail}>


			<label htmlFor="email">City</label>
			<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0"  id="inlineFormInput" name="city2" placeholder="City..." />

			<div className="input-group mb-2 mr-sm-2 mb-sm-0">
				<div className="input-group-addon"></div>
			</div>

			<label htmlFor="email">State</label>

			<input type="text" step="any" className="form-control" name="country" placeholder="State.." /> <br></br>
			<br></br><br></br>
			<button className="btn btn-success">Search</button>

		</form>

	</div>

	</div>
	</div>
);




export default Form; 