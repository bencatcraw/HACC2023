import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Facilities } from '../../api/facilities/Facilities';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addFacility = (facility) => {
  console.log(`  Adding: ${facility.name} (${facility.owner})`);
  Facilities.collection.insert(facility);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

if (Facilities.collection.find().count() === 0) {
  if (Meteor.settings.defaultFacilities) {
    console.log('Creating default Facilities.');
    Meteor.settings.defaultFacilities.forEach(facility => addFacility(facility));
  }
}
