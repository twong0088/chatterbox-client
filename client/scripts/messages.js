var Messages = {
  format: function (arr) {
    for (var i = 0; i < arr.length; i++) {

      // if (!arr[i].username) {
      //   arr[i].username = 'anonymous';
      // }
      arr[i].username = arr[i].username || 'anonymous';
      // if (!arr[i].roomname) {
      //   arr[i].roomname = 'main';
      // }
      arr[i].roomname = arr[i].roomname || 'main';

      if (arr[i].text) {
        var message = MessageView.render(arr[i]);
        MessagesView.$chats.append(message);
      }
    }
  }
};