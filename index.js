const featuresDropDown = document.querySelector(".feature-drop-list");
const companyDropDown = document.querySelector(".company-drop-list");

const mobileFeaturesDropDown = document.querySelector(
   ".mobile--feature-drop-list"
);
const mobileCompanyDropDown = document.querySelector(
   ".mobile--company-drop-list"
);

const mobileNavOpen = document.querySelector(".nav-icon");
const mobileNavClose = document.querySelector(".x");

const drop1 = document.querySelector(".drop-down-1");
const drop2 = document.querySelector(".drop-down-2");

const mobileDrop1 = document.querySelector(".mobile--drop-down-1");
const mobileDrop2 = document.querySelector(".mobile--drop-down-2");

drop1.addEventListener("click", function () {
   featuresDropDown.classList.toggle("grid-display");
});

drop2.addEventListener("click", function () {
   companyDropDown.classList.toggle("block-display");
});

mobileDrop1.addEventListener("click", function () {
   mobileFeaturesDropDown.classList.toggle("grid-display");
});

mobileDrop2.addEventListener("click", function () {
   mobileCompanyDropDown.classList.toggle("block-display");
});

mobileNavOpen.addEventListener("click", function () {
   document.querySelector(".mobile-nav").style.display = "flex";
});

mobileNavClose.addEventListener("click", function () {
   document.querySelector(".mobile-nav").style.display = "none";
});
