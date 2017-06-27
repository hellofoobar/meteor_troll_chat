// Meteor.publish("messages", function () {
//     return Meteor.users.find({_id: this.userId});
// });
// import { Meteor } from 'meteor/meteor';

// Meteor.startup(function() {
//     // code to run on server at startup
//
//
// });

Meteor.publish("messages", function() {
    return Messages.find();
});

Meteor.publish("userStatus", function() {
    return Meteor.users.find({ "status.online": true });
});