import React from "react";

class Table extends React.Component {
  state = {
    allDetails: [],
    city: "",
  };
  // taskHandler = (value) => {
  //   let city = this.state.city;
  //   this.setState({ city: city });
  // };

  onchange = (e) => {
    this.setState({ city: e.target.value });
  };
  componentDidMount() {
    fetch("/details")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        console.log("1 ", json);
        this.setState({ allDetails: json });
      });
  }
  render() {
    let newArray = [];
    for (let i = 0; i < this.state.allDetails.length; i++) {
      if (this.state.allDetails[i].city == this.state.city) {
        newArray.push({
          id: this.state.allDetails[i].id,
          name: this.state.allDetails[i].name,
          animal: this.state.allDetails[i].animal,
          city: this.state.allDetails[i].city,
          breed: this.state.allDetails[i].breed,
        });
      }
    }
    return (
      <div>
        <input
          type="text"
          class="form-control"
          id="shubham"
          aria-label="Text input with dropdown button"
          placeholder="Enter City..."
          value={this.state.city}
          onChange={this.onchange}
        />
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">ANIMAL</th>
              <th scope="col">CITY</th>
              <th scope="col">BREED</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.animal}</td>
                  <td>{e.city}</td>
                  <td>{e.breed}</td>
                </tr>
              );
            })}
            {/* <tr>
            <th scope="row">1</th>
            <td>hehee</td>
            <td>hehe</td>
            <td>hehe</td>
            <td>hehe</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>hehee</td>
            <td>hehe</td>
            <td>hehe</td>
            <td>hehe</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>hehee</td>
            <td>hehe</td>
            <td>hehe</td>
            <td>hehe</td>
          </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
