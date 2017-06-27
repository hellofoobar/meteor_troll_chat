// Template.nav.onCreated(function() {
//     Meteor.subscribe("userStatus");
// });


Template.nav.rendered = function() {
    var url = window.location.href;
    $("a").each(function () {
        if (url == (this.href)) {
            $(this).addClass("active");
        }
    });
}

Template.nav.helpers({
    username: function() {
        return Meteor.users.findOne({_id: Meteor.userId()}).username;
    },
    active_users: function() {
        return Meteor.users.find( {"status.online": true} ).count()
    }
});

Template.nav.events({
    'click #logout': function(e) {
       e.preventDefault();

        Meteor.logout(function(e) {
            Router.go('/');
        });

        $('#myModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();


    }
});