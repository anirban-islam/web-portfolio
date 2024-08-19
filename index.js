// <==================================>
// create nav bar for mobile
// <==================================>

  const mobile_nav = document.querySelector(".mobile-navbar-btn");
  const headerEle = document.querySelector(".header");

  mobile_nav.addEventListener('click', () =>{
    headerEle.classList.toggle('active')

  });
  // <==================================>
// create protfolio CompositionEvent
// <==================================>

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) =>{
    const p_btn_clicked = e.target;
    p_btn.forEach((curElem) =>{
        curElem.classList.remove('p-btn-active');
    });
    p_btn_clicked.classList.add("p-btn-active");

    // Find Number for button

    const btn_num = p_btn_clicked.dataset.btnNum;

    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-images-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("p-images-not-active"));

})

// <==================================>
// Feedback Swiper
// <==================================>

var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

// <==================================>
//Number Counter
// <==================================>

  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 200;

  counterNum.forEach((curElem) => {
      const updateNumber = () => {
      const targetNum = parseInt(curElem.dataset.number);
      const intialNum = parseInt(curElem.innerText);
      const incrementNum = Math.trunc(targetNum / speed);

      if (intialNum < targetNum) {
        curElem.innerText = `${intialNum + incrementNum}+` ;
        setTimeout(updateNumber , 10);
      };
        
      
    };

    updateNumber();
  });