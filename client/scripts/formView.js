var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var newMessage = {
      username: App.username,
      text: FormView.$form.find('input[type=text]').val(),
      createdAt: '2020-10-17T04:28:03.102Z'//create newdate
      //roomname:
    };
    Parse.create(newMessage, function() {

      newMessage.username = newMessage.username || 'anonymous';
      // if (!arr[i].roomname) {
      //   arr[i].roomname = 'main';
      // }
      newMessage.roomname = newMessage.roomname || 'main';

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