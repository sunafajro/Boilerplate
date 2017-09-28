import React from 'react';

export const NewsRow = ({ news }) => (
  <div className="row">
    { news.map(item => {
       return (
        <div key={ item.id } className="col-sm-3">
          <h2>{ item.title }</h2>
          <p>{ item.body}</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
       );
    })}
  </div>
);
