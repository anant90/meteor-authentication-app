import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.html';            //Importing the html file
import Header from '../imports/ui/components/header';

const App = ()=>{
  return (
    <div>
      <Header />
    </div>
  );
};

Meteor.startup(()=>{
  ReactDOM.render(<App/>, document.querySelector('.render-target'));
});
