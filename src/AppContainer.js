import React from "react";
import { Loading } from "./Loading";
// https://api.github.com/search/repositories?q=awe

export class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      result: [],
      fetching: false,
      error: false,
      notFound: false
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = () => {
    this.setState({
      fetching: true,
      error: false
    });
    fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        this.state.value
      )}`
    )
      .then(body => body.json())
      .then(res => {
        if (res.total_count === 0) {
          this.setState({
            result: res.items,
            fetching: false,
            notFound: true
          });
        } else {
          this.setState({
            result: res.items,
            fetching: false
          });
        }
      })
      .catch(e => {
        if (e) {
          this.setState({
            fetching: false,
            error: true
          });
        }
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
            placeholder="Repo name..."
          />
          <button
            className="search-btn"
            onClick={this.handleSubmit}
            disabled={this.state.fetching}
          >
            🔍
          </button>
        </div>
        <div className="result">
          <Loading
            fetching={this.state.fetching}
            error={this.state.error}
            notFound={this.state.notFound}
            result={this.state.result}
          />
        </div>
      </React.Fragment>
    );
  }
}
