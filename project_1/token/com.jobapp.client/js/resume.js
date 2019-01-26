/**
 * Created by lzhan on 2019/1/14.
 */
var token=window.localStorage && window.localStorage.getItem('token');
if(token){
//      请求后台
    var api_url='http://localhost:8080/api/resume/list/'
    getData(api_url,null,{"token":token},function (res) {
        console.log(res);
    })
    getData(api_url,null,{"token":token},function (res) {
        console.log(res);
    })

}else {
    sessionStorage.setItem('from','resume_center.html');
    location.href='login.html';
}