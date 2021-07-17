import React from "react";
import ReactDom from "react-dom";

class SearchComponent extends React.Component {
  state = {
    city: "",
  };
  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Havanese
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Goldendoodle
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Wheaten Terrier
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Cockatoo
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Horned Lizard
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                American
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Labrador
              </a>
            </li>
          </ul>
          {/* <input
            type="text"
            class="form-control"
            id="shubham"
            aria-label="Text input with dropdown button"
            placeholder="Enter City..."
            value={this.state.city}
            onChange={(e) => {
              this.props.taskHandlerFunction(this.state.task);
            }}
          /> */}
        </div>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Animal
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Dog
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Bird
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Reptile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Rabbit
              </a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn btn-primary mt-4"
          // onClick={() => {
          //   this.props.sendData(
          //     document.querySelector("#shubham").value
          //     // document.querySelector(".animal").value,
          //     // document.querySelector(".breed").value
          //   );
          // }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default SearchComponent;
