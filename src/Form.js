import './App.css';

import React from 'react';
import PropTypes from 'prop-types';

const Form = props => (

        <form className="search_form" onSubmit={props.getTrail}>
            <div className="row">
                <div className="col-md-4 col-xs-4">
                    <input type="text" className="form-control" id="inlineFormInput"
                             name="city2" placeholder="City..."/>
                </div>
                <div className="col-md-4 col-xs-4">
                    <input type="text" className="form-control" name="country" placeholder="State.."/>
                </div>
                <div className="col-md-4 col-xs-4">
                    <button className="btn btn-success">Search</button>
                </div>
            </div>
        </form>
);


export default Form;