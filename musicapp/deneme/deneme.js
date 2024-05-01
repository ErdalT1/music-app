// Firebase konfigürasyon bilgilerinizi buraya ekleyin
var firebaseConfig = {
    apiKey: "AIzaSyDwOhMSs-iUWh-YuVbBB-leVPUV4BDEk0w",
    authDomain: "https://musicappmesaj2-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "musicappmesaj2",
    storageBucket: "https://musicappmesaj2-default-rtdb.europe-west1.appspot.com",
    messagingSenderId: "517419981430",
    appId: "1:517419981430:web:a233708444341c70addd57"
  };

firebase.initializeApp(firebaseConfig);

// Veritabanı referansını al
var database = firebase.database();

// Mesajları almak için referans
var messagesRef = database.ref('messages');

// Mesajları ekrana yazdırmak için HTML elementini seç
var messagesElement = document.getElementById('messages');

// Mesajları dinleme
messagesRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayMessage(message.sender, message.text);
});

// Mesaj gönderme fonksiyonu
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value;

    if (messageText.trim() !== '') {
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            sender: 'Anonim',
            text: messageText
        });

        // Mesaj gönderildikten sonra input'u temizle
        messageInput.value = '';
    }
}

// Mesajları ekrana yazdırmak için
function displayMessage(sender, text) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = '<strong>' + sender + ':</strong> ' + text;
    messagesElement.appendChild(messageElement);

    // Otomatik olarak en alttaki mesaja kaydırma
    messagesElement.scrollTop = messagesElement.scrollHeight;
}
