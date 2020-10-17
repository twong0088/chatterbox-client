var Friends = {
  list: [],

  add: function(event) {


    var friend = event.target.innerHTML;
    //console.log(friend);
    //var stripedHtml = friend.replace(/<[^>]+>/g, '');
    //console.log(stripedHtml);
    if (Friends.list.indexOf(friend) === -1) {
      Friends.list.push(friend);
    }



    // var stripped = $('.username').html(friend).text();
    // console.log(stripped);


  }

};