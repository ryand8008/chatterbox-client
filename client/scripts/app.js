// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  // name from messages.name

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // App.fetch(MessagesView.render());

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // setInterval to fetch every few seconds?

    // setInterval(App.fetch(), 2000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data = []) => {
      // examine the response from the server request:
      // update messages
      // Parse.create(message);
      // Messages.addAllStuff(data);
      MessagesView.render(data);
      RoomsView.render();
      MessagesView.renderMessage(data);
      setInterval(MessagesView.renderMessage(data), 2000);
      //update rooms
      // console.log(data[0].username);
      // console.log(data);
      // console.log(Messages);




      // console.log(Messages.data);
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      //update: put/patch
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
