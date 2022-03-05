// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();

  },

  render: function(stuff) {
    // TODO: Render _all_ the messages.
    // console.log($('chats').get());
    // console.log('TESTING', stuff);
    for (var x = 0; x < stuff.length; x++) {
      var message = MessageView.render(stuff[x]);
      MessagesView.$chats.append(message);
    }
    // stuff.username
    //$('body').empty();


  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    console.log('TESTING', message[0]);
    // MessagesView.$chats.empty();
    var one = MessagesView.render(message[0]);
    MessagesView.$chats.append(one);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).


    //get userlist/:userid/followers maybe
  }

};