// Router.configure({
//     // the default layout
//     layoutTemplate: 'mainlayout'
// });


Router.route('/', {
    action: function () {
        if (!Meteor.userId()) {
            this.render('login');
            // this.layout('mainlayout');

        }
        else {
            Router.go('/chats')
        }
    }
});

Router.route('/chats', {
    action: function () {
        if (!Meteor.userId()) {
            this.render('login');
            // this.layout('mainlayout');
        }
        else {
            this.render('chats');
            this.layout('mainlayout');
        }
    }
});