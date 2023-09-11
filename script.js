// =======================================
//  Creating a portfolio tabbed component
// =======================================
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

console.log(p_btns);
console.log(p_img_elem);

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((currElem) => {
    currElem.classList.remove("p-btn-active");
  });
  //  Smae can be written like below.
  // p_btn.forEach((currElem) => currElem.classList.remove("p-btn-active"));
  p_btn_clicked.classList.add("p-btn-active");

  // to find out bumbet in button attribute
  const btn_num = p_btn_clicked.dataset.btnNum; // code dataset.btnNum is format to get the data set.
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  console.log(`p-btn--${btn_num}`);
  console.log(img_active);

  p_img_elem.forEach((currElem) =>
    currElem.classList.add("p-image-not-active")
  );
  img_active.forEach((currElem) =>
    currElem.classList.remove("p-image-not-active")
  );
});

//Swiper-js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
   autoplay: {
    delay: 2500,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
