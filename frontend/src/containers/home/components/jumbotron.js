import React from 'react';

export const Jumbotron = ({ jumbotron }) => (
  <div className="jumbotron">
    <h1 className="display-3">{ jumbotron.title }</h1>
      <p className="lead">{ jumbotron.body}</p>
      <p><a className="btn btn-lg btn-success" href="#" role="button">View details</a></p>
  </div>
);