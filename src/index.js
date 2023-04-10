import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import StarRating from './components/StarRating';

import reviewForm from './components/reviewForm';
import reportWebVitals from './reportWebVitals';

const star = () => {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
};

ReactDOM.render(

  React.createElement(reviewForm, {}, null),

  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
