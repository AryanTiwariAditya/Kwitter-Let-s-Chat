var firebaseConfig = {
      apiKey: "AIzaSyDL_PwOY43WzimSBGWLMZWydnGtRGZ6hMY",
      authDomain: "kwitter-8d9a5.firebaseapp.com",
      databaseURL: "https://kwitter-8d9a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d9a5",
      storageBucket: "kwitter-8d9a5.appspot.com",
      messagingSenderId: "501172008020",
      appId: "1:501172008020:web:bbf1f47974a287c80ee9c1"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
});});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("roome_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
