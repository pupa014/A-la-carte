function orderget(order, shop){
    firebase.database().ref("limitedorder/"+shop).once('value').then((dataSnapshot) => {
      let desiredValue = dataSnapshot.val();
      console.log(desiredValue)
      if (desiredValue == 0){
        alert("ปิดรับออเดอร์แล้ว")
      }
      else{
        ordersend(order, shop)
      }
    
}).catch((error) => {
      console.log("An error occurred:", error);
    })}

function ordersend(order, shop) {
    var lingre = document.getElementById('ingre').value;
    console.log(lingre)
    if (lingre == null){
        var lingre = '';
    }
        sessionStorage.setItem("orderfood", order+lingre);
        sessionStorage.setItem("currentshop", shop);
        window.location.replace("../SendOrder.html");
    }

function goback(){
    window.location.replace("ChoosePage.html");
    sessionStorage.removeItem("orderfood");
    sessionStorage.removeItem("currentshop");
}
