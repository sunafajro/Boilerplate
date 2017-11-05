/* @flow */
import React from "react";
import Modal from "./modal";

type Props = {
  jumbotron: {
    id: string,
    title: string,
    anounce: string,
    body: string,
    files: string,
    date: string
  }
};

class Jumbotron extends React.Component<Props, {}> {
  render() {
    const props = this.props;
    return (
      <div className="jumbotron">
        <h1 className="display-4">{props.jumbotron.title}</h1>
        <p className="lead">{props.jumbotron.anounce}</p>
        <p>
          <button
            type="button"
            className="btn btn-lg btn-success"
            data-toggle="modal"
            data-target={"#newsModal" + props.jumbotron.id}
          >
            Еще...
          </button>
        </p>
        <Modal
          id={props.jumbotron.id}
          title={props.jumbotron.title}
          body={props.jumbotron.body}
        />
      </div>
    );
  }
}

export default Jumbotron;
