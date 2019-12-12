function orderget(order, shop) {
        sessionStorage.setItem("orderfood", order);
        sessionStorage.setItem("currentshop", shop);
        window.location.replace("../SendOrder.html");
    }

function goback(){
    window.location.replace("ChoosePage.html");
    sessionStorage.removeItem("orderfood");
    sessionStorage.removeItem("currentshop");
}