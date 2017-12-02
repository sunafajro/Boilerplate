import React from "react";
import { array } from 'prop-types';
import JumbotronModal from "./JumbotronModal";

NewsRow.propTypes = {
  news: array.isRequired
};

export function NewsRow ({ news }) {
  return (
    <div className="row">
      { news.map(item => {
        return (
          <div key={item.id} className="col-sm-4">
            <h2>{item.title}</h2>
            <p>{item.anounce}</p>
            <p>
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target={"#newsModal" + item.id}
              >
                Еще...
              </button>
            </p>
            <JumbotronModal id={item.id} title={item.title} body={item.body} />
          </div>
        );
      }) }
    </div>
  );
}
