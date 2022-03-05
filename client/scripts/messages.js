// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// TODO: Define how you want to store your messages.

// TODO: Define methods which allow you to retrieve from,
// add to, and generally interact with the messages.

var Messages = {
  //data is array of objects
  //keys text, username, roomname

  _data: {},

  add: function(arr) {
    for (let i = 0; i < arr.length; i++) {
      Messages._data[arr[i].message_id] = arr[i];
    }
  },

  retrieveUser: function(data, user) {
    let userStorage = {};
    for (let key in data) {
      if (data[key].username === user) {
        userStorage[username] = data[key];
      }
    }
    return userStorage;

  }

};




//example:
//var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
