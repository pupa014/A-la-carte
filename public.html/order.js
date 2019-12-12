function orderget(order, shop) {
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