import React, { Component } from 'react';
import './App.css';
export default class Header extends React.Component {
    render(){
        return(<header className="masthead" id="page-top">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="brand-heading">Grayscale</h1>
                            <p className="intro-text">A free, responsive, one page Bootstrap theme.
                                <br />Created by Start Bootstrap.</p>
                            <a href="#about" className="btn btn-circle js-scroll-trigger">
                                <i className="fa fa-angle-double-down animated"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
}};