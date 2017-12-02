import React from "react";
import { string } from 'prop-types';

JumbotronModal.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  body: string.isRequired
};

export function JumbotronModal ({ id, title, body }) {
  return (
    <div
      className="modal fade"
      id={ 'newsModal-' + id }
      tabIndex="-1"
      role="dialog"
      aria-labelledby={ 'newsModal-' + id + 'Label' }
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={ 'newsModal-' + id + 'Label' }>
              { title }
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
          <div className="modal-body">{ body }</div>
        </div>
      </div>
    </div>
  );
}