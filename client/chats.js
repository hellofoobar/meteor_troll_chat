// Template.chats.onCreated(function() {
//     Meteor.subscribe('messages');
// });

Template.chats.helpers({
    messages: function() {
        return Messages.find({}, {sort: {time:-1}});
    }
});

Template.chats.events({
    'submit #new_message': function() {
        var message = $('#message').val();

        Messages.insert({
            content: message,
            sender: Meteor.users.findOne({_id: Meteor.userId()}).username,
            time: new Date()
        });

        $('#message').val("");
    }
});

