import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import MortgageCalculator from './MortgageCalculator';

render(<div><MortgageCalculator rate={4} /></div>, document.getElementById('root'));
