if (document.readyState || document.body.readyState=='complete') {

  // === slider ===

  var mySwiper = new Swiper ('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // === menu-mobile ===

  let widthScreen = document.body.clientWidth;

  if(widthScreen <= 850) {
    let nav_mobile_btn = document.querySelector('.nav-btn'),
        nav_mobile = document.querySelector('.nav-mobile__list');
        
    nav_mobile_btn.onclick = function () {
      nav_mobile_btn.classList.toggle("active"),nav_mobile.classList.toggle("nav-mobile__list_active");
    }
  };

  // === modal cal order ===

  let modal = document.getElementById('call-order-modal'),
      btn = document.getElementById('btn-call-order'),
      span = document.getElementById('call-order-modal-close');
  
    btn.onclick = function() {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }

    span.onclick = function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
}



