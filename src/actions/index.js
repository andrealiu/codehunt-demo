import alt from '../alt';
var firebase = require('firebase');
class Actions {

  login() {
    return (dispatch) => {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // The signed-in user info.
        var user = {
          id: result.user.uid,
          name: result.user.displayName,
          avatar: result.user.photoURL
        }
        firebase.database().ref().child("users").child(result.user.uid).set(user);
        // dispatch user
        console.log('got here');
        dispatch(user);
      });
    }
  }
}

export default alt.createActions(Actions);
