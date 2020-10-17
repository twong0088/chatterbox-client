var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(function(item) {
      var message = item;
      return message;
    });
    //$('#username').on('click', Friends.add);
  },

  renderMessage: function(message) {
    message.username = message.username || 'anonymous';
    message.username = message.username.replace(/<[^>]+>/g, '');

    // if (!arr[i].roomname) {
    //   arr[i].roomname = 'main';
    // }

    if (message.text) {
      var htmlText = MessageView.render(message);
      MessagesView.$chats.append(htmlText);
    }


  },



};