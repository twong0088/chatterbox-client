var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll(function(item) {
      var message = item;
      return message;
    });
  },

  renderMessage: function(message) {
    var allMessages = [];
    Parse.readAll(function(item) {
      console.log(item);
    });


    var html = '';
    for (var i = 0; i < allMessages.length; i++) {
      html += messageView.template(allMessges[i]);
    }
    $('#chats').append(html);



  },



};