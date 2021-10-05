import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
ReactDOM.render(
  <h1>jai singh rathore</h1>
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