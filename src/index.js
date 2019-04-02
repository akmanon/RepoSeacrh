import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import "./styles.css";
// https://api.github.com/search/repositories?q=awe

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      result: [],
      fetching: false
    };
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = () => {
    this.setState({});
    fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        this.state.value
      )}`
    )
      .then(body => body.json())
      .then(res => {
        this.setState({
          result: res.items
        });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="app-bar">Github Repository Search</div>
        <div className="app-input-btn">
          <input
            className="input-search"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Repo name"
          />
          <button className="search-btn" onClick={this.handleSubmit}>
            🔍
          </button>
        </div>
        <div className="result">
          <List result={this.state.result} />
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
