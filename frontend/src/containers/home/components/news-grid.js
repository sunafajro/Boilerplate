/* @flow */
import React from "react";
import Modal from "./modal";

type Props = {
  news: Array<{
    id: string,
    title: string,
    anounce: string,
    body: string,
    files: string,
    date: string
  }>
};

class NewsRow extends React.Component<Props, {}> {
  render() {
    const props = this.props;
    return (
      <div className="row">
        {props.news.map(item => {
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
              <Modal id={item.id} title={item.title} body={item.body} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsRow;
