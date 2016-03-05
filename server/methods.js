Meteor.methods({
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
            sizeByst: value.sizeByst,
            sizeTrysu: value.sizeTrysu,
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
