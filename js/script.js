var footer = document.getElementById('copyright');

var year = new Date().getFullYear();
function copyright() {
    footer.innerHTML = '&copy; ' + year + ' by Yjang Wynter ';
} 

//I shoudl create a function that whenver the user clicks on an icon, the corresponding details dialog opens and closes

window.addEventListener('load', copyright, false); 
