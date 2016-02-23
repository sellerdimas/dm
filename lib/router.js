Router.configure({
  loadingTemplate: 'loading'
});
Router.route('main',{
  path:'/',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections'); 
  }
});
Router.onBeforeAction('loading');