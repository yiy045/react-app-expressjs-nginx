import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// getting all the images into one constant
const IMAGES = {
  cartImage: require('./images/cartimage.png').default,
  earthImage: require('./images/earth.png').default,
  earthRotate: require('./images/earthrotating.gif').default,
  oceanImage: require('./images/oceanimage.jpg').default,
  registerIcon: require('./images/registericon.png').default,
  searchBar: require('./images/searchbar.png').default,
  testGlasses: require('./images/testglasses.jpg').default,
  homeButton: require('./images/homebutton.png').default,
}
export default IMAGES;