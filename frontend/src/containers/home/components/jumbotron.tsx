import * as React from 'react';

export interface Props {
  jumbotron: { id: number, title: string, body: string }
}

export const Jumbotron = (props: Props) => (
  <div className="jumbotron">
    <h1 className="display-3">{ props.jumbotron.title }</h1>
      <p className="lead">{ props.jumbotron.body}</p>
      <p><a className="btn btn-lg btn-success" href="#" role="button">View details</a></p>
  </div>
);