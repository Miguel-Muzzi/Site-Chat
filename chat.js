
function addUser() {

    userName = document.getElementById("userName").value; //pegando o nome do usuario pela identificação
  
    localStorage.setItem("userName", userName);//ele guarda o que for pedido no amazernamento local da maquina
    
      window.location = "ChatRoom.html";// ele ta abrindo outra pagina html
  
  }