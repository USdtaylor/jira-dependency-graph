import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

import keenImage from '../assets/alpaca-buddy.jpg';

const Hello = () => (
   <div>
      <img src={keenImage} />
   </div>
)

render(<Hello />, document.getElementById('app'));
