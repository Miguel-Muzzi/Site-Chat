
//ADICIONE SEUS LINKS FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyD0Rz9t9MZcWRGCoFhnamecmz4f0mb0JZA",
    authDomain: "kwittir.firebaseapp.com",
    databaseURL: "https://kwittir-default-rtdb.firebaseio.com",
    projectId: "kwittir",
    storageBucket: "kwittir.appspot.com",
    messagingSenderId: "359743039000",
    appId: "1:359743039000:web:b2c6ed50e60a46bdba056d"
  }
  firebase.initializeApp(firebaseConfig);
  
    userName = localStorage.getItem("userName");
  
  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";
  
  function addRoom()
  {
    roomName = document.getElementById("roomName").value;
  
    firebase.database().ref("/").child(roomName).update({
      purpose : "adicionar nome de sala"
    });
  
      localStorage.setItem("roomName", roomName);
      
      window.location = "ChatPage.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         roomNames = childKey;
         console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("roomName", name);
      window.location = "ChatPage.html";
  }
  
  function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
      window.location = "chat.html";
  }
  