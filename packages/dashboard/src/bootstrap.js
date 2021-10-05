import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
ReactDOM.render(
  <h2>tdfgdfgfd</h2>
     ,
    el
  );
}

if(process.env.NODE_ENV === 'development') {

const devRoot = document.getElementById('dashroot');

if(devRoot){
  mount(devRoot);
};
}

export {mount};