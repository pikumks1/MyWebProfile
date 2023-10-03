// =======================================
//  Creating a responsive navbar button
// =======================================
const mobile_nav = document.querySelector(".mobile-nav-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});


// to show/hide portfolio as per button clicked
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

console.log(p_btns);
console.log(p_img_elem);

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);


  if (!p_btn_clicked.classList.contains("p-btn")) return;

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

//Swiper-js: https://swiperjs.com/demos
//url: https://codesandbox.io/s/nssrql

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const myJSMedia = (widthsize) => {
  if(widthsize.matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
    });
  }
  else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 50,
    });
  }

}

const widthsize = window.matchMedia("(max-width: 780px)");
// Call listenere function at runtime
myJSMedia(widthsize);

// Attach listner function on state change
widthsize.addEventListener('change',myJSMedia);

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//     spaceBetween: 50,
//     autoplay: {
//       delay: 2500,
//     },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },

//     // renderBullet: function (index, className) {
//     //   return '<span class="' + className + '">' + (index + 1) + "</span>";
//     // },
//   },
// );

//scroll to top button
//create html code with java file

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);
const scrollTop = () => {
heroSection.scrollIntoView({"behavior": "smooth"})
}

scrollElement.addEventListener("click",scrollTop)

// Animate number counter
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;
counterNum.forEach((currElem) => {
  const UpdateNumber = () => {
    const targetNumber = parseInt(currElem.dataset.number);
    // console.log(targetNumber);
    const InitialNum = parseInt(currElem.innerText);
    // console.log(InitialNum);
    const incrementNumber = Math.trunc(targetNumber/200);
    // console.log(incrementNumber);

    if (InitialNum < targetNumber){
      currElem.innerText = `${InitialNum + incrementNumber}+`;

      setTimeout(UpdateNumber,10);
    }
  };
  UpdateNumber();
});