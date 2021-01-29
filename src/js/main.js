const refs = {
  offers: document.querySelector(".header__list"),
  offersSlider: document.querySelector(".header__slider.offer"),
  aboutUsSlider: document.querySelector(".header__slider.about-us"),
  offersArrow: document.querySelector(".header__arrow.offer"),
  portfolioArrow: document.querySelector(".header__arrow.portfolio"),
  payArrow: document.querySelector(".header__arrow.pay"),
  wikiArrow: document.querySelector(".header__arrow.wiki"),
  aboutUsArrow: document.querySelector(".header__arrow.about-us"),
  contactArrow: document.querySelector(".header__arrow.contact"),
  deliveryLink: document.querySelector(".header__slider-title.delivery"),
  checkbox: document.querySelector("#helper__form-checkbox"),
};
refs.offers.addEventListener("click", onShowOffers);
function onShowOffers(e) {
  e.preventDefault();
  console.log();

  if (e.target.classList.contains("offer")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.offersArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("about-us")) {
    refs.aboutUsSlider.classList.toggle("is-open");
    refs.aboutUsSlider.classList.toggle("hidden");
  }
  if (e.target.classList.contains("pay")) {
    refs.aboutUsSlider.classList.toggle("is-open");
    refs.payArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("wiki")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.wikiArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("portfolio")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.portfolioArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("contact")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.contactArrow.classList.toggle("hidden");
  }
}

refs.deliveryLink.addEventListener("click", onDeliveryPage);
function onDeliveryPage(e) {
  if (e.target.classList.contains("delivery")) {
    document.location.href = "delivery.html";
  }
}
refs.checkbox.addEventListener("click", onChecked);
function onChecked(e) {
  refs.checkbox.classList.toggle("checked");
}
