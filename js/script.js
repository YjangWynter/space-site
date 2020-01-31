var footer = document.getElementById('copyright');

var year = new Date().getFullYear();
function copyright() {
    footer.innerHTML = '&copy; ' + year + ' by Yjang Wynter ';
}  window.addEventListener('load', copyright, false); 
