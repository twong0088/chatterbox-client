var Messages = {
  format: function (arr) {

    for (var i = 0; i < arr.length; i++) {

      arr[i].roomname = arr[i].roomname || 'lobby';


      arr[i].text = arr[i].text.replace(/<[^>]+>/g, '');

      if (Rooms[arr[i].roomname] === undefined) {
        Rooms[arr[i].roomname] = 1;
        RoomsView.addRoom(arr[i].roomname);
      }
      if (arr[i].roomname === RoomsView.currentRoom) {

        MessagesView.renderMessage(arr[i]);
      }

      // if (!arr[i].username) {
      //   arr[i].username = 'anonymous';
      // }

    }
  }
};