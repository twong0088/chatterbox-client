var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username" id="username" onClick="Friends.add(event)"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="roomname"><%- roomname %></div>
        <div class="time"><%- createdAt %></div>
      </div>
    `)

};