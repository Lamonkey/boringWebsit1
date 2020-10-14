function jumpToOtherPage(url){
    window.setTimeout(function(){
        window.location.href = url;
    },1000
    )
}
document.addEventListener("DOMContentLoaded", function () {
    var card1 = document.getElementById('textSearch').querySelector('.card');
    card1.addEventListener('click', function () {
        card1.classList.toggle('is-flipped');
       // jumpToOtherPage("googleSearch.html")
    });

    var card2 = document.getElementById('imageSearch').querySelector('.card');
    card2.addEventListener('click', function () {
        card2.classList.toggle('is-flipped');
      //  jumpToOtherPage("googleImageSearch.html")
    });

    var card3 = document.getElementById('advancedSearch').querySelector('.card');
    card3 .addEventListener('click', function () {
        card3.classList.toggle('is-flipped');
      //  jumpToOtherPage("googleSegoogleAdvancedSearch.html")
    });





    
});