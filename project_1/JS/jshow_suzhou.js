

(function () {


    var city_name={"citys":"苏州"}

    postData('http://192.168.2.3:8080/api/jshow/suzhou/',city_name,function (res) {

        var city=res;

        var city_s = document.querySelector('section .container .section_top2')

        city_s.innerHTML+= `<div class="left">
                             <img src="${city.img}" alt="">
                         </div>
            <div class="right">
                <div class="right_top">
                    <div class="left1">
                        <h2>苏州</h2>
                        <p>${city.introduction}</p>
                    </div>
                    <div class="right1">
                        <a href="#"><img src="../images/sichuan.jpg" alt=""></a>
                        <input type="button" value="+添加旅行分享">
                    </div>
                </div>
                <div class="right_bottom">
                    <span id="tongji">${city.have_go}</span>
                    <span>人去过</span>
                    <div class="right_bottom_1">
                        <img src="../images/dianzanhui.svg" alt="" class="img_1">
                        <span>想去</span>
                        <img src="../images/foot1.svg" alt="" class="img_2">
                        <span>去过</span>
                    </div>
                </div>
            </div>`

            var dianzan = document.querySelector('.right_bottom_1 .img_1');
            var dianzan_number = document.querySelector('.right_bottom #tongji');
            var quguo = document.querySelector('.right_bottom_1 .img_2');




            dianzan.onclick = function () {
                dianzan_h();
            };

            quguo.onclick = function () {
                quguo_h();
            };


    })

})();








function dianzan_h() {

    if (this.getAttribute('src') == "../images/dianzanhui.svg") {
        dianzan.src = "../images/dianzanhong.svg";
        this.parentNode.parentNode.children[0].innerText = parseInt(this.parentNode.parentNode.children[0].innerText) + 1;

        // var have_go=this.parentNode.parentNode.children[0].innerText;
        // postData('http://192.168.2.3:8080/api/jshow/suzhou/',have_go,function (res){
        //     alert('添加成功')
        // })

    }
    else {
        dianzan.src = "../images/dianzanhui.svg";
        this.parentNode.parentNode.children[0].innerText = parseInt(this.parentNode.parentNode.children[0].innerText) - 1;
    }
}

function quguo_h() {

    if (this.getAttribute('src') == "../images/foot1.svg") {
        this.src = "../images/foot2.svg";
    }
    else {
        this.src = "../images/foot1.svg";
    }

}






