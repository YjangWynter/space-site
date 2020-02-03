var footer = document.getElementById('copyright');

//a link to my website
var link = 'https://yjangwynter.com';

// getting the year for the auto-update copyright
var year = new Date().getFullYear();

//sets
function copyright() {
    footer.innerHTML = '&copy; ' + year + ' <a href="'+link+'"> by Yjang Wynter</a>' ;
} 

//I shoudl create a function that whenver the user clicks on an icon, the corresponding details dialog opens and closes

window.addEventListener('load', copyright, false); 
