const refs = {
  offers: document.querySelector(".header__list"),
  offersSlider: document.querySelector(".header__slider.offer"),
  portfolioSlider: document.querySelector(".header__slider.portfolio"),
  offersArrow: document.querySelector(".header__arrow.offer"),
  portfolioArrow: document.querySelector(".header__arrow.portfolio"),
  payArrow: document.querySelector(".header__arrow.pay"),
  wikiArrow: document.querySelector(".header__arrow.wiki"),
  aboutUsArrow: document.querySelector(".header__arrow.about-us"),
  contactArrow: document.querySelector(".header__arrow.contact"),
};
refs.offers.addEventListener("click", onShowOffers);
function onShowOffers(e) {
  e.preventDefault();
  console.log();
  if (e.target.classList.contains("offer")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.offersArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("portfolio")) {
    refs.portfolioSlider.classList.toggle("is-open");
    refs.portfolioArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("pay")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.payArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("wiki")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.wikiArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("about-us")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.aboutUsArrow.classList.toggle("hidden");
  }
  if (e.target.classList.contains("contact")) {
    refs.offersSlider.classList.toggle("is-open");
    refs.contactArrow.classList.toggle("hidden");
  }
}
