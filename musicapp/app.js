var nameInput = document.getElementById("myName");
var messages = document.getElementById("messages");
messages.innerHTML = "";
var myName = "";
var login = document.getElementById(".login");
var ref;

const button = document.getElementById("mesajButon"); 

function init(){
    var firebaseConfig = {
        apiKey: "AIzaSyD7WyjrI8lIjZin3zfJZ9S8Kq4q8S4nShY",
        authDomain: "https://musicapp-3a28a-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "musicapp-3a28a",
        storageBucket: "https://https://musicapp-3a28a.appspot.com",
        messagingSenderId: "888754246410",
        appId: "1:517419981430:web:a233708444341c70addd57",
        databaseURL:"https://musicapp-3a28a-default-rtdb.europe-west1.firebasedatabase.app",
      };
      firebase.initializeApp(firebaseConfig);
     
      //ref = firebase.database().ref("messages");
     
       firebase.database().ref("messages").push().set({
        sender:"erdal",
        message:"deneme",
        time:firebase.database.ServerValue.TIMESTAMP
      });


      firebase.database().ref("messages").on("child_added",(snapshot)=>{
        var html='';
        if ( snapshot.val().sender==myName){
            html += '<li class="message mine">';
            html += '<p class="text">' + snapshot.val().message + '</p>'; 
            html += '<span class="date">' + tarihCevir(snapshot.val().time) + '</span>';
            html += '</li>';
        }else{
            html += '<li class="message">';
            html += '<p class="text">' + snapshot.val().message + '</p>'; 
            html += '<span class="date">' + tarihCevir(snapshot.val().time) + '</span>';
            html += '<span class="sender">' + snapshot.val().sender + '</span>';
            html += '</li>';

        }
        messages.innerHTML += html;
        messages.scroll({behavior:"smooth",top:9999999999999999});
      });
      

}


function sohbeteBasla() {
    // Kullanıcının girdiği ismi al
    var myName = document.getElementById("myName").value;

    // Eğer isim alanı boş değilse, sohbet ekranına yönlendir
    if (myName.length > 0) {
        // Giriş ekranını gizle
        var login = document.querySelector(".login");
        login.classList.add("hidden");
        init();
       
    } else {
        // Eğer isim alanı boşsa, kullanıcıya bir uyarı verebilirsiniz.
        alert("Lütfen bir isim girin!");
    }
    function tarihCevir(stamp){
        var dt = new Date(stamp);
        var s = "0" + dt.getHours();
        var d = "0" + dt.getMinutes();
        var format = s.substring(-2) + ":" + d.substring(-2);
        return format;
    }
}
button.addEventListener("click", mesajGonder)
function mesajGonder(){
    var msg = document.getElementById("myInput").value;
    if(msg.length>0){
        console.log("Button clicked. Message to send:", msg);
        ref.push().set({
            sender:myName,
            messages:msg,
            time:firebase.database.ServerValue.TIMESTAMP
        });
    
    }
    
}



