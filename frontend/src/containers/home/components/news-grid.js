/* @flow */
import React from 'react';

type Props = {
  news: Array<{
    id: number,
    title: string,
    anounce: string,
    body: string,
    files: string,
    date: string
  }>
};

class NewsRow extends React.Component<Props, {}> {
  render () {
    const props = this.props;
    return (
      <div className="row">
        { props.news.map(item => {
          return (
            <div key={ item.id } className="col-sm-4">
              <h2>{ item.title }</h2>
              <p>{ item.anounce }</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default NewsRow;
