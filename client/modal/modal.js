Template.modal1.events({
    'click #cancelButton': function (e) {
        var destination = $('.' + 'servicesMain').offset().top;
        var minus = destination - 95;
        $("body,html").animate({scrollTop: minus }, 800);
    }
});
Template.modal1.helpers({
    modalNewCollections:function () {
            return NewCollections.find({_id: Session.get('tovarId')});
        }
    
  });
Template.modal1.onRendered(function () {
    $('select').material_select();
})

Template.modal1.events({
    'click .modalPhoto img': function (e, tmpl) {
       var imgSrc = $(e.target).attr('src');
            console.log(e);
            console.log(tmpl);
            $('#mainImg').attr('src', imgSrc);
            console.log(Template.currentData());
    }
});

Template.modal1.events({
    'click .close': function (e) {
        $('#modal1').closeModal();

    }
});
Template.modal2.events({
    'click .close': function (e) {
        $('#modal2').closeModal();

    }
});
Template.modal3.events({
    'click .close': function (e) {
        $('#modal3').closeModal();
    }
});
Template.modal2.events({
    'click .modalSendButt': function (e) {
        var modal = {
            name: $('#name1').val(),
            number:$('#number1').val(),
            email: $('#email1').val()
        }
       
        if(modal.name && modal.number && modal.email){
            Meteor.call('Calls',modal, function (err, res) {
                if(err){
                    console.log('error methods moadal2');
                }else{
                     $('#modal2').closeModal();
                     $('#modal3').openModal();
                }

            });       
        }else{
            alert('Вы не заполнели все поля');
        }
    }
});


Template.modal1.events({
    'click .modalButt': function (e, tmpl) {
            var modalVal = {
                header: $('.ModalTovarHeader').text(),
                firma: $('.modalFirma').text(),
                price: $('.mPirce').text(),
                size: $('.selectSize').val(),
                color: $('.selectColor').val(),
                name: $('#name').val(),
                number: $('#namber').val()
            }
            
            if(modalVal.name && modalVal.number){
            Meteor.call('Orders',modalVal, function (err, res) {
                if(err){
                    console.log('error methods');
                }else{
                     $('#modal1').closeModal();
                     $('#modal3').openModal();
                }

            });       
        }else{
            alert('Вы не ввели имя или телефон');
        }
    }
});
