import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  title: string;
  body: string;
}

export const About = (props: Props) => (
  <div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
      <li className="breadcrumb-item active">About</li>
    </ol>
    <h3>{ props.title }</h3>
    <p>{ props.body }</p>
  </div>
);