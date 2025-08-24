let cart = JSON.parse(localStorage.getItem("cart")) || [];

// إضافة للسلة
function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " تمت إضافته إلى السلة!");
  updateCart();
}

// تحديث السلة
function updateCart() {
  let cartSection = document.getElementById("cart");
  if (!cartSection) return;
  cartSection.innerHTML = "<h2>محتويات السلة:</h2>";
  cart.forEach((item, index) => {
    cartSection.innerHTML += `<p>${item.product} - $${item.price}</p>`;
  });
}

// عرض تفاصيل المنتج في product.html
function showProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const productSection = document.getElementById("product-details");

  if (!productSection) return;

  if (id === "rebar") {
    productSection.innerHTML = `
      <h2>حديد تسليح</h2>
      <img src="images/rebar.jpg" alt="حديد تسليح">
      <p>قضبان فولاذية عالية الجودة لتسليح الخرسانة المسلحة. الأقطار: 6–50 مم.</p>
      <p><strong>السعر: $650 / الطن</strong></p>
      <button onclick="addToCart('حديد تسليح', 650)">أضف إلى السلة</button>
    `;
  } else if (id === "ibeam") {
    productSection.innerHTML = `
      <h2>عارضة حديد I-Beam</h2>
      <img src="images/ibeam.jpg" alt="عارضة I-Beam">
      <p>مقاطع فولاذية على شكل حرف I تستخدم في الهياكل الإنشائية الكبيرة.</p>
      <p><strong>السعر: $670 / الطن</strong></p>
      <button onclick="addToCart('عارضة I-Beam', 670)">أضف إلى السلة</button>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCart();
  showProductDetails();
});
