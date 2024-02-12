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
//AÑADE TUS ENLACES DE FIREBASE
user_name  = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Bievenido" + user_name;
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "añadir el nombre de la sala"
    }); 
    localStorage.getItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("nombres de las salas: "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});
}

getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



