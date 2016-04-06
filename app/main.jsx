console.log("dum da dee");
var React = require('react/addons');
//var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
               {name: "Ice Cream"},
               {name: "Waffles"},
               {name: "candy", purchased: true},
               {name:"snarks"} ];

React.render(<GroceryItemList items={initial} />, app);