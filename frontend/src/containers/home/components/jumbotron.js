/* @flow */
import React from 'react';

type Props = {
  jumbotron: { 
    id: number,
    title: string,
    anounce: string,
    body: string,
    files: string,
    date: string
  }
};

class Jumbotron extends React.Component<Props, {}> {
  render () {
    const props = this.props;
    return (
      <div className="jumbotron">
        <h1 className="display-4">{ props.jumbotron.title }</h1>
        <p className="lead">{ props.jumbotron.anounce }</p>
        <p><a className="btn btn-lg btn-success" href="#" role="button">View details</a></p>
      </div>
    );
  }
}

export default Jumbotron;
