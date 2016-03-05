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
    $('.tablSize').attr('src', 's.png');
        var tovarId = $(this).attr('name');
        Session.set('tovarId', tovarId);
        $('#modal1').openModal();
     


    })

       
});



