import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar";
import SearchComponent from "./SearchComponent";
import Table from "./Table";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="container">
        <div class="row p-4 mt-4">
          <div class="col">
            <SearchComponent />
          </div>
          <div class="col"></div>
          <div class="col"></div>
        </div>
        <Table />
      </div>
    </React.Fragment>
  );
}

export default App;
