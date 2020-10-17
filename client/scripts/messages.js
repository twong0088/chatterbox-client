var Messages = {
  format: function (arr) {

    for (var i = 0; i < arr.length; i++) {
      MessagesView.renderMessage(arr[i]);
      // if (!arr[i].username) {
      //   arr[i].username = 'anonymous';
      // }

    }
  }
};