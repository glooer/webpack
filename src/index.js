import _ from 'lodash';
// import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
