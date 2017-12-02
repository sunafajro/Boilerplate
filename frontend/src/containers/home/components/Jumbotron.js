import React from "react";
import { object } from 'prop-types';
import { JumbotronModal } from "./JumbotronModal";

Jumbotron.propTypes = {
  jumbotron: object.isRequired
};

export function Jumbotron ({ jumbotron }) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{jumbotron.title}</h1>
      <p className="lead">{jumbotron.anounce}</p>
      <p>
        <button
          type="button"
          className="btn btn-lg btn-success"
          data-toggle="modal"
          data-target={"#newsModal" + jumbotron.id}
        >
          Еще...
        </button>
      </p>
      <JumbotronModal
        id={jumbotron.id}
        title={jumbotron.title}
        body={jumbotron.body}
      />
    </div>
  );
}
