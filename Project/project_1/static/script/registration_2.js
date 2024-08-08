var reg_btm = document.getElementById("btm");
var overlay = document.getElementById("overlay");
var registrationBar = document.querySelector("#registration_bar");

function openModalReg(element) {
    element.classList.add("registration_bar-on");
    overlay.classList.add("overlay-on");
}

reg_btm.addEventListener('click', function () {
    openModalReg(registrationBar)
});

function closeRegModel(element) {
    element.classList.remove("registration_bar-on");
    overlay.classList.remove("overlay-on");
}

overlay.addEventListener('click', function () {
    closeRegModel(registrationBar);
});
