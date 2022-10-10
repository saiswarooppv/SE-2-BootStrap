import React from "react";
import API from "./API";

class Addition extends React.Component {
  state = {
    firstParam: "",
    secondParam: "",
    answer: "",
  };
  render() {
    const onSubmit = () => {
      API.postAddNumbers(this.state.firstParam, this.state.secondParam)
        .then((resp) => {
          this.setState({ answer: resp.data?.answer ?? "" });
        })
        .catch((error) => console.log("post error", error));
    };
    return (
      <div className="container">
        <h3 class="row justify-content-center">Addition of Two Numbers.</h3>
        <div className="mx-auto">
          <label className="form-label">First Number</label>
          <div class="col-lg-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => this.setState({ firstParam: e.target.value })}
            />
            <label className="form-label">Second Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => this.setState({ secondParam: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-3">

        </div>
        <div className="mb-3">
          <label className="form-label">Answer</label>
          <div class="col-lg-3">
            <input
              type="text"
              readOnly
              className="form-control"
              value={this.state.answer}
            />
          </div>
        </div>
        <div class="mb-4">
          <button class="btn btn-secondary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Addition;
