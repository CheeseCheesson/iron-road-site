let links = document.querySelectorAll('a')
let btns = document.querySelectorAll('.btn')
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

console.log(btns);

btns.forEach(btn => {
    function changeColor(){
        btn.classList.toggle('_change_btn_color')
    }
    setInterval(changeColor, 1500)
})

