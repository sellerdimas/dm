Router.configure({
  loadingTemplate: 'loading'
});
Router.route('main',{
  path:'/',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections');
  }/*,
  onBeforeAction: function(){
  	this.next()
  },
  action: function () {
  	console.log(this.params.page + 'asddddddddddddddddddddd');
  	
  }*/
});

Router.route('main2',{
  path:'/:page',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('newcollections');
  },
  data: function () {
  	/*var destination = $('.tovar').offset().top;
		var minus = destination - 60;
		$("body,html").animate({scrollTop: minus }, 800);*/
		/*var destination = $('.tovar').offset().top;
		console.log(destination);*/
  	/*this.render('main');*/
  	var page = this.params.page;
  	console.log(page);
  	if(page === 'present' || page === 'delivery' || page === 'reviews'){
  		var objDowb = {
  			present: 1260,
  			delivery: 2409,
  			reviews: 4850
  		}
  		$("body,html").animate({scrollTop: objDowb[page] }, 800);
  		
  	}
  	
  	
  }/*,
  onBeforeAction: function(){
  	this.next()
  },
  action: function () {
  	console.log(this.params.page + 'asddddddddddddddddddddd');
  	
  }*/
});
/*Router.onBeforeAction('loading', function(){
	this.next();
});*/