Meteor.publish('newcollections',function () {
  return NewCollections.find();
});