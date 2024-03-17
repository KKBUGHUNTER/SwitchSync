const firebaseConfig = {
    apiKey: "AIzaSyCIbcP4aOG14S3_u4VJrPJHVu9ebJ1RGFc",
    authDomain: "switchsync-982b0.firebaseapp.com",
    databaseURL: "https://switchsync-982b0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "switchsync-982b0",
    storageBucket: "switchsync-982b0.appspot.com",
    messagingSenderId: "307090925640",
    appId: "1:307090925640:web:53d89443b4daaa2485107d"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Read Data
database.ref("/s1").on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("p1").innerHTML = data;
});

// Write and Update data
function SendData() {
    var data = document.getElementById('v1');
    database.ref("/s1").set(data.value);
    document.getElementById('v1').value = "";
}

// Delete data
function DeletePath() {
    var path = document.getElementById('v1').value;
    database.ref(path).remove().then(function () {
            document.getElementById('p1').innerHTML = path + " removed successfully!";
    }).catch(function (error) {
            document.getElementById('p1').innerHTML = "Error removing path /s1:", error;
    });
}