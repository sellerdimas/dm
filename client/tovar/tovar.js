Template.tovar.helpers({
    tovarNewCollections:function () {
            return NewCollections.find();
        }
    
  });

Template.tovar.onRendered(function () {
  $( '.tovar img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = 'H' + imgSrc;
            $( this ).attr('src', newImgSrc);
        
        },function() {
            var imgSrc = $(this).attr('src'); 
            imgSrc = imgSrc.slice(1);
            $( this ).attr('src', imgSrc);         
        }
    );
  $('.tovarBlock').click(function (e) {
        var tovarId = $(this).attr('name');
        Session.set('tovarId', tovarId);
            $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
        $('#modal1').openModal();
     


    })

       
});



