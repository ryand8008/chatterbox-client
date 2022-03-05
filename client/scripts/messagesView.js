// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //put/patch: for update?
  },
  // ($'#chats').append$(MessagesView.renderMessage)
  render: function() {
    // TODO: Render _all_ the messages.
    //get /userlist
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        $('#chats').append(JSON.stringify(message));
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //message
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //get userlist/:userid/followers maybe
  }

};