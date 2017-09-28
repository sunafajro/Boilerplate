import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => (
  <div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
      <li className="breadcrumb-item active">About</li>
    </ol>
    <h3>About page</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos necessitatibus sequi facere esse ipsum eligendi porro ut, dolores reiciendis quibusdam voluptas error! Quis, possimus facilis. Maiores doloribus a dicta.</p>
  </div>
);