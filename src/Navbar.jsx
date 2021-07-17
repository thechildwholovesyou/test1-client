import React from "react";
import ReactDom from "react-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Cute Pets
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
