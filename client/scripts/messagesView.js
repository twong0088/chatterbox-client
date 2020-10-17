var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(function(item) {
      var message = item;
      return message;
    });
  },

  renderMessage: function(message) {
    message.username = message.username || 'anonymous';
    // if (!arr[i].roomname) {
    //   arr[i].roomname = 'main';
    // }
    message.roomname = message.roomname || 'main';

    if (message.text) {
      var htmlText = MessageView.render(message);
      MessagesView.$chats.append(htmlText);
    }


  },



};