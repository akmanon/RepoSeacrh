import React from "react";
import { Loading } from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AppContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: "",
      result: [],
      fetching: false,
      error: false,
      notFound: false,
      initialState: true
    };
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = () => {
    if (this.state.value) {
      this.setState({
        fetching: true,
        error: false,
        notFound: false,
        initialState: false
      });
      fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          this.state.value
        )}`
      )
        .then(body => body.json())
        .then(res => {
          if (res.message !== "Validation Failed") {
            if (res.total_count === 0) {
              this.setState({
                result: [],
                fetching: false,
                notFound: true
              });
            } else {
              this.setState({
                result: res.items,
                fetching: false
              });
            }
          } else {
            this.setState({
              result: [],
              fetching: false,
              notFound: true
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
    }
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
            onKeyDown={e => {
              if (e.keyCode === 13) this.handleSubmit();
            }}
            placeholder="Repo name..."
          />
          <button
            className="search-btn"
            onClick={this.handleSubmit}
            disabled={this.state.fetching}
          >
            <FontAwesomeIcon icon="search" color="#546e7a" />
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
        <div className="footer">
          Made with ❤ by{" "}
          <a href="https://github.com/akmanon" target="_blank">
            Ashish.
          </a>
        </div>
      </React.Fragment>
    );
  }
}
