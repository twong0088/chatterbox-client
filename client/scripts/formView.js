var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('handlesubmit');
    var newMessage = {
      username: App.username,
      text: FormView.$form.find('input[type=text]').val(),
      createdAt: new Date(),
      roomname: $('select option:selected').text()
    };
    Parse.create(newMessage, function() {

      newMessage.username = newMessage.username || 'anonymous';
      newMessage.username = newMessage.username.replace(/<[^>]+>/g, '');

      // if (!arr[i].roomname) {
      //   arr[i].roomname = 'main';
      // }
      newMessage.roomname = newMessage.roomname || 'lobby';
      newMessage.roomname = newMessage.roomname.replace(/<[^>]+>/g, '');


      if (newMessage.text) {
        var message = MessageView.render(newMessage);
        MessagesView.$chats.prepend(message);
      }
    });


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};