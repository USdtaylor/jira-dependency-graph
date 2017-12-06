import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';
import image from '../assets/alpaca-buddy.jpg';

const Hello = () => (
   <div>
      <img src={image} />
   </div>
)

render(<Hello />, document.getElementById('app'));
