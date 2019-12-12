window.onload = function(){
document.getElementById("idLogin").onclick = function() {

        var email = document.getElementById('idUser').value;
        var password = document.getElementById('idPassword').value;
        var shopid = (email == "food" || email == "noodle" || email == "dessert");

        firebase.auth().signInWithEmailAndPassword(email + '@it.kmitl.ac.th', password)
        .then(function(){
                if (shopid){
                  if (email == "noodle"){
                  window.location.replace("RecieveOrder/RecieveOrderNoodleNation.html");}
                  else if (email == "dessert"){
                    window.location.replace("RecieveOrder/RecieveOrderDessertEagle");
                  }
                  else if (email == "food"){
                    window.location.replace("RecieveOrder/RecieveOrderTamTeeSang.html");
                  }
                }else{
                window.location.replace("ChoosePage.html");}
                console.log('success');
                localStorage.setItem("currentuse", email);
            }).catch(function(error) {
                alert('login fail');
                console.log('error');
            })}}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById('currentUser').innerHTML = "<tr><td>" + user.email + "</td><td>"
  } else {
    // No user is signed in.
  }
});

function logout() {
    localStorage.removeItem('currentuse');
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Have something wrong');
    });
}