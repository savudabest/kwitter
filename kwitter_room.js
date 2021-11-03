var firebaseConfig = {
      apiKey: "AIzaSyDTzktfNGLUIPMYTeQhO_HE0O3cu0NSIvA",
      authDomain: "kwitte-af713.firebaseapp.com",
      databaseURL: "https://kwitte-af713-default-rtdb.firebaseio.com",
      projectId: "kwitte-af713",
      storageBucket: "kwitte-af713.appspot.com",
      messagingSenderId: "543836300767",
      appId: "1:543836300767:web:6b631c575c43e2e8cf906a"
    };
    


firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name + "!";


function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+ Room_names +" </div> <hr>"
      });});}
getData();


 function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
 }

  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }