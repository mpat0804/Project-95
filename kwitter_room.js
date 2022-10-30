//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBVWq0UDlCaq_YgZGF4RmjNiKCGAG3pePU",
      authDomain: "kwitter-f6b40.firebaseapp.com",
      databaseURL: "https://kwitter-f6b40-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6b40",
      storageBucket: "kwitter-f6b40.appspot.com",
      messagingSenderId: "602454916907",
      appId: "1:602454916907:web:786f6848e7460d8b0dcf6e"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom(){
         room_name =  document.getElementById("room_name").value; 
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_room.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room_name= " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location="kwitter_room.html";

      }


