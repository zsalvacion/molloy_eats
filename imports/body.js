import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'Restaurant 1' },
    { text: 'Restaurant 2' },
    { text: 'Restaurant 3' },
  ],
});