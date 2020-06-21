  function countOnline(obj) {
    // change code below this line
    let onlineUsers = 0;
    for (let user in obj) {
      if (obj[user].online) {
        onlineUsers++;
      }
    }

    return onlineUsers;
    // change code above this line
}