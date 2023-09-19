var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideImg");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


//for past months disabling:
var date = new Date();
var tdate = date.getDate();
var month = date.getMonth() + 1;
if (tdate < 10) {
    tdate = '0' + tdate;
}
if (month < 10) {
    month = '0' + month;
}
var year = date.getFullYear();
var minDate = year + "-" + month + "-" + tdate;

document.getElementById("check-in-date").setAttribute('min', minDate);
document.getElementById("check-out-date").setAttribute('min', minDate);



//for placeholders:
$('#check-in-date input[type=date]').datepicker({
    dateFormat: 'dd/MM/yyyy',
    showOnFocus: true,
    hideOtherMonths: true,
    placeholder: 'Date'
});
$('#check-out-date input[type=date]').datepicker({
    dateFormat: 'dd/MM/yyyy',
    showOnFocus: true,
    hideOtherMonths: true,
    placeholder: 'Date'
});




const btn=document.querySelector('.main-btn');
btn.onmousemove = function(e){
    const x=e.pageX - btn.offset().Left;
    const y=e.pageY - btn.offset().Top;
    
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}

