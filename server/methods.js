Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster%40sandboxfe4e63216a764ccab0a852a35d014554.mailgun.org:409e153296eacf781b73df952d87e3ba@smtp.mailgun.org:587';

  });






Meteor.methods({
  sendEmail: function (email, name, text) {
    check([email, name, text], [String]);

    this.unblock();

    Email.send({
      to: 'script.spirits@gmail.com',
      from: email,
      subject: 'Hi my name is ' + name + ' my email: ' + email,
      text: text
    });
    return 1;
  },
  Orders: function (value) {
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    Orders.insert({
            header: value.header,
            firma: value.firma,
            price: value.price,
            size: value.size,
            color: value.color,
            name: value.name,
            number: value.number,
            date: date.toLocaleString("en-US", options),
        });
    
  },
  Calls: function (modal) {
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    Calls.insert({
            name: modal.name,
            number: modal.number,
            email: modal.email,
            date: date.toLocaleString("en-US", options)
        });

    
  }
});


Meteor.publish('newcollections',function () {
  return NewCollections.find();
  
});




/*Meteor.startup(function() {
  if(!Preload.findOne()){
    for(var i = 1; i < 10; i++){
        Preload.insert({
          load: 1
        });
    }
  }                                                                                                                                                                                                                                                                                   

});*/