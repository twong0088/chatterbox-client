var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: 'lobby',

  initialize: function() {

    $('#rooms').prepend('<form id="addRoom"><input type="text" id="roomname" /><input type="button" id="addRoomButton" value="Add Room"/></form>');
    RoomsView.$select.on('change', RoomsView.selectRoom);
    $('#addRoomButton').on('click', RoomsView.addNewRoom);
    //add rooms from all messages and append to list

  },

  renderRoom: function() {

  },

  selectRoom: function() {
    RoomsView.currentRoom = $('select option:selected').text();
    MessagesView.$chats.empty();
    App.fetch();
  },

  addNewRoom: function() {
    var newRoom = $('#rooms').find('input[type=text]').val();
    RoomsView.addRoom(newRoom);
  },
  addRoom: function(arg) {
    var name = arg;
    RoomsView.$select.append(`<option value ="room">${name}</option>`);

  }

};
