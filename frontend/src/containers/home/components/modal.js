/* @flow */
import React from "react";

type Props = {
  id: string,
  title: string,
  body: string
};

class Modal extends React.Component<Props, {}> {
  render() {
    const props = this.props;
    return (
      <div
        className="modal fade"
        id={`newsModal${props.id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`newsModal${props.id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`newsModal${props.id}Label`}>
                { props.title }
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.body}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
