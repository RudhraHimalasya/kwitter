const firebaseConfig = {
      apiKey: "AIzaSyBJ93KnL59XasQG3z4cc34d130wiLC5giI",
      authDomain: "kwitter-3904d.firebaseapp.com",
      databaseURL: "https://kwitter-3904d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3904d",
      storageBucket: "kwitter-3904d.appspot.com",
      messagingSenderId: "430033291738",
      appId: "1:430033291738:web:2972db87bd4b7ef12958e3"
    };
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

X = localStorage.getItem("username");
document.getElementById("a").innerHTML= "Welcome " + X + " ! ";

function addroom(){
      Y = document.getElementById("roomname").value;
      firebase.database().ref("/").child(Y).update({
            purpose : "It's working"
      });
      localStorage.setItem("room_name",Y);
      window.location="kwitter_page.html";
      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name is : " + Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(w) {
      console.log(w);
      localStorage.setItem("room_name",w);
      window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("username")
      window.location="index.html";
}