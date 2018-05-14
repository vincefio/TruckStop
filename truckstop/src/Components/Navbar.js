import React, { Component } from "react";

class Navbar extends Component {
  render(){
    return(
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" id="navigation">
      <div class="container">
        <a href="/" class="navbar-brand">Truck Stop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link" href="/WhatWeDo">What We Do</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Drivers">Drivers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Employers">Employers</a>
            </li>

          </ul>

          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/login" >Log in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">Sign up</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
    );
  }
}

export default Navbar;
