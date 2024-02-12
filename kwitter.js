var firebaseConfig = {
    apiKey: "AIzaSyAOQp0IK6HA-8jlccfbsFKc-QTi0MJwz3M",
    authDomain: "kwitter-a5c96.firebaseapp.com",
    databaseURL: "https://kwitter-a5c96-default-rtdb.firebaseio.com",
    projectId: "kwitter-a5c96",
    storageBucket: "kwitter-a5c96.appspot.com",
    messagingSenderId: "1033166599043",
    appId: "1:1033166599043:web:84daf9bd31aa12f0143cb6"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function addUser(){

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}















