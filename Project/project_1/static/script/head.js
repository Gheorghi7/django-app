
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
button_1.addEventListener('mouseover', function () {
    openModal(document.querySelector('#sar1'));
    closeModal(document.querySelector('#sar2'))
    closeModal(document.querySelector('#sar3'))


   
});
button_2.addEventListener('mouseover', function () {
    openModal(document.querySelector('#sar2'));
    closeModal(document.querySelector('#sar1'))
    closeModal(document.querySelector('#sar3'))
   
});
button_3.addEventListener('mouseover', function () {
    openModal(document.querySelector('#sar3'));
    closeModal(document.querySelector('#sar1'))
    closeModal(document.querySelector('#sar2'))
    
});


document.querySelector('#sar1').addEventListener('mouseleave', function () {
        closeModal(document.querySelector('#sar1'))
})
document.querySelector('#sar2').addEventListener('mouseleave', function () {
    closeModal(document.querySelector('#sar2'))
})
document.querySelector('#sar3').addEventListener('mouseleave', function () {
    closeModal(document.querySelector('#sar3'))
})

function openModal(element) {
    element.classList.add('sar-active');
    return false;
        }

function closeModal(element) {
     element.classList.remove('sar-active');
        }
