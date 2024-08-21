function HandleClick() {
 const show = document.getElementById("card");
 if (show.classList.contains('hidden')) {
    show.classList.remove('hidden');
 }else {
 show.classList.add('hidden');  
 }

}