//AGREGA TUS ENLACES DE FIREBASE AQUÍ
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


//Tus enlaces de Firebase

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Inicia el código
     console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4> "+ name +"</h4>";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
    
     row = name_with_tag + message_with_tag +like_button;       
    document.getElementById("output").innerHTML += row;
//Termina el código
  } });  }); }
getData();

function updateLike(message_id)
{
console.log("presionó el botón de Me gusta: " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}