function orderget(order) {
        sessionStorage.setItem("orderfood", order);
        window.location.replace("../SendOrder.html");
    }

function goback(){
    window.location.replace("ChoosePage.html");
    sessionStorage.removeItem("orderfood");
}