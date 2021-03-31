const btn = document.querySelector('.liste-nav')
const btnMenu = document.querySelector('.logo-menu')

btnMenu.addEventListener("click", menu)

function menu(){
    btn.classList.toggle('active')
    console.log('hello world');
}

const allLinks = document.querySelectorAll('.item-nav');
allLinks.forEach(function(item){
    item.addEventListener('click', function () {
        btn.classList.toggle('active');
    })
})