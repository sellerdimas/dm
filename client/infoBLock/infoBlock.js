Template.infoBlock.events({
    'click .infoBlockButt': function (e) {
        var modal = {
            name: $('#name2').val(),
            number:$('#number2').val()
        }
       
        if(modal.name && modal.number){
            Meteor.call('Calls',modal, function (err, res) {
                if(err){
                    console.log('error methods moadal2');
                }else{
                     $('#modal3').openModal();
                }

            });       
        }else{
            alert('Вы не заполнели все поля');
        }
    }
});