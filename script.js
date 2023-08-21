document.getElementById("discountBtn").addEventListener("click", function () {
  let discount = document.getElementById("discount");
  let discountCode = discount.value;
  console.log(discountCode);
  let totalPrice = document.getElementById("total-price").innerText;
  let totalPriceNumber = parseInt(totalPrice);
  if (discountCode == "SELL200" && totalPriceNumber >= 200) {
    const discount = document.getElementById("discount-number").innerText;
    const discountNumber = parseInt(discount);
    const discountPercentageNumber = (totalPriceNumber * 20) / 100;
    const couponCodeNumber = discountNumber + discountPercentageNumber;
    document.getElementById("discount-number").innerText = couponCodeNumber;
  } else {
    alert("Your coupon code is not valid");
  }
});

let total = 0;
function purchaseProduct(target) {
  
  const selectedProduct = document.getElementById("selected-product");
  const productName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = productName;
  selectedProduct.appendChild(li);

  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total-price").innerText = total;
}
