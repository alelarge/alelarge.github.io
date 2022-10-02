let pageUrl = window.location.href;
var url = new URL(pageUrl);
var orderId = url.searchParams.get("orderId");

let spanOrderId = document.getElementById('orderId');
spanOrderId.textContent = orderId;
