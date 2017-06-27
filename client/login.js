Template.login.events({
    'click #signup': function(event){
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        Accounts.createUser({
            username: username,
            password: password
        }, function(error){
            if(error){
                alert(error.reason);
            } else {
                Router.go('chats');
            }
        });

        // if(Meteor.users.findOne({username: username}).username === username) {
        //     alert('User exists, please login.');
        // } else {
        //     Router.go('/chats');
        // }
    },
    'click #signin': function(event) {
        event.preventDefault();
        event.preventDefault();
        var username = $('#username').val();;
        var password = $('#password').val();

        Meteor.loginWithPassword(username, password, function (error) {
            if (error) {
                alert(error.reason);
            }
            else {
                Router.go('chats');
            }
        });
    }
});