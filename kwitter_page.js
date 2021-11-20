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
u = localStorage.getItem("username");
r = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("send_input").value;
      firebase.database().ref(r).push({
            username : u,
            message : msg,
            like : 0
      });
}
   function getData() { firebase.database().ref("/"+r).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
n = message_data['username'];
m = message_data['message'];
l = message_data['like'];

nn = "<h4> "+ n +"<img class='user_tick' src='tick.png'>";
mm = "<h4 class='message_h4'>" + m + "</h4>";
ll = "<button class='btn btn-info' id="+firebase_message_id+" value="+l+" onclick='updateLike(this.id)'>";

s = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ l +"</span></button><hr>";
row = nn + mm +ll + s;

document.getElementById("output").innerHTML += row;
//End code

      } });  }); }
getData();

function updateLike(i){
      console.log(i);
      button_id = i;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes)+1;
      console.log(update_likes);
      firebase.database().ref(r).child(i).update({
            like : update_likes
      });
}


function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
      localStorage.removeItem("room_name");
}