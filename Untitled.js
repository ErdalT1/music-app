function init(){
    var firebaseConfig = {
        apiKey: "AIzaSyCWIjeRrG3o0_WS6ebo84HGdfqL-du0kIM",
        authDomain: "untilted-7dfa8.firebaseapp.com",
        projectId: "untilted-7dfa8",
        storageBucket: "untilted-7dfa8.appspot.com",
        messagingSenderId: "859433485279",
        appId: "1:859433485279:web:f0d70132fa6237f732fa6a"
      };
      firebase.initializeApp(firebaseConfig);

      firebase.database().ref("messages").push().set({
        sender:"erdal",
        message:"31",
        time:firebase.database.ServerValue.TIMETAMP
      });
    }

    function sohbeteBasla() {
        myName=nameInput.value;
        if(myName.length>0){
            console.log(myName);
            login.classList.add("hidden");
            init();
        }
    }
var login = document.querySelector(".login");
var nameInput = document.getElementById("myName");
var myName = "";