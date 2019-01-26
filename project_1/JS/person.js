// var token = window.localStorage && window.localStorage.getItem('token');
// if (token) {
//
// }
// else {
//     sessionStorage.setItem('from', 'person.html');
//     location.href = 'login.html';
// }


// var top1_a = document.querySelectorAll('.top1 .row li');   //找到所有li
//
//
// for (var li of top1_a) {
//     li.onclick=function () {            //为所有li注册onclic事件
//         var bs=this.parentNode.children;
//         for(var b of bs){
//             b.classList.remove("fontbold");
//         }
//         this.classList.add("fontbold");
//     }
// }


var key = document.querySelector('.top1 .row');
var list = document.querySelectorAll('.top1 ul li');
// alert(list[0])
var art = document.querySelectorAll('[class^="main00"]');
var footer=document.querySelector('footer')
list[0].classList.add('fontbold');
art.item(0).classList.toggle('main_xianshi');
key.onclick = function () {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    if (event.target != this) {
        for (var li of list) {
            li.classList.remove('fontbold');
        }
        event.target.classList.add('fontbold');

        for (var as of art) {
            as.classList.remove('main_xianshi')
            footer.classList.add('footer_none')
        }

        function xianshi() {
            for (var i = 0; i < list.length; i++) {
                if (list[i] === event.target) {
                    // art.item(i).classList.toggle('hidden');
                    return i
                }
            }
        }

        var num = xianshi();
        var display = setTimeout(() => {
            art.item(num).classList.toggle('main_xianshi');
            footer.classList.remove('footer_none')
            clearTimeout(display);
        }, 100)

    }

}





