import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
var firebaseConfig = {
      apiKey: "AIzaSyDL_PwOY43WzimSBGWLMZWydnGtRGZ6hMY",
      authDomain: "kwitter-8d9a5.firebaseapp.com",
      databaseURL: "https://kwitter-8d9a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-8d9a5",
      storageBucket: "kwitter-8d9a5.appspot.com",
      messagingSenderId: "501172008020",
      appId: "1:501172008020:web:bbf1f47974a287c80ee9c1"
      measurementId: "G-XQLKRC2PZP"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}
