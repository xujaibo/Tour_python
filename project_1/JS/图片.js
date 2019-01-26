



var zhi=document.querySelector('.left')

var img=document.querySelector('.right img')

zhi.onmouseover=function () {
    this.classList.add('ch')
}



zhi.onmouseleave=function () {
    this.classList.remove('ch')
}

img.onmouseover=function () {
    this.parentNode.parentNode.children[1].classList.add('ch')

}

img.onmouseleave=function () {
    this.parentNode.parentNode.children[1].classList.remove('ch')
}







