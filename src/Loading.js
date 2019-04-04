import React from "react";
import List from "./List";

export const Loading = props => {
  if (!props.serverError) {
    if (props.fetching) {
      return (
        <div className="lds-facebook">
          <div />
          <div />
          <div />
        </div>
      );
    } else {
      if (props.notFound) {
        return <h2 className="not-found-error">No result found</h2>;
      } else return <List result={props.result} />;
    }
  } else {
    return <h2 className="error">Unable to connect to the server</h2>;
  }
};
